// @ts-nocheck
import React from 'react';
import { DatePicker } from 'antd';

const App: React.FC = () => (
  <DatePicker.RangePicker
    placeholder={['시작 날짜', '지금까지']}
    allowEmpty={[false, true]}
    onChange={(date, dateString) => {
      console.log(date, dateString);
    }}
  />
);

export default App;