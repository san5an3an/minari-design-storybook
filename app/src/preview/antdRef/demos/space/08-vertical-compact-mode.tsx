// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/space.json 의 examples[8] ("Vertical Compact Mode")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, Space } from 'antd';

const App: React.FC = () => (
  <Space>
    <Space.Compact orientation="vertical">
      <Button>버튼 1</Button>
      <Button>버튼 2</Button>
      <Button>버튼 3</Button>
    </Space.Compact>
    <Space.Compact orientation="vertical">
      <Button type="dashed">버튼 1</Button>
      <Button type="dashed">버튼 2</Button>
      <Button type="dashed">버튼 3</Button>
    </Space.Compact>
    <Space.Compact orientation="vertical">
      <Button type="primary">버튼 1</Button>
      <Button type="primary">버튼 2</Button>
      <Button type="primary">버튼 3</Button>
    </Space.Compact>
    <Space.Compact orientation="vertical">
      <Button variant="outlined">버튼 1</Button>
      <Button variant="outlined">버튼 2</Button>
      <Button variant="outlined">버튼 3</Button>
    </Space.Compact>
  </Space>
);

export default App;