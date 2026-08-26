import React from 'react';
import { UploadOutlined } from '../_icons';
import { Button, Popconfirm, Space, Upload } from 'antd';

const App: React.FC = () => (
  <Space>
    Space
    <Button type="primary">Button</Button>
    <Upload>
      <Button icon={<UploadOutlined />}>눌러서 올리기</Button>
    </Upload>
    <Popconfirm title="이 일을 지울까요?" okText="네" cancelText="아니요">
      <Button>확인</Button>
    </Popconfirm>
  </Space>
);

export default App;