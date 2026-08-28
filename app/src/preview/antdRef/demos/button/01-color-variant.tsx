// @ts-nocheck
import React from 'react';
import { Button, ConfigProvider, Flex } from 'antd';
import { useResponsive } from 'antd-style';

const App: React.FC = () => {
  const { xxl } = useResponsive();

  return (
    <ConfigProvider componentSize={xxl ? 'medium' : 'small'}>
      <Flex vertical gap="small">
        <Flex gap="small" wrap>
          <Button color="default" variant="solid">
            단색
          </Button>
          <Button color="default" variant="outlined">
            테두리
          </Button>
          <Button color="default" variant="dashed">
            파선
          </Button>
          <Button color="default" variant="filled">
            채움
          </Button>
          <Button color="default" variant="text">
            글자
          </Button>
          <Button color="default" variant="link">
            링크
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="primary" variant="solid">
            단색
          </Button>
          <Button color="primary" variant="outlined">
            테두리
          </Button>
          <Button color="primary" variant="dashed">
            파선
          </Button>
          <Button color="primary" variant="filled">
            채움
          </Button>
          <Button color="primary" variant="text">
            글자
          </Button>
          <Button color="primary" variant="link">
            링크
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="danger" variant="solid">
            단색
          </Button>
          <Button color="danger" variant="outlined">
            테두리
          </Button>
          <Button color="danger" variant="dashed">
            파선
          </Button>
          <Button color="danger" variant="filled">
            채움
          </Button>
          <Button color="danger" variant="text">
            글자
          </Button>
          <Button color="danger" variant="link">
            링크
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="pink" variant="solid">
            단색
          </Button>
          <Button color="pink" variant="outlined">
            테두리
          </Button>
          <Button color="pink" variant="dashed">
            파선
          </Button>
          <Button color="pink" variant="filled">
            채움
          </Button>
          <Button color="pink" variant="text">
            글자
          </Button>
          <Button color="pink" variant="link">
            링크
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="purple" variant="solid">
            단색
          </Button>
          <Button color="purple" variant="outlined">
            테두리
          </Button>
          <Button color="purple" variant="dashed">
            파선
          </Button>
          <Button color="purple" variant="filled">
            채움
          </Button>
          <Button color="purple" variant="text">
            글자
          </Button>
          <Button color="purple" variant="link">
            링크
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="cyan" variant="solid">
            단색
          </Button>
          <Button color="cyan" variant="outlined">
            테두리
          </Button>
          <Button color="cyan" variant="dashed">
            파선
          </Button>
          <Button color="cyan" variant="filled">
            채움
          </Button>
          <Button color="cyan" variant="text">
            글자
          </Button>
          <Button color="cyan" variant="link">
            링크
          </Button>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};

export default App;