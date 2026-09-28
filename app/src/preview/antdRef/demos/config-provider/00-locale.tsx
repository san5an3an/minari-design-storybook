// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/config-provider.json 의 examples[0] ("Locale")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import type {
  ConfigProviderProps,
  RadioChangeEvent,
  TableProps,
  TourProps,
  UploadFile,
} from 'antd';
import {
  Button,
  Calendar,
  ConfigProvider,
  DatePicker,
  Divider,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Pagination,
  Popconfirm,
  QRCode,
  Radio,
  Select,
  Space,
  Table,
  theme,
  TimePicker,
  Tour,
  Transfer,
  Upload,
} from 'antd';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';

import 'dayjs/locale/zh-cn';

type Locale = ConfigProviderProps['locale'];

dayjs.locale('en');

const { RangePicker } = DatePicker;

const columns: TableProps['columns'] = [
  {
    title: '이름',
    dataIndex: 'name',
    filters: [{ text: 'filter1', value: 'filter1' }],
  },
  {
    title: '나이',
    dataIndex: 'age',
  },
];

const Page: React.FC = () => {
  const { token } = theme.useToken();

  const [open, setOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const tourRefs = React.useRef<HTMLElement[]>([]);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const info = () => {
    Modal.info({
      title: '안내 글',
      content: '안내 글',
    });
  };

  const confirm = () => {
    Modal.confirm({
      title: '안내 글',
      content: '안내 글',
    });
  };

  const steps: TourProps['steps'] = [
    {
      title: '파일 올리기',
      description: '파일을 여기에 놓아 주세요.',
      target: () => tourRefs.current[0],
    },
    {
      title: '저장',
      description: '바꾼 것을 저장해요.',
      target: () => tourRefs.current[1],
    },
    {
      title: '다른 동작',
      description: '눌러서 다른 동작을 봐요.',
      target: () => tourRefs.current[2],
    },
  ];

  const fileList: UploadFile[] = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'error',
    },
  ];

  return (
    <Space
      vertical
      size={[0, 16]}
      style={{
        width: '100%',
        paddingTop: token.padding,
        borderTop: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
      }}
    >
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
      <Space wrap>
        <Select
          showSearch
          style={{ width: 200 }}
          options={[
            { label: 'jack', value: 'jack' },
            { label: 'lucy', value: 'lucy' },
          ]}
        />
        <DatePicker />
        <TimePicker />
        <RangePicker />
      </Space>
      <Space wrap>
        <Button type="primary" onClick={showModal}>
          Modal 보이기
        </Button>
        <Button onClick={info}>정보 보이기</Button>
        <Button onClick={confirm}>확인창 보이기</Button>
        <Popconfirm title="질문 있으세요?">
          <a href="#">눌러서 확인하기</a>
        </Popconfirm>
      </Space>
      <Transfer dataSource={[]} showSearch targetKeys={[]} />
      <div
        style={{
          width: 320,
          border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
          borderRadius: token.borderRadiusLG,
        }}
      >
        <Calendar fullscreen={false} value={dayjs()} />
      </div>
      <Form name="기본" autoComplete="off" labelCol={{ sm: { span: 4 } }} wrapperCol={{ span: 6 }}>
        <Form.Item label="사용자 이름" name="username" rules={[{ required: true }]}>
          <Input width={200} />
        </Form.Item>
        <Form.Item
          label="나이"
          name="age"
          rules={[{ type: 'number', min: 0, max: 99 }]}
          initialValue={100}
        >
          <InputNumber width={200} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 2, span: 6 }}>
          <Button type="primary" htmlType="submit">
            보내기
          </Button>
        </Form.Item>
      </Form>
      <Table dataSource={[]} columns={columns} />
      <Modal title="언어별 Modal" open={open} onCancel={hideModal}>
        <p>언어별 Modal</p>
      </Modal>
      <Space wrap size={80}>
        <QRCode
          value="https://ant.design/"
          status="expired"
          onRefresh={() => console.log('refresh')}
        />
        <Image
          width={160}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Space>
      <Upload listType="picture-card" fileList={fileList} />
      <Divider titlePlacement="start">Tour</Divider>
      <Button type="primary" onClick={() => setTourOpen(true)}>
        둘러보기 시작
      </Button>
      <Space>
        <Button
          ref={(node) => {
            node && tourRefs.current.splice(0, 0, node);
          }}
        >
          {' '}
          올리기
        </Button>
        <Button
          ref={(node) => {
            node && tourRefs.current.splice(1, 0, node);
          }}
          type="primary"
        >
          저장
        </Button>
        <Button
          ref={(node) => {
            node && tourRefs.current.splice(2, 0, node);
          }}
          icon={<EllipsisOutlined />}
        />
      </Space>
      <Tour open={tourOpen} steps={steps} onClose={() => setTourOpen(false)} />
    </Space>
  );
};

const App: React.FC = () => {
  const [locale, setLocale] = useState<Locale>(enUS);

  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocale(localeValue);
    if (!localeValue) {
      dayjs.locale('en');
    } else {
      dayjs.locale('zh-cn');
    }
  };

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginInlineEnd: 16 }}>컴포넌트의 언어 바꾸기:</span>
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            영어
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            한국어
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale}>
        <Page />
      </ConfigProvider>
    </>
  );
};

export default App;