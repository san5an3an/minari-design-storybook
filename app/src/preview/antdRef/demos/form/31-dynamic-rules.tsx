// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};

const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);

  useEffect(() => {
    form.validateFields(['nickname']);
  }, [checkNick, form]);

  const onCheckboxChange = (e: { target: { checked: boolean } }) => {
    setCheckNick(e.target.checked);
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('성공:', values);
    } catch (errorInfo) {
      console.log('실패:', errorInfo);
    }
  };

  return (
    <Form form={form} name="dynamic_rule" style={{ maxWidth: 600 }}>
      <Form.Item
        {...formItemLayout}
        name="username"
        label="이름"
        rules={[{ required: true, message: '이름을 넣어 주세요' }]}
      >
        <Input placeholder="이름을 넣어 주세요" />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name="nickname"
        label="별명"
        rules={[{ required: checkNick, message: '별명을 넣어 주세요' }]}
      >
        <Input placeholder="별명을 넣어 주세요" />
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Checkbox checked={checkNick} onChange={onCheckboxChange}>
          별명은 반드시 넣어야 해요
        </Checkbox>
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={onCheck}>
          확인
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;