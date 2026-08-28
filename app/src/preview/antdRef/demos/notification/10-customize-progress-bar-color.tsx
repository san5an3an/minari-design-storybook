// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/notification.json 의 examples[10] ("Customize progress bar color")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, ConfigProvider, notification } from 'antd';
import { createStyles } from 'antd-style';

const COLOR_BG = 'linear-gradient(135deg,#6253e1, #04befe)';

const useStyle = createStyles(({ cssVar, prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: ${COLOR_BG};
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all ${cssVar.motionDurationSlow};
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const App: React.FC = () => {
  const { styles } = useStyle();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      title: '진행 막대 색 직접 정하기',
      description: '컴포넌트 토큰으로 진행 막대 색을 직접 정할 수 있어요',
      showProgress: true,
      duration: 20,
    });
  };

  return (
    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
      theme={{
        components: {
          Notification: {
            progressBg: COLOR_BG,
          },
        },
      }}
    >
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        직접 정한 진행 색 보이기
      </Button>
    </ConfigProvider>
  );
};

export default App;