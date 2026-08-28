// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[39] ("Fixed header and scroll bar with the page")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { Switch, Table } from 'antd';
import type { TableColumnsType } from 'antd';

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
    key: 'name',
    fixed: 'start',
  },
  {
    title: '나이',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'start',
  },
  {
    title: '열 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: '열 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: '열 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: '열 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: '열 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: '열 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: '열 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  { title: '열 8', dataIndex: 'address', key: '8' },
  {
    title: '동작',
    key: '작업',
    fixed: 'end',
    width: 100,
    render: () => <a>동작</a>,
  },
];

const dataSource = Array.from({ length: 100 }).map<DataType>((_, i) => ({
  key: i,
  name: `준서 ${i}`,
  age: 32,
  address: `서울 공원로 ${i}`,
}));

const App: React.FC = () => {
  const [fixedTop, setFixedTop] = useState(false);
  return (
    <Table<DataType>
      columns={columns}
      dataSource={dataSource}
      scroll={{ x: 1500 }}
      summary={() => (
        <Table.Summary fixed={fixedTop ? 'top' : 'bottom'}>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={2}>
              <Switch
                checkedChildren="위에 고정"
                unCheckedChildren="위에 고정"
                checked={fixedTop}
                onChange={() => {
                  setFixedTop(!fixedTop);
                }}
              />
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} colSpan={8}>
              굴림 맥락
            </Table.Summary.Cell>
            <Table.Summary.Cell index={10}>오른쪽 고정</Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
      // antd site header height
      sticky={{ offsetHeader: 64 }}
    />
  );
};

export default App;