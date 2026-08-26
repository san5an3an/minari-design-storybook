/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/calendar.json 의 examples[8] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Calendar, Flex } from 'antd';
import type { CalendarProps, GetProp } from 'antd';
import { createStyles } from 'antd-style';
import type { Dayjs } from 'dayjs';

const useStyles = createStyles(({ token }) => ({
  root: {
    padding: 10,
    backgroundColor: token.colorPrimaryBg,
  },
}));

const stylesObject: CalendarProps<Dayjs>['styles'] = {
  root: {
    borderRadius: 8,
    width: 600,
  },
};

const stylesFunction: CalendarProps<Dayjs>['styles'] = ( info, ): GetProp<CalendarProps<Dayjs>, 'styles', 'Return'> => {
  if (info.props.fullscreen) {
    return {
      root: {
        border: '2px solid #BDE3C3',
        borderRadius: 10,
        backgroundColor: 'rgba(189,227,195, 0.3)',
      },
    };
  }
};

const App: React.FC = () => {
  const { styles: classNames } = useStyles();
  return (
    <Flex vertical gap="medium">
      <Calendar fullscreen={false} classNames={classNames} styles={stylesObject} />
      <Calendar classNames={classNames} styles={stylesFunction} />
    </Flex>
  );
};

export default App;