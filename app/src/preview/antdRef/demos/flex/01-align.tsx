/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/flex.json 의 examples[1] ("align")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, Flex, Segmented } from 'antd';
import type { FlexProps } from 'antd';

const boxStyle: React.CSSProperties = {
  width: '100%',
  height: 120,
  borderRadius: 6,
  border: '1px solid #40a9ff',
};

const justifyOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];

const alignOptions = ['flex-start', 'center', 'flex-end'];

const App: React.FC = () => {
  const [justify, setJustify] = React.useState<FlexProps['justify']>(justifyOptions[0]);
  const [alignItems, setAlignItems] = React.useState<FlexProps['align']>(alignOptions[0]);
  return (
    <Flex gap="medium" align="start" vertical>
      <p>justify 고르기 :</p>
      <Segmented options={justifyOptions} onChange={setJustify} />
      <p>align 고르기 :</p>
      <Segmented options={alignOptions} onChange={setAlignItems} />
      <Flex style={boxStyle} justify={justify} align={alignItems}>
        <Button type="primary">기본</Button>
        <Button type="primary">기본</Button>
        <Button type="primary">기본</Button>
        <Button type="primary">기본</Button>
      </Flex>
    </Flex>
  );
};

export default App;