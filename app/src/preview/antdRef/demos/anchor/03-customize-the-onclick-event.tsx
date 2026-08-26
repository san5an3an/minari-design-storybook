import React from 'react';
import { Anchor } from 'antd';

const handleClick = (
  e: React.MouseEvent<HTMLElement>, link: {
    title: React.ReactNode;
    href: string;
  },
) => {
  e.preventDefault();
  console.log(link);
};

const App: React.FC = () => (
  <Anchor
    affix={false}
    onClick={handleClick}
    items={[
      {
        key: '1',
        href: '#anchor-demo-basic',
        title: '기본 예제',
      },
      {
        key: '2',
        href: '#anchor-demo-static',
        title: '정적 예제',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor 속성',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link 속성',
          },
        ],
      },
    ]}
  />
);

export default App;