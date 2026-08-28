// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/space.json 의 examples[6] ("Compact Mode for form component")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { CopyOutlined } from '../_icons';
import {
  AutoComplete,
  Button,
  Cascader,
  ColorPicker,
  DatePicker,
  Input,
  InputNumber,
  Select,
  Space,
  TimePicker,
  Tooltip,
  TreeSelect,
} from 'antd';

const { TreeNode } = TreeSelect;

const App: React.FC = () => (
  <Space orientation="vertical">
    <Space.Compact block>
      <Input style={{ width: '20%' }} defaultValue="0571" />
      <Input style={{ width: '30%' }} defaultValue="26888888" />
    </Space.Compact>
    <Space.Compact block size="small">
      <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="https://ant.design" />
      <Button type="primary">보내기</Button>
    </Space.Compact>
    <Space.Compact block>
      <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="https://ant.design" />
      <Button type="primary">보내기</Button>
    </Space.Compact>
    <Space.Compact block>
      <Input
        style={{ width: 'calc(100% - 200px)' }}
        defaultValue="git@github.com:ant-design/ant-design.git"
      />
      <Tooltip title="git 주소 복사">
        <Button icon={<CopyOutlined />} />
      </Tooltip>
    </Space.Compact>
    <Space.Compact block>
      <Select
        allowClear
        defaultValue="Zhejiang"
        options={[
          { label: 'Zhejiang', value: 'Zhejiang' },
          { label: 'Jiangsu', value: 'Jiangsu' },
        ]}
      />
      <Input style={{ width: '50%' }} defaultValue="서울 서초구" />
    </Space.Compact>
    <Space.Compact block>
      <Select
        allowClear
        mode="multiple"
        defaultValue="Zhejiang"
        style={{ width: '50%' }}
        options={[
          { label: 'Zhejiang', value: 'Zhejiang' },
          { label: 'Jiangsu', value: 'Jiangsu' },
        ]}
      />
      <Input style={{ width: '50%' }} defaultValue="서울 서초구" />
    </Space.Compact>
    <Space.Compact block>
      <Input.Search style={{ width: '30%' }} defaultValue="0571" />
      <Input.Search allowClear style={{ width: '50%' }} defaultValue="26888888" />
      <Input.Search style={{ width: '20%' }} defaultValue="+1" />
    </Space.Compact>
    <Space.Compact block>
      <Select
        defaultValue="항목1"
        options={[
          { label: '항목1', value: '항목1' },
          { label: '항목2', value: '항목2' },
        ]}
      />
      <Input style={{ width: '50%' }} defaultValue="입력 내용" />
      <InputNumber defaultValue={12} />
    </Space.Compact>
    <Space.Compact block>
      <Input style={{ width: '50%' }} defaultValue="입력 내용" />
      <DatePicker style={{ width: '50%' }} />
    </Space.Compact>
    <Space.Compact block>
      <DatePicker.RangePicker style={{ width: '70%' }} />
      <Input style={{ width: '30%' }} defaultValue="입력 내용" />
      <Button type="primary">찾기</Button>
    </Space.Compact>
    <Space.Compact block>
      <Input style={{ width: '30%' }} defaultValue="입력 내용" />
      <DatePicker.RangePicker style={{ width: '70%' }} />
    </Space.Compact>
    <Space.Compact block>
      <Select
        defaultValue="항목1-1"
        options={[
          { label: '항목1-1', value: '항목1-1' },
          { label: '항목1-2', value: '항목1-2' },
        ]}
      />
      <Select
        defaultValue="항목2-2"
        options={[
          { label: '항목2-1', value: '항목2-1' },
          { label: '항목2-2', value: '항목2-2' },
        ]}
      />
    </Space.Compact>
    <Space.Compact block>
      <Select
        defaultValue="1"
        options={[
          { label: '사이', value: '1' },
          { label: '제외', value: '2' },
        ]}
      />
      <Input style={{ width: 100, textAlign: 'center' }} placeholder="최소" />
      <Input
        className="site-input-split"
        style={{
          width: 30,
          borderInlineStart: 0,
          borderInlineEnd: 0,
          pointerEvents: 'none',
        }}
        placeholder="~"
        disabled
      />
      <Input
        className="site-input-right"
        style={{
          width: 100,
          textAlign: 'center',
        }}
        placeholder="최대"
      />
    </Space.Compact>
    <Space.Compact block>
      <Select
        defaultValue="가입"
        style={{ width: '30%' }}
        options={[
          { label: '가입', value: '가입' },
          { label: '로그인', value: '로그인' },
        ]}
      />
      <AutoComplete
        style={{ width: '70%' }}
        placeholder="이메일"
        options={[{ value: '글 1' }, { value: '글 2' }]}
      />
    </Space.Compact>
    <Space.Compact block>
      <TimePicker style={{ width: '70%' }} />
      <Cascader
        style={{ width: '70%' }}
        options={[
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: '서울',
                children: [
                  {
                    value: 'xihu',
                    label: '한강공원',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: '대전',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: '광화문',
                  },
                ],
              },
            ],
          },
        ]}
        placeholder="주소 고르기"
      />
    </Space.Compact>
    <Space.Compact block>
      <TimePicker.RangePicker />
      <TreeSelect
        showSearch
        style={{ width: '60%' }}
        value="잎1"
        styles={{
          popup: {
            root: { maxHeight: 400, overflow: 'auto' },
          },
        }}
        placeholder="골라 주세요"
        allowClear
        treeDefaultExpandAll
        onChange={() => {}}
      >
        <TreeNode value="부모 1" title="부모 1">
          <TreeNode value="부모 1-0" title="부모 1-0">
            <TreeNode value="잎1" title="잎1" />
            <TreeNode value="잎2" title="잎2" />
          </TreeNode>
          <TreeNode value="부모 1-1" title="부모 1-1">
            <TreeNode value="잎3" title={<b style={{ color: '#08c' }}>잎3</b>} />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
      <Button type="primary">보내기</Button>
    </Space.Compact>
    <Space.Compact>
      <Input placeholder="여기에 입력해 주세요" />
      <Space.Addon>$</Space.Addon>
      <InputNumber placeholder="또 다른 입력칸" style={{ width: '100%' }} />
      <InputNumber placeholder="또 다른 입력칸" style={{ width: '100%' }} />
      <Space.Addon>$</Space.Addon>
    </Space.Compact>
    <Space.Compact>
      <Input placeholder="여기에 입력해 주세요" />
      <ColorPicker />
    </Space.Compact>
    <Space.Compact>
      <Button type="primary">Button</Button>
      <Input placeholder="여기에 입력해 주세요" />
      <Space.Addon>$</Space.Addon>
    </Space.Compact>
  </Space>
);

export default App;