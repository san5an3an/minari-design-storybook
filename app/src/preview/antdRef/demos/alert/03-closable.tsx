import React from 'react';
import { Alert } from 'antd';

const onClose: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  console.log(e, '저는 닫혔어요.');
};

const App: React.FC = () => (
  <>
    <Alert
      title="경고 제목"
      type="warning"
      closable={{ closeIcon: true, onClose, 'aria-label': 'close' }}
    />
    <br />
    <Alert
      title="성공 제목"
      type="success"
      closable={{ closeIcon: true, onClose, 'aria-label': 'close' }}
    />
    <br />
    <Alert
      title="안내 제목"
      type="info"
      closable={{ closeIcon: true, onClose, 'aria-label': 'close' }}
    />
    <br />
    <Alert
      title="오류 제목"
      type="error"
      closable={{ closeIcon: true, onClose, 'aria-label': 'close' }}
    />
  </>
);

export default App;