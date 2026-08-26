/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/notification.json 의 examples[2] ("Notification with icon")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, Flex, notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      title: '알림 제목',
      description:
        '알림 내용이 여기에 들어가요. 알림 내용이 여기에 들어가요. 알림 내용이 여기에 들어가요.',
    });
  };

  return (
    <>
      {contextHolder}
      <Flex gap={8} wrap="wrap">
        <Button
          color="green"
          variant="outlined"
          onClick={() => openNotificationWithIcon('success')}
        >
          성공
        </Button>
        <Button color="blue" variant="outlined" onClick={() => openNotificationWithIcon('info')}>
          안내
        </Button>
        <Button
          color="yellow"
          variant="outlined"
          onClick={() => openNotificationWithIcon('warning')}
        >
          경고
        </Button>
        <Button color="red" variant="outlined" onClick={() => openNotificationWithIcon('error')}>
          오류
        </Button>
      </Flex>
    </>
  );
};

export default App;