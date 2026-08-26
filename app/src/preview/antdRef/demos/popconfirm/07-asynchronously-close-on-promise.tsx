import React from 'react';
import { Button, Popconfirm } from 'antd';

const App: React.FC = () => {
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
    });

  return (
    <Popconfirm
      title="제목"
      description="Promise 로 Popconfirm 열기"
      onConfirm={confirm}
      onOpenChange={() => console.log('열림 바뀜')}
    >
      <Button type="primary">Promise 로 Popconfirm 열기</Button>
    </Popconfirm>
  );
};

export default App;