import React from 'react';
import { UploadOutlined } from '../_icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const props: UploadProps = {
    name: 'file',
    pastable: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        messageApi.success(`${info.file.name} 을 올렸어요`);
      } else if (info.file.status === 'error') {
        messageApi.error(`${info.file.name} 을 못 올렸어요.`);
      }
    },
  };

  return (
    <>
      {contextHolder}
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>붙여넣거나 눌러서 올리세요</Button>
      </Upload>
    </>
  );
};

export default App;