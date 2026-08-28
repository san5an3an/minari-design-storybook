// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/upload.json 의 examples[20] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Flex, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
  root: {
    borderRadius: token.borderRadius,
    padding: token.padding,
  },
}));

const stylesObject: UploadProps<any>['styles'] = {
  item: {
    borderRadius: 2,
    backgroundColor: 'rgba(5, 5, 5, 0.06)',
    height: 30,
  },
  trigger: {
    backgroundColor: 'rgba(84, 89, 172, 0.1)',
    padding: 8,
    borderRadius: 4,
  },
};

const stylesFn: UploadProps<any>['styles'] = ( info, ): GetProp<UploadProps<any>, 'styles', 'Return'> => {
  if (info.props.multiple) {
    return {
      root: { border: '1px solid #5459AC' },
      item: {
        borderRadius: 2,
        backgroundColor: 'rgba(5, 5, 5, 0.06)',
        height: 30,
      },
      trigger: {
        backgroundColor: 'rgba(84, 89, 172, 0.2)',
        padding: 8,
        borderRadius: 4,
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  const { styles: classNames } = useStyles();

  const uploadProps: UploadProps<any> = {
    classNames,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'uploading',
        url: 'http://www.baidu.com/xxx.png',
        percent: 33,
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: '서버 오류 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
  };

  return (
    <Flex gap="large" vertical>
      <Upload {...uploadProps} styles={stylesObject}>
        <Button icon={<UploadOutlined />}>올리기</Button>
      </Upload>
      <Upload {...uploadProps} styles={stylesFn} multiple>
        <Button icon={<UploadOutlined />}>올리기</Button>
      </Upload>
    </Flex>
  );
};

export default App;