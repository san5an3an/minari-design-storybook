/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/modal.json 의 examples[14] ("Static confirmation")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { ExclamationCircleFilled } from '../_icons';
import { Button, Modal, Space } from 'antd';

const { confirm } = Modal;

const showConfirm = () => {
  confirm({
    title: '이 항목들을 지울까요?',
    icon: <ExclamationCircleFilled />,
    content: '설명이 들어가요',
    onOk() {
      console.log('확인');
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
      console.log('확인');
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
      console.log('확인');
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