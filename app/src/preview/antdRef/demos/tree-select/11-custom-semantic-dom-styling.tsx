/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/tree-select.json 의 examples[11] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, TreeSelect } from 'antd';
import type { GetProp, TreeSelectProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
  root: {
    width: 300,
    borderRadius: token.borderRadius,
  },
}));

const styleObject: TreeSelectProps['styles'] = {
  input: {
    fontSize: 16,
  },
  suffix: {
    color: '#1890ff',
  },
  popup: {
    root: {
      border: '1px solid #1890ff',
    },
  },
};

const styleFunction: TreeSelectProps['styles'] = (
  info,
): GetProp<TreeSelectProps, 'styles', 'Return'> => {
  if (info.props.size === 'medium') {
    return {
      suffix: {
        color: '#722ed1',
      },
      popup: {
        item: {
          color: '#722ed1',
        },
      },
    };
  }
  return {};
};

const treeData: TreeSelectProps['treeData'] = [
  {
    value: '부모 1',
    title: '부모 1',
    children: [
      {
        value: '부모 1-0',
        title: '부모 1-0',
        children: [
          {
            value: '잎1',
            title: '잎1',
          },
          {
            value: '잎2',
            title: '잎2',
          },
        ],
      },
      {
        value: '부모 1-1',
        title: '부모 1-1',
        children: [
          {
            value: '잎3',
            title: '잎3',
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const { styles: classNames } = useStyles();

  const sharedProps: TreeSelectProps = {
    treeData,
    classNames,
  };

  return (
    <Flex vertical gap="large">
      <TreeSelect {...sharedProps} styles={styleObject} placeholder="객체" />
      <TreeSelect {...sharedProps} styles={styleFunction} placeholder="함수" size="medium" />
    </Flex>
  );
};

export default App;