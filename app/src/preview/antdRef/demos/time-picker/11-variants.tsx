import React from 'react';
import { Flex, TimePicker } from 'antd';

const { RangePicker } = TimePicker;

const App: React.FC = () => (
  <Flex vertical gap={12}>
    <Flex gap={8}>
      <TimePicker placeholder="테두리" />
      <RangePicker placeholder={['테두리 시작', '테두리 끝']} />
    </Flex>
    <Flex gap={8}>
      <TimePicker variant="filled" placeholder="채움" />
      <RangePicker variant="filled" placeholder={['채움 시작', '채움 끝']} />
    </Flex>
    <Flex gap={8}>
      <TimePicker variant="borderless" placeholder="테두리 없음" />
      <RangePicker variant="borderless" placeholder={['테두리 없음 시작', '테두리 없음 끝']} />
    </Flex>
    <Flex gap={8}>
      <TimePicker variant="underlined" placeholder="밑줄" />
      <RangePicker variant="underlined" placeholder={['밑줄 시작', '밑줄 끝']} />
    </Flex>
  </Flex>
);

export default App;