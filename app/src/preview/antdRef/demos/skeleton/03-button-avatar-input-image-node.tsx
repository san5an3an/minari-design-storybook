import React, { useState } from 'react';
import { DotChartOutlined } from '../_icons';
import type { RadioChangeEvent } from 'antd';
import { Divider, Flex, Form, Radio, Skeleton, Space, Switch } from 'antd';

type SizeType = 'large' | 'medium' | 'small';
type ButtonShapeType = 'circle' | 'square' | 'round' | 'default';
type AvatarShapeType = 'circle' | 'square';

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  const [size, setSize] = useState<SizeType>('medium');
  const [buttonShape, setButtonShape] = useState<ButtonShapeType>('default');
  const [avatarShape, setAvatarShape] = useState<AvatarShapeType>('circle');

  const handleActiveChange = (checked: boolean) => {
    setActive(checked);
  };

  const handleBlockChange = (checked: boolean) => {
    setBlock(checked);
  };

  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const handleShapeButton = (e: RadioChangeEvent) => {
    setButtonShape(e.target.value);
  };

  const handleAvatarShape = (e: RadioChangeEvent) => {
    setAvatarShape(e.target.value);
  };

  return (
    <Flex gap="medium" vertical>
      <Space>
        <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
        <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
        <Skeleton.Input active={active} size={size} />
      </Space>
      <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
      <Skeleton.Input active={active} size={size} block={block} />
      <Space>
        <Skeleton.Image active={active} />
        <Skeleton.Node active={active} style={{ width: 160 }} />
        <Skeleton.Node active={active}>
          <DotChartOutlined style={{ fontSize: 40, color: '#bfbfbf' }} />
        </Skeleton.Node>
      </Space>
      <Divider />
      <Form layout="inline" style={{ margin: '16px 0' }}>
        <Space size={16} wrap>
          <Form.Item label="활성">
            <Switch checked={active} onChange={handleActiveChange} />
          </Form.Item>
          <Form.Item label="버튼과 입력칸 덩어리">
            <Switch checked={block} onChange={handleBlockChange} />
          </Form.Item>
          <Form.Item label="크기">
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value="large">큼</Radio.Button>
              <Radio.Button value="medium">중간</Radio.Button>
              <Radio.Button value="small">작음</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="버튼 모양">
            <Radio.Group value={buttonShape} onChange={handleShapeButton}>
              <Radio.Button value="default">기본값</Radio.Button>
              <Radio.Button value="square">사각형</Radio.Button>
              <Radio.Button value="round">둥근</Radio.Button>
              <Radio.Button value="circle">원</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="아바타 모양">
            <Radio.Group value={avatarShape} onChange={handleAvatarShape}>
              <Radio.Button value="square">사각형</Radio.Button>
              <Radio.Button value="circle">원</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Space>
      </Form>
    </Flex>
  );
};

export default App;