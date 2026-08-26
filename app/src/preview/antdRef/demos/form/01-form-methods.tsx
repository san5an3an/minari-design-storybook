import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: '안녕하세요, 여러분!' });
        break;
      case 'female':
        form.setFieldsValue({ note: '안녕하세요, 여러분!' });
        break;
      case 'other':
        form.setFieldsValue({ note: '안녕하세요!' });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: '안녕하세요!', gender: 'male' });
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="note" label="참고" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="성별" rules={[{ required: true }]}>
        <Select
          allowClear
          placeholder="항목을 고르고 위 입력칸의 글을 바꿔 보세요"
          onChange={onGenderChange}
          options={[
            { label: 'male', value: 'male' },
            { label: 'female', value: 'female' },
            { label: 'other', value: 'other' },
          ]}
        />
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="성별 직접 정하기" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            보내기
          </Button>
          <Button htmlType="button" onClick={onReset}>
            되돌리기
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            폼 채우기
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default App;