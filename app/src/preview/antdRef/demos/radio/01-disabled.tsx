// @ts-nocheck
import React, { useState } from 'react';
import { Button, Radio } from 'antd';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Radio defaultChecked={false} disabled={disabled}>
        못 씀
      </Radio>
      <Radio defaultChecked disabled={disabled}>
        못 씀
      </Radio>
      <br />
      <Button type="primary" onClick={toggleDisabled} style={{ marginTop: 16 }}>
        못 쓰게 바꾸기
      </Button>
    </>
  );
};

export default App;