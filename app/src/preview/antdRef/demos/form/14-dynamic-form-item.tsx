import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '../_icons';
import { Button, Form, Input } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
  const { css, cssVar } = props;
  return {
    dynamicDeleteButton: css`
      position: relative;
      top: ${cssVar.marginXXS};
      margin: 0 ${cssVar.marginXS};
      color: #999;
      font-size: 24px;
      cursor: pointer;
      transition: all ${cssVar.motionDurationSlow} ease;
      &:hover {
        color: #777;
      }
      &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `,
  };
});

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const App: React.FC = () => {
  const { styles } = useStyles();

  const onFinish = (values: any) => {
    console.log('폼에서 받은 값:', values);
  };

  return (
    <Form
      name="dynamic_form_item"
      {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 2) {
                return Promise.reject(new Error('적어도 두 명은 있어야 해요'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? '탑승자' : undefined}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "탑승자 이름을 넣거나 이 칸을 지워 주세요.",
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder="탑승자 이름" style={{ width: '60%' }} />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className={styles.dynamicDeleteButton}
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '60%' }}
                icon={<PlusOutlined />}
              >
                항목 추가
              </Button>
              <Button
                type="dashed"
                onClick={() => {
                  add('머리 항목', 0);
                }}
                style={{ width: '60%', marginTop: '20px' }}
                icon={<PlusOutlined />}
              >
                맨 앞에 항목 추가
              </Button>
              <Form.ErrorList errors={errors} />
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
};

export default App;