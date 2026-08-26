/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[36] ("Virtual list")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, Segmented, Space, Switch, Table, Typography } from 'antd';
import type { TableProps } from 'antd';

interface RecordType {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address1: string;
  address2: string;
  address3: string;
}

const fixedColumns: TableProps<RecordType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    fixed: 'start',
  },
  {
    title: '이름',
    dataIndex: 'firstName',
    width: 120,
    fixed: 'start',
  },
  {
    title: '성',
    dataIndex: 'lastName',
    width: 120,
    fixed: 'start',
  },
  {
    title: '묶음',
    width: 120,
    render: (_, record) => `묶음 ${Math.floor(record.id / 4)}`,
    onCell: (record) => ({
      rowSpan: record.id % 4 === 0 ? 4 : 0,
    }),
  },
  {
    title: '나이',
    dataIndex: 'age',
    width: 100,
    onCell: (record) => ({
      colSpan: record.id % 4 === 0 ? 2 : 1,
    }),
  },
  {
    title: '주소 1',
    dataIndex: 'address1',
    onCell: (record) => ({
      colSpan: record.id % 4 === 0 ? 0 : 1,
    }),
  },
  {
    title: '주소 2',
    dataIndex: 'address2',
  },
  {
    title: '주소 3',
    dataIndex: 'address3',
  },
  {
    title: '동작',
    width: 150,
    fixed: 'end',
    render: () => (
      <Space>
        <Typography.Link>동작1</Typography.Link>
        <Typography.Link>동작2</Typography.Link>
      </Space>
    ),
  },
];

const columns: TableProps<RecordType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
  },
  {
    title: '이름',
    dataIndex: 'firstName',
    width: 120,
  },
  {
    title: '성',
    dataIndex: 'lastName',
  },
];

const getData = (length: number) =>
  Array.from({ length }).map<RecordType>((_, index) => ({
    id: index,
    firstName: `First_${index.toString(16)}`,
    lastName: `Last_${index.toString(16)}`,
    age: 25 + (index % 10),
    address1: `인천 호수공원 ${index}번지`,
    address2: `서울 호수공원 ${index}번지`,
    address3: `부산 호수공원 ${index}번지`,
  }));

const App: React.FC = () => {
  const [fixed, setFixed] = React.useState(true);
  const [bordered, setBordered] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  const [count, setCount] = React.useState(10000);

  const tblRef: Parameters<typeof Table>[0]['ref'] = React.useRef(null);

  const data = React.useMemo<RecordType[]>(() => getData(count), [count]);

  const mergedColumns = React.useMemo<typeof fixedColumns>(() => {
    if (!fixed) {
      return columns;
    }

    if (!expanded) {
      return fixedColumns;
    }

    return fixedColumns.map((col) => ({ ...col, onCell: undefined }));
  }, [expanded, fixed]);

  const expandableProps = React.useMemo<TableProps<RecordType>['expandable']>(() => {
    if (!expanded) {
      return undefined;
    }

    return {
      columnWidth: 48,
      expandedRowRender: (record) => <p style={{ margin: 0 }}>🎉 펼쳤어요 {record.address1}</p>,
      rowExpandable: (record) => record.id % 2 === 0,
    };
  }, [expanded]);

  return (
    <div style={{ padding: 64 }}>
      <Space vertical style={{ width: '100%' }}>
        <Space>
          <Switch
            checked={bordered}
            onChange={() => setBordered(!bordered)}
            checkedChildren="테두리 있음"
            unCheckedChildren="테두리 있음"
          />
          <Switch
            checked={fixed}
            onChange={() => setFixed(!fixed)}
            checkedChildren="고정"
            unCheckedChildren="고정"
          />
          <Switch
            checked={expanded}
            onChange={() => setExpanded(!expanded)}
            checkedChildren="펼칠 수 있음"
            unCheckedChildren="펼칠 수 있음"
          />
          <Switch
            checked={empty}
            onChange={() => setEmpty(!empty)}
            checkedChildren="비어 있음"
            unCheckedChildren="비어 있음"
          />
          <Segmented
            value={count}
            onChange={setCount}
            options={[
              { label: '없음', value: 0 },
              { label: '적게', value: 4 },
              { label: '자리', value: 10000 },
            ]}
          />

          {data.length >= 999 && (
            <Button onClick={() => tblRef.current?.scrollTo({ index: 999 })}>
              999번으로 굴러가기
            </Button>
          )}
        </Space>

        <Table<RecordType>
          bordered={bordered}
          virtual
          columns={mergedColumns}
          scroll={{ x: 2000, y: 400 }}
          rowKey="id"
          dataSource={empty ? [] : data}
          pagination={false}
          ref={tblRef}
          rowSelection={expanded ? undefined : { type: 'radio', columnWidth: 48 }}
          expandable={expandableProps}
        />
      </Space>
    </div>
  );
};

export default App;