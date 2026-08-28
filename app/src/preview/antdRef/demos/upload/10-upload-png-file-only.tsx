// @ts-nocheck
import React from 'react';
import { UploadOutlined } from '../_icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const props: UploadProps = {
    beforeUpload: (file) => {
      const isPNG = file.type === 'image/png';
      if (!isPNG) {
        messageApi.error(`${file.name} 은 png 파일이 아니에요`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };

  return (
    <>
      {contextHolder}
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>png 만 올리기</Button>
      </Upload>
    </>
  );
};

export default App;