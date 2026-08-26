import React, { useState } from 'react';
import { Button, Tooltip } from 'antd';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <Tooltip title={disabled ? null : '안내 글'}>
      <Button onClick={() => setDisabled(!disabled)}>{disabled ? '쓸 수 있게' : '못 쓰게'}</Button>
    </Tooltip>
  );
};

export default App;