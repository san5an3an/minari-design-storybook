// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/button.json 의 examples[1] ("Color & Variant")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Button, ConfigProvider, Flex } from 'antd';
import { useResponsive } from 'antd-style';

const App: React.FC = () => {
  const { xxl } = useResponsive();

  return (
    <ConfigProvider componentSize={xxl ? 'medium' : 'small'}>
      <Flex vertical gap="small">
        <Flex gap="small" wrap>
          <Button color="default" variant="solid">
            단색
          </Button>
          <Button color="default" variant="outlined">
            테두리
          </Button>
          <Button color="default" variant="dashed">
            파선
          </Button>
          <Button color="default" variant="filled">
            채움
          </Button>
          <Button color="default" variant="text">
            글자
          </Button>
          <Button color="default" variant="link">
            링크
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="primary" variant="solid">
            단색
          </Button>
          <Button color="primary" variant="outlined">
            테두리
          </Button>
          <Button color="primary" variant="dashed">
            파선
          </Button>
          <Button color="primary" variant="filled">
            채움
          </Button>
          <Button color="primary" variant="text">
            글자
          </Button>
          <Button color="primary" variant="link">
            링크
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="danger" variant="solid">
            단색
          </Button>
          <Button color="danger" variant="outlined">
            테두리
          </Button>
          <Button color="danger" variant="dashed">
            파선
          </Button>
          <Button color="danger" variant="filled">
            채움
          </Button>
          <Button color="danger" variant="text">
            글자
          </Button>
          <Button color="danger" variant="link">
            링크
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="pink" variant="solid">
            단색
          </Button>
          <Button color="pink" variant="outlined">
            테두리
          </Button>
          <Button color="pink" variant="dashed">
            파선
          </Button>
          <Button color="pink" variant="filled">
            채움
          </Button>
          <Button color="pink" variant="text">
            글자
          </Button>
          <Button color="pink" variant="link">
            링크
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="purple" variant="solid">
            단색
          </Button>
          <Button color="purple" variant="outlined">
            테두리
          </Button>
          <Button color="purple" variant="dashed">
            파선
          </Button>
          <Button color="purple" variant="filled">
            채움
          </Button>
          <Button color="purple" variant="text">
            글자
          </Button>
          <Button color="purple" variant="link">
            링크
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="cyan" variant="solid">
            단색
          </Button>
          <Button color="cyan" variant="outlined">
            테두리
          </Button>
          <Button color="cyan" variant="dashed">
            파선
          </Button>
          <Button color="cyan" variant="filled">
            채움
          </Button>
          <Button color="cyan" variant="text">
            글자
          </Button>
          <Button color="cyan" variant="link">
            링크
          </Button>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};

export default App;