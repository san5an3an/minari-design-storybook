import React from 'react';
import { InboxOutlined } from '../_icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        messageApi.success(`${info.file.name} 을 올렸어요.`);
      }
      if (status === 'error') {
        messageApi.error(`${info.file.name} 을 못 올렸어요.`);
      }
    },
    onDrop(e) {
      console.log('놓은 파일', e.dataTransfer.files);
    },
  };

  return (
    <>
      {contextHolder}
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">파일을 눌러서 고르거나 여기로 끌어다 놓으세요</p>
        <p className="ant-upload-hint">
          하나씩도, 여러 개도 올릴 수 있어요. 회사 자료나 금지된 파일은 절대 올리면 안 돼요.
        </p>
      </Dragger>
    </>
  );
};

export default App;