/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/dropdown.json 의 examples[13] ("Loading")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { DownOutlined, EllipsisOutlined } from '../_icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    label: '보내고 이어서 하기',
    key: '1',
  },
];

const App: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((state) => {
      const newLoadings = [...state];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((state) => {
        const newLoadings = [...state];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <Space vertical>
      <Space.Compact>
        <Button type="primary" loading>
          보내기
        </Button>
        <Dropdown menu={{ items }}>
          <Button type="primary" icon={<EllipsisOutlined />} />
        </Dropdown>
      </Space.Compact>
      <Space.Compact size="small">
        <Button type="primary" loading>
          보내기
        </Button>
        <Dropdown menu={{ items }}>
          <Button type="primary" icon={<EllipsisOutlined />} />
        </Dropdown>
      </Space.Compact>
      <Space.Compact>
        <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
          보내기
        </Button>
        <Dropdown menu={{ items }}>
          <Button type="primary" icon={<EllipsisOutlined />} />
        </Dropdown>
      </Space.Compact>
      <Space.Compact>
        <Button loading={loadings[1]} onClick={() => enterLoading(1)}>
          보내기
        </Button>
        <Dropdown menu={{ items }}>
          <Button icon={<DownOutlined />} />
        </Dropdown>
      </Space.Compact>
    </Space>
  );
};

export default App;