import { makeZip } from "../zip";
import type { ExportPayload, Sink } from "../types";

function save(data: BlobPart, name: string, type: string): void {
 const url = URL.createObjectURL(new Blob([data], { type }));
 const a = document.createElement("a");
 a.href = url;
 a.download = name;
 document.body.appendChild(a);
 a.click;
 a.remove;
 // 삭제 시점 조정. 즉시 삭제 시 사파리 다운로드가 끊기는 문제가 있음
 setTimeout( => URL.revokeObjectURL(url), 0);
}

export const download: Sink = async (payload: ExportPayload) => {
 const { files, source } = payload;
 if (files.length === 0) throw new Error("내보낼 파일이 없어요.");

 // 파일 1개면 그대로 반환. zip으로 묶으면 여는 절차가 하나 더 있음
 if (files.length === 1) {
 save(files[0].text, files[0].path, files[0].type);
 return;
 }

 // export.json 함께 포함. MCP 수신 형식과 동일해 값이 어긋나지 않음
 const entries = [
 ...files.map((f) => ({ path: f.path, text: f.text })),
 { path: "export.json", text: JSON.stringify(payload, null, 2) },
 ];
 save(
 makeZip(entries),
 `${source.slug}-${source.component}.zip`,
 "application/zip",
 );
};
