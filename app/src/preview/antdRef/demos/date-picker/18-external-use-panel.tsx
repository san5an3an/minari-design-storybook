/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/date-picker.json 의 examples[18] ("External use panel")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { DownOutlined } from '../_icons';
import { DatePicker, Dropdown, Space } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const DatePickerDemo: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [panelVisible, setPanelVisible] = React.useState(false);

  const [date, setDate] = React.useState<Dayjs | null>(() => dayjs());

  return (
    <Dropdown
      arrow
      open={visible}
      trigger={['click']}
      destroyOnHidden
      onOpenChange={(open) => {
        setVisible(open);
        if (!open) {
          setPanelVisible(false);
        }
      }}
      menu={{
        items: [
          {
            key: 'today',
            label: '오늘',
            onClick() {
              setDate(dayjs());
              setVisible(false);
            },
          },
          {
            key: 'tomorrow',
            label: '내일',
            onClick() {
              setDate(dayjs().add(1, 'day'));
              setVisible(false);
            },
          },
          {
            key: 'custom-date',
            label: (
              <div
                style={{ position: 'relative', overflow: 'hidden' }}
                onClick={(e) => {
                  e.stopPropagation();
                  setPanelVisible(true);
                }}
              >
                <div>직접 정하기</div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <DatePicker
                    open={panelVisible}
                    styles={{
                      root: {
                        pointerEvents: 'none',
                        opacity: 0,
                        position: 'absolute',
                        bottom: -12,
                        insetInlineStart: 0,
                      },
                    }}
                    onChange={(date) => {
                      setDate(date);
                      setVisible(false);
                      setPanelVisible(false);
                    }}
                  />
                </div>
              </div>
            ),
          },
        ],
      }}
    >
      <Space>
        <span>{date?.format('YYYY-MM-DD')}</span>
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

const RangePickerDemo: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [panelVisible, setPanelVisible] = React.useState(false);

  const [dates, setDates] = React.useState<[Dayjs, Dayjs] | null>(() => [
    dayjs(),
    dayjs().add(1, 'day'),
  ]);

  return (
    <Dropdown
      arrow
      open={visible}
      trigger={['click']}
      destroyOnHidden
      onOpenChange={(open) => {
        setVisible(open);
        if (!open) {
          setPanelVisible(false);
        }
      }}
      menu={{
        items: [
          {
            key: '7',
            label: '7 days',
            onClick() {
              setDates([dayjs(), dayjs().add(7, 'day')]);
              setVisible(false);
            },
          },
          {
            key: '30',
            label: '30 days',
            onClick() {
              setDates([dayjs(), dayjs().add(30, 'day')]);
              setVisible(false);
            },
          },
          {
            key: 'custom-date',
            label: (
              <div
                style={{ position: 'relative', overflow: 'hidden' }}
                onClick={(e) => {
                  e.stopPropagation();
                  setPanelVisible(true);
                }}
              >
                <div>직접 정하기</div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <DatePicker.RangePicker
                    open={panelVisible}
                    styles={{
                      root: {
                        pointerEvents: 'none',
                        opacity: 0,
                        position: 'absolute',
                        bottom: 0, // RangePicker use this style
                        insetInlineStart: 0,
                      },
                    }}
                    onChange={(ranges) => {
                      if (ranges?.[0] && ranges?.[1]) {
                        setDates([ranges[0], ranges[1]]);
                      } else {
                        setDates(null);
                      }
                      setVisible(false);
                      setPanelVisible(false);
                    }}
                  />
                </div>
              </div>
            ),
          },
        ],
      }}
    >
      <Space>
        <span>
          {dates
            ? `${dates[0].format('YYYY-MM-DD')} ~ ${dates[1].format('YYYY-MM-DD')}`
            : '범위 고르기'}
        </span>
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

const Demo = () => {
  return (
    <div style={{ display: 'flex', gap: '20%' }}>
      <div>
        <div style={{ marginBottom: 12 }}>DatePicker</div>
        <DatePickerDemo />
      </div>

      <div>
        <div style={{ marginBottom: 12 }}>RangePicker</div>
        <RangePickerDemo />
      </div>
    </div>
  );
};

export default Demo;