/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/popover.json 의 examples[1] ("Three ways to trigger")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, Popover, Space } from 'antd';

const content = (
  <div>
    <p>내용</p>
    <p>내용</p>
  </div>
);

const App: React.FC = () => (
  <Space wrap>
    <Popover content={content} title="제목" trigger="hover">
      <Button>여기에 올려 보세요</Button>
    </Popover>
    <Popover content={content} title="제목" trigger="focus">
      <Button>초점을 줘 보세요</Button>
    </Popover>
    <Popover content={content} title="제목" trigger="click">
      <Button>눌러 보세요</Button>
    </Popover>
  </Space>
);

export default App;