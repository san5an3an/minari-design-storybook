/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/tree.json 의 examples[5] ("Tree with line")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { CarryOutOutlined, CheckOutlined, FormOutlined } from '../_icons';
import { Select, Switch, Tree } from 'antd';
import type { TreeDataNode } from 'antd';

const treeData: TreeDataNode[] = [
  {
    title: '부모 1',
    key: '0-0',
    icon: <CarryOutOutlined />, children: [
      {
        title: '부모 1-0',
        key: '0-0-0',
        icon: <CarryOutOutlined />, children: [
          { title: '잎', key: '0-0-0-0', icon: <CarryOutOutlined /> },
          {
            title: (
              <>
                <div>여러 줄 제목</div>
                <div>여러 줄 제목</div>
              </>
            ), key: '0-0-0-1', icon: <CarryOutOutlined />,
          },
          { title: '잎', key: '0-0-0-2', icon: <CarryOutOutlined /> },
        ],
      },
      {
        title: '부모 1-1',
        key: '0-0-1',
        icon: <CarryOutOutlined />, children: [{ title: '잎', key: '0-0-1-0', icon: <CarryOutOutlined /> }],
      },
      {
        title: '부모 1-2',
        key: '0-0-2',
        icon: <CarryOutOutlined />, children: [
          { title: '잎', key: '0-0-2-0', icon: <CarryOutOutlined /> },
          {
            title: '잎',
            key: '0-0-2-1',
            icon: <CarryOutOutlined />, switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: '부모 2',
    key: '0-1',
    icon: <CarryOutOutlined />, children: [
      {
        title: '부모 2-0',
        key: '0-1-0',
        icon: <CarryOutOutlined />, children: [
          { title: '잎', key: '0-1-0-0', icon: <CarryOutOutlined /> },
          { title: '잎', key: '0-1-0-1', icon: <CarryOutOutlined /> },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [showLine, setShowLine] = useState<boolean>(true);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showLeafIcon, setShowLeafIcon] = useState<React.ReactNode>(true);

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  const handleLeafIconChange = (value: 'true' | 'false' | 'custom') => {
    if (value === 'custom') {
      return setShowLeafIcon(<CheckOutlined />);
    }

    if (value === 'true') {
      return setShowLeafIcon(true);
    }

    return setShowLeafIcon(false);
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        showLine:{' '}
        <Switch aria-label="잇는 선 보이기" checked={!!showLine} onChange={setShowLine} />
        <br />
        <br />
        showIcon: <Switch aria-label="마디 아이콘 보이기" checked={showIcon} onChange={setShowIcon} />
        <br />
        <br />
        showLeafIcon:{' '}
        <Select
          aria-label="잎 아이콘"
          defaultValue="true"
          onChange={handleLeafIconChange}
          options={[
            { label: 'True', value: 'true' },
            { label: 'False', value: 'false' },
            { label: '직접 정한 아이콘', value: 'custom' },
          ]}
        />
      </div>
      <Tree
        showLine={showLine ? { showLeafIcon } : false}
        showIcon={showIcon}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
};

export default App;