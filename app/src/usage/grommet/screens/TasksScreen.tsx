import * as React from "react";
import {
  Accordion, AccordionPanel, Box, Button, Card, CardBody, CheckBox, CheckBoxGroup, DateInput,
  Form, FormField, Heading, RadioButton, RadioButtonGroup, Select, Text, TextArea, TextInput,
} from "grommet";
import { AlertTriangle, ListTodo } from "lucide-react";

interface Task {
  id: string;
  title: string;
  assignee: string;
  priority: "높음" | "보통" | "낮음";
  done: boolean;
  detail: string;
}

const INITIAL: Task[] = [
  { id: "1", title: "결제 실패 재시도 로직", assignee: "박도윤", priority: "높음", done: false, detail: "3회 재시도 후 알림 발송으로 변경." },
  { id: "2", title: "온보딩 3단계 문구 수정", assignee: "이하은", priority: "낮음", done: true, detail: "카피라이팅 검수 완료." },
  { id: "3", title: "알림 배지 카운트 버그", assignee: "김서연", priority: "높음", done: false, detail: "읽음 처리 후에도 배지가 안 줄어듦." },
  { id: "4", title: "QA 회귀 테스트 케이스 작성", assignee: "정서준", priority: "보통", done: false, detail: "결제·온보딩 플로우 우선." },
  { id: "5", title: "리포트 CSV 내보내기", assignee: "한지우", priority: "보통", done: true, detail: "UTF-8 BOM 포함으로 엑셀 호환." },
];

const PRIORITY_COLOR: Record<Task["priority"], string> = {
  높음: "status-critical",
  보통: "status-warning",
  낮음: "text-weak",
};

const ASSIGNEES = ["전체", ...Array.from(new Set(INITIAL.map((t) => t.assignee)))];

