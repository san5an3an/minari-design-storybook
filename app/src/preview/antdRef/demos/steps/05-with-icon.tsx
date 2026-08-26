import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '../_icons';
import { Steps } from 'antd';

const App: React.FC = () => (
  <Steps
    items={[
      {
        title: '로그인',
        status: 'finish',
        icon: <UserOutlined />,
      },
      {
        title: '확인',
        status: 'finish',
        icon: <SolutionOutlined />,
      },
      {
        title: '결제',
        status: 'process',
        icon: <LoadingOutlined />,
      },
      {
        title: '완료',
        status: 'wait',
        icon: <SmileOutlined />,
      },
    ]}
  />
);

export default App;