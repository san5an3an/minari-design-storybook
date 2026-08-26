/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/border-beam.json 의 examples[1] ("Show on hover")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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