export function TasksScreen {
  const [tasks, setTasks] = React.useState(INITIAL);
  const [assignee, setAssignee] = React.useState("전체");
  const [priorities, setPriorities] = React.useState<string[]>(["높음", "보통", "낮음"]);
  const [view, setView] = React.useState("목록");
  const [note, setNote] = React.useState("");
  const [draft, setDraft] = React.useState({ title: "", due: "", priority: "보통" });

  const toggle = (id: string) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const filtered = tasks.filter(
    (t) => (assignee === "전체" || t.assignee === assignee) && priorities.includes(t.priority),
  );
  const remaining = tasks.filter((t) => !t.done).length;
  const urgent = tasks.filter((t) => !t.done && t.priority === "높음").length;

  return (
    <Box gap="medium">
      <Box direction="row" wrap gap="medium">
        <Card pad="medium" flex={{ grow: 1, shrink: 1 }} background="background-front">
          <CardBody direction="row" align="center" gap="small">
            <Box round="full" width="2.5rem" height="2.5rem" align="center" justify="center" background="brand">
              <ListTodo size={18} color="white" />
            </Box>
            <Box>
              <Text color="text-weak" size="small">남은 일</Text>
              <Heading level={3} margin="none">{remaining}개</Heading>
            </Box>
          </CardBody>
        </Card>
        <Card pad="medium" flex={{ grow: 1, shrink: 1 }} background="background-front">
          <CardBody direction="row" align="center" gap="small">
            <Box round="full" width="2.5rem" height="2.5rem" align="center" justify="center" background="status-critical">
              <AlertTriangle size={18} color="white" />
            </Box>
            <Box>
              <Text color="text-weak" size="small">긴급</Text>
              <Heading level={3} margin="none">{urgent}개</Heading>
            </Box>
          </CardBody>
        </Card>
      </Box>

      <Card pad="medium" background="background-front">
        <CardBody gap="medium">
          <Box direction="row" wrap gap="medium" align="end">
            <Box gap="xsmall" width="small">
              <Text size="small" color="text-weak">담당자</Text>
              <Select options={ASSIGNEES} value={assignee} onChange={({ option }) => setAssignee(option)} />
            </Box>
            <Box gap="xsmall">
              <Text size="small" color="text-weak">우선순위</Text>
              <CheckBoxGroup
                direction="row"
                options={["높음", "보통", "낮음"]}
                value={priorities}
                onChange={(event) => {
                  // grommet 타입 선언은 value: string이지만 런타임 값은 선택값 전체 배열임
                  if (event) setPriorities(event.value as unknown as string[]);
                }}
              />
            </Box>
            <Box gap="xsmall">
              <Text size="small" color="text-weak">보기</Text>
              <RadioButtonGroup
                name="view"
                direction="row"
                options={["목록", "펼침"]}
                value={view}
                onChange={(e) => setView(e.target.value)}
              />
            </Box>
          </Box>

          {view === "목록" ? (
            filtered.map((t, i) => (
              <Box
                key={t.id}
                direction="row"
                align="center"
                gap="small"
                pad="small"
                border={i > 0 ? { side: "top", color: "border" } : undefined}
              >
                <CheckBox checked={t.done} onChange={ => toggle(t.id)} aria-label={t.title} />
                <Box flex>
                  <Text style={t.done ? { textDecoration: "line-through" } : undefined} color={t.done ? "text-weak" : undefined}>
                    {t.title}
                  </Text>
                  <Text size="small" color="text-weak">{t.assignee}</Text>
                </Box>
                <Text size="small" color={PRIORITY_COLOR[t.priority]}>{t.priority}</Text>
              </Box>
            ))
          ) : (
            <Accordion>
              {filtered.map((t) => (
                <AccordionPanel key={t.id} label={`${t.title} · ${t.assignee}`}>
                  <Box pad={{ vertical: "small" }} gap="xsmall">
                    <Text size="small" color="text-weak">{t.detail}</Text>
                    <Text size="xsmall" color={PRIORITY_COLOR[t.priority]}>우선순위 {t.priority}</Text>
                  </Box>
                </AccordionPanel>
              ))}
            </Accordion>
          )}

          {filtered.length === 0 && (
            <Text color="text-weak" size="small">조건에 맞는 일이 없어요.</Text>
          )}
        </CardBody>
      </Card>

      <Card pad="medium" background="background-front">
        <CardBody gap="small">
          <Text weight="bold">팀 메모</Text>
          <TextArea
            placeholder="오늘 스탠드업에서 공유할 내용을 적어보세요."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
          />
        </CardBody>
      </Card>

      <Card pad="medium" background="background-front">
        <CardBody gap="small">
          <Text weight="bold">새 할 일 빠르게 추가</Text>
          <Form
            value={draft}
            onChange={(next) => setDraft(next as typeof draft)}
            onSubmit={ => {
              setTasks((prev) => [
                { id: String(Date.now), title: draft.title, assignee: "나", priority: draft.priority as Task["priority"], done: false, detail: "" },
                ...prev,
              ]);
              setDraft({ title: "", due: "", priority: "보통" });
            }}
          >
            <Box direction="row" wrap gap="small" align="end">
              <FormField name="title" label="제목" required width="16rem">
                <TextInput name="title" placeholder="예: 배포 전 점검" />
              </FormField>
              <FormField name="due" label="마감일" width="12rem">
                <DateInput name="due" format="mm/dd/yyyy" />
              </FormField>
              <Box gap="xsmall">
                <Text size="small" color="text-weak">우선순위</Text>
                <Box direction="row" gap="small">
                  {(["높음", "보통", "낮음"] as const).map((p) => (
                    <RadioButton
                      key={p}
                      name="priority"
                      label={p}
                      checked={draft.priority === p}
                      onChange={ => setDraft((d) => ({ ...d, priority: p }))}
                    />
                  ))}
                </Box>
              </Box>
              <Button type="submit" primary label="추가" disabled={!draft.title} />
            </Box>
          </Form>
        </CardBody>
      </Card>
    </Box>
  );
}
