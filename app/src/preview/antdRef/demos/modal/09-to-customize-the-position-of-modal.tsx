import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const App: React.FC = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setModal1Open(true)}>
        위에서 20px 떨어진 자리에 Modal 띄우기
      </Button>
      <Modal
        title="20px to Top"
        style={{ top: 20 }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
      </Modal>
      <br />
      <br />
      <Button type="primary" onClick={() => setModal2Open(true)}>
        세로 가운데에 놓인 Modal
      </Button>
      <Modal
        title="세로 가운데에 놓인 Modal"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
      </Modal>
    </>
  );
};

export default App;