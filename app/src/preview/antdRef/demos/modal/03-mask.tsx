/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/modal.json 의 examples[3] ("mask")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, Modal, Space } from 'antd';

const modalConfig = {
  title: '제목',
  content: '내용이 들어가요…',
};

const App: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <>
      <Space>
        <Button
          onClick={() => {
            modal.confirm({ ...modalConfig, mask: { blur: true } });
          }}
        >
          blur
        </Button>
        <Button
          onClick={() => {
            modal.confirm(modalConfig);
          }}
        >
          어둡게 덮기
        </Button>
        <Button
          onClick={() => {
            modal.confirm({ ...modalConfig, mask: false });
          }}
        >
          덮기 없음
        </Button>
      </Space>

      {contextHolder}
    </>
  );
};

export default App;