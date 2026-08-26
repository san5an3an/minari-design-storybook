import React, { createContext } from 'react';
import { Button, Modal, Space } from 'antd';

const ReachableContext = createContext<string | null>(null);
const UnreachableContext = createContext<string | null>(null);

const config = {
  title: '훅을 써 보세요!',
  content: (
    <>
      <ReachableContext.Consumer>{(name) => `닿았어요: ${name}!`}</ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>{(name) => `못 닿았어요: ${name}!`}</UnreachableContext.Consumer>
    </>
  ),
};

const App: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <ReachableContext.Provider value="라이트">
      <Space>
        <Button
          onClick={async () => {
            const confirmed = await modal.confirm(config);
            console.log('확인함: ', confirmed);
          }}
        >
          확인
        </Button>
        <Button
          onClick={() => {
            modal.warning(config);
          }}
        >
          경고
        </Button>
        <Button
          onClick={async () => {
            modal.info(config);
          }}
        >
          안내
        </Button>
        <Button
          onClick={async () => {
            modal.error(config);
          }}
        >
          오류
        </Button>
      </Space>
      {/* `contextHolder` should always be placed under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since `contextHolder` is not in it */}
      <UnreachableContext.Provider value="하은" />
    </ReachableContext.Provider>
  );
};

export default App;