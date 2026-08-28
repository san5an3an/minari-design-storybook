// @ts-nocheck
import React, { useState } from 'react';
import { PoweroffOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

const App: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    console.log('불러오기 시작:', index);

    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 3000);
  };

  return (
    <Flex gap="small" vertical>
      <Flex gap="small" align="center" wrap>
        <Button type="primary" loading>
          불러오는 중
        </Button>
        <Button type="primary" size="small" loading>
          불러오는 중
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <Button type="primary" loading={{ icon: <SyncOutlined spin /> }}>
          불러오는 중 아이콘
        </Button>
      </Flex>
      <Flex gap="small" wrap>
        <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
          아이콘 앞
        </Button>
        <Button
          type="primary"
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
          iconPlacement="end"
        >
          아이콘 뒤
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          아이콘 바꿈
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[3]}
          onClick={() => enterLoading(3)}
        />
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[3] && { icon: <SyncOutlined spin /> }}
          onClick={() => enterLoading(3)}
        >
          불러오는 중 아이콘
        </Button>
      </Flex>
    </Flex>
  );
};

export default App;