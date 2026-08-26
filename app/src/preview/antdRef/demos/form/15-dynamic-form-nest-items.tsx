import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '../_icons';
import { Button, Form, Input, Space } from 'antd';

const onFinish = (values: any) => {
  console.log('폼에서 받은 값:', values);
};

const App: React.FC = () => (
  <Form
    name="dynamic_form_nest_item"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    autoComplete="off"
  >
    <Form.List name="users">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
              <Form.Item
                {...restField}
                name={[name, '첫째']}
                rules={[{ required: true, message: '이름이 없어요' }]}
              >
                <Input placeholder="이름" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'last']}
                rules={[{ required: true, message: '성이 없어요' }]}
              >
                <Input placeholder="성" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              항목 추가
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        보내기
      </Button>
    </Form.Item>
  </Form>
);

export default App;