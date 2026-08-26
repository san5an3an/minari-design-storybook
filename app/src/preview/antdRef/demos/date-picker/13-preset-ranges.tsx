import React from 'react';
import type { TimeRangePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

const onChange = (date: Dayjs | null) => {
  if (date) {
    console.log('날짜: ', date);
  } else {
    console.log('지우기');
  }
};

const onRangeChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
  if (dates) {
    console.log('시작: ', dates[0], ', 끝: ', dates[1]);
    console.log('시작: ', dateStrings[0], ', 끝: ', dateStrings[1]);
  } else {
    console.log('지우기');
  }
};

const rangePresets: TimeRangePickerProps['presets'] = [
  { label: '최근 7일', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: '최근 14일', value: [dayjs().add(-14, 'd'), dayjs()] },
  { label: '최근 30일', value: [dayjs().add(-30, 'd'), dayjs()] },
  { label: '최근 90일', value: [dayjs().add(-90, 'd'), dayjs()] },
];

const App: React.FC = () => (
  <Space vertical size={12}>
    <DatePicker
      presets={[
        { label: '어제', value: dayjs().add(-1, 'd') },
        { label: '지난주', value: dayjs().add(-7, 'd') },
        { label: '지난달', value: dayjs().add(-1, 'month') },
      ]}
      onChange={onChange}
    />
    <RangePicker presets={rangePresets} onChange={onRangeChange} />
    <RangePicker
      presets={[
        {
          label: <span aria-label="지금부터 오늘 끝까지">지금 ~ 오늘 끝</span>,
          value: () => [dayjs(), dayjs().endOf('day')], // 5.8.0+ support function
        },
        ...rangePresets,
      ]}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onRangeChange}
    />
  </Space>
);

export default App;