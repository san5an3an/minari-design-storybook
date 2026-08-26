import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log(e);
};

const App: React.FC = () => (
  <>
    <Input placeholder="지우기 아이콘이 있는 입력칸" allowClear onChange={onChange} />
    <br />
    <br />
    <TextArea placeholder="지우기 아이콘이 있는 textarea" allowClear onChange={onChange} />
  </>
);

export default App;