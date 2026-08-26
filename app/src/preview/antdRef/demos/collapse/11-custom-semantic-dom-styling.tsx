/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/collapse.json 의 examples[11] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import type { CollapseProps, GetProp } from 'antd';
import { Collapse, Flex } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    background-color: #fafafa;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  `,
}));

const element = (
  <p>
    개는 사람과 함께 살아온 동물이에요. 충직하고 한결같아서 세계 곳곳의 집에서 반가운 식구로 지내요.
  </p>
);

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: '첫 번째 판 머리예요',
    children: element,
  },
  {
    key: '2',
    label: '두 번째 판 머리예요',
    children: element,
  },
  {
    key: '3',
    label: '세 번째 판 머리예요',
    children: element,
  },
];

const styles: CollapseProps['styles'] = {
  root: {
    backgroundColor: '#fafafa',
    border: '1px solid #e0e0e0',
    borderRadius: 8,
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: '12px 16px',
    color: '#141414',
  },
};

const stylesFn: CollapseProps['styles'] = ({
  props,
}): GetProp<CollapseProps, 'styles', 'Return'> => {
  if (props.size === 'large') {
    return {
      root: {
        backgroundColor: '#fff',
        border: '1px solid #696FC7',
        borderRadius: 8,
      },
      header: {
        backgroundColor: '#F5EFFF',
        padding: '12px 16px',
        color: '#141414',
      },
    };
  }
};

const App: React.FC = () => {
  const sharedProps: CollapseProps = { classNames, items };

  return (
    <Flex vertical gap="medium">
      <Collapse {...sharedProps} defaultActiveKey={['1']} styles={styles} />
      <Collapse {...sharedProps} defaultActiveKey={['2']} styles={stylesFn} size="large" />
    </Flex>
  );
};

export default App;