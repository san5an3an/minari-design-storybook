// SLDS 아이콘/이미지 설치본에서 web/public 복사. 라이선스상 저장소엔 넣지 않음
import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const SRC = "node_modules/@salesforce-ux/design-system";
const DEST = "web/public";
const STAMP = `${DEST}/.slds-assets-version`;

if (!existsSync(SRC)) {
  console.log("SLDS 설치본이 없어 복사를 건너뜀");
  process.exit(0);
}

const version = JSON.parse(await readFile(`${SRC}/package.json`, "utf8")).version;
const done = existsSync(STAMP) ? (await readFile(STAMP, "utf8")).trim : "";
if (done === version) process.exit(0);

await mkdir(DEST, { recursive: true });
for (const dir of ["assets", "images"]) {
  if (existsSync(`${SRC}/${dir}`)) {
    await cp(`${SRC}/${dir}`, `${DEST}/${dir}`, { recursive: true });
  }
}
await writeFile(STAMP, version);
console.log(`SLDS 자산 복사함 (${version})`);
