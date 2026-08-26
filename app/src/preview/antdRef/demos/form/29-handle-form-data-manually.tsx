import React, { useState } from 'react';
import type { InputNumberProps } from 'antd';
import { Form, InputNumber } from 'antd';

type ValidateStatus = Parameters<typeof Form.Item>[0]['validateStatus'];

const validatePrimeNumber = (
  number: number,
): {
  validateStatus: ValidateStatus;
  errorMsg: string | null;
} => {
  if (number === 11) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
  return {
    validateStatus: 'error',
    errorMsg: '8 과 12 사이의 소수는 11 이에요!',
  };
};

const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 12 },
};

const tips =
  '소수는 1 보다 큰 자연수 가운데 1 과 자기 자신 말고는 나누어떨어지는 수가 없는 수예요.';

const App: React.FC = () => {
  const [number, setNumber] = useState<{
    value: number;
    validateStatus?: ValidateStatus;
    errorMsg?: string | null;
  }>({ value: 11 });

  const onNumberChange: InputNumberProps['onChange'] = (value) => {
    setNumber({
      ...validatePrimeNumber(value as number),
      value: value as number,
    });
  };

  return (
    <Form style={{ maxWidth: 600 }}>
      <Form.Item
        {...formItemLayout}
        label="8과 12 사이의 소수"
        validateStatus={number.validateStatus}
        help={number.errorMsg || tips}
      >
        <InputNumber min={8} max={12} value={number.value} onChange={onNumberChange} />
      </Form.Item>
    </Form>
  );
};

export default App;