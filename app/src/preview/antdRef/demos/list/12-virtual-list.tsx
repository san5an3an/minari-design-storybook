// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/list.json 의 examples[12] ("virtual list")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useEffect, useState } from 'react';
import VirtualList from '@rc-component/virtual-list';
import { Avatar, List, message } from 'antd';

interface UserItem {
  email: string;
  gender: string;
  name: string;
  avatar: string;
}

const CONTAINER_HEIGHT = 400;
const PAGE_SIZE = 20;

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [data, setData] = useState<UserItem[]>([]);
  const [page, setPage] = useState(1);

  const appendData = (showMessage = true) => {
    const fakeDataUrl = `https://660d2bd96ddfa2943b33731c.mockapi.io/api/users/?page=${page}&limit=${PAGE_SIZE}`;
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        const results = Array.isArray(body) ? body : [];
        setData(data.concat(results));
        setPage(page + 1);
        showMessage && messageApi.success(`${results.length}개를 더 불러왔어요!`);
      })
      .catch(() => {
        console.log('가짜 데이터를 못 받았어요');
      });
  };

  useEffect(() => {
    appendData(false);
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    if (
      Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - CONTAINER_HEIGHT) <= 1
    ) {
      appendData();
    }
  };

  return (
    <>
      {contextHolder}
      <List>
        <VirtualList
          data={data}
          height={CONTAINER_HEIGHT}
          itemHeight={47}
          itemKey="email"
          onScroll={onScroll}
        >
          {(item: UserItem) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.email}
              />
              <div>내용</div>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </>
  );
};

export default App;