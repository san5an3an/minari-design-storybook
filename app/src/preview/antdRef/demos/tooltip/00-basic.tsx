import React from 'react';
import { Tooltip } from 'antd';

const App: React.FC = () => (
  <Tooltip title="안내 글">
    <span>마우스를 올리면 툴팁이 떠요.</span>
  </Tooltip>
);

export default App;