import React, { useState } from 'react';
import { CloseSquareFilled } from '../_icons';
import { AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const App: React.FC = () => {
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);

  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  return (
    <>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        showSearch={{ onSearch: (text) => setOptions(getPanelValue(text)) }}
        placeholder="못 지움"
        allowClear={false}
      />
      <br />
      <br />
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        showSearch={{ onSearch: (text) => setOptions(getPanelValue(text)) }}
        placeholder="직접 만든 지우기 아이콘"
        allowClear={{ clearIcon: <CloseSquareFilled /> }}
      />
    </>
  );
};

export default App;