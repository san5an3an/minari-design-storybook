// @ts-nocheck
import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    title="하신 일이 처리됐어요"
    extra={
      <Button type="primary" key="console">
        콘솔로 가기
      </Button>
    }
  />
);

export default App;