// @ts-nocheck
import React from 'react';
import { Button, Popover } from 'antd';

const content = (
  <div>
    <p style={{ margin: 0 }}>내용</p>
    <p style={{ margin: 0 }}>내용</p>
  </div>
);

const App: React.FC = () => (
  <Popover content={content} title="제목">
    <Button type="primary">여기에 올려 보세요</Button>
  </Popover>
);

export default App;