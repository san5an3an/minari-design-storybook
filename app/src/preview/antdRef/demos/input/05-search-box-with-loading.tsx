// @ts-nocheck
import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const App: React.FC = () => (
  <>
    <Search placeholder="기본 찾기 입력칸 불러오는 중" loading />
    <br />
    <br />
    <Search placeholder="enterButton 이 있는 찾기 입력칸 불러오는 중" loading enterButton />
    <br />
    <br />
    <Search placeholder="찾을 말을 넣어 주세요" enterButton="찾기" size="large" loading />
  </>
);

export default App;