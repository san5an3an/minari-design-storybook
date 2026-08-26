/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/space.json 의 examples[9] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import { Button, Space } from 'antd';
import type { GetProp, SpaceProps } from 'antd';

const classNamesObject: SpaceProps['classNames'] = {
  root: 'demo-space-root',
  item: 'demo-space-item',
  separator: 'demo-space-separator',
};

const classNamesFn: SpaceProps['classNames'] = (
  info,
): GetProp<SpaceProps, 'classNames', 'Return'> => {
  if (info.props.orientation === 'vertical') {
    return {
      root: 'demo-space-root--vertical',
    };
  } else {
    return {
      root: 'demo-space-root--horizontal',
    };
  }
};

const stylesObject: SpaceProps['styles'] = {
  root: { borderWidth: 2, borderStyle: 'dashed', padding: 8, marginBottom: 10 },
  item: { backgroundColor: '#f0f0f0', padding: 4 },
  separator: { color: 'red', fontWeight: 'bold' },
};

const stylesFn: SpaceProps['styles'] = (info): GetProp<SpaceProps, 'styles', 'Return'> => {
  if (info.props.size === 'large') {
    return {
      root: {
        backgroundColor: '#e6f7ff',
        borderColor: '#1890ff',
        padding: 8,
      },
    };
  } else {
    return {
      root: {
        backgroundColor: '#fff7e6',
        borderColor: '#fa8c16',
      },
    };
  }
};

const App: React.FC = () => {
  return (
    <div>
      <Space styles={stylesObject} classNames={classNamesObject} separator="•">
        <Button>꾸민 버튼 1</Button>
        <Button>꾸민 버튼 2</Button>
        <Button>꾸민 버튼 3</Button>
      </Space>
      <Space size="large" styles={stylesFn} classNames={classNamesFn}>
        <Button>넓은 간격 버튼 1</Button>
        <Button>넓은 간격 버튼 2</Button>
        <Button>넓은 간격 버튼 3</Button>
      </Space>
    </div>
  );
};

export default App;