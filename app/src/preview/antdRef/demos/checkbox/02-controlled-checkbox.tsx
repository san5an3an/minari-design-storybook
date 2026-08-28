// @ts-nocheck
import React, { useState } from 'react';
import { Button, Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

const App: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };

  const label = `${checked ? '체크됨' : '체크 안 됨'}-${disabled ? '못 씀' : '쓸 수 있음'}`;

  return (
    <>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
          {label}
        </Checkbox>
      </p>
      <p>
        <Button type="primary" size="small" onClick={toggleChecked}>
          {!checked ? '확인' : '체크 풀기'}
        </Button>
        <Button style={{ margin: '0 10px' }} type="primary" size="small" onClick={toggleDisable}>
          {!disabled ? '못 쓰게' : '쓸 수 있게'}
        </Button>
      </p>
    </>
  );
};

export default App;