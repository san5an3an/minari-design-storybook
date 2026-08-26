/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/tabs.json 의 examples[3] ("Icon")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { AndroidOutlined, AppleOutlined } from '../_icons';
import { Tabs } from 'antd';

// Icons from third-party libraries (e.g. lucide, react-icons) render as a bare `<svg>`
// rather than an `.anticon` wrapper. It stays vertically centred with the label.
const HeartIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path d="M12 20.7l-1.4-1.3C5.4 14.8 2 11.7 2 8a5 5 0 0 1 10-1.7A5 5 0 0 1 22 8c0 3.7-3.4 6.8-8.6 11.4L12 20.7z" />
  </svg>
);

const App: React.FC = () => (
  <Tabs
    defaultActiveKey="2"
    items={[
      { key: '1', label: '탭 1', children: '탭 1', icon: <AppleOutlined /> },
      { key: '2', label: '탭 2', children: '탭 2', icon: <AndroidOutlined /> },
      { key: '3', label: '탭 3', children: '탭 3', icon: <HeartIcon /> },
    ]}
  />
);

export default App;