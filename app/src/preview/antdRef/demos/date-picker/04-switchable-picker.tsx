// @ts-nocheck
import React, { useState } from 'react';
import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker, Select, Space, TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';

type PickerType = 'time' | 'date';

interface PickerWithTypeProps {
  type: PickerType;
  onChange: TimePickerProps['onChange'] | DatePickerProps<Dayjs, false>['onChange'];
}

const PickerWithType: React.FC<PickerWithTypeProps> = ({ type, onChange }) => {
  if (type === 'time') {
    return <TimePicker onChange={onChange} />;
  }
  if (type === 'date') {
    return <DatePicker onChange={onChange} />;
  }
  return <DatePicker picker={type} onChange={onChange} />;
};

const App: React.FC = () => {
  const [type, setType] = useState<PickerType>('time');

  return (
    <Space>
      <Select
        aria-label="고르개 종류"
        value={type}
        onChange={setType}
        options={[
          { label: '시각', value: 'time' },
          { label: '날짜', value: 'date' },
          { label: '주', value: 'week' },
          { label: '월', value: 'month' },
          { label: '분기', value: 'quarter' },
          { label: '연', value: 'year' },
        ]}
      />
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
    </Space>
  );
};

export default App;