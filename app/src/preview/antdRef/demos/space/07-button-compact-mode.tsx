// @ts-nocheck
import React from 'react';
import {
  CommentOutlined,
  DownloadOutlined,
  EllipsisOutlined,
  HeartOutlined,
  LikeOutlined,
  MailOutlined,
  MobileOutlined,
  ShareAltOutlined,
  StarOutlined,
  WarningOutlined,
} from '../_icons';
import { Button, Dropdown, Space, Tooltip } from 'antd';

const App: React.FC = () => (
  <div>
    <Space.Compact block>
      <Tooltip title="좋아요">
        <Button icon={<LikeOutlined />} />
      </Tooltip>
      <Tooltip title="댓글">
        <Button icon={<CommentOutlined />} />
      </Tooltip>
      <Tooltip title="별">
        <Button icon={<StarOutlined />} />
      </Tooltip>
      <Tooltip title="하트">
        <Button icon={<HeartOutlined />} />
      </Tooltip>
      <Tooltip title="공유">
        <Button icon={<ShareAltOutlined />} />
      </Tooltip>
      <Tooltip title="내려받기">
        <Button icon={<DownloadOutlined />} />
      </Tooltip>
      <Dropdown
        placement="bottomRight"
        menu={{
          items: [
            {
              key: '1',
              label: '신고',
              icon: <WarningOutlined />,
            },
            {
              key: '2',
              label: '메일',
              icon: <MailOutlined />,
            },
            {
              key: '3',
              label: '모바일',
              icon: <MobileOutlined />,
            },
          ],
        }}
        trigger={['click']}
      >
        <Button icon={<EllipsisOutlined />} />
      </Dropdown>
    </Space.Compact>
    <br />
    <Space.Compact block>
      <Button type="primary">버튼 1</Button>
      <Button type="primary">버튼 2</Button>
      <Button type="primary">버튼 3</Button>
      <Button type="primary">버튼 4</Button>
      <Tooltip title="Tooltip">
        <Button type="primary" icon={<DownloadOutlined />} disabled />
      </Tooltip>
      <Tooltip title="Tooltip">
        <Button type="primary" icon={<DownloadOutlined />} />
      </Tooltip>
    </Space.Compact>
    <br />
    <Space.Compact block>
      <Button>버튼 1</Button>
      <Button>버튼 2</Button>
      <Button>버튼 3</Button>
      <Tooltip title="Tooltip">
        <Button icon={<DownloadOutlined />} disabled />
      </Tooltip>
      <Tooltip title="Tooltip">
        <Button icon={<DownloadOutlined />} />
      </Tooltip>
      <Button type="primary">버튼 4</Button>
      <Dropdown
        placement="bottomRight"
        menu={{
          items: [
            {
              key: '1',
              label: '1st item',
            },
            {
              key: '2',
              label: '2nd item',
            },
            {
              key: '3',
              label: '3rd item',
            },
          ],
        }}
        trigger={['click']}
      >
        <Button type="primary" icon={<EllipsisOutlined />} />
      </Dropdown>
    </Space.Compact>
  </div>
);

export default App;