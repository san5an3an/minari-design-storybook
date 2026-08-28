// @ts-nocheck
import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxOptionType, GetProp } from 'antd';

const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const plainOptions = ['사과', '배', '오렌지'];

const options: CheckboxOptionType<string>[] = [
  { label: '사과', value: '사과', className: 'label-1' },
  { label: '배', value: '배', className: 'label-2' },
  { label: '오렌지', value: '오렌지', className: 'label-3' },
];

const optionsWithDisabled: CheckboxOptionType<string>[] = [
  { label: '사과', value: '사과', className: 'label-1' },
  { label: '배', value: '배', className: 'label-2' },
  { label: '오렌지', value: '오렌지', className: 'label-3', disabled: false },
];

const App: React.FC = () => (
  <>
    <Checkbox.Group options={plainOptions} defaultValue={['사과']} onChange={onChange} />
    <br />
    <br />
    <Checkbox.Group options={options} defaultValue={['배']} onChange={onChange} />
    <br />
    <br />
    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['사과']}
      onChange={onChange}
    />
  </>
);

export default App;