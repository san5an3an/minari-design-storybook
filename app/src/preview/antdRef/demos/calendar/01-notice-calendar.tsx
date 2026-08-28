// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/calendar.json 의 examples[1] ("Notice Calendar")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import { createStyles } from 'antd-style';
import type { Dayjs } from 'dayjs';

const useStyles = createStyles((props) => {
  const { prefixCls, css } = props;
  return {
    events: css`
      margin: 0;
      padding: 0;
      list-style: none;
      .${prefixCls}-badge-status {
        width: 100%;
        overflow: hidden;
        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    `,
    notesMonth: css`
      font-size: 28px;
      text-align: center;
      section {
        font-size: 28px;
      }
    `,
  };
});

const getListData = (value: Dayjs) => {
  let listData: { type: string; content: string }[] = []; // Specify the type of listData
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: '경고 일정이에요.' },
        { type: 'success', content: '보통 일정이에요.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: '경고 일정이에요.' },
        { type: 'success', content: '보통 일정이에요.' },
        { type: 'error', content: '오류 일정이에요.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: '경고 일정이에요' },
        { type: 'success', content: '아주 긴 보통 일정이에요……' },
        { type: 'error', content: '오류 일정 1이에요.' },
        { type: 'error', content: '오류 일정 2예요.' },
        { type: 'error', content: '오류 일정 3이에요.' },
        { type: 'error', content: '오류 일정 4예요.' },
      ];
      break;
    default:
      break;
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
  return undefined;
};

const App: React.FC = () => {
  const { styles } = useStyles();

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className={styles.notesMonth}>
        <section>{num}</section>
        <span>남은 일 수</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className={styles.events}>
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') {
      return dateCellRender(current);
    }
    if (info.type === 'month') {
      return monthCellRender(current);
    }
    return info.originNode;
  };

  return <Calendar cellRender={cellRender} />;
};

export default App;