import React, { useEffect, useState } from 'react';
import { Switch, Transfer } from 'antd';
import type { TransferProps } from 'antd';

interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}

const App: React.FC = () => {
  const [oneWay, setOneWay] = useState(false);
  const [mockData, setMockData] = useState<RecordType[]>([]);
  const [targetKeys, setTargetKeys] = useState<React.Key[]>([]);

  useEffect(() => {
    const newTargetKeys: React.Key[] = [];
    const newMockData: RecordType[] = [];
    for (let i = 0; i < 2000; i++) {
      const data = {
        key: i.toString(),
        title: `내용${i + 1}`,
        description: `내용${i + 1}의 설명`,
        chosen: i % 2 === 0,
      };
      if (data.chosen) {
        newTargetKeys.push(data.key);
      }
      newMockData.push(data);
    }

    setTargetKeys(newTargetKeys);
    setMockData(newMockData);
  }, []);

  const onChange: TransferProps['onChange'] = (newTargetKeys, direction, moveKeys) => {
    console.log(newTargetKeys, direction, moveKeys);
    setTargetKeys(newTargetKeys);
  };

  return (
    <>
      <Transfer
        dataSource={mockData}
        targetKeys={targetKeys}
        onChange={onChange}
        render={(item) => item.title}
        oneWay={oneWay}
        pagination
      />
      <br />
      <Switch
        unCheckedChildren="한 방향"
        checkedChildren="한 방향"
        checked={oneWay}
        onChange={setOneWay}
      />
    </>
  );
};

export default App;