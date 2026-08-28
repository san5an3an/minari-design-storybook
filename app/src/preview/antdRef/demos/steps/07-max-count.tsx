// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/steps.json 의 examples[7] ("Max Count")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import type { InputNumberProps } from 'antd';
import { Button, Flex, InputNumber, Steps, Typography } from 'antd';

const genItems = (count: number) =>
  Array.from({ length: count }, (_, index) => ({ title: `${index + 1}단계` }));

const getMiddleCurrent = (count: number) => Math.floor((count - 1) / 2);

const App: React.FC = () => {
  const [count, setCount] = React.useState(7);
  const [current, setCurrent] = React.useState(() => getMiddleCurrent(7));
  const items = React.useMemo(() => genItems(count), [count]);

  const handleCountChange: InputNumberProps<number>['onChange'] = (value) => {
    if (value === null) {
      return;
    }

    setCount(value);
    setCurrent(getMiddleCurrent(value));
  };

  const handlePrev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrent((prev) => Math.min(prev + 1, count - 1));
  };

  return (
    <Flex vertical gap="middle">
      <Typography.Title level={5} style={{ margin: 0 }}>
        단계 수
      </Typography.Title>

      <Steps current={current} maxCount={5} items={items} />

      <Flex gap="small" align="center" style={{ alignSelf: 'center' }}>
        <Button icon={<LeftOutlined />} onClick={handlePrev} disabled={current <= 0} />
        <InputNumber
          aria-label="단계 수"
          mode="spinner"
          min={3}
          max={7}
          value={count}
          onChange={handleCountChange}
          style={{
            width: 120,
          }}
        />
        <Button icon={<RightOutlined />} onClick={handleNext} disabled={current >= count - 1} />
      </Flex>
    </Flex>
  );
};

export default App;