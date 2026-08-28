// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/radio.json 의 examples[8] ("Size")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Radio } from 'antd';

const App: React.FC = () => (
  <Flex vertical gap="medium">
    <Radio.Group defaultValue="a" size="large">
      <Radio.Button value="a">서울</Radio.Button>
      <Radio.Button value="b">울산</Radio.Button>
      <Radio.Button value="c">인천</Radio.Button>
      <Radio.Button value="d">대구</Radio.Button>
    </Radio.Group>
    <Radio.Group defaultValue="a">
      <Radio.Button value="a">서울</Radio.Button>
      <Radio.Button value="b">울산</Radio.Button>
      <Radio.Button value="c">인천</Radio.Button>
      <Radio.Button value="d">대구</Radio.Button>
    </Radio.Group>
    <Radio.Group defaultValue="a" size="small">
      <Radio.Button value="a">서울</Radio.Button>
      <Radio.Button value="b">울산</Radio.Button>
      <Radio.Button value="c">인천</Radio.Button>
      <Radio.Button value="d">대구</Radio.Button>
    </Radio.Group>
  </Flex>
);

export default App;