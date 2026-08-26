import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="warning"
    title="하신 일에 문제가 좀 있어요."
    extra={
      <Button type="primary" key="console">
        콘솔로 가기
      </Button>
    }
  />
);

export default App;