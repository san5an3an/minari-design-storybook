import React from 'react';
import { Button, Divider, InputNumber, message, Space, Switch } from 'antd';

const App: React.FC = () => {
  const [enabled, setEnabled] = React.useState(true);
  const [threshold, setThreshold] = React.useState(3);
  const indexRef = React.useRef(0);
  const [messageApi, contextHolder] = message.useMessage({
    stack: enabled
      ? {
          threshold,
        }
      : false,
  });

  const openMessage = () => {
    indexRef.current += 1;
    const isOdd = indexRef.current % 2 === 1;

    messageApi.open({
      type: 'info',
      content: isOdd
        ? `메시지 ${indexRef.current}: 쌓인 메시지예요.`
        : `메시지 ${indexRef.current}: 조금 더 긴 쌓인 메시지예요.`,
      duration: 0,
    });
  };

  return (
    <>
      {contextHolder}
      <Space size="large">
        <Space style={{ width: '100%' }}>
          <span>쓸 수 있음: </span>
          <Switch
            aria-label="메시지 쌓기 켜기"
            checked={enabled}
            onChange={(v) => setEnabled(v)}
          />
        </Space>
        <Space style={{ width: '100%' }}>
          <span>문턱값: </span>
          <InputNumber
            aria-label="쌓기 문턱값"
            disabled={!enabled}
            value={threshold}
            step={1}
            min={1}
            max={10}
            onChange={(v) => setThreshold(v ?? 1)}
          />
        </Space>
      </Space>
      <Divider />
      <Space>
        <Button type="primary" onClick={openMessage}>
          메시지 상자 열기
        </Button>
        <Button onClick={() => messageApi.destroy()}>모두 없애기</Button>
      </Space>
    </>
  );
};

export default App;