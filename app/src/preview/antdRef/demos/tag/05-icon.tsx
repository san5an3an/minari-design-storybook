// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/tag.json 의 examples[5] ("Icon")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Divider, Flex, Tag } from 'antd';

// Icons from third-party libraries render as a bare `<svg>` rather than an `.anticon` wrapper.
// They stay centred whether sized in `em` (StarIcon) or in `px` (HeartIcon, like lucide's default).
const StarIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
  </svg>
);

const HeartIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 20.7l-1.4-1.3C5.4 14.8 2 11.7 2 8a5 5 0 0 1 10-1.7A5 5 0 0 1 22 8c0 3.7-3.4 6.8-8.6 11.4L12 20.7z" />
  </svg>
);

const App: React.FC = () => {
  const [checked, setChecked] = React.useState<Array<boolean>>([true, false, false, false]);

  const handleChange = (index: number, value: boolean) => {
    const newChecked = [...checked];
    newChecked[index] = value;
    setChecked(newChecked);
  };

  return (
    <>
      <Divider titlePlacement="start">아이콘이 있는 태그</Divider>
      <Flex gap="small" wrap align="center">
        <Tag icon={<TwitterOutlined />} color="#55acee">
          Twitter
        </Tag>
        <Tag icon={<YoutubeOutlined />} color="#cd201f">
          Youtube
        </Tag>
        <Tag icon={<FacebookOutlined />} color="#3b5999">
          Facebook
        </Tag>
        <Tag icon={<LinkedinOutlined />} color="#55acee">
          LinkedIn
        </Tag>
      </Flex>
      <Divider titlePlacement="start">아이콘이 있는 CheckableTag</Divider>
      <Flex gap="small" wrap align="center">
        <Tag.CheckableTag
          icon={<TwitterOutlined />}
          checked={checked[0]}
          onChange={(checked) => handleChange(0, checked)}
        >
          Twitter
        </Tag.CheckableTag>
        <Tag.CheckableTag
          icon={<YoutubeOutlined />}
          checked={checked[1]}
          onChange={(checked) => handleChange(1, checked)}
        >
          Youtube
        </Tag.CheckableTag>
        <Tag.CheckableTag
          icon={<FacebookOutlined />}
          checked={checked[2]}
          onChange={(checked) => handleChange(2, checked)}
        >
          Facebook
        </Tag.CheckableTag>
        <Tag.CheckableTag
          icon={<LinkedinOutlined />}
          checked={checked[3]}
          onChange={(checked) => handleChange(3, checked)}
        >
          LinkedIn
        </Tag.CheckableTag>
      </Flex>
      <Divider titlePlacement="start">다른 데서 가져온 아이콘이 있는 태그</Divider>
      <Flex gap="small" wrap align="center">
        <Tag icon={<StarIcon />} color="#f50">
          별 (em)
        </Tag>
        <Tag icon={<HeartIcon />} color="#eb2f96">
          하트 (px)
        </Tag>
        <Tag icon={<HeartIcon />} closable>
          닫을 수 있음
        </Tag>
      </Flex>
    </>
  );
};

export default App;