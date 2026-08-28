// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/dropdown.json 의 examples[7] ("Click event")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    label: '첫 번째 메뉴 항목',
    key: '1',
  },
  {
    label: '두 번째 메뉴 항목',
    key: '2',
  },
  {
    label: '세 번째 메뉴 항목',
    key: '3',
  },
];

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const onClick: MenuProps['onClick'] = ({ key }) => {
    messageApi.info(`항목 ${key} 를 눌렀어요`);
  };

  return (
    <>
      {contextHolder}
      <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            올린 뒤 메뉴 항목을 눌러 보세요
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default App;