import React, { useState } from 'react';
import { Button, Popover } from 'antd';

const hoverContent = <div>마우스를 올렸을 때 나오는 내용이에요.</div>;

const clickContent = <div>눌렀을 때 나오는 내용이에요.</div>;

const App: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const hide = () => {
    setClicked(false);
    setHovered(false);
  };

  const handleHoverChange = (open: boolean) => {
    setHovered(open);
    setClicked(false);
  };

  const handleClickChange = (open: boolean) => {
    setHovered(false);
    setClicked(open);
  };

  return (
    <Popover
      style={{ width: 500 }}
      content={hoverContent}
      title="올렸을 때 제목"
      trigger="hover"
      open={hovered}
      onOpenChange={handleHoverChange}
    >
      <Popover
        content={
          <div>
            {clickContent}
            <a onClick={hide}>닫기</a>
          </div>
        }
        title="제목 누르기"
        trigger="click"
        open={clicked}
        onOpenChange={handleClickChange}
      >
        <Button>올리고 누르기</Button>
      </Popover>
    </Popover>
  );
};

export default App;