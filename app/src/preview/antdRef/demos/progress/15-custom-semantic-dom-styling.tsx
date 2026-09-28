// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/progress.json 의 examples[15] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Progress } from 'antd';
import type { GetProp, ProgressProps } from 'antd';

const classNames: ProgressProps['classNames'] = {
  root: 'demo-progress-root',
  rail: 'demo-progress-rail',
  track: 'demo-progress-track',
};

const stylesFn: ProgressProps['styles'] = (info): GetProp<ProgressProps, 'styles', 'Return'> => {
  const percent = info?.props?.percent ?? 0;
  const hue = 200 - (200 * percent) / 100;
  return {
    track: {
      backgroundImage: `linear-gradient( to right, hsla(${hue}, 85%, 65%, 1), hsla(${hue + 30}, 90%, 55%, 0.95) )`,
      borderRadius: 8,
      transition: 'all 0.3s ease',
    },
    rail: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: 8,
    },
  };
};

const App: React.FC = () => (
  <Flex vertical gap="large">
    <Progress classNames={classNames} styles={stylesFn} percent={10} />
    <Progress classNames={classNames} styles={stylesFn} percent={20} />
    <Progress classNames={classNames} styles={stylesFn} percent={40} />
    <Progress classNames={classNames} styles={stylesFn} percent={60} />
    <Progress classNames={classNames} styles={stylesFn} percent={80} />
    <Progress classNames={classNames} styles={stylesFn} percent={99} />
  </Flex>
);

export default App;