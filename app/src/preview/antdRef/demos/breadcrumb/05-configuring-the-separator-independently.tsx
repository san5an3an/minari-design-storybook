import React from 'react';
import { Breadcrumb } from 'antd';

const App: React.FC = () => (
  <Breadcrumb
    separator=""
    items={[
      {
        title: '위치',
      },
      {
        type: 'separator',
        separator: ':',
      },
      {
        href: '',
        title: '애플리케이션 센터',
      },
      {
        type: 'separator',
      },
      {
        href: '',
        title: '애플리케이션 목록',
      },
      {
        type: 'separator',
      },
      {
        title: '애플리케이션 하나',
      },
    ]}
  />
);

export default App;