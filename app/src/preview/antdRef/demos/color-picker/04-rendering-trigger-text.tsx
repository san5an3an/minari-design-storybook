// @ts-nocheck
import React, { useState } from 'react';
import { DownOutlined } from '../_icons';
import { ColorPicker, Space } from 'antd';

const Demo = () => {
  const [open, setOpen] = useState(false);
  return (
    <Space vertical>
      <ColorPicker defaultValue="#1677ff" showText allowClear />
      <ColorPicker
        defaultValue="#1677ff"
        showText={(color) => <span>직접 정한 글자 ({color.toHexString()})</span>}
      />
      <ColorPicker
        defaultValue="#1677ff"
        open={open}
        onOpenChange={setOpen}
        showText={() => (
          <DownOutlined
            rotate={open ? 180 : 0}
            style={{
              color: 'rgba(0, 0, 0, 0.25)',
            }}
          />
        )}
      />
    </Space>
  );
};

export default Demo;