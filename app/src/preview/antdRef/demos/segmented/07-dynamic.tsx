// @ts-nocheck
import React, { useState } from 'react';
import { Button, Flex, Segmented } from 'antd';

const Demo: React.FC = () => {
  const [options, setOptions] = useState(['일간', '주간', '월간']);
  const [moreLoaded, setMoreLoaded] = useState(false);

  const handleLoadOptions = () => {
    setOptions((prev) => [...prev, '분기별', '연간']);
    setMoreLoaded(true);
  };

  return (
    <Flex gap="small" align="flex-start" vertical>
      <Segmented options={options} />
      <Button type="primary" disabled={moreLoaded} onClick={handleLoadOptions}>
        더 불러오기
      </Button>
    </Flex>
  );
};

export default Demo;