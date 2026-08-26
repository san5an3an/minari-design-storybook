import React from 'react';
import { Cascader } from 'antd';
import type { CascaderProps, GetProp } from 'antd';

type DefaultOptionType = GetProp<CascaderProps, 'options'>[number];

interface Option {
  value: string;
  label: string;
  children?: Option[];
  code?: number;
}

const options: Option[] = [
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
            code: 752100,
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
            code: 453400,
          },
        ],
      },
    ],
  },
];

const handleAreaClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  label: string,
  option: DefaultOptionType,
) => {
  e.stopPropagation();
  console.log('눌렀어요', label, option);
};

const displayRender: CascaderProps<Option>['displayRender'] = (labels, selectedOptions = []) =>
  labels.map((label, i) => {
    const option = selectedOptions[i];
    if (i === labels.length - 1) {
      return (
        <span key={option.value}>
          {label} (<a onClick={(e) => handleAreaClick(e, label, option)}>{option.code}</a>)
        </span>
      );
    }
    return <span key={option.value}>{label} / </span>;
  });

const App: React.FC = () => (
  <Cascader
    options={options}
    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
    displayRender={displayRender}
    style={{ width: '100%' }}
    // `optionRender` is supported since 5.16.0
    optionRender={(option) => (
      <>
        {option.label} ({option.value})
      </>
    )}
  />
);

export default App;