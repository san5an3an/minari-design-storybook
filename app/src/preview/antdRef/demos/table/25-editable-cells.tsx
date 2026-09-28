// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[25] ("Editable Cells")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useContext, useEffect, useRef, useState } from 'react';
import type { GetRef, InputRef, TableProps } from 'antd';
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
  const { css, cssVar } = props;
  return {
    editableRow: css`
      position: relative;
      .editable-cell-value-wrap {
        cursor: pointer;
        padding: ${cssVar.paddingXXS} ${cssVar.paddingSM};
        border-width: ${cssVar.lineWidth};
        border-style: ${cssVar.lineType};
        border-color: transparent;
        border-radius: ${cssVar.borderRadiusSM};
        transition: all ${cssVar.motionDurationFast} ${cssVar.motionEaseInOut};
      }
      &:hover {
        .editable-cell-value-wrap {
          border-color: ${cssVar.colorBorder};
        }
      }
    `,
  };
});

type FormInstance<T> = GetRef<typeof Form<T>>;

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  key: string;
  name: string;
  age: string;
  address: string;
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = (props) => {
  const { title, editable, children, dataIndex, record, handleSave, ...restProps } = props;

  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing((prev) => !prev);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('저장 실패:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[{ required: true, message: `${title} 은 꼭 필요해요.` }]}
      >
        <Input ref={inputRef} variant="filled" onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingInlineEnd: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

interface DataType {
  key: React.Key;
  name: string;
  age: string;
  address: string;
}

type ColumnTypes = Exclude<TableProps<DataType>['columns'], undefined>;

const App: React.FC = () => {
  const { styles } = useStyles();

  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: '0',
      name: '준서 킹 0',
      age: '32',
      address: '서울 공원로 0',
    },
    {
      key: '1',
      name: '준서 킹 1',
      age: '32',
      address: '서울 공원로 1',
    },
  ]);

  const [count, setCount] = useState(2);

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: '작업',
      dataIndex: '작업',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="정말 지울까요?" onConfirm={() => handleDelete(record.key)}>
            <a>지우기</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleAdd: React.MouseEventHandler<HTMLElement> = () => {
    const newData: DataType = {
      key: count,
      name: `준서 킹 ${count}`,
      age: '32',
      address: `서울 공원로 ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount((prevCount) => prevCount + 1);
  };

  const handleSave = (row: DataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    if (index !== -1) {
      const item = newData[index];
      newData.splice(index, 1, { ...item, ...row });
      setDataSource(newData);
    }
  };

  const components = {
    body: { row: EditableRow, cell: EditableCell },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <div>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        행 추가
      </Button>
      <Table<DataType>
        components={components}
        rowClassName={() => styles.editableRow}
        bordered dataSource={dataSource}
        columns={columns as ColumnTypes}
      />
    </div>
  );
};

export default App;