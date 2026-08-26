import React from 'react';
import { ExclamationCircleOutlined } from '../_icons';
import { Button, Modal } from 'antd';

const { confirm } = Modal;

const destroyAll = () => {
  Modal.destroyAll();
};

const showConfirm = () => {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        icon: <ExclamationCircleOutlined />, content: <Button onClick={destroyAll}>눌러서 모두 없애기</Button>, onOk() {
          console.log('확인');
        },
        onCancel() {
          console.log('취소');
        },
      });
    }, i * 500);
  }
};

const App: React.FC = () => <Button onClick={showConfirm}>확인</Button>;

export default App;