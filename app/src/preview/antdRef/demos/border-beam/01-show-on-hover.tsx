// @ts-nocheck
import React from 'react';
import { BorderBeam, Card } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
  const { css, prefixCls, cssVar } = props;
  return {
    card: css`
      width: 360px;
      .${prefixCls}-border-beam {
        opacity: 0;
        transition: opacity ${cssVar.motionDurationMid};
        &::before {
          animation-play-state: paused;
        }
      }
      &:hover {
        .${prefixCls}-border-beam {
          opacity: 1;
          &::before {
            animation-play-state: running;
          }
        }
      }
    `,
  };
});

const Demo: React.FC = () => {
  const { styles } = useStyles();
  return (
    <BorderBeam>
      <Card className={styles.card} title="카드 위에 올려 보세요">
        이 카드 위로 마우스를 옮기면 테두리 빛줄기가 나타나요.
      </Card>
    </BorderBeam>
  );
};

export default Demo;