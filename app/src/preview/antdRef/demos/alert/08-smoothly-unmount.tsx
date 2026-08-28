// @ts-nocheck
import React, { useState } from 'react';
import { Alert, Switch } from 'antd';

const App: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <Alert
          title="알림 메시지 글"
          type="success"
          closable={{ closeIcon: true, afterClose: handleClose }}
        />
      )}
      <p>닫기 버튼을 눌러 어떻게 되는지 보세요</p>
      <Switch
        aria-label="알림 보이기"
        onChange={setVisible}
        checked={visible}
        disabled={visible}
      />
    </>
  );
};

export default App;