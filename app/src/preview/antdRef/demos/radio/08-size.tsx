// @ts-nocheck
import React from 'react';
import { Flex, Radio } from 'antd';

const App: React.FC = () => (
  <Flex vertical gap="medium">
    <Radio.Group defaultValue="a" size="large">
      <Radio.Button value="a">서울</Radio.Button>
      <Radio.Button value="b">울산</Radio.Button>
      <Radio.Button value="c">인천</Radio.Button>
      <Radio.Button value="d">대구</Radio.Button>
    </Radio.Group>
    <Radio.Group defaultValue="a">
      <Radio.Button value="a">서울</Radio.Button>
      <Radio.Button value="b">울산</Radio.Button>
      <Radio.Button value="c">인천</Radio.Button>
      <Radio.Button value="d">대구</Radio.Button>
    </Radio.Group>
    <Radio.Group defaultValue="a" size="small">
      <Radio.Button value="a">서울</Radio.Button>
      <Radio.Button value="b">울산</Radio.Button>
      <Radio.Button value="c">인천</Radio.Button>
      <Radio.Button value="d">대구</Radio.Button>
    </Radio.Group>
  </Flex>
);

export default App;