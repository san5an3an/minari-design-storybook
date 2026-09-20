import * as React from "react";
import { App, Badge, Calendar, Card, Empty, Popconfirm, Space, Tag, Typography, theme } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import { LEAVE_BY_DAY, LEAVE_REQUESTS, type LeaveRequest } from "../data";

const TYPE_COLOR: Record<LeaveRequest["type"], string> = {
  연차: "var(--semantic-bg-brand-subtle)",
  병가: "var(--semantic-bg-danger-subtle)",
  경조사: "var(--semantic-bg-neutral-subtle)",
};

function dateCellRender(value: Dayjs) {
  const count = LEAVE_BY_DAY[value.date] ?? 0;
  if (!count || value.month !== dayjs.month) return null;
  return <Badge count={count} size="small" />;
}

export function LeaveScreen {
  // 정적 알림 App.useApp으로 생성. 컨텍스트 밖에서 생성하면 antd 기본색으로 표시되는 문제가 있음
  const { message } = App.useApp;
  const { token } = theme.useToken;
  const [requests, setRequests] = React.useState(LEAVE_REQUESTS);

  const resolve = (id: string, status: "승인" | "반려") => {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    message.success(`${status === "승인" ? "승인" : "반려"}했습니다.`);
  };

  const pending = requests.filter((r) => r.status === "대기");

  return (
    <Space orientation="vertical" size={16} style={{ display: "flex" }}>
      <Card size="small" title="9월" styles={{ body: { padding: 8 } }}>
        <Calendar fullscreen={false} cellRender={dateCellRender} />
      </Card>
      {/* antd List가 v6에서 폐기돼 행을 직접 구현하는 방식임 */}
      <Card size="small" title={`대기 중인 요청 (${pending.length})`} styles={{ body: { padding: 0 } }}>
        {pending.length === 0 ? (
          <div style={{ padding: 24 }}><Empty description="대기 중인 요청이 없습니다." /></div>
        ) : (
          pending.map((item, i) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                paddingBlock: 12,
                paddingInline: 16,
                borderBlockStart: i === 0 ? "none" : `1px solid ${token.colorBorderSecondary}`,
              }}
            >
              <Space orientation="vertical" size={0}>
                <Space size={8}>
                  <Typography.Text strong>{item.employeeName}</Typography.Text>
                  <Tag style={{ background: TYPE_COLOR[item.type], border: "none" }}>{item.type}</Tag>
                </Space>
                <Typography.Text type="secondary">{item.dateLabel} · {item.daysLabel}</Typography.Text>
              </Space>
              <Space size={12}>
                <Popconfirm title="이 요청을 승인할까요?" onConfirm={ => resolve(item.id, "승인")}>
                  <a>승인</a>
                </Popconfirm>
                <Popconfirm title="이 요청을 반려할까요?" onConfirm={ => resolve(item.id, "반려")}>
                  <a>반려</a>
                </Popconfirm>
              </Space>
            </div>
          ))
        )}
      </Card>
      {requests.filter((r) => r.status !== "대기").length > 0 ? (
        <Typography.Text type="secondary">
          처리 완료: {requests.filter((r) => r.status !== "대기").map((r) => `${r.employeeName}(${r.status})`).join(", ")}
        </Typography.Text>
      ) : null}
    </Space>
  );
}
