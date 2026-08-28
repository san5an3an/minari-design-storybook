// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[19] ("Auto height")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useEffect, useRef, useState } from 'react';
import { Flex, Switch, Table } from 'antd';
import type { GetRef, TableColumnsType, TableProps } from 'antd';

// ===================== HOC =====================
const measureClassNames = {
  header: 'measure-header',
  pagination: 'measure-pagination',
};

const tableClassNames = {
  header: {
    wrapper: measureClassNames.header,
  },
  pagination: {
    root: measureClassNames.pagination,
  },
};

type AutoHeightTableProps<RecordType extends object> = Omit<
  TableProps<RecordType>,
  'styles' | 'classNames'
>;

const AutoHeightTable = <RecordType extends object>(props: AutoHeightTableProps<RecordType>) => {
  const { scroll, style, ...restProps } = props;
  const rootRef = useRef<GetRef<typeof Table>>(null);
  const [scrollY, setScrollY] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  const getHeight = (className: string | HTMLElement) => {
    const ele =
      typeof className === 'string'
        ? rootRef.current?.nativeElement?.querySelector<HTMLElement>(`.${className}`)
        : className;

    if (ele) {
      const styles = getComputedStyle(ele);
      const marginTop = Number.parseFloat(styles.marginTop) || 0;
      const marginBottom = Number.parseFloat(styles.marginBottom) || 0;

      return ele.getBoundingClientRect().height + marginTop + marginBottom;
    }

    return 0;
  };

  useEffect(() => {
    const element = rootRef.current?.nativeElement;

    if (!element) {
      return;
    }

    const measure = () => {
      const totalHeight = getHeight(element);
      const headerHeight = getHeight(measureClassNames.header);
      const paginationHeight = getHeight(measureClassNames.pagination);

      setScrollY(Math.max(0, Math.floor(totalHeight - headerHeight - paginationHeight)));
      setSectionHeight(totalHeight - paginationHeight);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Table<RecordType>
      {...restProps}
      ref={rootRef}
      scroll={{ ...scroll, y: scrollY }}
      style={{ ...style, height: '100%' }}
      styles={{
        section: {
          height: sectionHeight,
        },
      }}
      classNames={tableClassNames}
    />
  );
};

// ==================== Usage ====================

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: '이름',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: '나이',
    dataIndex: 'age',
    width: '20%',
  },
  {
    title: '주소',
    dataIndex: 'address',
    width: '60%',
  },
];

const genData = (length: number): DataType[] => {
  return Array.from({ length }).map<DataType>((_, index) => ({
    key: index,
    name: `준서 킹 ${index}`,
    age: 32 + index,
    address: `서울 공원로 ${index}`,
  }));
};

const dataMore = genData(30);
const dataLess = genData(2);

const App: React.FC = () => {
  const [hasData, setHasData] = useState(true);

  const mergedData = hasData ? dataMore : dataLess;

  return (
    <Flex vertical gap="middle" align="start">
      <Switch
        checked={hasData}
        checkedChildren="데이터 더 보기"
        unCheckedChildren="데이터 더 보기"
        onChange={setHasData}
      />
      <div
        style={{
          height: 400,
          boxSizing: 'border-box',
          background: 'rgba(140, 140, 140, 0.03)',
          padding: 16,
          alignSelf: 'stretch',
        }}
      >
        <AutoHeightTable<DataType> columns={columns} dataSource={mergedData} />
      </div>
    </Flex>
  );
};

export default App;