/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/tree-select.json 의 examples[2] ("Generate from tree data")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { TreeSelect } from 'antd';

const treeData = [
  {
    title: '마디1',
    value: '0-0',
    children: [
      {
        title: '자식 마디1',
        value: '0-0-1',
      },
      {
        title: '자식 마디2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: '마디2',
    value: '0-1',
  },
];

const App: React.FC = () => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <TreeSelect
      style={{ width: '100%' }}
      value={value}
      styles={{
        popup: {
          root: { maxHeight: 400, overflow: 'auto' },
        },
      }}
      treeData={treeData}
      placeholder="골라 주세요"
      treeDefaultExpandAll
      onChange={onChange}
    />
  );
};

export default App;