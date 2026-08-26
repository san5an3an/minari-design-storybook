/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/form.json 의 examples[26] ("Advanced search")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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