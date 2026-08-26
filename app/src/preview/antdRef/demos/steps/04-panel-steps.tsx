/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/steps.json 의 examples[4] ("Panel Steps")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { Flex, Steps } from 'antd';
import type { StepsProps } from 'antd';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  const sharedProps: StepsProps = {
    type: 'panel',
    current,
    onChange,
    items: [
      {
        title: '1단계',
        subTitle: '00:00',
        content: '내용이 들어가는 자리예요.',
      },
      {
        title: '2단계',
        content: '내용이 들어가는 자리예요.',
        status: 'error',
      },
      {
        title: '3단계',
        content: '내용이 들어가는 자리예요.',
      },
    ],
  };

  return (
    <Flex vertical gap="medium">
      <Steps {...sharedProps} />
      <Steps {...sharedProps} size="small" variant="outlined" />
    </Flex>
  );
};

export default App;