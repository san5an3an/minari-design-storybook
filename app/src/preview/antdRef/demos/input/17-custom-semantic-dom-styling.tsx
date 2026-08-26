/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/input.json 의 examples[17] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Input } from 'antd';
import type { GetProp, GetProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const styles = createStaticStyles(({ css, cssVar }) => ({
  root: css`
    border-width: ${cssVar.lineWidth};
    border-radius: ${cssVar.borderRadius};
    transition: box-shadow ${cssVar.motionDurationMid};
    &:hover {
      border: 1px solid #d9d9d9;
    }
    &:focus-visible {
      border-color: lab(66.128% 0 0);
      box-shadow: 0 0 0 4px color-mix(in oklab, lab(66.128% 0 0) 50%, transparent);
    }
  `,
}));

type InputProps = GetProps<typeof Input>;
type PasswordProps = GetProps<typeof Input.Password>;
type TextAreaProps = GetProps<typeof Input.TextArea>;
type OTPProps = GetProps<typeof Input.OTP>;
type SearchProps = GetProps<typeof Input.Search>;

const { Search, TextArea, OTP, Password } = Input;

const stylesFn: InputProps['styles'] = (info) => {
  if (info.props.size === 'medium') {
    return {
      root: {
        borderColor: '#696FC7',
      },
    };
  }
  return {};
};

const stylesFnTextArea: TextAreaProps['styles'] = (
  info,
): GetProp<TextAreaProps, 'styles', 'Return'> => {
  if (info.props.showCount) {
    return {
      root: { borderColor: '#BDE3C3' },
      textarea: { resize: 'none' },
      count: { color: '#BDE3C3' },
    };
  }
  return {};
};

const stylesFnPassword: PasswordProps['styles'] = (
  info,
): GetProp<PasswordProps, 'styles', 'Return'> => {
  if (info.props.size === 'medium') {
    return {
      root: {
        borderColor: '#F5D3C4',
      },
    };
  }
  return {};
};

const stylesFnOTP: OTPProps['styles'] = (info): GetProp<OTPProps, 'styles', 'Return'> => {
  if (info.props.size === 'medium') {
    return {
      root: {
        borderWidth: 0,
      },
      input: {
        borderColor: '#6E8CFB',
        width: 32,
      },
    };
  }
  return {};
};

const stylesFnSearch: SearchProps['styles'] = (info): GetProp<SearchProps, 'styles', 'Return'> => {
  if (info.props.size === 'large') {
    return {
      root: { color: '#4DA8DA', borderWidth: 0 },
      input: { color: '#4DA8DA', borderColor: '#4DA8DA' },
      prefix: { color: '#4DA8DA' },
      suffix: { color: '#4DA8DA' },
      count: { color: '#4DA8DA' },
      button: {
        root: { color: '#4DA8DA', borderColor: '#4DA8DA' },
        icon: { color: '#4DA8DA' },
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  const classNames = styles;
  return (
    <Flex vertical gap="large">
      <Input classNames={classNames} placeholder="객체" name="input-object" />
      <Input
        classNames={classNames}
        styles={stylesFn}
        placeholder="함수"
        size="medium"
        name="input-fn"
      />
      <TextArea
        classNames={classNames}
        styles={stylesFnTextArea}
        value="TextArea"
        showCount
        name="textarea-fn"
      />
      <Password
        classNames={classNames}
        styles={stylesFnPassword}
        value="비밀번호"
        size="medium"
        name="password-fn"
      />
      <OTP classNames={classNames} styles={stylesFnOTP} size="medium" length={6} separator="*" />
      <Search
        classNames={classNames}
        styles={stylesFnSearch}
        size="large"
        placeholder="찾기"
        name="search-fn"
      />
    </Flex>
  );
};

export default App;