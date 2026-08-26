/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/spin.json 의 examples[3] ("Customized description")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Alert, Flex, Spin } from 'antd';

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

const App: React.FC = () => (
  <Flex gap="medium" vertical>
    <Flex gap="medium">
      <Spin description="불러오는 중" size="small">
        {content}
      </Spin>
      <Spin description="불러오는 중">{content}</Spin>
      <Spin description="불러오는 중" size="large">
        {content}
      </Spin>
    </Flex>
    <Spin description="불러오는 중…">
      <Alert
        title="알림 제목이에요"
        description="이 알림에 대한 자세한 설명이에요."
        type="info"
      />
    </Spin>
  </Flex>
);

export default App;