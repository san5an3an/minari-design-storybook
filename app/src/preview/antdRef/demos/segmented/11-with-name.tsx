import React from 'react';
import { Segmented } from 'antd';

const Demo: React.FC = () => (
  <Segmented<string> options={['일간', '주간', '월간', '분기별', '연간']} name="group" />
);

export default Demo;