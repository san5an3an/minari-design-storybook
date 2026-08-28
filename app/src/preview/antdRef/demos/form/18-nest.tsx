// @ts-nocheck
import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} 은 꼭 필요해요!',
  types: {
    email: '${label} 은 올바른 이메일이 아니에요!',
    number: '${label} 은 올바른 숫자가 아니에요!',
  },
  number: {
    range: '${label} 은 ${min} 과 ${max} 사이여야 해요',
  },
};

const onFinish = (values: any) => {
  console.log(values);
};

const App: React.FC = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item name={['user', 'name']} label="이름" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'email']} label="이메일" rules={[{ type: 'email' }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'age']} label="나이" rules={[{ type: 'number', min: 0, max: 99 }]}>
      <InputNumber />
    </Form.Item>
    <Form.Item name={['user', '웹사이트']} label="웹사이트">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="소개">
      <Input.TextArea />
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        보내기
      </Button>
    </Form.Item>
  </Form>
);

export default App;