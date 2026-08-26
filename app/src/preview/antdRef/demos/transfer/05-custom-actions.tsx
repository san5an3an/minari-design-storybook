import React, { useState } from 'react';
import { Button, message, Transfer } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined } from '../_icons';
import type { TransferProps } from 'antd';

interface RecordType {
  key: string;
  title: string;
  description: string;
}

const mockData: RecordType[] = Array.from({ length: 20 }).map((_, i) => ({
  key: i.toString(),
  title: `내용 ${i + 1}`,
  description: `설명 ${i + 1}`,
}));

const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [targetKeys, setTargetKeys] = useState<string[]>(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [loadingRight, setLoadingRight] = useState<boolean>(false);
  const [loadingLeft, setLoadingLeft] = useState<boolean>(false);

  // Handle data transfer
  const handleChange: TransferProps['onChange'] = (newTargetKeys, direction, moveKeys) => {
    setTargetKeys(newTargetKeys as string[]);

    // Simulate async action
    if (direction === 'right') {
      setLoadingRight(true);
      setTimeout(() => {
        setLoadingRight(false);
        messageApi.success(`${moveKeys.length}개를 오른쪽으로 옮겼어요`);
      }, 1000);
    } else {
      setLoadingLeft(true);
      setTimeout(() => {
        setLoadingLeft(false);
        messageApi.success(`${moveKeys.length}개를 왼쪽으로 옮겼어요`);
      }, 1000);
    }
  };

  // Handle selection change
  const handleSelectChange: TransferProps['onSelectChange'] = (
    sourceSelectedKeys,
    targetSelectedKeys,
  ) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys] as string[]);
  };

  // Right button is disabled (no selected items on the left or all selected items are already in the right list)
  const rightButtonDisabled =
    selectedKeys.length === 0 || selectedKeys.every((key) => targetKeys.includes(key));

  // Left button is disabled (no selected items on the right)
  const leftButtonDisabled =
    selectedKeys.length === 0 || selectedKeys.every((key) => !targetKeys.includes(key));

  // Custom right button click handler
  const handleRightButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // You can add custom logic here, such as showing a confirmation dialog
    console.log('오른쪽 버튼을 눌렀어요', event);
    // The Transfer component will automatically handle data transfer
  };

  // Custom left button click handler
  const handleLeftButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // You can add custom logic here, such as showing a confirmation dialog
    console.log('왼쪽 버튼을 눌렀어요', event);
    // The Transfer component will automatically handle data transfer
  };

  return (
    <>
      {contextHolder}
      <Transfer
        dataSource={mockData}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={handleChange}
        onSelectChange={handleSelectChange}
        render={(item) => item.title}
        actions={[
          // Custom right button (transfer data to the right)
          <Button
            key="to-right"
            type="primary"
            icon={<DoubleRightOutlined />}
            loading={loadingRight}
            disabled={rightButtonDisabled}
            onClick={handleRightButtonClick}
          >
            오른쪽으로 옮기기
          </Button>,
          // Custom left button (transfer data to the left)
          <Button
            key="to-left"
            type="primary"
            icon={<DoubleLeftOutlined />}
            loading={loadingLeft}
            disabled={leftButtonDisabled}
            onClick={handleLeftButtonClick}
          >
            왼쪽으로 옮기기
          </Button>,
        ]}
      />
    </>
  );
};

export default App;