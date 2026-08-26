import React from 'react';
import { Breadcrumb } from 'antd';

const menuItems = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        일반
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        배치
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        메뉴
      </a>
    ),
  },
];

const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        title: 'Ant Design',
      },
      {
        title: <a href="">컴포넌트</a>,
      },
      {
        title: <a href="">일반</a>, menu: { items: menuItems },
      },
      {
        title: 'Button',
      },
    ]}
  />
);

export default App;