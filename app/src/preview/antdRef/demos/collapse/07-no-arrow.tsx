/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/collapse.json 의 examples[7] ("No arrow")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const text = `개는 사람과 함께 살아온 동물이에요. 충직하고 한결같아서 세계 곳곳의 집에서 반가운 식구로 지내요.`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: '화살표 아이콘이 있는 판 머리예요',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: '화살표 아이콘이 없는 판 머리예요',
    children: <p>{text}</p>,
    showArrow: false,
  },
];

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse defaultActiveKey={['1']} onChange={onChange} items={items} />;
};

export default App;