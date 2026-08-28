// @ts-nocheck
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';

const plainOptions: CheckboxGroupProps<string>['options'] = ['사과', '배', '오렌지'];

const options: CheckboxGroupProps<string>['options'] = [
  { label: '사과', value: '사과', className: 'label-1' },
  { label: '배', value: '배', className: 'label-2' },
  { label: '오렌지', value: '오렌지', title: '오렌지', className: 'label-3' },
];

const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
  { label: '사과', value: '사과', className: 'label-1' },
  { label: '배', value: '배', className: 'label-2' },
  { label: '오렌지', value: '오렌지', className: 'label-3', disabled: true },
];

const App: React.FC = () => {
  const [value1, setValue1] = useState('사과');
  const [value2, setValue2] = useState('사과');
  const [value3, setValue3] = useState('사과');
  const [value4, setValue4] = useState('사과');

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('라디오1 골랐어요', value);
    setValue1(value);
  };

  const onChange2 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('라디오2 골랐어요', value);
    setValue2(value);
  };

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('라디오3 골랐어요', value);
    setValue3(value);
  };

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('라디오4 골랐어요', value);
    setValue4(value);
  };

  return (
    <>
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <br />
      <Radio.Group options={optionsWithDisabled} onChange={onChange2} value={value2} />
      <br />
      <br />
      <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
      <br />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};

export default App;