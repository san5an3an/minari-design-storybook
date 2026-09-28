// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/select.json 의 examples[13] ("Custom tokenization")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Select } from 'antd';

const tokenize = (input: string): string[] => {
  const tokens: string[] = [];
  const regex = /"([^"]*)"|([^,\n]+)/g;
  let match: RegExpExecArray | null = regex.exec(input);
  while (match) {
    tokens.push((match[1] ?? match[2]).trim());
    match = regex.exec(input);
  }
  return tokens.filter(Boolean);
};

const App: React.FC = () => (
  <Select
    mode="tags"
    style={{ width: '100%' }}
    tokenSeparators={tokenize}
    placeholder='붙여넣어 보세요: "샌프란시스코, CA", 뉴욕'
  />
);

export default App;