// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[27] ("Nested tables")
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
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Space, Table } from 'antd';

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

const items = [
  { key: '1', label: '동작 1' },
  { key: '2', label: '동작 2' },
];

const expandDataSource = Array.from({ length: 3 }).map<ExpandedDataType>((_, i) => ({
  key: i.toString(),
  date: '2014-12-24 23:12:00',
  name: '제품 이름이에요',
  upgradeNum: '업그레이드됨: 56',
}));

const dataSource = Array.from({ length: 3 }).map<DataType>((_, i) => ({
  key: i.toString(),
  name: '화면',
  platform: 'iOS',
  version: '10.3.4.5654',
  upgradeNum: 500,
  creator: '지훈',
  createdAt: '2014-12-24 23:12:00',
}));

const expandColumns: TableColumnsType<ExpandedDataType> = [
  { title: '날짜', dataIndex: 'date', key: 'date' },
  { title: '이름', dataIndex: 'name', key: 'name' },
  {
    title: '상태',
    key: 'state',
    render: () => <Badge status="success" text="끝남" />,
  },
  { title: '업그레이드 상태', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  {
    title: '동작',
    key: '작업',
    render: () => (
      <Space size="medium">
        <a>멈춤</a>
        <a>정지</a>
        <Dropdown menu={{ items }}>
          <a>
            더 보기 <DownOutlined />
          </a>
        </Dropdown>
      </Space>
    ),
  },
];

const columns: TableColumnsType<DataType> = [
  { title: '이름', dataIndex: 'name', key: 'name' },
  { title: '플랫폼', dataIndex: 'platform', key: 'platform' },
  { title: '버전', dataIndex: 'version', key: 'version' },
  { title: '업그레이드됨', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: '만든 이', dataIndex: 'creator', key: 'creator' },
  { title: '날짜', dataIndex: 'createdAt', key: 'createdAt' },
  { title: '동작', key: '작업', render: () => <a>올리기</a> },
];

const expandedRowRender = () => (
  <Table<ExpandedDataType>
    columns={expandColumns}
    dataSource={expandDataSource}
    pagination={false}
  />
);

const App: React.FC = () => (
  <>
    <Table<DataType>
      columns={columns}
      expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
      dataSource={dataSource}
    />
    <Table<DataType>
      columns={columns}
      expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
      dataSource={dataSource}
      size="medium"
    />
    <Table<DataType>
      columns={columns}
      expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
      dataSource={dataSource}
      size="small"
    />
  </>
);

export default App;