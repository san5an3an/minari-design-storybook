// @ts-nocheck
import React from 'react';
import { UploadOutlined } from '../_icons';
import { Button, Upload } from 'antd';

const App: React.FC = () => (
  <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" directory>
    <Button icon={<UploadOutlined />}>폴더 올리기</Button>
  </Upload>
);

export default App;