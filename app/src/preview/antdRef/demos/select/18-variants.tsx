import React from 'react';
import { Flex, Select } from 'antd';

const App: React.FC = () => (
  <Flex gap={12} vertical>
    <Flex gap={8}>
      <Select
        placeholder="테두리"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: '지훈' },
          { value: 'lucy', label: '서연' },
          { value: '정우진', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="테두리"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: '지훈' },
          { value: 'lucy', label: '서연' },
          { value: '정우진', label: 'yiminghe' },
        ]}
      />
    </Flex>
    <Flex gap={8}>
      <Select
        placeholder="채움"
        variant="filled"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: '지훈' },
          { value: 'lucy', label: '서연' },
          { value: '정우진', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="채움"
        variant="filled"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: '지훈' },
          { value: 'lucy', label: '서연' },
          { value: '정우진', label: 'yiminghe' },
        ]}
      />
    </Flex>
    <Flex gap={8}>
      <Select
        placeholder="테두리 없음"
        variant="borderless"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: '지훈' },
          { value: 'lucy', label: '서연' },
          { value: '정우진', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="테두리 없음"
        variant="borderless"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: '지훈' },
          { value: 'lucy', label: '서연' },
          { value: '정우진', label: 'yiminghe' },
        ]}
      />
    </Flex>
    <Flex gap={8}>
      <Select
        placeholder="밑줄"
        variant="underlined"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: '지훈' },
          { value: 'lucy', label: '서연' },
          { value: '정우진', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="밑줄"
        variant="underlined"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: '지훈' },
          { value: 'lucy', label: '서연' },
          { value: '정우진', label: 'yiminghe' },
        ]}
      />
    </Flex>
  </Flex>
);

export default App;