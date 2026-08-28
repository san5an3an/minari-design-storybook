// @ts-nocheck
import React from 'react';
import { Alert, Button, Flex } from 'antd';

const App: React.FC = () => (
  <>
    <Alert
      title="성공 안내"
      type="success"
      showIcon
      action={
        <Button size="small" type="text">
          되돌리기
        </Button>
      }
      closable
    />
    <br />
    <Alert
      title="오류 글"
      showIcon
      description="오류 설명 오류 설명 오류 설명 오류 설명"
      type="error"
      action={
        <Button size="small" danger>
          자세히
        </Button>
      }
    />
    <br />
    <Alert
      title="경고 글"
      type="warning"
      action={
        <Button type="text" size="small">
          완료
        </Button>
      }
      closable
    />
    <br />
    <Alert
      title="안내 글"
      description="안내 설명 안내 설명 안내 설명 안내 설명"
      type="info"
      action={
        <Flex vertical gap="small" style={{ minWidth: 80 }}>
          <Button size="small" type="primary" block>
            받기
          </Button>
          <Button size="small" danger ghost block>
            거절
          </Button>
        </Flex>
      }
      closable
    />
  </>
);

export default App;