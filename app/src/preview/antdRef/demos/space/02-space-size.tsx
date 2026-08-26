import React, { useState } from 'react';
import { Button, Radio, Slider, Space } from 'antd';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType | [SizeType, SizeType] | '직접 정하기'>('small');
  const [customSize, setCustomSize] = React.useState<number>(0);
  return (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        {['small', 'medium', 'large', '직접 정하기'].map((item) => (
          <Radio key={item} value={item}>
            {item}
          </Radio>
        ))}
      </Radio.Group>
      <br />
      <br />
      {size === '직접 정하기' && (
        <>
          <Slider value={customSize} onChange={setCustomSize} />
          <br />
        </>
      )}
      <Space size={size !== '직접 정하기' ? size : customSize}>
        <Button type="primary">기본</Button>
        <Button>기본값</Button>
        <Button type="dashed">파선</Button>
        <Button type="link">링크</Button>
      </Space>
    </>
  );
};

export default App;