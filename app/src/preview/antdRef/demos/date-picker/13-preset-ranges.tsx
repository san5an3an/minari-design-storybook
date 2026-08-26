/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/date-picker.json 의 examples[13] ("Preset Ranges")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import type { TimeRangePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

const onChange = (date: Dayjs | null) => {
  if (date) {
    console.log('날짜: ', date);
  } else {
    console.log('지우기');
  }
};

const onRangeChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
  if (dates) {
    console.log('시작: ', dates[0], ', 끝: ', dates[1]);
    console.log('시작: ', dateStrings[0], ', 끝: ', dateStrings[1]);
  } else {
    console.log('지우기');
  }
};

const rangePresets: TimeRangePickerProps['presets'] = [
  { label: '최근 7일', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: '최근 14일', value: [dayjs().add(-14, 'd'), dayjs()] },
  { label: '최근 30일', value: [dayjs().add(-30, 'd'), dayjs()] },
  { label: '최근 90일', value: [dayjs().add(-90, 'd'), dayjs()] },
];

const App: React.FC = () => (
  <Space vertical size={12}>
    <DatePicker
      presets={[
        { label: '어제', value: dayjs().add(-1, 'd') },
        { label: '지난주', value: dayjs().add(-7, 'd') },
        { label: '지난달', value: dayjs().add(-1, 'month') },
      ]}
      onChange={onChange}
    />
    <RangePicker presets={rangePresets} onChange={onRangeChange} />
    <RangePicker
      presets={[
        {
          label: <span aria-label="지금부터 오늘 끝까지">지금 ~ 오늘 끝</span>,
          value: () => [dayjs(), dayjs().endOf('day')], // 5.8.0+ support function
        },
        ...rangePresets,
      ]}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onRangeChange}
    />
  </Space>
);

export default App;