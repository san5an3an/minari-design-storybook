// @ts-nocheck
import React from 'react';
import { Button, Tooltip } from 'antd';

const style: React.CSSProperties = {
  width: '300vw',
  height: '300vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const App: React.FC = () => {
  React.useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);
  return (
    <div style={style}>
      <Tooltip title="antd 를 써 주셔서 고마워요. 좋은 하루 보내세요!" open>
        <Button type="primary">창을 굴려 보세요</Button>
      </Tooltip>
    </div>
  );
};

export default App;