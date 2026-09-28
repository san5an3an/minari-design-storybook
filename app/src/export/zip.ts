const CRC_TABLE = ( => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[i] = c >>> 0;
  }
  return t;
});

function crc32(bytes: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

// 리틀엔디언으로 이어 붙이는 유틸 함수
class Buf {
  private parts: Uint8Array[] = [];
  private len = 0;
  u16(v: number) { this.push(new Uint8Array([v & 0xff, (v >>> 8) & 0xff])); return this; }
  u32(v: number) {
    this.push(new Uint8Array([v & 0xff, (v >>> 8) & 0xff, (v >>> 16) & 0xff, (v >>> 24) & 0xff]));
    return this;
  }
  push(b: Uint8Array) { this.parts.push(b); this.len += b.length; return this; }
  get size { return this.len; }
  done: Uint8Array<ArrayBuffer> {
    const out = new Uint8Array(this.len);
    let at = 0;
    for (const p of this.parts) { out.set(p, at); at += p.length; }
    return out;
  }
}

export interface ZipEntry { path: string; text: string }

// 1980-01-01 00:00. DOS 날짜는 (연-1980)<<9 | 월<<5 | 일 형식임
const DOS_TIME = 0;
const DOS_DATE = (0 << 9) | (1 << 5) | 1;

// 이름을 UTF-8로 저장하고 비트 11 플래그로 표시. 한글 파일명 깨지지 않음
const FLAG_UTF8 = 0x0800;

export function makeZip(entries: readonly ZipEntry[]): Uint8Array<ArrayBuffer> {
  const enc = new TextEncoder;
  const local = new Buf;
  const central = new Buf;

  for (const e of entries) {
    const name = enc.encode(e.path);
    const data = enc.encode(e.text);
    const crc = crc32(data);
    const offset = local.size;

    local.u32(0x04034b50).u16(20).u16(FLAG_UTF8).u16(0)
      .u16(DOS_TIME).u16(DOS_DATE)
      .u32(crc).u32(data.length).u32(data.length)
      .u16(name.length).u16(0)
      .push(name).push(data);

    central.u32(0x02014b50).u16(20).u16(20).u16(FLAG_UTF8).u16(0)
      .u16(DOS_TIME).u16(DOS_DATE)
      .u32(crc).u32(data.length).u32(data.length)
      .u16(name.length).u16(0).u16(0)
      .u16(0).u16(0).u32(0).u32(offset)
      .push(name);
  }

  const centralBytes = central.done;
  const end = new Buf;
  end.u32(0x06054b50).u16(0).u16(0)
    .u16(entries.length).u16(entries.length)
    .u32(centralBytes.length).u32(local.size).u16(0);

  const localBytes = local.done;
  const endBytes = end.done;
  const out = new Uint8Array(localBytes.length + centralBytes.length + endBytes.length);
  out.set(localBytes, 0);
  out.set(centralBytes, localBytes.length);
  out.set(endBytes, localBytes.length + centralBytes.length);
  return out;
}
