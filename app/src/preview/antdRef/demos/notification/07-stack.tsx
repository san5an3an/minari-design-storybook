// @ts-nocheck
import React, { useMemo } from 'react';
import { Button, Divider, InputNumber, notification, Space, Switch } from 'antd';

const Context = React.createContext({ name: '기본값' });

const App: React.FC = () => {
  const [enabled, setEnabled] = React.useState(true);
  const [threshold, setThreshold] = React.useState(3);
  const [api, contextHolder] = notification.useNotification({
    stack: enabled
      ? {
          threshold,
        }
      : false,
  });

  const openNotification = () => {
    api.open({
      title: '알림 제목',
      description: `${Array.from(
        { length: Math.round(Math.random() * 5) + 1 },
        () => '알림 내용이에요.',
      ).join('\n')}`,
      duration: false,
    });
  };

  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <div>
        <Space size="large">
          <Space style={{ width: '100%' }}>
            <span>쓸 수 있음: </span>
            <Switch checked={enabled} onChange={(v) => setEnabled(v)} />
          </Space>
          <Space style={{ width: '100%' }}>
            <span>문턱값: </span>
            <InputNumber
              disabled={!enabled}
              value={threshold}
              step={1}
              min={1}
              max={10}
              onChange={(v) => setThreshold(v || 0)}
            />
          </Space>
        </Space>
        <Divider />
        <Button type="primary" onClick={openNotification}>
          알림 상자 열기
        </Button>
      </div>
    </Context.Provider>
  );
};

export default App;