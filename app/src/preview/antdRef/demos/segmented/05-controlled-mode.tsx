import React, { useState } from 'react';
import { Segmented } from 'antd';

const Demo: React.FC = () => {
  const [value, setValue] = useState<string>('지도');
  return (
    <Segmented<string>
      options={['지도', 'Transit', '위성']}
      value={value}
      onChange={setValue}
    />
  );
};

export default Demo;