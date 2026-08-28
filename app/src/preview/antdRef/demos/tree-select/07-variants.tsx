// @ts-nocheck
import React from 'react';
import { Flex, TreeSelect } from 'antd';

const style: React.CSSProperties = {
  width: '100%',
  maxWidth: '100%',
};

const App: React.FC = () => {
  return (
    <Flex vertical gap="medium">
      <TreeSelect style={style} placeholder="골라 주세요" variant="borderless" />
      <TreeSelect style={style} placeholder="골라 주세요" variant="filled" />
      <TreeSelect style={style} placeholder="골라 주세요" variant="outlined" />
      <TreeSelect style={style} placeholder="골라 주세요" variant="underlined" />
    </Flex>
  );
};

export default App;