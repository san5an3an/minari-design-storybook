import React from 'react';
import { DatePicker, Space } from 'antd';
import type { DatePickerProps, GetProps } from 'antd';

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const { RangePicker } = DatePicker;

const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
  console.log('onOk: ', value);
};

const App: React.FC = () => (
  <Space vertical size={12}>
    <DatePicker
      showTime
      onChange={(value, dateString) => {
        console.log('고른 시각: ', value);
        console.log('형식을 맞춘 고른 시각: ', dateString);
      }}
      onOk={onOk}
    />
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={(value, dateString) => {
        console.log('고른 시각: ', value);
        console.log('형식을 맞춘 고른 시각: ', dateString);
      }}
      onOk={onOk}
    />
  </Space>
);

export default App;