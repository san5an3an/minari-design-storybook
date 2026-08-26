import React from 'react';
import { Button, Divider, Space, Tooltip } from 'antd';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

const App: React.FC = () => (
  <>
    <Divider titlePlacement="start">미리 정해 둔 값</Divider>
    <Space wrap>
      {colors.map((color) => (
        <Tooltip title="안내 글" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
    <Divider titlePlacement="start">직접 정하기</Divider>
    <Space wrap>
      {customColors.map((color) => (
        <Tooltip title="안내 글" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
  </>
);

export default App;