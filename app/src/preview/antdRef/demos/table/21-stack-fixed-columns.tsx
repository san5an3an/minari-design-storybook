// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[21] ("Stack Fixed Columns")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
          }
        }
      }
    `,
  };
});

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: '전체 이름',
    width: 100,
    dataIndex: 'name',
    fixed: 'start',
  },
  {
    title: '나이',
    width: 100,
    dataIndex: 'age',
  },
  { title: '열 1', dataIndex: 'address', key: '1', fixed: 'start' },
  { title: '열 2', dataIndex: 'address', key: '2' },
  { title: '열 3', dataIndex: 'address', key: '3' },
  { title: '열 4', dataIndex: 'address', key: '4' },
  { title: '열 5', dataIndex: 'address', key: '5' },
  { title: '열 6', dataIndex: 'address', key: '6' },
  { title: '열 7', dataIndex: 'address', key: '7' },
  { title: '열 8', dataIndex: 'address', key: '8' },
  { title: 'Column 9', dataIndex: 'address', key: '9' },
  { title: 'Column 10', dataIndex: 'address', key: '10' },
  { title: 'Column 11', dataIndex: 'address', key: '11' },
  { title: 'Column 12', dataIndex: 'address', key: '12' },
  { title: 'Column 13', dataIndex: 'address', key: '13' },
  { title: 'Column 14', dataIndex: 'address', key: '14' },
  { title: 'Column 15', dataIndex: 'address', key: '15' },
  { title: 'Column 16', dataIndex: 'address', key: '16' },
  { title: 'Column 17', dataIndex: 'address', key: '17' },
  { title: 'Column 18', dataIndex: 'address', key: '18' },
  { title: 'Column 19', dataIndex: 'address', key: '19' },
  { title: 'Column 20', dataIndex: 'address', key: '20' },
  {
    title: '동작 1',
    fixed: 'end',
    width: 90,
    render: () => <a>동작</a>,
  },
  {
    title: '동작 2',
    width: 90,
    render: () => <a>동작</a>,
  },
  {
    title: 'Action 3',
    fixed: 'end',
    width: 90,
    render: () => <a>동작</a>,
  },
];

const dataSource: DataType[] = [
  { key: '1', name: '지아', age: 32, address: '인천공원' },
  { key: '2', name: '이준', age: 40, address: '서울공원' },
];

const App: React.FC = () => {
  const { styles } = useStyle();
  return (
    <Table<DataType>
      bordered
      className={styles.customTable}
      columns={columns}
      dataSource={dataSource}
      scroll={{ x: 'max-content' }}
      pagination={false}
    />
  );
};

export default App;