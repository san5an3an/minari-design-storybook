// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/tabs.json 의 examples[9] ("Custom Popup Search")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useMemo, useRef, useState } from 'react';
import { Input, Menu, Tabs } from 'antd';
import { SearchOutlined } from '../_icons';
import { createStyles } from 'antd-style';
import type { TabsProps } from 'antd';

const useSearchPopupStyle = createStyles(({ token, css }) => ({
  container: css`
    width: 200px;
    background: ${token.colorBgContainer};
    box-shadow: ${token.boxShadow};
    border-radius: ${token.borderRadiusLG}px;
    overflow: hidden;
  `,
  searchWrapper: css`
    padding: ${token.paddingXS}px ${token.paddingSM}px;
    border-bottom: ${token.lineWidth}px ${token.lineType} ${token.colorBorder};
  `,
  menuWrapper: css`
    max-height: 300px;
    overflow-y: auto;
  `,
  empty: css`
    padding: ${token.paddingSM}px;
    color: ${token.colorTextDisabled};
    text-align: center;
  `,
}));

const items: TabsProps['items'] = Array.from({ length: 30 }, (_, i) => {
  const id = String(i);
  return {
    label: `Tab-${id}`,
    key: id,
    disabled: i === 28,
    children: `탭 ${id}의 내용`,
  };
});

const SearchPopup = ({
  restTabs,
  activeKey,
  onChange,
}: {
  restTabs: any[];
  activeKey: string;
  onChange: (key: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const menuRef = useRef<any>(null);
  const { styles } = useSearchPopupStyle();

  const fullTabs = useMemo(
    () => restTabs.map((item) => ({ key: item.key, label: item.label, disabled: item.disabled })),
    [restTabs],
  );

  const filterTabs = useMemo(
    () =>
      !searchTerm
        ? fullTabs
        : fullTabs.filter((tab) =>
            String(tab.label).toLowerCase().includes(searchTerm.toLowerCase()),
          ),
    [fullTabs, searchTerm],
  );

  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <Input
          placeholder="탭 찾기…"
          prefix={<SearchOutlined />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              menuRef.current?.focus();
            }
          }}
          allowClear
        />
      </div>
      <div className={styles.menuWrapper}>
        <Menu
          ref={menuRef}
          defaultSelectedKeys={[activeKey]}
          items={filterTabs}
          onClick={({ key }) => {
            setSearchTerm('');
            onChange(key);
          }}
        />
      </div>
      {filterTabs.length === 0 && <div className={styles.empty}>맞는 탭이 없어요</div>}
    </div>
  );
};

const App: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState('1');

  return (
    <Tabs
      activeKey={activeKey}
      onChange={setActiveKey}
      items={items}
      more={{
        trigger: 'click',
        placement: 'bottomLeft',
        popupRender: (_, { restTabs, onClose }) => (
          <SearchPopup
            restTabs={restTabs}
            activeKey={activeKey}
            onChange={(key) => {
              setActiveKey(key);
              onClose();
            }}
          />
        ),
      }}
    />
  );
};

export default App;