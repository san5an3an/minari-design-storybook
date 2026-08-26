import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
  const [anotherOptions, setAnotherOptions] = useState<AutoCompleteProps['options']>([]);

  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  return (
    <>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        showSearch={{
          onSearch: (text) => setOptions(getPanelValue(text)),
        }}
        placeholder="여기에 입력해 주세요"
      />
      <br />
      <br />
      <AutoComplete
        value={value}
        showSearch={{ onSearch: (text) => setAnotherOptions(getPanelValue(text)) }}
        options={anotherOptions}
        style={{ width: 200 }}
        onSelect={onSelect}
        onChange={onChange}
        placeholder="제어 모드"
      />
    </>
  );
};

export default App;