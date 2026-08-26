/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/input.json 의 examples[9] ("Format Tooltip Input")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { Input, Tooltip } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
  const { css, prefixCls, cssVar } = props;
  return {
    numericInput: css`
      .${prefixCls}-tooltip-container {
        min-width: 32px;
        min-height: 38px;
      }
    `,
    numericInputTitle: css`
      font-size: ${cssVar.fontSize};
    `,
  };
});

interface NumericInputProps {
  style: React.CSSProperties;
  value: string;
  onChange: (value: string) => void;
}

const formatNumber = (value: number) => new Intl.NumberFormat().format(value);

const NumericInput: React.FC<NumericInputProps> = (props) => {
  const { value, onChange } = props;

  const { styles } = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };

  const title = value ? (
    <span className={styles.numericInputTitle}>
      {value !== '-' ? formatNumber(Number(value)) : '-'}
    </span>
  ) : (
    '숫자를 넣어 주세요'
  );

  return (
    <Tooltip
      destroyOnHidden
      trigger={['focus']}
      title={title}
      placement="topLeft"
      classNames={{ root: styles.numericInput }}
    >
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="숫자를 넣어 주세요"
        maxLength={16}
      />
    </Tooltip>
  );
};

const App: React.FC = () => {
  const [value, setValue] = useState('');
  return <NumericInput style={{ width: 120 }} value={value} onChange={setValue} />;
};

export default App;