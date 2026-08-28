// @ts-nocheck
import React from 'react';
import { Button, Popconfirm } from 'antd';

const App: React.FC = () => (
  <Popconfirm
    title="이 일을 지워요"
    description="이 일을 지울까요?"
    okText="네"
    cancelText="아니요"
  >
    <Button danger>지우기</Button>
  </Popconfirm>
);

export default App;