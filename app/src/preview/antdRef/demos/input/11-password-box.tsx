import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '../_icons';
import { Button, Input, Space } from 'antd';

const App: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <Space vertical>
      <Input.Password placeholder="비밀번호를 넣어 주세요" />
      <Input.Password
        placeholder="비밀번호를 넣어 주세요"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
      <Space>
        <Input.Password
          placeholder="비밀번호를 넣어 주세요"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
        />
        <Button style={{ width: 80 }} onClick={() => setPasswordVisible((prevState) => !prevState)}>
          {passwordVisible ? '숨기기' : '보이기'}
        </Button>
      </Space>
      <Input.Password disabled placeholder="못 쓰는 비밀번호 입력칸" />
    </Space>
  );
};

export default App;