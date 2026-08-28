// @ts-nocheck
import React from 'react';
import { Button, Modal, Space } from 'antd';

const info = () => {
  Modal.info({
    title: '알림 메시지예요',
    content: (
      <div>
        <p>메시지가 이어져요…메시지가 이어져요…</p>
        <p>메시지가 이어져요…메시지가 이어져요…</p>
      </div>
    ), onOk() {},
  });
};

const success = () => {
  Modal.success({
    content: '메시지가 이어져요…메시지가 이어져요…',
  });
};

const error = () => {
  Modal.error({
    title: '오류 메시지예요',
    content: '메시지가 이어져요…메시지가 이어져요…',
  });
};

const warning = () => {
  Modal.warning({
    title: '경고 메시지예요',
    content: '메시지가 이어져요…메시지가 이어져요…',
  });
};

const App: React.FC = () => (
  <Space wrap>
    <Button onClick={info}>안내</Button>
    <Button onClick={success}>성공</Button>
    <Button onClick={error}>오류</Button>
    <Button onClick={warning}>경고</Button>
  </Space>
);

export default App;