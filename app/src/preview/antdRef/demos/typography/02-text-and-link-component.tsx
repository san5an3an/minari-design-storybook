// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/typography.json 의 examples[2] ("Text and Link Component")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

const App: React.FC = () => (
  <Space vertical>
    <Text>Ant Design (기본)</Text>
    <Text type="secondary">Ant Design (보조)</Text>
    <Text type="success">Ant Design (성공)</Text>
    <Text type="warning">Ant Design (경고)</Text>
    <Text type="danger">Ant Design (위험)</Text>
    <Text disabled>Ant Design (못 씀)</Text>
    <Text mark>Ant Design (형광펜)</Text>
    <Text code>Ant Design (코드)</Text>
    <Text keyboard>Ant Design (자판)</Text>
    <Text underline>Ant Design (밑줄)</Text>
    <Text delete>Ant Design (지움)</Text>
    <Text strong>Ant Design (굵게)</Text>
    <Text italic>Ant Design (기울임)</Text>
    <Link href="https://ant.design" target="_blank">
      Ant Design (링크)
    </Link>
  </Space>
);

export default App;