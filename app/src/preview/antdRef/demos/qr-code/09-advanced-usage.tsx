// @ts-nocheck
import React from 'react';
import { Button, Popover, QRCode } from 'antd';

const App: React.FC = () => (
  <Popover content={<QRCode value="https://ant.design" bordered={false} />}>
    <Button type="primary">여기에 올려 보세요</Button>
  </Popover>
);

export default App;