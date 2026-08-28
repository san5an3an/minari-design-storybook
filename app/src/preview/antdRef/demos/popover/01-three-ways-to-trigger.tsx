// @ts-nocheck
import React from 'react';
import { Button, Popover, Space } from 'antd';

const content = (
  <div>
    <p>내용</p>
    <p>내용</p>
  </div>
);

const App: React.FC = () => (
  <Space wrap>
    <Popover content={content} title="제목" trigger="hover">
      <Button>여기에 올려 보세요</Button>
    </Popover>
    <Popover content={content} title="제목" trigger="focus">
      <Button>초점을 줘 보세요</Button>
    </Popover>
    <Popover content={content} title="제목" trigger="click">
      <Button>눌러 보세요</Button>
    </Popover>
  </Space>
);

export default App;