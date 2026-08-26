/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/input.json 의 examples[8] ("OTP")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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