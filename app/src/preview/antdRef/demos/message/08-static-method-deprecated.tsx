import React from 'react';
import { Button, message } from 'antd';

const info = () => {
  message.info('보통 메시지예요');
};

const App: React.FC = () => (
  <Button type="primary" onClick={info}>
    정적 메서드
  </Button>
);

export default App;