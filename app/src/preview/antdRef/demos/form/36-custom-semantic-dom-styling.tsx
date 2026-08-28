// @ts-nocheck
import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import type { FormProps, GetProp } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
  root: {
    padding: token.padding,
    maxWidth: 800,
    marginTop: 32,
    backgroundColor: token.colorBgContainer,
    borderRadius: token.borderRadius,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
}));

const stylesObject: FormProps['styles'] = {
  label: {
    textAlign: 'end',
    color: '#333',
    fontWeight: 500,
  }, content: {
    paddingInlineStart: 12,
  },
};

const stylesFunction: FormProps['styles'] = (info): GetProp<FormProps, 'styles', 'Return'> => {
  if (info.props.variant === 'filled') {
    return {
      root: {
        border: '1px solid #1677FF',
      },
      label: {
        textAlign: 'end',
        color: '#1677FF',
      }, content: {
        paddingInlineStart: 12,
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  const { styles: classNames } = useStyles();

  const sharedProps: FormProps = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
    autoComplete: 'off',
    classNames,
  };

  const sharedFormContent = (
    <>
      <Form.Item
        label="사용자 이름"
        name="username"
        rules={[{ required: true, message: '사용자 이름을 넣어 주세요!' }]}
      >
        <Input placeholder="사용자 이름을 넣어 주세요" />
      </Form.Item>

      <Form.Item
        label="이메일"
        name="email"
        rules={[{ required: true, message: '이메일을 넣어 주세요!' }]}
      >
        <Input placeholder="이메일을 넣어 주세요" />
      </Form.Item>

      <Form.Item label={null}>
        <Space>
          <Button type="primary" htmlType="submit">
            보내기
          </Button>
          <Button htmlType="reset">reset</Button>
        </Space>
      </Form.Item>
    </>
  );

  return (
    <>
      <Form {...sharedProps} styles={stylesObject}>
        {sharedFormContent}
      </Form>
      <Form {...sharedProps} styles={stylesFunction} variant="filled">
        {sharedFormContent}
      </Form>
    </>
  );
};

export default App;