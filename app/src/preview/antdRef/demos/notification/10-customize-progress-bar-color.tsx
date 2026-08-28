// @ts-nocheck
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