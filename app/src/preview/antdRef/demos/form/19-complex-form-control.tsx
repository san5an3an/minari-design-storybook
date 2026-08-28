// @ts-nocheck
import React from 'react';
import { Button, Form, Input, Select, Space, Tooltip, Typography } from 'antd';

const onFinish = (values: any) => {
  console.log('폼에서 받은 값: ', values);
};

const App: React.FC = () => (
  <Form
    name="complex-form"
    onFinish={onFinish}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="사용자 이름" htmlFor="username">
      <Space>
        <Form.Item
          name="username"
          noStyle
          rules={[{ required: true, message: '사용자 이름은 꼭 필요해요' }]}
        >
          <Input id="username" style={{ width: 160 }} placeholder="넣어 주세요" />
        </Form.Item>
        <Tooltip title="알아 두면 좋은 것">
          <Typography.Link href="#API">도움이 필요하세요?</Typography.Link>
        </Tooltip>
      </Space>
    </Form.Item>
    <Form.Item label="주소">
      <Space.Compact>
        <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[{ required: true, message: '시·도는 꼭 필요해요' }]}
        >
          <Select
            placeholder="시·도 고르기"
            options={[
              { label: 'Zhejiang', value: 'Zhejiang' },
              { label: 'Jiangsu', value: 'Jiangsu' },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={['address', 'street']}
          noStyle
          rules={[{ required: true, message: '도로명은 꼭 필요해요' }]}
        >
          <Input style={{ width: '50%' }} placeholder="도로명을 넣어 주세요" />
        </Form.Item>
      </Space.Compact>
    </Form.Item>
    <Form.Item label="생년월일" style={{ marginBottom: 0 }}>
      <Form.Item
        name="year"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
      >
        <Input placeholder="태어난 해를 넣어 주세요" />
      </Form.Item>
      <Form.Item
        name="month"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
      >
        <Input placeholder="태어난 달을 넣어 주세요" />
      </Form.Item>
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        보내기
      </Button>
    </Form.Item>
  </Form>
);

export default App;