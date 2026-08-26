import React from 'react';
import { Flex, Input } from 'antd';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log('바뀜:', e.target.value);
};

const App: React.FC = () => (
  <Flex vertical gap={32}>
    <Input showCount maxLength={20} onChange={onChange} />
    <TextArea showCount maxLength={100} onChange={onChange} placeholder="크기를 바꿀 수 있어요" />
    <TextArea
      showCount
      maxLength={100}
      onChange={onChange}
      placeholder="크기 못 바꾸게 하기"
      style={{ height: 120, resize: 'none' }}
    />
  </Flex>
);

export default App;