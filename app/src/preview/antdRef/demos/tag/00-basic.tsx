// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/tag.json 의 examples[0] ("Basic")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { CloseCircleOutlined, DeleteOutlined } from '../_icons';
import { Flex, Tag } from 'antd';

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  console.log('눌렀지만 기본 동작을 막았어요.');
};

const App: React.FC = () => (
  <Flex gap="small" align="center" wrap>
    <Tag>태그 1</Tag>
    <Tag>
      <a
        href="https://github.com/ant-design/ant-design/issues/1862"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ant Design 이슈"
      >
        링크
      </a>
    </Tag>
    <Tag closeIcon onClose={preventDefault}>
      기본 동작 막기
    </Tag>
    <Tag closeIcon={<CloseCircleOutlined />} onClose={console.log}>
      태그 2
    </Tag>
    <Tag
      closable={{
        closeIcon: <DeleteOutlined />,
        'aria-label': '닫기 버튼',
      }}
      onClose={console.log}
    >
      태그 3
    </Tag>
  </Flex>
);

export default App;