// @ts-nocheck
import React from 'react';
import { LockOutlined, UserOutlined } from '../_icons';
import { Button, Checkbox, Flex, Form, Input } from 'antd';

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('폼에서 받은 값: ', values);
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '사용자 이름을 넣어 주세요!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="사용자 이름" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '비밀번호를 넣어 주세요!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="비밀번호" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>로그인 상태 유지</Checkbox>
          </Form.Item>
          <a href="">비밀번호를 잊었어요</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          로그인
        </Button>
        or <a href="">지금 가입하세요!</a>
      </Form.Item>
    </Form>
  );
};

export default App;