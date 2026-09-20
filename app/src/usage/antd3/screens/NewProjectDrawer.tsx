import * as React from "react";
import { createPortal } from "react-dom";
import { Button, DatePicker, Drawer, Form, Input, Radio, Select, Space } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import {
  CURRENT_USER_ID, MEMBERS, TEAMS, TODAY_ISO, stages,
  type Priority, type Project, type TeamName,
} from "../data";
import { useOverlayHost } from "../frame";

const FORM_ID = "ab3-new-project";

interface FormValues {
  name: string;
  summary?: string;
  team: TeamName;
  ownerId: string;
  priority: Priority;
  due: Dayjs;
}

function NewProjectForm({ nextId, onCreate }: { nextId: string; onCreate: (project: Project) => void }) {
  const [form] = Form.useForm<FormValues>;
  const today = React.useMemo( => dayjs(TODAY_ISO), []);

  const handleFinish = (values: FormValues) => {
    const due = values.due.startOf("day");
    onCreate({
      id: nextId,
      name: values.name.trim,
      summary: values.summary?.trim || "설명을 아직 적지 않았어요.",
      team: values.team,
      ownerId: values.ownerId,
      memberIds: [values.ownerId],
      priority: values.priority,
      startLabel: today.format("M월 D일"),
      dueLabel: due.format("M월 D일"),
      dueInDays: due.diff(today, "day"),
      updatedLabel: "방금",
      milestones: stages("미정", "미정", "미정", due.format("M월 D일")),
      tasks: [],
      weeklyDone: [0, 0, 0, 0, 0, 0],
    });
    form.resetFields;
  };

  return (
    <Form<FormValues>
      id={FORM_ID}
      form={form}
      layout="vertical"
      requiredMark="optional"
      initialValues={{ team: "결제팀", ownerId: CURRENT_USER_ID, priority: "보통", due: today.add(28, "day") }}
      onFinish={handleFinish}
    >
      <Form.Item label="프로젝트 이름" name="name" rules={[{ required: true, whitespace: true, message: "이름을 적어 주세요" }]}>
        <Input placeholder="예: 장바구니 개편" maxLength={30} showCount />
      </Form.Item>
      <Form.Item label="한 줄 설명" name="summary">
        <Input.TextArea placeholder="무엇을 왜 하는지 한 줄로" autoSize={{ minRows: 2, maxRows: 4 }} maxLength={80} showCount />
      </Form.Item>
      <Form.Item label="팀" name="team" rules={[{ required: true }]}>
        <Select options={TEAMS.map((t) => ({ value: t, label: t }))} />
      </Form.Item>
      <Form.Item label="담당 PM" name="ownerId" rules={[{ required: true }]}>
        <Select
          showSearch
          optionFilterProp="label"
          options={MEMBERS.map((m) => ({ value: m.id, label: `${m.name} · ${m.role}` }))}
        />
      </Form.Item>
      <Form.Item label="우선순위" name="priority">
        <Radio.Group optionType="button" options={["높음", "보통", "낮음"]} />
      </Form.Item>
      <Form.Item label="마감일" name="due" rules={[{ required: true, message: "마감일을 골라 주세요" }]}>
        <DatePicker
          style={{ inlineSize: "100%" }}
          format="YYYY년 M월 D일"
          allowClear={false}
          disabledDate={(d) => d.isBefore(today, "day")}
        />
      </Form.Item>
    </Form>
  );
}

export function NewProjectDrawer({
  open, nextId, onClose, onCreate,
}: {
  open: boolean;
  nextId: string;
  onClose:  => void;
  onCreate: (project: Project) => void;
}) {
  const host = useOverlayHost;
  if (!host) return null;

  return createPortal(
    <Drawer
      title="새 프로젝트"
      open={open}
      onClose={onClose}
      getContainer={false}
      size={380}
      extra={
        <Space>
          <Button onClick={onClose}>취소</Button>
          <Button type="primary" htmlType="submit" form={FORM_ID}>만들기</Button>
        </Space>
      }
    >
      <NewProjectForm nextId={nextId} onCreate={onCreate} />
    </Drawer>,
    host,
  );
}
