// @ts-nocheck
import React, { useState } from 'react';
import { DownOutlined } from '../_icons';
import { Button, Col, Form, Input, Row, Select, Space, theme } from 'antd';

const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);

  const formStyle: React.CSSProperties = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children: React.ReactNode[] = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          {i % 3 !== 1 ? (
            <Form.Item
              name={`field-${i}`}
              label={`항목 ${i}`}
              rules={[
                {
                  required: true,
                  message: '뭐라도 넣어 보세요!',
                },
              ]}
            >
              <Input placeholder="자리 안내 글" />
            </Form.Item>
          ) : (
            <Form.Item
              name={`field-${i}`}
              label={`항목 ${i}`}
              rules={[
                {
                  required: true,
                  message: '뭐라도 골라 보세요!',
                },
              ]}
              initialValue="1"
            >
              <Select
                options={[
                  {
                    value: '1',
                    label:
                      'longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
                  },
                  {
                    value: '2',
                    label: '222',
                  },
                ]}
              />
            </Form.Item>
          )}
        </Col>,
      );
    }
    return children;
  };

  const onFinish = (values: any) => {
    console.log('폼에서 받은 값: ', values);
  };

  return (
    <Form form={form} name="advanced_search" style={formStyle} onFinish={onFinish}>
      <Row gutter={24}>{getFields()}</Row>
      <div style={{ textAlign: 'end' }}>
        <Space size="small">
          <Button type="primary" htmlType="submit">
            찾기
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
            }}
          >
            지우기
          </Button>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <DownOutlined rotate={expand ? 180 : 0} /> 접기
          </a>
        </Space>
      </div>
    </Form>
  );
};

const App: React.FC = () => {
  const { token } = theme.useToken();

  const listStyle: React.CSSProperties = {
    lineHeight: '200px',
    textAlign: 'center',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };

  return (
    <>
      <AdvancedSearchForm />
      <div style={listStyle}>찾은 결과 목록</div>
    </>
  );
};

export default App;