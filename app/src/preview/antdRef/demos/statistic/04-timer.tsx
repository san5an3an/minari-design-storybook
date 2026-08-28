// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/statistic.json 의 examples[4] ("Timer")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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