// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/config-provider.json 의 examples[1] ("Direction")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import {
  DownloadOutlined,
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
  SearchOutlined as SearchIcon,
  SmileOutlined,
} from '@ant-design/icons';
import type { ConfigProviderProps, RadioChangeEvent } from 'antd';
import {
  Badge,
  Button,
  Cascader,
  Col,
  ConfigProvider,
  Divider,
  Flex,
  Input,
  InputNumber,
  Modal,
  Pagination,
  Radio,
  Rate,
  Row,
  Select,
  Space,
  Steps,
  Switch,
  Tree,
  TreeSelect,
} from 'antd';
import { createStyles } from 'antd-style';

type DirectionType = ConfigProviderProps['direction'];

const useStyles = createStyles((props) => {
  const { css } = props;
  return {
    headerExample: css`
      display: inline-block;
      width: 42px;
      height: 42px;
      vertical-align: middle;
      background-color: #eee;
      border-radius: 4px;
    `,
  };
});

const { Search } = Input;

const treeData = [
  {
    title: '부모 1',
    key: '0-0',
    children: [
      {
        title: '부모 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          { title: '잎', key: '0-0-0-0', disableCheckbox: true },
          { title: '잎', key: '0-0-0-1' },
        ],
      },
      {
        title: '부모 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1677ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

const treeSelectData = [
  {
    title: '부모 1',
    value: '0-1',
    children: [
      {
        title: '부모 1-0',
        value: '0-1-1',
        children: [
          { title: '내 잎', value: 'random' },
          { title: '당신의 잎', value: 'random1' },
        ],
      },
      {
        title: '부모 1-1',
        value: 'random2',
        children: [{ title: <b style={{ color: '#08c' }}>sss</b>, value: 'random3' }],
      },
    ],
  },
];

const cascaderOptions = [
  {
    value: 'tehran',
    label: 'تهران',
    children: [
      {
        value: 'tehran-c',
        label: 'تهران',
        children: [
          {
            value: 'saadat-abad',
            label: 'سعادت آباد',
          },
        ],
      },
    ],
  },
  {
    value: 'ardabil',
    label: 'اردبیل',
    children: [
      {
        value: 'ardabil-c',
        label: 'اردبیل',
        children: [
          {
            value: 'pirmadar',
            label: 'پیرمادر',
          },
        ],
      },
    ],
  },
  {
    value: 'gilan',
    label: 'گیلان',
    children: [
      {
        value: 'rasht',
        label: 'رشت',
        children: [
          {
            value: 'district-3',
            label: 'منطقه ۳',
          },
        ],
      },
    ],
  },
];

type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';

const Page: React.FC<{ placement: Placement }> = (props) => {
  const { placement } = props;

  const { styles } = useStyles();

  const [currentStep, setCurrentStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [badgeCount, setBadgeCount] = useState(5);
  const [showBadge, setShowBadge] = useState(true);

  const selectBefore = (
    <Select
      defaultValue="Http://"
      style={{ width: 90 }}
      options={[
        { label: 'Http://', value: 'Http://' },
        { label: 'Https://', value: 'Https://' },
      ]}
    />
  );

  const selectAfter = (
    <Select
      defaultValue=".com"
      style={{ width: 80 }}
      options={[
        { label: '.com', value: '.com' },
        { label: '.jp', value: '.jp' },
        { label: '.cn', value: '.cn' },
        { label: '.org', value: '.org' },
      ]}
    />
  );

  // ==== Cascader ====
  const cascaderFilter = (inputValue: string, path: { label: string }[]) =>
    path.some((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));

  const onCascaderChange = (value: any) => {
    console.log(value);
  };
  // ==== End Cascader ====

  // ==== Modal ====
  const showModal = () => {
    setModalOpen(true);
  };

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  // ==== End Modal ====
  const onStepsChange = (newCurrentStep: number) => {
    console.log('onChange:', newCurrentStep);
    setCurrentStep(newCurrentStep);
  };

  // ==== Badge ====
  const increaseBadge = () => {
    setBadgeCount(badgeCount + 1);
  };

  const declineBadge = () => {
    setBadgeCount((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  const onChangeBadge = (checked: boolean) => {
    setShowBadge(checked);
  };
  // ==== End Badge ====

  return (
    <Flex className="direction-components" vertical gap="large">
      <Row>
        <Col span={24}>
          <Divider titlePlacement="start">Cascader 예제</Divider>
          <Cascader
            suffixIcon={<SearchIcon />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="یک مورد انتخاب کنید"
            placement={placement}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;찾기와 함께:&nbsp;&nbsp;
          <Cascader
            suffixIcon={<SmileOutlined />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="항목을 골라 주세요"
            placement={placement}
            showSearch={{ filter: cascaderFilter }}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Divider titlePlacement="start">Switch 예제</Divider>
          &nbsp;&nbsp;
          <Switch defaultChecked />
          &nbsp;&nbsp;
          <Switch loading defaultChecked />
          &nbsp;&nbsp;
          <Switch size="small" loading />
        </Col>
        <Col span={12}>
          <Divider titlePlacement="start">Radio Group 예제</Divider>
          <Radio.Group defaultValue="c" buttonStyle="solid">
            <Radio.Button value="a">تهران</Radio.Button>
            <Radio.Button value="b" disabled>
              اصفهان
            </Radio.Button>
            <Radio.Button value="c">فارس</Radio.Button>
            <Radio.Button value="d">خوزستان</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Divider titlePlacement="start">버튼 예제</Divider>
          <Flex wrap gap="small">
            <Button type="primary" icon={<DownloadOutlined />} />
            <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />}>
              내려받기
            </Button>
            <Button type="primary" icon={<DownloadOutlined />}>
              내려받기
            </Button>
            <Space.Compact>
              <Button type="primary" icon={<LeftOutlined />}>
                뒤로
              </Button>
              <Button type="primary" icon={<RightOutlined />} iconPlacement="end">
                앞으로
              </Button>
            </Space.Compact>
            <Button type="primary" loading>
              불러오는 중
            </Button>
            <Button type="primary" size="small" loading>
              불러오는 중
            </Button>
          </Flex>
        </Col>
        <Col span={12}>
          <Divider titlePlacement="start">Tree 예제</Divider>
          <Tree
            showLine
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            treeData={treeData}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider titlePlacement="start">Input (Input Group) 예제</Divider>
          <Flex vertical gap="large">
            <Flex vertical gap="middle">
              <Row gutter={8}>
                <Col span={5}>
                  <Input size="large" defaultValue="0571" />
                </Col>
                <Col span={8}>
                  <Input size="large" defaultValue="26888888" />
                </Col>
              </Row>
              <Space.Compact>
                <Input style={{ width: '20%' }} defaultValue="0571" />
                <Input style={{ width: '30%' }} defaultValue="26888888" />
              </Space.Compact>
              <Space.Compact>
                <Select
                  defaultValue="항목1"
                  options={[
                    { label: '항목1', value: '항목1' },
                    { label: '항목2', value: '항목2' },
                  ]}
                />
                <Input style={{ width: '50%' }} defaultValue="입력 내용" />
                <InputNumber />
              </Space.Compact>
              <Search placeholder="찾을 말을 넣어 주세요" enterButton="찾기" size="large" />
              <Space.Compact>
                {selectBefore}
                <Input defaultValue="mysite" />
                {selectAfter}
              </Space.Compact>
            </Flex>
            <Row>
              <Col span={12}>
                <Divider titlePlacement="start">Select 예제</Divider>
                <Space wrap>
                  <Select
                    mode="multiple"
                    defaultValue="مورچه"
                    style={{ width: 120 }}
                    options={[
                      { label: 'jack', value: 'jack' },
                      { label: 'مورچه', value: 'مورچه' },
                      { label: 'disabled', value: 'disabled', disabled: true },
                      { label: 'yiminghe', value: '정우진' },
                    ]}
                  />
                  <Select
                    disabled
                    defaultValue="مورچه"
                    style={{ width: 120 }}
                    options={[{ label: 'مورچه', value: 'مورچه' }]}
                  />
                  <Select
                    loading
                    defaultValue="مورچه"
                    style={{ width: 120 }}
                    options={[{ label: 'مورچه', value: 'مورچه' }]}
                  />
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="사람을 골라 주세요"
                    options={[
                      { label: 'jack', value: 'jack' },
                      { label: 'سعید', value: 'سعید' },
                      { label: '태현', value: 'tom' },
                    ]}
                  />
                </Space>
              </Col>
              <Col span={12}>
                <Divider titlePlacement="start">TreeSelect 예제</Divider>
                <TreeSelect
                  showSearch
                  style={{ width: '100%' }}
                  styles={{
                    popup: {
                      root: { maxHeight: 400, overflow: 'auto' },
                    },
                  }}
                  placeholder="골라 주세요"
                  allowClear
                  treeDefaultExpandAll
                  treeData={treeSelectData}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Divider titlePlacement="start">Modal 예제</Divider>
                <Button type="primary" onClick={showModal}>
                  Modal 열기
                </Button>
                <Modal title="پنچره ساده" open={modalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                </Modal>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Divider titlePlacement="start">Steps 예제</Divider>
                <Flex vertical gap="middle">
                  <Steps
                    progressDot
                    current={currentStep}
                    items={[
                      {
                        title: '끝남',
                        description: '설명이 들어가요.',
                      },
                      {
                        title: '진행 중',
                        description: '설명이 들어가요.',
                      },
                      {
                        title: '기다리는 중',
                        description: '설명이 들어가요.',
                      },
                    ]}
                  />
                  <Steps
                    current={currentStep}
                    onChange={onStepsChange}
                    items={[
                      {
                        title: '1단계',
                        description: '설명이 들어가요.',
                      },
                      {
                        title: '2단계',
                        description: '설명이 들어가요.',
                      },
                      {
                        title: '3단계',
                        description: '설명이 들어가요.',
                      },
                    ]}
                  />
                </Flex>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Divider titlePlacement="start">Rate 예제</Divider>
                <Flex vertical gap="small">
                  <Rate defaultValue={2.5} />
                  <div>
                    <strong>* 참고:</strong> 반 별점은 RTL 방향에서 아직 안 돼요. 다음부터 지원해요 —{' '}
                    <a
                      href="https://github.com/react-component/rate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      rc-rate
                    </a>{' '}
                    implement rtl support.
                  </div>
                </Flex>
              </Col>
              <Col span={12}>
                <Divider titlePlacement="start">badge 예제</Divider>
                <Flex align="center" gap="middle">
                  <Badge count={badgeCount}>
                    <a href="#" className={styles.headerExample} />
                  </Badge>
                  <Space.Compact>
                    <Button icon={<MinusOutlined />} onClick={declineBadge} />
                    <Button icon={<PlusOutlined />} onClick={increaseBadge} />
                  </Space.Compact>
                </Flex>
                <Flex align="center" gap="middle" style={{ marginTop: 12 }}>
                  <Badge dot={showBadge}>
                    <a href="#" className={styles.headerExample} />
                  </Badge>
                  <Switch onChange={onChangeBadge} checked={showBadge} />
                </Flex>
              </Col>
            </Row>
          </Flex>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider titlePlacement="start">Pagination 예제</Divider>
          <Pagination showSizeChanger defaultCurrent={3} total={500} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider titlePlacement="start">Grid 시스템 예제</Divider>
          <div className="grid-demo">
            <div className="code-box-demo">
              <p>
                <strong>* 참고:</strong> RTL 격자에서는 모든 계산이 오른쪽에서 시작해요 (offset · push 따위)
              </p>
              <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>
                  col-8
                </Col>
              </Row>
              <Row>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={12} offset={6}>
                  col-12 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={18} push={6}>
                  col-18 col-push-6
                </Col>
                <Col span={6} pull={18}>
                  col-6 col-pull-18
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Flex>
  );
};

const App: React.FC = () => {
  const [direction, setDirection] = useState<DirectionType>('ltr');
  const [placement, setPlacement] = useState<Placement>('bottomLeft');

  const changeDirection = (e: RadioChangeEvent) => {
    const directionValue = e.target.value;
    setDirection(directionValue);
    setPlacement(directionValue === 'rtl' ? 'bottomRight' : 'bottomLeft');
  };

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginInlineEnd: 16 }}>컴포넌트의 방향 바꾸기:</span>
        <Radio.Group defaultValue="ltr" onChange={changeDirection}>
          <Radio.Button key="ltr" value="ltr">
            LTR
          </Radio.Button>
          <Radio.Button key="rtl" value="rtl">
            RTL
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider direction={direction}>
        <Page placement={placement} />
      </ConfigProvider>
    </>
  );
};

export default App;