// @ts-nocheck
import React from 'react';
import { Button, Flex, Space } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
  const { css, cssVar } = props;
  return {
    spaceAlignBox: css`
      flex: none;
      margin: ${cssVar.marginXXS};
      padding: ${cssVar.paddingXXS};
      border: ${cssVar.lineWidth} ${cssVar.lineType} ${cssVar.blue};
    `,
    mockBox: css`
      display: inline-block;
      padding: ${cssVar.paddingXL} ${cssVar.padding};
      background-color: rgba(150, 150, 150, 0.2);
    `,
  };
});

const App: React.FC = () => {
  const { styles } = useStyles();
  return (
    <Flex wrap align="flex-start">
      <div className={styles.spaceAlignBox}>
        <Space align="center">
          center
          <Button type="primary">기본</Button>
          <span className={styles.mockBox}>덩어리</span>
        </Space>
      </div>
      <div className={styles.spaceAlignBox}>
        <Space align="start">
          start
          <Button type="primary">기본</Button>
          <span className={styles.mockBox}>덩어리</span>
        </Space>
      </div>
      <div className={styles.spaceAlignBox}>
        <Space align="end">
          end
          <Button type="primary">기본</Button>
          <span className={styles.mockBox}>덩어리</span>
        </Space>
      </div>
      <div className={styles.spaceAlignBox}>
        <Space align="baseline">
          baseline
          <Button type="primary">기본</Button>
          <span className={styles.mockBox}>덩어리</span>
        </Space>
      </div>
    </Flex>
  );
};

export default App;