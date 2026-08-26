/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/mentions.json 의 examples[3] ("Asynchronous loading")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useCallback, useRef, useState } from 'react';
import { Mentions } from 'antd';
import { createStyles } from 'antd-style';
import debounce from 'lodash/debounce';

const useStyles = createStyles((props) => {
  const { css, cssVar } = props;
  return {
    optionItem: css`
      position: relative;
    `,
    avatarImage: css`
      width: 20px;
      height: 20px;
      margin-inline-end: ${cssVar.marginXS};
    `,
  };
});

const App: React.FC = () => {
  const { styles } = useStyles();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<{ login: string; avatar_url: string }[]>([]);
  const ref = useRef<string>(null);

  const loadGithubUsers = (key: string) => {
    if (!key) {
      setUsers([]);
      return;
    }

    fetch(`https://api.github.com/search/users?q=${key}`)
      .then((res) => res.json()) .then(({ items = [] }) => {
        if (ref.current !== key) {
          return;
        }
        setLoading(false);
        setUsers(items.slice(0, 10));
      });
  };

  const debounceLoadGithubUsers = useCallback(debounce(loadGithubUsers, 800), []);

  const onSearch = (search: string) => {
    console.log('찾기:', search);
    ref.current = search;
    setLoading(!!search);
    setUsers([]);

    debounceLoadGithubUsers(search);
  };

  return (
    <Mentions
      style={{ width: '100%' }}
      loading={loading}
      onSearch={onSearch}
      options={users.map(({ login, avatar_url: avatar }) => ({
        key: login,
        value: login,
        className: styles.optionItem,
        label: (
          <>
            <img
              className={styles.avatarImage}
              draggable={false}
              src={avatar}
              title={login}
              alt={login}
            />
            <span>{login}</span>
          </>
        ),
      }))}
    />
  );
};

export default App;