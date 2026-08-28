// @ts-nocheck
import React from 'react';
import type { StatisticTimerProps } from 'antd';
import { Col, Row, Statistic } from 'antd';
import { createStyles } from 'antd-style';

const { Timer } = Statistic;

const useStyle = createStyles(({ css }) => {
  return {
    content: css`
      font-variant-numeric: tabular-nums;
    `,
  };
});

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK
const before = Date.now() - 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
const tenSecondsLater = Date.now() + 10 * 1000;

const onFinish: StatisticTimerProps['onFinish'] = () => {
  console.log('끝났어요!');
};

const onChange: StatisticTimerProps['onChange'] = (val) => {
  if (typeof val === 'number' && !Number.isNaN(val) && 4.95 * 1000 < val && val < 5 * 1000) {
    console.log('바뀌었어요!');
  }
};

const Demo: React.FC = () => {
  const { styles } = useStyle();
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Timer
          classNames={{ content: styles.content }}
          type="countdown"
          value={deadline}
          onFinish={onFinish}
        />
      </Col>
      <Col span={12}>
        <Timer
          classNames={{ content: styles.content }}
          type="countdown"
          title="밀리초"
          value={deadline}
          format="HH:mm:ss:SSS"
        />
      </Col>
      <Col span={12}>
        <Timer
          classNames={{ content: styles.content }}
          type="countdown"
          title="남은 시간"
          value={tenSecondsLater}
          onChange={onChange}
        />
      </Col>
      <Col span={12}>
        <Timer
          classNames={{ content: styles.content }}
          type="countup"
          title="지난 시간"
          value={before}
          onChange={onChange}
        />
      </Col>
      <Col span={24} style={{ marginTop: 32 }}>
        <Timer
          classNames={{ content: styles.content }}
          type="countdown"
          title="일 단위 (남은 시간)"
          value={deadline}
          format="D일 H시 m분 s초"
        />
      </Col>
      <Col span={24} style={{ marginTop: 32 }}>
        <Timer
          classNames={{ content: styles.content }}
          type="countup"
          title="일 단위 (지난 시간)"
          value={before}
          format="D일 H시 m분 s초"
        />
      </Col>
    </Row>
  );
};

export default Demo;