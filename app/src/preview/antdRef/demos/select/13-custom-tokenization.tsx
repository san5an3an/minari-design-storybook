import React from 'react';
import { Select } from 'antd';

const tokenize = (input: string): string[] => {
  const tokens: string[] = [];
  const regex = /"([^"]*)"|([^,\n]+)/g;
  let match: RegExpExecArray | null = regex.exec(input);
  while (match) {
    tokens.push((match[1] ?? match[2]).trim());
    match = regex.exec(input);
  }
  return tokens.filter(Boolean);
};

const App: React.FC = () => (
  <Select
    mode="tags"
    style={{ width: '100%' }}
    tokenSeparators={tokenize}
    placeholder='붙여넣어 보세요: "샌프란시스코, CA", 뉴욕'
  />
);

export default App;