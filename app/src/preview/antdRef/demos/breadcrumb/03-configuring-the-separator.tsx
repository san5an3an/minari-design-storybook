import React from 'react';
import { Breadcrumb } from 'antd';

const App: React.FC = () => (
  <Breadcrumb
    separator=">" items={[
      {
        title: '홈',
      },
      {
        title: '애플리케이션 센터',
        href: '',
      },
      {
        title: '애플리케이션 목록',
        href: '',
      },
      {
        title: '애플리케이션 하나',
      },
    ]}
  />
);

export default App;