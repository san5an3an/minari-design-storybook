/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/notification.json 의 examples[3] ("Custom close button")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, notification, Space } from 'antd';

const close = () => {
  console.log(
    '알림이 닫혔어요. 닫기 버튼을 눌렀거나 시간이 다 됐어요.',
  );
};

const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          모두 없애기
        </Button>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          확인
        </Button>
      </Space>
    );
    api.open({
      title: '알림 제목',
      description:
        '알림이 닫힌 뒤에 불리는 함수예요 (`duration` 이 지나 저절로 닫혔거나, 직접 닫았거나).',
      btn,
      key,
      onClose: close,
    });
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        알림 상자 열기
      </Button>
    </>
  );
};

export default App;