/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/tabs.json 의 examples[6] ("Extra content")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useMemo, useState } from 'react';
import { Button, Checkbox, Divider, Tabs } from 'antd';

const CheckboxGroup = Checkbox.Group;

const operations = <Button>덧붙임 동작</Button>;

const operationsSlot: Record<PositionType, React.ReactNode> = {
  left: <Button style={{ marginInlineEnd: 16 }}>왼쪽 덧붙임 동작</Button>, right: <Button style={{ marginInlineStart: 16 }}>오른쪽 덧붙임 동작</Button>,
};

const options = ['left', 'right'];

type PositionType = 'left' | 'right';

type TabBarExtraMap = Partial<Record<PositionType, React.ReactNode>>;

const items = Array.from({ length: 3 }).map((_, i) => {
  const id = String(i + 1);
  return {
    label: `탭 ${id}`,
    key: id,
    children: `탭 ${id}의 내용`,
  };
});

const App: React.FC = () => {
  const [position, setPosition] = useState<PositionType[]>(['left', 'right']);

  const slot = useMemo(() => {
    if (position.length === 0) {
      return null;
    }
    return position.reduce<TabBarExtraMap>(
      (acc, direction) => ({ ...acc, [direction]: operationsSlot[direction] }),
      {},
    );
  }, [position]);

  return (
    <>
      <Tabs tabBarExtraContent={operations} items={items} />
      <br />
      <br />
      <br />
      <div>방향을 정하거나 양쪽 다 줄 수도 있어요</div>
      <Divider />
      <CheckboxGroup<PositionType> options={options} value={position} onChange={setPosition} />
      <br />
      <br />
      <Tabs tabBarExtraContent={slot} items={items} />
    </>
  );
};

export default App;