import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('성공:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('실패:', errorInfo);
};

const App: React.FC = () => (
  <Form
    name="기본"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="사용자 이름"
      name="username"
      rules={[{ required: true, message: '사용자 이름을 넣어 주세요!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="비밀번호"
      name="password"
      rules={[{ required: true, message: '비밀번호를 넣어 주세요!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
      <Checkbox>로그인 상태 유지</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        보내기
      </Button>
    </Form.Item>
  </Form>
);

export default App;