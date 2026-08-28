// @ts-nocheck
import React, { useState } from 'react';
import { PlusOutlined } from '../_icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import type { InputProps } from 'antd';

const UrlInput: React.FC<InputProps> = (props) => {
  return (
    <Space.Compact>
      <Space.Addon>http://</Space.Addon>
      <Input style={{ width: '100%' }} {...props} />
      <Space.Addon>.com</Space.Addon>
    </Space.Compact>
  );
};

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        새 계정
      </Button>
      <Drawer
        title="새 계정 만들기"
        size={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>취소</Button>
            <Button onClick={onClose} type="primary">
              보내기
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" requiredMark={false}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="이름"
                rules={[{ required: true, message: '사용자 이름을 넣어 주세요' }]}
              >
                <Input placeholder="사용자 이름을 넣어 주세요" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[{ required: true, message: '주소를 넣어 주세요' }]}
              >
                <UrlInput placeholder="주소를 넣어 주세요" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="담당자"
                rules={[{ required: true, message: '담당자를 골라 주세요' }]}
              >
                <Select
                  placeholder="담당자를 골라 주세요"
                  options={[
                    { label: '부하윤', value: 'xiao' },
                    { label: '김마오', value: 'mao' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="종류"
                rules={[{ required: true, message: '종류를 골라 주세요' }]}
              >
                <Select
                  placeholder="종류를 골라 주세요"
                  options={[
                    { label: 'private', value: 'private' },
                    { label: 'public', value: 'public' },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="결재자"
                rules={[{ required: true, message: '결재자를 골라 주세요' }]}
              >
                <Select
                  placeholder="결재자를 골라 주세요"
                  options={[
                    { label: '마윈', value: 'jack' },
                    { label: '유도현', value: 'tom' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="날짜와 시각"
                rules={[{ required: true, message: '날짜와 시각을 골라 주세요' }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={(trigger) => trigger.parentElement!}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="설명"
                rules={[
                  {
                    required: true,
                    message: '주소 설명을 넣어 주세요',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="주소 설명을 넣어 주세요" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default App;