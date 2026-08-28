// @ts-nocheck
import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';

const { confirm } = Modal;

const showConfirm = () => {
  confirm({
    title: '이 항목들을 지울까요?',
    icon: <ExclamationCircleFilled />,
    content: '설명이 들어가요',
    onOk() {
      console.log('좋아요');
    },
    onCancel() {
      console.log('취소');
    },
  });
};

const showPromiseConfirm = () => {
  confirm({
    title: '이 항목들을 지울까요?',
    icon: <ExclamationCircleFilled />,
    content: '확인을 누르면 1초 뒤에 이 창이 닫혀요',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('이런, 오류예요!'));
    },
    onCancel() {},
  });
};

const showDeleteConfirm = () => {
  confirm({
    title: '이 일을 지울까요?',
    icon: <ExclamationCircleFilled />,
    content: '설명이 들어가요',
    okText: '네',
    okType: 'danger',
    cancelText: '아니요',
    onOk() {
      console.log('좋아요');
    },
    onCancel() {
      console.log('취소');
    },
  });
};

const showPropsConfirm = () => {
  confirm({
    title: '이 일을 지울까요?',
    icon: <ExclamationCircleFilled />,
    content: '설명이 들어가요',
    okText: '네',
    okType: 'danger',
    okButtonProps: {
      disabled: true,
    },
    cancelText: '아니요',
    onOk() {
      console.log('좋아요');
    },
    onCancel() {
      console.log('취소');
    },
  });
};

const App: React.FC = () => (
  <Space wrap>
    <Button onClick={showConfirm}>확인</Button>
    <Button onClick={showPromiseConfirm}>promise 로</Button>
    <Button onClick={showDeleteConfirm} type="dashed">
      지우기
    </Button>
    <Button onClick={showPropsConfirm} type="dashed">
      덧붙인 prop
    </Button>
  </Space>
);

export default App;