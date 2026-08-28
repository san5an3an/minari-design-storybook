// @ts-nocheck
import React from 'react';
import { Button, ConfigProvider, Flex, Popconfirm } from 'antd';

const text = '이 일을 지울까요?';
const description = '이 일을 지워요';
const buttonWidth = 80;

const App: React.FC = () => (
  <ConfigProvider button={{ style: { width: buttonWidth, margin: 4 } }}>
    <Flex vertical justify="center" align="center" className="demo">
      <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
        <Popconfirm
          placement="topLeft"
          title={text}
          description={description}
          okText="네"
          cancelText="아니요"
        >
          <Button>TL</Button>
        </Popconfirm>
        <Popconfirm
          placement="top"
          title={text}
          description={description}
          okText="네"
          cancelText="아니요"
        >
          <Button>위</Button>
        </Popconfirm>
        <Popconfirm
          placement="topRight"
          title={text}
          description={description}
          okText="네"
          cancelText="아니요"
        >
          <Button>TR</Button>
        </Popconfirm>
      </Flex>
      <Flex style={{ width: buttonWidth * 5 + 32 }} justify="space-between" align="center">
        <Flex align="center" vertical>
          <Popconfirm
            placement="leftTop"
            title={text}
            description={description}
            okText="네"
            cancelText="아니요"
          >
            <Button>LT</Button>
          </Popconfirm>
          <Popconfirm
            placement="left"
            title={text}
            description={description}
            okText="네"
            cancelText="아니요"
          >
            <Button>왼쪽</Button>
          </Popconfirm>
          <Popconfirm
            placement="leftBottom"
            title={text}
            description={description}
            okText="네"
            cancelText="아니요"
          >
            <Button>LB</Button>
          </Popconfirm>
        </Flex>
        <Flex align="center" vertical>
          <Popconfirm
            placement="rightTop"
            title={text}
            description={description}
            okText="네"
            cancelText="아니요"
          >
            <Button>RT</Button>
          </Popconfirm>
          <Popconfirm
            placement="right"
            title={text}
            description={description}
            okText="네"
            cancelText="아니요"
          >
            <Button>오른쪽</Button>
          </Popconfirm>
          <Popconfirm
            placement="rightBottom"
            title={text}
            description={description}
            okText="네"
            cancelText="아니요"
          >
            <Button>RB</Button>
          </Popconfirm>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
        <Popconfirm
          placement="bottomLeft"
          title={text}
          description={description}
          okText="네"
          cancelText="아니요"
        >
          <Button>BL</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottom"
          title={text}
          description={description}
          okText="네"
          cancelText="아니요"
        >
          <Button>아래</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottomRight"
          title={text}
          description={description}
          okText="네"
          cancelText="아니요"
        >
          <Button>BR</Button>
        </Popconfirm>
      </Flex>
    </Flex>
  </ConfigProvider>
);

export default App;