// @ts-nocheck
import React from 'react';
import { Collapse, Space } from 'antd';
import { createStyles } from 'antd-style';

const text = `개는 사람과 함께 살아온 동물이에요. 충직하고 한결같아서 세계 곳곳의 집에서 반가운 식구로 지내요.`;

const useStyles = createStyles((props) => {
  const { css } = props;
  return {
    content: css`
      width: 100%;
    `,
  };
});

const App: React.FC = () => {
  const { styles } = useStyles();
  return (
    <Space className={styles.content} vertical>
      <Collapse
        collapsible="header"
        defaultActiveKey={['1']}
        items={[
          {
            key: '1',
            label: '글자나 아이콘을 눌러 접을 수 있는 판이에요',
            children: <p>{text}</p>,
          },
        ]}
      />
      <Collapse
        collapsible="icon"
        defaultActiveKey={['1']}
        items={[
          {
            key: '1',
            label: '아이콘을 눌러야만 접을 수 있는 판이에요',
            children: <p>{text}</p>,
          },
        ]}
      />
      <Collapse
        collapsible="disabled"
        items={[
          {
            key: '1',
            label: "이 판은 접을 수 없어요",
            children: <p>{text}</p>,
          },
        ]}
      />
    </Space>
  );
};

export default App;