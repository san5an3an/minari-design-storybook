/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/splitter.json 의 examples[7] ("Lazy")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Space, Splitter, Typography } from 'antd';

const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);

const App: React.FC = () => (
  <Space vertical style={{ width: '100%' }}>
    <Splitter lazy style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <Splitter.Panel defaultSize="40%" min="20%" max="70%">
        <Desc text="첫째" />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text="둘째" />
      </Splitter.Panel>
    </Splitter>
    <Splitter
      lazy
      orientation="vertical"
      style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
    >
      <Splitter.Panel defaultSize="40%" min="30%" max="70%">
        <Desc text="첫째" />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text="둘째" />
      </Splitter.Panel>
    </Splitter>
  </Space>
);

export default App;