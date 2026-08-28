// @ts-nocheck
import React from 'react';
import { Button, Form, Input } from 'antd';

const App: React.FC = () => (
  <Form
    name="wrap"
    labelCol={{ flex: '110px' }}
    labelAlign="left"
    labelWrap
    wrapperCol={{ flex: 1 }}
    colon={false}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="보통 라벨" name="username" rules={[{ required: true }]}>
      <Input />
    </Form.Item>

    <Form.Item label="아주 긴 라벨 글자예요" name="password" rules={[{ required: true }]}>
      <Input />
    </Form.Item>

    <Form.Item label="아주 긴 라벨 글자예요" name="password1">
      <Input />
    </Form.Item>

    <Form.Item label=" ">
      <Button type="primary" htmlType="submit">
        보내기
      </Button>
    </Form.Item>
  </Form>
);

export default App;