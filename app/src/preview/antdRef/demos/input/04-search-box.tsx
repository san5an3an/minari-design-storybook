/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/input.json 의 examples[4] ("Search box")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { AudioOutlined } from '../_icons';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const suffix = <AudioOutlined style={{ fontSize: 16, color: '#1677ff' }} />;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const App: React.FC = () => (
  <Space vertical>
    <Search placeholder="찾을 말을 넣어 주세요" onSearch={onSearch} style={{ width: 200 }} />
    <Search placeholder="찾을 말을 넣어 주세요" allowClear onSearch={onSearch} style={{ width: 200 }} />
    <Space.Compact>
      <Space.Addon>https://</Space.Addon>
      <Search placeholder="찾을 말을 넣어 주세요" allowClear onSearch={onSearch} />
    </Space.Compact>

    <Search placeholder="찾을 말을 넣어 주세요" onSearch={onSearch} enterButton />
    <Search
      placeholder="찾을 말을 넣어 주세요"
      allowClear
      enterButton="찾기"
      size="large"
      onSearch={onSearch}
    />
    <Search
      placeholder="찾을 말을 넣어 주세요"
      enterButton="찾기"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
);

export default App;