import React from 'react';
import { SmileOutlined } from '../_icons';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

// Icons from third-party libraries (e.g. lucide, react-icons) render as a bare `<svg>`
// rather than an `.anticon` wrapper. It stays vertically centred with the title text.
const ChartIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 3 3 5-6" />
  </svg>
);

const text = `개는 사람과 함께 살아온 동물이에요. 충직하고 한결같아서 세계 곳곳의 집에서 반가운 식구로 지내요.`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: (
      <>
        <SmileOutlined /> Ant Design 아이콘이 있는 판
      </>
    ), children: <p>{text}</p>,
  },
  {
    key: '2',
    label: (
      <>
        <ChartIcon /> 다른 데서 가져온 아이콘이 있는 판
      </>
    ), children: <p>{text}</p>,
  },
];

const App: React.FC = () => <Collapse defaultActiveKey={['1']} items={items} />;

export default App;