import React from 'react';
import { Button, Modal } from 'antd';

const App: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal();

  const countDown = () => {
    let secondsToGo = 5;

    const instance = modal.success({
      title: '알림 메시지예요',
      content: `${secondsToGo}초 뒤에 이 창이 사라져요.`,
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: `${secondsToGo}초 뒤에 이 창이 사라져요.`,
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  return (
    <>
      <Button onClick={countDown}>5초 뒤 닫히는 Modal 열기</Button>
      {contextHolder}
    </>
  );
};

export default App;