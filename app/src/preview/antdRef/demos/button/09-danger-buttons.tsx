// @ts-nocheck
import React from 'react';
import { Button, Flex } from 'antd';

const App: React.FC = () => (
  <Flex wrap gap="small">
    <Button type="primary" danger>
      기본
    </Button>
    <Button danger>기본값</Button>
    <Button type="dashed" danger>
      파선
    </Button>
    <Button type="text" danger>
      글자
    </Button>
    <Button type="link" danger>
      링크
    </Button>
  </Flex>
);

export default App;