// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/input.json 의 examples[10] ("prefix and suffix")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { InfoCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';

const App: React.FC = () => (
  <>
    <Input
      placeholder="사용자 이름을 넣어 주세요"
      prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
      suffix={
        <Tooltip title="덧붙임 정보">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
    />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" disabled />
    <br />
    <br />
    <Input.Password
      suffix={<LockOutlined />} // `suffix` available since `5.27.0`
      placeholder="뒤 장식을 붙인 비밀번호 입력칸"
    />
  </>
);

export default App;