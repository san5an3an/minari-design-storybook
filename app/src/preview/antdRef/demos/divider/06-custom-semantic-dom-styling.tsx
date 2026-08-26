/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/divider.json 의 examples[6] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Divider } from 'antd';
import type { DividerProps, GetProp } from 'antd';

const classNamesObject: DividerProps['classNames'] = {
  root: 'demo-divider-root',
  content: 'demo-divider-content',
  rail: 'demo-divider-rail',
};

const classNamesFn: DividerProps['classNames'] = (
  info,
): GetProp<DividerProps, 'classNames', 'Return'> => {
  if (info.props.titlePlacement === 'start') {
    return {
      root: 'demo-divider-root--start',
    };
  }
  return {
    root: 'demo-divider-root--default',
  };
};

const stylesObject: DividerProps['styles'] = {
  root: { borderWidth: 2, borderStyle: 'dashed' }, content: { fontStyle: 'italic' },
  rail: { opacity: 0.85 },
};

const stylesFn: DividerProps['styles'] = (info): GetProp<DividerProps, 'styles', 'Return'> => {
  if (info.props.size === 'small') {
    return {
      root: { opacity: 0.6, cursor: 'default' },
    };
  }
  return {
    root: { backgroundColor: '#fafafa', borderColor: '#d9d9d9' },
  };
};

const App: React.FC = () => (
  <div>
    <Divider classNames={classNamesObject}>classNames 객체</Divider>
    <Divider titlePlacement="start" classNames={classNamesFn}>
      classNames 함수
    </Divider>
    <Divider styles={stylesObject}>styles 객체</Divider>
    <Divider size="small" styles={stylesFn}>
      styles 함수
    </Divider>
  </div>
);

export default App;