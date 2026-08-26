import React from 'react';
import { Flex, Input, Typography } from 'antd';
import type { GetProps } from 'antd';

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

const App: React.FC = () => {
  const onChange: OTPProps['onChange'] = (text) => {
    console.log('onChange:', text);
  };

  const onInput: OTPProps['onInput'] = (value) => {
    console.log('onInput:', value);
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };

  return (
    <Flex gap="medium" align="flex-start" vertical>
      <Title level={5}>포매터 있음 (대문자)</Title>
      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
      <Title level={5}>못 쓰는 것 포함</Title>
      <Input.OTP disabled {...sharedProps} />
      <Title level={5}>길이 지정 (8)</Title>
      <Input.OTP length={8} {...sharedProps} />
      <Title level={5}>변형 있음</Title>
      <Input.OTP variant="filled" {...sharedProps} />
      <Title level={5}>직접 정한 표시 글자</Title>
      <Input.OTP mask="🔒" {...sharedProps} />
      <Title level={5}>직접 만든 ReactNode 구분자</Title>
      <Input.OTP separator={<span>/</span>} {...sharedProps} />
      <Title level={5}>직접 만든 함수 구분자</Title>
      <Input.OTP
        separator={(i) => <span style={{ color: i & 1 ? 'red' : 'blue' }}>—</span>}
        {...sharedProps}
      />
    </Flex>
  );
};

export default App;