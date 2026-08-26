/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/select.json 의 examples[21] ("Responsive maxTagCount")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import type { SelectProps } from 'antd';
import { Select, Space, Tooltip } from 'antd';

interface ItemProps {
  label: string;
  value: string;
}

const options: ItemProps[] = [];

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `긴 라벨: ${value}`,
    value,
  });
}

const sharedProps: SelectProps = {
  mode: 'multiple',
  style: { width: '100%' },
  options,
  placeholder: '항목을 골라 주세요…',
  maxTagCount: 'responsive',
};

const App: React.FC = () => {
  const [value, setValue] = useState(['a10', 'c12', 'h17', 'j19', 'k20']);

  const selectProps: SelectProps = {
    value,
    onChange: setValue,
  };

  return (
    <Space vertical style={{ width: '100%' }}>
      <Select {...sharedProps} {...selectProps} />
      <Select {...sharedProps} disabled />
      <Select
        {...sharedProps}
        {...selectProps}
        maxTagPlaceholder={(omittedValues) => (
          <Tooltip
            styles={{ root: { pointerEvents: 'none' } }}
            title={omittedValues.map(({ label }) => label).join(', ')}
          >
            <span>여기에 올려 보세요</span>
          </Tooltip>
        )}
      />
    </Space>
  );
};

export default App;