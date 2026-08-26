import React from 'react';
import { UploadOutlined } from '../_icons';
import type { UploadProps } from 'antd';
import { Button, Upload } from 'antd';

const props: UploadProps = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('올린 파일:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then((res) => res.json()) .then(({ thumbnail }) => thumbnail);
  },
};

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>올리기</Button>
  </Upload>
);

export default App;