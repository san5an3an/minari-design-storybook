import React from 'react';
import { Button, Flex } from 'antd';

const App: React.FC = () => (
  <Flex vertical gap="small" style={{ width: '100%' }}>
    <Button type="primary" block>
      기본
    </Button>
    <Button block>기본값</Button>
    <Button type="dashed" block>
      파선
    </Button>
    <Button disabled block>
      disabled
    </Button>
    <Button type="text" block>
      text
    </Button>
    <Button type="link" block>
      링크
    </Button>
  </Flex>
);

export default App;