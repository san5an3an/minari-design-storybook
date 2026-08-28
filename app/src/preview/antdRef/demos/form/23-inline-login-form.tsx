// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);

  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = (values: any) => {
    console.log('끝:', values);
  };

  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
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
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !clientReady ||
              !form.isFieldsTouched(true) ||
              form.getFieldsError().some(({ errors }) => errors.length)
            }
          >
            로그인
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default App;