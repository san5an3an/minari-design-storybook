// @ts-nocheck
import React, { useState } from 'react';
import type { RadioChangeEvent, SelectProps } from 'antd';
import { Radio, Select } from 'antd';

type SelectCommonPlacement = SelectProps['placement'];

const App: React.FC = () => {
  const [placement, setPlacement] = useState<SelectCommonPlacement>('topLeft');

  const placementChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Select
        defaultValue="서울"
        style={{ width: 120 }}
        popupMatchSelectWidth={false}
        placement={placement}
        options={[
          {
            value: '서울',
            label: '서울 #310000',
          },
          {
            value: '부산',
            label: '부산 #315000',
          },
          {
            value: '대구',
            label: '대전 #325000',
          },
        ]}
      />
    </>
  );
};

export default App;