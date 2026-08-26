import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Flex, Radio } from 'antd';

const onChange = (e: RadioChangeEvent) => {
  console.log(`라디오 골랐어요:${e.target.value}`);
};

const App: React.FC = () => (
  <Flex vertical gap="medium">
    <Radio.Group onChange={onChange} defaultValue="a">
      <Radio.Button value="a">서울</Radio.Button>
      <Radio.Button value="b">울산</Radio.Button>
      <Radio.Button value="c">인천</Radio.Button>
      <Radio.Button value="d">대구</Radio.Button>
    </Radio.Group>
    <Radio.Group onChange={onChange} defaultValue="a">
      <Radio.Button value="a">서울</Radio.Button>
      <Radio.Button value="b" disabled>
        울산
      </Radio.Button>
      <Radio.Button value="c">인천</Radio.Button>
      <Radio.Button value="d">대구</Radio.Button>
    </Radio.Group>
    <Radio.Group disabled onChange={onChange} defaultValue="a">
      <Radio.Button value="a">서울</Radio.Button>
      <Radio.Button value="b">울산</Radio.Button>
      <Radio.Button value="c">인천</Radio.Button>
      <Radio.Button value="d">대구</Radio.Button>
    </Radio.Group>
  </Flex>
);

export default App;