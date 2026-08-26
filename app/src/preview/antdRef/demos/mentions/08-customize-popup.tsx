/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/mentions.json 의 examples[8] ("Customize Popup")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Divider, Mentions, theme } from 'antd';

const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <Mentions
      style={{ width: '100%' }}
      popupRender={(menu) => (
        <>
          <div
            style={{
              padding: `${token.paddingXS}px ${token.paddingSM}px`,
              fontWeight: token.fontWeightStrong,
              color: token.colorTextDescription,
            }}
          >
            직접 만든 머리
          </div>
          <Divider style={{ margin: `${token.marginXXS}px 0` }} />
          {menu}
        </>
      )}
      options={[
        {
          value: 'afc163',
          label: 'afc163',
        },
        {
          value: 'zombieJ',
          label: 'zombieJ',
        },
        {
          value: 'yesmeck',
          label: 'yesmeck',
        },
      ]}
    />
  );
};

export default App;