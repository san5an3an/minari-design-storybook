// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/space.json 의 examples[7] ("Button Compact Mode")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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
} from '@ant-design/icons';
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