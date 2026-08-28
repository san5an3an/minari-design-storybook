// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/popconfirm.json 의 examples[2] ("Placement")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, ConfigProvider, Flex, Popconfirm } from 'antd';

const text = '이 일을 지울까요?';
const description = '이 일을 지워요';
const buttonWidth = 80;

const App: React.FC = () => (
  <ConfigProvider button={{ style: { width: buttonWidth, margin: 4 } }}>
    <Flex vertical justify="center" align="center" className="demo">
      <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
        <Popconfirm
          placement="topLeft"
          title={text}
          description={description}
          okText="네"
          cancelText="아니요"
        >
          <Button>TL</Button>
        </Popconfirm>
        <Popconfirm
          placement="top"
          title={text}
          description={description}
          okText="네"
          cancelText="아니요"
        >
          <Button>위</Button>
        </Popconfirm>
        <Popconfirm
          placement="topRight"
          title={text}
          description={description}
          okText="네"
          cancelText="아니요"
        >
          <Button>TR</Button>
        </Popconfirm>
      </Flex>
      <Flex style={{ width: buttonWidth * 5 + 32 }} justify="space-between" align="center">
        <Flex align="center" vertical>
          <Popconfirm
            placement="leftTop"
            title={text}
            description={description}
            okText="네"
            cancelText="아니요"
          >
            <Button>LT</Button>
          </Popconfirm>
          <Popconfirm
            placement="left"
            title={text}
            description={description}
            okText="네"
            cancelText="아니요"
          >
            <Button>왼쪽</Button>
          </Popconfirm>
          <Popconfirm
            placement="leftBottom"
            title={text}
            description={description}
            okText="네"
            cancelText="아니요"
          >
            <Button>LB</Button>
          </Popconfirm>
        </Flex>
        <Flex align="center" vertical>
          <Popconfirm
            placement="rightTop"
            title={text}
            description={description}
            okText="네"
            cancelText="아니요"
          >
            <Button>RT</Button>
          </Popconfirm>
          <Popconfirm
            placement="right"
            title={text}
            description={description}
            okText="네"
            cancelText="아니요"
          >
            <Button>오른쪽</Button>
          </Popconfirm>
          <Popconfirm
            placement="rightBottom"
            title={text}
            description={description}
            okText="네"
            cancelText="아니요"
          >
            <Button>RB</Button>
          </Popconfirm>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
        <Popconfirm
          placement="bottomLeft"
          title={text}
          description={description}
          okText="네"
          cancelText="아니요"
        >
          <Button>BL</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottom"
          title={text}
          description={description}
          okText="네"
          cancelText="아니요"
        >
          <Button>아래</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottomRight"
          title={text}
          description={description}
          okText="네"
          cancelText="아니요"
        >
          <Button>BR</Button>
        </Popconfirm>
      </Flex>
    </Flex>
  </ConfigProvider>
);

export default App;