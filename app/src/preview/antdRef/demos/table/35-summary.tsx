// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[35] ("Summary")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Table, Typography } from 'antd';
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

const { Text } = Typography;

interface DataType {
  key: string;
  name: string;
  borrow: number;
  repayment: number;
}

interface FixedDataType {
  key: React.Key;
  name: string;
  description: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: '이름',
    dataIndex: 'name',
  },
  {
    title: 'Borrow',
    dataIndex: 'borrow',
  },
  {
    title: 'Repayment',
    dataIndex: 'repayment',
  },
];

const dataSource: DataType[] = [
  {
    key: '1',
    name: '김민준',
    borrow: 10,
    repayment: 33,
  },
  {
    key: '2',
    name: '이서준',
    borrow: 100,
    repayment: 0,
  },
  {
    key: '3',
    name: '박지호',
    borrow: 10,
    repayment: 10,
  },
  {
    key: '4',
    name: '이서윤',
    borrow: 75,
    repayment: 45,
  },
];

const fixedColumns: TableColumnsType<FixedDataType> = [
  {
    title: '이름',
    dataIndex: 'name',
    fixed: true,
    width: 100,
  },
  {
    title: '설명',
    dataIndex: 'description',
  },
];

const fixedDataSource = Array.from({ length: 20 }).map<FixedDataType>((_, i) => ({
  key: i,
  name: ['라이트', '하은', '조금'][i % 3],
  description: 'Everything that has a beginning, has an end.',
}));

const App: React.FC = () => {
  const { styles } = useStyle();
  return (
    <Flex vertical gap="small">
      <Table<DataType>
        bordered
        className={styles.customTable}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        summary={(pageData) => {
          let totalBorrow = 0;
          let totalRepayment = 0;
          pageData.forEach(({ borrow, repayment }) => {
            totalBorrow += borrow;
            totalRepayment += repayment;
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>
                  <Text type="danger">{totalBorrow}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <Text>{totalRepayment}</Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Balance</Table.Summary.Cell>
                <Table.Summary.Cell index={1} colSpan={2}>
                  <Text type="danger">{totalBorrow - totalRepayment}</Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
      <Table<FixedDataType>
        className={styles.customTable}
        columns={fixedColumns}
        dataSource={fixedDataSource}
        pagination={false}
        scroll={{ x: 2000, y: 500 }}
        bordered
        summary={() => (
          <Table.Summary fixed>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>Summary</Table.Summary.Cell>
              <Table.Summary.Cell index={1}>This is a summary content</Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
    </Flex>
  );
};

export default App;