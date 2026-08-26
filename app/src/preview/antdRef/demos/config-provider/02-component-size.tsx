/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/config-provider.json 의 examples[2] ("Component size")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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
                children: '탭 판 1의 내용',
              },
              {
                label: '탭 2',
                key: '2',
                children: '탭 판 2의 내용',
              },
              {
                label: '탭 3',
                key: '3',
                children: '탭 판 3의 내용',
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