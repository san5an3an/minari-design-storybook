// @ts-nocheck
import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';

const App: React.FC = () => (
  <Popconfirm
    title="이 일을 지워요"
    description="이 일을 지울까요?"
    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
  >
    <Button danger>지우기</Button>
  </Popconfirm>
);

export default App;