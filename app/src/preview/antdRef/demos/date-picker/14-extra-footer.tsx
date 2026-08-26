import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const App: React.FC = () => (
  <Space vertical size={12}>
    <DatePicker renderExtraFooter={() => '덧붙임 바닥'} />
    <DatePicker renderExtraFooter={() => '덧붙임 바닥'} showTime />
    <RangePicker renderExtraFooter={() => '덧붙임 바닥'} />
    <RangePicker renderExtraFooter={() => '덧붙임 바닥'} showTime />
    <DatePicker renderExtraFooter={() => '덧붙임 바닥'} picker="month" />
  </Space>
);

export default App;