/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/slider.json 의 examples[2] ("Slider with icon")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { FrownOutlined, SmileOutlined } from '../_icons';
import { Flex, Slider } from 'antd';
import { createStyles } from 'antd-style';
import { clsx } from 'clsx';

const useStyles = createStyles((props) => {
  const { css, iconPrefixCls, cssVar } = props;
  return {
    wrapper: css`
      position: relative;
      .${iconPrefixCls} {
        color: ${cssVar.colorTextQuaternary};
        font-size: ${cssVar.fontSizeLG};
        transition: color ${cssVar.motionDurationFast} ${cssVar.motionEaseInOutCirc};
        &.isActive {
          color: ${cssVar.colorPrimary};
        }
      }
    `,
    slider: css`
      flex: 1;
      width: 100%;
    `,
  };
});

interface IconSliderProps {
  max: number;
  min: number;
}

const IconSlider: React.FC<IconSliderProps> = (props) => {
  const { max, min } = props;

  const { styles } = useStyles();

  const [value, setValue] = useState(0);

  const mid = Number(((max - min) / 2).toFixed(5));

  return (
    <Flex justify="space-between" align="center" gap="small" className={styles.wrapper}>
      <FrownOutlined className={clsx({ isActive: value < mid })} />
      <Slider {...props} onChange={setValue} value={value} className={styles.slider} />
      <SmileOutlined className={clsx({ isActive: value >= mid })} />
    </Flex>
  );
};

const App: React.FC = () => <IconSlider min={0} max={20} />;

export default App;