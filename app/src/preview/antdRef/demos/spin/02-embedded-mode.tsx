// @ts-nocheck
import React from 'react';
import { Alert, Flex, Spin, Switch } from 'antd';

const App: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <Flex gap="medium" vertical>
      <Spin spinning={loading}>
        <Alert
          type="info"
          title="알림 제목이에요"
          description="이 알림에 대한 자세한 설명이에요."
        />
      </Spin>
      <p>
        불러오는 중 상태：
        <Switch checked={loading} onChange={setLoading} />
      </p>
    </Flex>
  );
};

export default App;