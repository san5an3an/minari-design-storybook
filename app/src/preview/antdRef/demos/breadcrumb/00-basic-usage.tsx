// @ts-nocheck
import React from 'react';
import { Breadcrumb } from 'antd';

const App: React.FC = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: '홈',
        },
        {
          title: <a href="">애플리케이션 센터</a>,
        },
        {
          title: <a href="">애플리케이션 목록</a>,
        },
        {
          title: '애플리케이션 하나',
        },
      ]}
    />
  );
};

export default App;