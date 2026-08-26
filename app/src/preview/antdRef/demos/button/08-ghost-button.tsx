import React from 'react';
import { Button, Flex } from 'antd';

const App: React.FC = () => (
  <Flex wrap gap="small" className="site-button-ghost-wrapper">
    <Button type="primary" ghost>
      기본
    </Button>
    <Button ghost>기본값</Button>
    <Button type="dashed" ghost>
      파선
    </Button>
    <Button type="primary" danger ghost>
      위험
    </Button>
  </Flex>
);

export default App;