/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/form.json 의 examples[25] ("Registration")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import type { CascaderProps, FormItemProps, FormProps } from 'antd';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from 'antd';
import type { DefaultOptionType } from 'antd/es/select';

interface FormCascaderOption {
  value: string;
  label: string;
  children?: FormCascaderOption[];
}

const residences: CascaderProps<FormCascaderOption>['options'] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: '서울',
        children: [
          {
            value: 'xihu',
            label: '한강공원',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: '대전',
        children: [
          {
            value: 'zhonghuamen',
            label: '광화문',
          },
        ],
      },
    ],
  },
];

const formItemLayout: FormProps = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout: FormItemProps = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

interface PhoneValue {
  prefix?: string;
  phone?: string;
}

interface PhoneInputProps {
  id?: string;
  value?: PhoneValue;
  onChange?: (value: PhoneValue) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ id, value = {}, onChange }) => {
  const [prefix, setPrefix] = useState('86');
  const [phone, setPhone] = useState('');

  const triggerChange = (changedValue: PhoneValue) => {
    onChange?.({ ...value, ...changedValue });
  };

  const onPrefixChange = (newPrefix: string) => {
    if (!('prefix' in value)) {
      setPrefix(newPrefix);
    }
    triggerChange({ prefix: newPrefix });
  };

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value;
    if (!('phone' in value)) {
      setPhone(newPhone);
    }
    triggerChange({ phone: newPhone });
  };

  return (
    <span id={id}>
      <Space.Compact block>
        <Select
          value={value.prefix || prefix}
          onChange={onPrefixChange}
          style={{ width: 70 }}
          options={[
            { label: '+86', value: '86' },
            { label: '+87', value: '87' },
          ]}
        />
        <Input value={value.phone || phone} onChange={onPhoneChange} style={{ width: '100%' }} />
      </Space.Compact>
    </span>
  );
};

interface DonationValue {
  amount?: number;
  currency?: string;
}

interface DonationInputProps {
  id?: string;
  value?: DonationValue;
  onChange?: (value: DonationValue) => void;
}

const DonationInput: React.FC<DonationInputProps> = ({ id, value = {}, onChange }) => {
  const [amount, setAmount] = useState<number>();
  const [currency, setCurrency] = useState('USD');

  const triggerChange = (changedValue: DonationValue) => {
    onChange?.({ ...value, ...changedValue });
  };

  const onAmountChange = (newAmount: number | null) => {
    if (!('amount' in value)) {
      setAmount(newAmount ?? undefined);
    }
    triggerChange({ amount: newAmount ?? undefined });
  };

  const onCurrencyChange = (newCurrency: string) => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({ currency: newCurrency });
  };

  return (
    <span id={id}>
      <Space.Compact block>
        <InputNumber
          value={value.amount ?? amount}
          onChange={onAmountChange}
          style={{ width: '100%' }}
        />
        <Select
          value={value.currency || currency}
          onChange={onCurrencyChange}
          style={{ width: 70 }}
          options={[
            { label: '$', value: 'USD' },
            { label: '¥', value: 'CNY' },
          ]}
        />
      </Space.Compact>
    </span>
  );
};

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('폼에서 받은 값: ', values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    setAutoCompleteResult(
      value ? ['.com', '.org', '.net'].map((domain) => `${value}${domain}`) : [],
    );
  };

  const websiteOptions = autoCompleteResult.map<DefaultOptionType>((website) => ({
    label: website,
    value: website,
  }));

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        phone: { prefix: '86' },
        donation: { currency: 'USD' },
      }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="이메일"
        rules={[
          {
            type: 'email',
            message: '올바른 이메일이 아니에요!',
          },
          {
            required: true,
            message: '이메일을 넣어 주세요!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="비밀번호"
        rules={[
          {
            required: true,
            message: '비밀번호를 넣어 주세요!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="비밀번호 확인"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '비밀번호를 확인해 주세요!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('새로 넣은 비밀번호가 안 맞아요!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="별명"
        tooltip="남들이 뭐라고 불러 주면 좋겠어요?"
        rules={[{ required: true, message: '별명을 넣어 주세요!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="사는 곳"
        rules={[
          { type: 'array', required: true, message: '사는 곳을 골라 주세요!' },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="전화번호"
        rules={[{ required: true, message: '전화번호를 넣어 주세요!' }]}
      >
        <PhoneInput />
      </Form.Item>

      <Form.Item
        name="donation"
        label="후원"
        rules={[{ required: true, message: '후원 금액을 넣어 주세요!' }]}
      >
        <DonationInput />
      </Form.Item>

      <Form.Item
        name="웹사이트"
        label="웹사이트"
        rules={[{ required: true, message: '웹사이트를 넣어 주세요!' }]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="웹사이트">
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="intro"
        label="소개"
        rules={[{ required: true, message: '소개를 넣어 주세요' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="성별"
        rules={[{ required: true, message: '성별을 골라 주세요!' }]}
      >
        <Select
          placeholder="성별을 골라 주세요"
          defaultValue={'male'}
          options={[
            { label: '남성', value: 'male' },
            { label: '여성', value: 'female' },
            { label: '기타', value: 'other' },
          ]}
        />
      </Form.Item>

      <Form.Item label="보안 문자" extra="사람인지 꼭 확인해야 해요.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[{ required: true, message: '받은 보안 문자를 넣어 주세요!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>보안 문자 받기</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="약관"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('약관에 동의해야 해요')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          읽었어요 <a href="">약관</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          가입
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;