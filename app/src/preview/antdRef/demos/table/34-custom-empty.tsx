/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[34] ("Custom empty")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import type { GetProp } from 'antd';
import { Button, ConfigProvider, Empty, Table } from 'antd';

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
}

const genFakeData = (count = 5) =>
  Array.from({ length: count }).map<DataType>((_, index) => ({
    key: index,
    name: `준서 킹 ${index}`,
    age: 32 + index,
    address: `서울 공원로 ${index}`,
  }));

const renderEmpty: GetProp<typeof ConfigProvider, 'renderEmpty'> = (componentName) => {
  if (componentName === 'Table.filter' /** 👈 5.20.0+ */) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="거르기 없음(직접)" />;
  }
};

function App() {
  const [dataSource, setDataSource] = useState<DataType[]>(genFakeData);

  const handleToggle = () => {
    setDataSource(dataSource.length ? [] : genFakeData(Math.floor(Math.random() * 10)));
  };

  const columns: GetProp<typeof Table<DataType>, 'columns'> = [
    {
      title: '이름',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '나이',
      dataIndex: 'age',
      key: 'age',
      filters: dataSource.length
        ? [
            { text: '>=35', value: 'gte35' },
            { text: '<18', value: 'lt18' },
          ]
        : [],
    },
    {
      title: '주소',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const toggleButton = (
    <Button type="primary" onClick={handleToggle}>
      데이터 바꾸기
    </Button>
  );

  return (
    <ConfigProvider renderEmpty={renderEmpty}>
      {dataSource.length ? toggleButton : null}
      <div style={{ marginBlock: 8 }} />
      <Table<DataType>
        bordered dataSource={dataSource}
        columns={columns}
        locale={{ emptyText: <Empty description="데이터 없음">{toggleButton}</Empty> }}
      />
    </ConfigProvider>
  );
}

export default App;