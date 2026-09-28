// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/dropdown.json 의 examples[15] ("Selection actions")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useRef, useState } from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, message } from 'antd';
import { createStyles } from 'antd-style';
import type { ItemType } from 'antd/es/menu/interface';

interface SelectionInfo {
  text: string;
  x: number;
  y: number;
}

const labels: Record<string, string> = {
  mask: '가릴 낱말',
  mark: '표시할 낱말',
  search: '찾을 낱말',
};

const useStyle = createStyles(({ cssVar, css }) => {
  const { colorText, colorBgLayout, borderRadiusLG, paddingLG } = cssVar;
  return {
    wrapper: css`
      padding: ${paddingLG};
      user-select: text;
      color: ${colorText};
      background-color: ${colorBgLayout};
      border-radius: ${borderRadiusLG};
    `,
    trigger: css`
      position: fixed;
      display: block;
      width: 1px;
      height: 1px;
      margin: 0;
      padding: 0;
      pointer-events: none;
    `,
  };
});

const items = Object.entries(labels).map<ItemType>(([key, label]) => ({ key, label }));

const Demo: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const { styles } = useStyle();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const [selection, setSelection] = useState<SelectionInfo | null>(null);

  const handleSelect = () => {
    const selectionInstance = window.getSelection();
    const selectedText = selectionInstance?.toString().trim();

    if (!selectionInstance || !selectedText || selectionInstance.rangeCount === 0) {
      setSelection(null);
      return;
    }

    const range = selectionInstance.getRangeAt(0);

    if (!wrapperRef.current?.contains(range.commonAncestorContainer)) {
      setSelection(null);
      return;
    }

    const rect = range.getBoundingClientRect();

    if (!rect.width || !rect.height) {
      setSelection(null);
      return;
    }

    setSelection({
      text: selectedText,
      x: rect.left + rect.width / 2,
      y: rect.bottom + 4,
    });
  };

  const handleMouseUp: React.MouseEventHandler<HTMLDivElement> = () => {
    setTimeout(handleSelect);
  };

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    if (!selection) {
      return;
    }
    messageApi.info(`${labels[key]}: ${selection.text}`);
    window.getSelection()?.removeAllRanges();
    setSelection(null);
  };

  return (
    <>
      {contextHolder}
      <Dropdown
        menu={{ items, onClick: handleMenuClick }}
        open={Boolean(selection)}
        placement="bottom"
        trigger={[]}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            setSelection(null);
          }
        }}
      >
        <span
          aria-hidden
          className={styles.trigger}
          style={{
            left: selection?.x ?? -9999,
            top: selection?.y ?? -9999,
          }}
        />
      </Dropdown>
      <div
        ref={wrapperRef}
        onMouseDown={() => setSelection(null)}
        onMouseUp={handleMouseUp}
        className={styles.wrapper}
      >
        이 문단에서 아무 글이나 골라 보세요. 고른 자리 옆에 Dropdown 이 떠요. 민감한 낱말을 가리거나, 대상을 표시하거나, 고른 낱말을 찾을 때 쓸 수 있어요. 예시 데이터: 김서연, 전화 010-1234-5678, 주민번호 900101-1234567.
      </div>
    </>
  );
};

export default Demo;