// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/watermark.json 의 examples[4] ("Modal or Drawer")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, Drawer, Flex, Modal, Watermark } from 'antd';

const style: React.CSSProperties = {
  height: 300,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(150, 150, 150, 0.2)',
};

const placeholder = <div style={style}>가짜 높이</div>;

const App: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [showDrawer2, setShowDrawer2] = React.useState(false);

  const closeModal = () => setShowModal(false);
  const closeDrawer = () => setShowDrawer(false);
  const closeDrawer2 = () => setShowDrawer2(false);

  return (
    <>
      <Flex gap="medium">
        <Button type="primary" onClick={() => setShowModal(true)}>
          Modal 에 보이기
        </Button>
        <Button type="primary" onClick={() => setShowDrawer(true)}>
          서랍에 보이기
        </Button>
        <Button type="primary" onClick={() => setShowDrawer2(true)}>
          서랍에는 안 보임
        </Button>
      </Flex>
      <Watermark content="Ant Design">
        <Modal
          destroyOnHidden
          open={showModal}
          title="Modal"
          onCancel={closeModal}
          onOk={closeModal}
        >
          {placeholder}
        </Modal>
        <Drawer destroyOnHidden open={showDrawer} title="서랍" onClose={closeDrawer}>
          {placeholder}
        </Drawer>
      </Watermark>
      <Watermark content="Ant Design" inherit={false}>
        <Drawer destroyOnHidden open={showDrawer2} title="서랍" onClose={closeDrawer2}>
          {placeholder}
        </Drawer>
      </Watermark>
    </>
  );
};

export default App;