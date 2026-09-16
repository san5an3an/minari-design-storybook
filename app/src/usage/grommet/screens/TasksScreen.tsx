import * as React from "react";
import { Box, Card, CardBody, CheckBox, Heading, Text } from "grommet";
import { AlertTriangle, ListTodo } from "lucide-react";

interface Task {
  id: string;
  title: string;
  assignee: string;
  priority: "높음" | "보통" | "낮음";
  done: boolean;
}

const INITIAL: Task[] = [
  { id: "1", title: "결제 실패 재시도 로직", assignee: "박도윤", priority: "높음", done: false },
  { id: "2", title: "온보딩 3단계 문구 수정", assignee: "이하은", priority: "낮음", done: true },
  { id: "3", title: "알림 배지 카운트 버그", assignee: "김서연", priority: "높음", done: false },
  { id: "4", title: "QA 회귀 테스트 케이스 작성", assignee: "정서준", priority: "보통", done: false },
  { id: "5", title: "리포트 CSV 내보내기", assignee: "한지우", priority: "보통", done: true },
];

const PRIORITY_COLOR: Record<Task["priority"], string> = {
  높음: "status-critical",
  보통: "status-warning",
  낮음: "text-weak",
};

export function TasksScreen {
  const [tasks, setTasks] = React.useState(INITIAL);

  const toggle = (id: string) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const remaining = tasks.filter((t) => !t.done).length;
  const urgent = tasks.filter((t) => !t.done && t.priority === "높음").length;

  return (
    <Box gap="medium">
      <Box direction="row" wrap gap="medium">
        <Card pad="medium" flex={{ grow: 1, shrink: 1 }} background="background-front">
          <CardBody direction="row" align="center" gap="small">
            <Box
              round="full"
              width="2.5rem"
              height="2.5rem"
              align="center"
              justify="center"
              background="brand"
            >
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
            <Box
              round="full"
              width="2.5rem"
              height="2.5rem"
              align="center"
              justify="center"
              background="status-critical"
            >
              <AlertTriangle size={18} color="white" />
            </Box>
            <Box>
              <Text color="text-weak" size="small">긴급</Text>
              <Heading level={3} margin="none">{urgent}개</Heading>
            </Box>
          </CardBody>
        </Card>
      </Box>
      <Card background="background-front">
        <CardBody pad="none">
          {tasks.map((t, i) => (
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
                <Text
                  style={t.done ? { textDecoration: "line-through" } : undefined}
                  color={t.done ? "text-weak" : undefined}
                >
                  {t.title}
                </Text>
                <Text size="small" color="text-weak">{t.assignee}</Text>
              </Box>
              <Text size="small" color={PRIORITY_COLOR[t.priority]}>{t.priority}</Text>
            </Box>
          ))}
        </CardBody>
      </Card>
    </Box>
  );
}
