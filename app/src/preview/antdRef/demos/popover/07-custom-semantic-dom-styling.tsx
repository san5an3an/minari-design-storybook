// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/popover.json 의 examples[7] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, Flex, Popover } from 'antd';
import type { GetProp, PopoverProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  container: css`
    padding: 10px;
  `,
}));

const styles: PopoverProps['styles'] = {
  container: {
    background: '#eee',
    boxShadow: 'inset 5px 5px 3px #fff, inset -5px -5px 3px #ddd, 0 0 3px rgba(0,0,0,0.2)',
  }, content: {
    color: '#262626',
  },
};

const stylesFn: PopoverProps['styles'] = (info): GetProp<PopoverProps, 'styles', 'Return'> => {
  if (!info.props.arrow) {
    return {
      container: {
        backgroundColor: 'rgba(53, 71, 125, 0.8)',
        padding: 12,
        borderRadius: 4,
      }, content: {
        color: '#fff',
      },
    };
  }
};

const App: React.FC = () => {
  return (
    <Flex gap="medium">
      <Popover content="객체 글" classNames={classNames} styles={styles} arrow={false}>
        <Button>객체 스타일</Button>
      </Popover>
      <Popover content="함수 글" classNames={classNames} styles={stylesFn} arrow={false}>
        <Button type="primary">함수 스타일</Button>
      </Popover>
    </Flex>
  );
};

export default App;