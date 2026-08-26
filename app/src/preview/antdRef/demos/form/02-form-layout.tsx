import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import type { FormProps } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange: FormProps<any>['onValuesChange'] = ({ layout }) => {
    setFormLayout(layout);
  };

  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
      style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
    >
      <Form.Item label="폼 배치" name="layout">
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">가로</Radio.Button>
          <Radio.Button value="vertical">세로</Radio.Button>
          <Radio.Button value="inline">한 줄 배치</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="항목 A">
        <Input placeholder="여기에 입력해 주세요" />
      </Form.Item>
      <Form.Item label="항목 B">
        <Input placeholder="여기에 입력해 주세요" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">보내기</Button>
      </Form.Item>
    </Form>
  );
};

export default App;