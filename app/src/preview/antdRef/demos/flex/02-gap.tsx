import React from 'react';
import { Button, Flex, Radio, Slider } from 'antd';
import type { FlexProps } from 'antd';

const App: React.FC = () => {
  const [gapSize, setGapSize] = React.useState<FlexProps['gap']>('small');
  const [customGapSize, setCustomGapSize] = React.useState<number>(0);
  return (
    <Flex gap="medium" vertical>
      <Radio.Group value={gapSize} onChange={(e) => setGapSize(e.target.value)}>
        {['small', 'medium', 'large', '직접 정하기'].map((size) => (
          <Radio key={size} value={size}>
            {size}
          </Radio>
        ))}
      </Radio.Group>
      {gapSize === '직접 정하기' && <Slider value={customGapSize} onChange={setCustomGapSize} />}
      <Flex gap={gapSize !== '직접 정하기' ? gapSize : customGapSize}>
        <Button type="primary">기본</Button>
        <Button>기본값</Button>
        <Button type="dashed">파선</Button>
        <Button type="link">링크</Button>
      </Flex>
    </Flex>
  );
};

export default App;