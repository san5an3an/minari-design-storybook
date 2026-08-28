// @ts-nocheck
import React, { useState } from 'react';
import { Form, Tag } from 'antd';

const tagsData = ['영화', '책', '음악', '스포츠'];

const App: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const [singleSelected, setSingleSelected] = useState<string | null>('책');
  const [multipleSelected, setMultipleSelected] = useState<string[]>(['영화', '음악']);

  return (
    <Form labelCol={{ span: 6 }}>
      <Form.Item label="고를 수 있음">
        <Tag.CheckableTag checked={checked} onChange={setChecked}>
          네
        </Tag.CheckableTag>
      </Form.Item>
      <Form.Item label="하나">
        <Tag.CheckableTagGroup
          options={tagsData}
          value={singleSelected}
          onChange={setSingleSelected}
        />
      </Form.Item>
      <Form.Item label="여럿">
        <Tag.CheckableTagGroup
          multiple
          options={tagsData}
          value={multipleSelected}
          onChange={setMultipleSelected}
        />
      </Form.Item>
    </Form>
  );
};

export default App;