// @ts-nocheck
import React from 'react';
import { InfoCircleOutlined, LockOutlined, UserOutlined } from '../_icons';
import { Input, Tooltip } from 'antd';

const App: React.FC = () => (
  <>
    <Input
      placeholder="사용자 이름을 넣어 주세요"
      prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
      suffix={
        <Tooltip title="덧붙임 정보">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
    />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" disabled />
    <br />
    <br />
    <Input.Password
      suffix={<LockOutlined />} // `suffix` available since `5.27.0`
      placeholder="뒤 장식을 붙인 비밀번호 입력칸"
    />
  </>
);

export default App;