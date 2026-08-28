// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/calendar.json 의 examples[2] ("Event Range")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';
import { createStyles } from 'antd-style';
import { clsx } from 'clsx';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const useStyle = createStyles(({ cssVar, css }) => {
  const barRadius = 999;

  const {
    controlHeight,
    marginXXS,
    controlHeightSM,
    colorTextLightSolid,
    fontSizeSM,
    paddingXS,
    marginXS,
    paddingXXS,
  } = cssVar;

  return {
    itemContent: css`
      overflow: visible;
    `,
    cell: css`
      min-height: ${controlHeight};
    `,
    list: css`
      display: flex;
      flex-direction: column;
      gap: ${marginXXS};
      margin-top: ${marginXXS};
    `,
    bar: css`
      display: block;
      height: calc(${controlHeightSM} - ${marginXXS});
      overflow: hidden;
      color: ${colorTextLightSolid};
      font-size: ${fontSizeSM};
      white-space: nowrap;
      text-overflow: ellipsis;
    `,
    barStart: css`
      margin-inline-end: calc(-1 * (${paddingXS} + ${marginXS} / 2));
      padding-inline-start: calc(${paddingXXS} + ${paddingXXS});
      border-start-start-radius: ${barRadius}px;
      border-end-start-radius: ${barRadius}px;
    `,
    barMiddle: css`
      margin-inline: calc(-1 * (${paddingXS} + ${marginXS} / 2));
    `,
    barEnd: css`
      margin-inline-start: calc(-1 * (${paddingXS} + ${marginXS} / 2));
      border-start-end-radius: ${barRadius}px;
      border-end-end-radius: ${barRadius}px;
    `,
    barSingle: css`
      padding-inline-start: calc(${paddingXXS} + ${paddingXXS});
      border-radius: ${barRadius}px;
    `,
  };
});

export interface CalendarEvent {
  key: string;
  title: string;
  start: Dayjs;
  end: Dayjs;
  color: string;
}

const getEvents = (token: ReturnType<typeof theme.useToken>['token']): CalendarEvent[] => [
  {
    key: 'release',
    title: '배포 창',
    start: dayjs('2026-01-08'),
    end: dayjs('2026-01-10'),
    color: token.colorPrimary,
  },
  {
    key: 'design-review',
    title: '디자인 검토',
    start: dayjs('2026-01-14'),
    end: dayjs('2026-01-14'),
    color: token.colorSuccess,
  },
  {
    key: 'maintenance',
    title: '점검',
    start: dayjs('2026-01-21'),
    end: dayjs('2026-01-24'),
    color: token.colorWarning,
  },
  {
    key: 'bug-fix',
    title: '버그 고침',
    start: dayjs('2026-01-30'),
    end: dayjs('2026-01-31'),
    color: token.colorError,
  },
];

const isInRange = (current: Dayjs, event: CalendarEvent) => {
  return !current.isBefore(event.start, 'day') && !current.isAfter(event.end, 'day');
};

const getRangePosition = (current: Dayjs, event: CalendarEvent) => {
  const starts = current.isSame(event.start, 'day');
  const ends = current.isSame(event.end, 'day');

  if (starts && ends) {
    return 'single';
  }

  if (starts) {
    return 'start';
  }

  if (ends) {
    return 'end';
  }

  return 'middle';
};

const App: React.FC = () => {
  const { token } = theme.useToken();
  const { styles } = useStyle();
  const events = React.useMemo(() => getEvents(token), [token]);

  const cellRender = React.useCallback<NonNullable<CalendarProps<Dayjs>['cellRender']>>(
    (current, info) => {
      if (info.type !== 'date') {
        return null;
      }

      const currentEvents = events.filter((event) => isInRange(current, event));

      return (
        <div className={styles.cell}>
          <div className={styles.list}>
            {currentEvents.map((event) => {
              const position = getRangePosition(current, event);
              const rangeClassName = {
                start: styles.barStart,
                middle: styles.barMiddle,
                end: styles.barEnd,
                single: styles.barSingle,
              }[position];
              return (
                <span
                  key={event.key}
                  className={clsx(styles.bar, rangeClassName)}
                  style={{ backgroundColor: event.color }}
                >
                  {position === 'start' || position === 'single' ? event.title : null}
                </span>
              );
            })}
          </div>
        </div>
      );
    },
    [events, styles],
  );

  return (
    <Calendar
      classNames={{ itemContent: styles.itemContent }}
      defaultValue={dayjs('2026-01-01')}
      cellRender={cellRender}
    />
  );
};

export default App;