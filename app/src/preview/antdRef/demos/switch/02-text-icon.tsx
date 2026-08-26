import React from 'react';
import { CheckOutlined, CloseOutlined, FrownOutlined, SmileOutlined } from '../_icons';
import { Flex, Switch } from 'antd';

const Demo: React.FC = () => (
  <Flex gap="medium" align="flex-start" justify="flex-start" vertical>
    <Switch checkedChildren="켬" unCheckedChildren="끔" defaultChecked />
    <Switch checkedChildren={1} unCheckedChildren={0} defaultChecked />
    <Switch
      defaultChecked
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
    />
    <Switch
      defaultChecked
      checkedChildren={
        <Flex gap={4} justify="flex-start" align="center">
          <SmileOutlined />
          기쁨
        </Flex>
      }
      unCheckedChildren={
        <Flex gap={4} justify="flex-start" align="center">
          <FrownOutlined />
          슬픔
        </Flex>
      }
    />
  </Flex>
);

export default Demo;