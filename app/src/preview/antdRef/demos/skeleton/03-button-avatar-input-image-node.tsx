/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/skeleton.json 의 examples[3] ("Button/Avatar/Input/Image/Node")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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