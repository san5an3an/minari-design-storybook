// @ts-nocheck
import React, { useState } from 'react';
import {
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Divider,
  Input,
  Radio,
  Select,
  Space,
  Table,
  Tabs,
} from 'antd';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

const App: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType>('small');

  return (
    <>
      <Radio.Group
        value={componentSize}
        onChange={(e) => {
          setComponentSize(e.target.value);
        }}
      >
        <Radio.Button value="small">작음</Radio.Button>
        <Radio.Button value="medium">중간</Radio.Button>
        <Radio.Button value="large">큼</Radio.Button>
      </Radio.Group>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <Space size={[0, 16]} style={{ width: '100%' }} vertical>
          <Input />
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: '탭 1',
                key: '1',
                children: '탭 패널 1의 내용',
              },
              {
                label: '탭 2',
                key: '2',
                children: '탭 패널 2의 내용',
              },
              {
                label: '탭 3',
                key: '3',
                children: '탭 패널 3의 내용',
              },
            ]}
          />
          <Input.Search allowClear />
          <Input.TextArea allowClear />
          <Select defaultValue="demo" options={[{ value: 'demo' }]} />
          <DatePicker />
          <DatePicker.RangePicker />
          <Button>Button</Button>
          <Card title="카드">
            <Table
              columns={[
                { title: '이름', dataIndex: 'name' },
                { title: '나이', dataIndex: 'age' },
              ]}
              dataSource={[
                { key: '1', name: '김민준', age: 32 },
                { key: '2', name: '이서준', age: 42 },
                { key: '3', name: '박지호', age: 32 },
              ]}
            />
          </Card>
        </Space>
      </ConfigProvider>
    </>
  );
};

export default App;