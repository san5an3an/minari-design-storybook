// @ts-nocheck
import React from 'react';
import { DatePicker, Flex } from 'antd';

const { RangePicker } = DatePicker;

const App: React.FC = () => (
  <Flex vertical gap={12}>
    <Flex gap={8}>
      <DatePicker placeholder="테두리" />
      <RangePicker placeholder={['테두리 시작', '테두리 끝']} />
    </Flex>
    <Flex gap={8}>
      <DatePicker placeholder="채움" variant="filled" />
      <RangePicker placeholder={['채움 시작', '채움 끝']} variant="filled" />
    </Flex>
    <Flex gap={8}>
      <DatePicker placeholder="테두리 없음" variant="borderless" />
      <RangePicker placeholder={['테두리 없음 시작', '테두리 없음 끝']} variant="borderless" />
    </Flex>
    <Flex gap={8}>
      <DatePicker placeholder="밑줄" variant="underlined" />
      <RangePicker placeholder={['밑줄 시작', '밑줄 끝']} variant="underlined" />
    </Flex>
  </Flex>
);

export default App;