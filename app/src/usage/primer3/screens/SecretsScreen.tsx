import * as React from "react";
import {
  AriaAlert, Banner, ButtonGroup, Button, ConfirmationDialog, Details, Dialog, FormControl, IconButton,
  Label, LabelGroup, ProgressBar, RelativeTime, TextInput, Textarea, ToggleSwitch,
} from "@primer/react";
import { Card, InlineMessage } from "@primer/react/experimental";
import { Boxes, Clock, KeyRound, Plus, ShieldCheck, Trash2, type LucideIcon } from "lucide-react";
import { SECRETS, type Secret } from "../data";

const ENVIRONMENTS: { name: string; secretNames: string[] }[] = [
  { name: "프로덕션", secretNames: ["NPM_TOKEN", "AWS_ACCESS_KEY_ID", "DOCKER_REGISTRY_TOKEN", "VERCEL_DEPLOY_HOOK", "DATABASE_URL", "CLOUDFLARE_API_TOKEN"] },
  { name: "스테이징", secretNames: ["SLACK_WEBHOOK_URL", "SENTRY_DSN", "CODECOV_TOKEN"] },
  { name: "개발", secretNames: ["OPENAI_API_KEY"] },
];

// 이 화면 안에서 스탯카드 4요소 세트 독립 생성
const TONES = {
  success: { fg: "var(--fgColor-success)", bg: "var(--bgColor-success-muted)", path: "success.emphasis" },
  accent: { fg: "var(--fgColor-accent)", bg: "var(--bgColor-accent-muted)", path: "accent.emphasis" },
  attention: { fg: "var(--fgColor-attention)", bg: "var(--bgColor-attention-muted)", path: "attention.emphasis" },
  neutral: { fg: "var(--fgColor-neutral)", bg: "var(--bgColor-neutral-muted)", path: "neutral.emphasis" },
} as const;
type Tone = keyof typeof TONES;
type Meter = { kind: "progress"; percent: number } | { kind: "trend"; percent: number };

function StatCard({ icon: Icon, label, value, tone, meter }: { icon: LucideIcon; label: string; value: string; tone: Tone; meter: Meter }) {
  const t = TONES[tone];
  return (
    <Card padding="condensed">
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <span aria-hidden style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, borderRadius: "6px", background: t.bg, color: t.fg, flexShrink: 0 }}>
          <Icon size={14} />
        </span>
        <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{label}</span>
      </div>
      <div style={{ fontSize: "22px", fontWeight: 600, color: t.fg, marginBottom: meter.kind === "progress" ? "6px" : "2px" }}>{value}</div>
      {meter.kind === "progress" ? (
        <ProgressBar progress={meter.percent} bg={t.path} barSize="small" aria-label={`${label} 비율 ${meter.percent}%`} />
      ) : (
        <span style={{ fontSize: "12px", color: meter.percent >= 0 ? "var(--fgColor-success)" : "var(--fgColor-danger)" }}>
          {meter.percent >= 0 ? "▲" : "▼"} {Math.abs(meter.percent)}% 지난달 대비
        </span>
      )}
    </Card>
  );
}

const NAME_PATTERN = /^[A-Z0-9_]*$/;

function AddSecretDialog({ onClose, onAdd }: { onClose:  => void; onAdd: (name: string) => void }) {
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState("");
  const nameValid = NAME_PATTERN.test(name);

  return (
    <Dialog title="새 저장소 시크릿" subtitle="값은 저장 후 다시 확인할 수 없습니다." onClose={onClose} width="medium">
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "16px" }}>
        <FormControl required>
          <FormControl.Label>이름</FormControl.Label>
          <TextInput value={name} onChange={(e) => setName(e.target.value.toUpperCase)} placeholder="예: SENTRY_DSN" block />
        </FormControl>
        {/* InlineMessage로 필드 단위 안내, 검증 메시지 표시 */}
        {name.length > 0 && !nameValid ? (
          <InlineMessage variant="warning" size="small">영문 대문자·숫자·밑줄(_)만 쓸 수 있어요.</InlineMessage>
        ) : (
          <InlineMessage variant="success" size="small">영문 대문자·숫자·밑줄(_)만 허용됩니다.</InlineMessage>
        )}
        <FormControl required>
          <FormControl.Label>값</FormControl.Label>
          <Textarea value={value} onChange={(e) => setValue(e.target.value)} rows={3} block resize="vertical" />
        </FormControl>
        {/* 취소, 추가 버튼을 ButtonGroup으로 묶기 */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4px" }}>
          <ButtonGroup>
            <Button onClick={onClose}>취소</Button>
            <Button
              variant="primary"
              disabled={name.trim === "" || value.trim === "" || !nameValid}
              onClick={ => { onAdd(name.trim); onClose; }}
            >
              시크릿 추가
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Dialog>
  );
}

export function SecretsScreen {
  const [secrets, setSecrets] = React.useState<Secret[]>(SECRETS);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [autoSync, setAutoSync] = React.useState(true);
  const [announcement, setAnnouncement] = React.useState("");
  const [pendingDelete, setPendingDelete] = React.useState<Secret | null>(null);

  const addSecret = (name: string) => {
    setSecrets((prev) => [...prev, { id: `sc-${Date.now}`, name, updatedLabel: "방금", updatedAt: new Date.toISOString }]);
    setAnnouncement(`${name} 시크릿이 추가되었습니다`);
  };
  const confirmRemove = (gesture: "confirm" | "close-button" | "cancel" | "escape") => {
    if (gesture === "confirm" && pendingDelete) {
      setSecrets((prev) => prev.filter((s) => s.id !== pendingDelete.id));
      setAnnouncement(`${pendingDelete.name} 시크릿이 삭제되었습니다`);
    }
    setPendingDelete(null);
  };

  // 시크릿 스탯카드. 90일 이상 미갱신 지표
  const staleCount = secrets.filter((s) => Date.now - new Date(s.updatedAt).getTime > 90 * 24 * 60 * 60 * 1000).length;
  const prodCount = ENVIRONMENTS.find((e) => e.name === "프로덕션")?.secretNames.length ?? 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* 시크릿 추가, 삭제 시 스크린리더 긴급 안내 */}
      <AriaAlert hidden>{announcement}</AriaAlert>
      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
        <StatCard icon={KeyRound} label="전체 시크릿" value={String(secrets.length)} tone="neutral" meter={{ kind: "trend", percent: 20 }} />
        <StatCard icon={Boxes} label="프로덕션 환경" value={String(prodCount)} tone="accent" meter={{ kind: "progress", percent: Math.round((prodCount / secrets.length) * 100) }} />
        <StatCard icon={Clock} label="90일 이상 미갱신" value={String(staleCount)} tone="attention" meter={{ kind: "trend", percent: staleCount > 0 ? 50 : 0 }} />
        <StatCard icon={ShieldCheck} label="자동 동기화" value={autoSync ? "켜짐" : "꺼짐"} tone="success" meter={{ kind: "progress", percent: autoSync ? 100 : 0 }} />
      </div>
      <Banner
        variant="warning"
        title="시크릿 값은 저장 후 다시 볼 수 없습니다"
        description="값을 잊었다면 시크릿을 삭제하고 새로 만들어야 합니다. 워크플로 로그에도 값은 자동으로 마스킹됩니다."
      />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>저장소 시크릿 {secrets.length}개</span>
        <Button leadingVisual={Plus} size="small" onClick={ => setDialogOpen(true)}>
          새 시크릿 추가
        </Button>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {secrets.map((s) => (
          <div key={s.id} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 4px", borderBottom: "1px solid var(--borderColor-muted)" }}>
            <Label variant="secondary">●●●●●●●●</Label>
            <span style={{ fontWeight: 600, fontFamily: "ui-monospace, monospace", flex: 1 }}>{s.name}</span>
            {/* RelativeTime으로 상대 시각 표시. 클라이언트 계산 웹 컴포넌트임 */}
            <RelativeTime datetime={s.updatedAt} style={{ fontSize: "12px", color: "var(--fgColor-muted)" }} />
            <IconButton icon={Trash2} aria-label={`${s.name} 삭제`} size="small" variant="invisible" onClick={ => setPendingDelete(s)} />
          </div>
        ))}
      </div>

      {/* 환경별 시크릿 값을 Details로 접고 펼치기 렌더링 */}
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
          <span id="env-secrets-heading" style={{ fontSize: "12px", fontWeight: 600, color: "var(--fgColor-muted)" }}>환경별 시크릿</span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span id="auto-sync-label" style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>자동 동기화</span>
            <ToggleSwitch aria-labelledby="auto-sync-label" checked={autoSync} onChange={setAutoSync} size="small" />
          </div>
        </div>
        {ENVIRONMENTS.map((env) => (
          <Details key={env.name} style={{ borderBottom: "1px solid var(--borderColor-muted)", padding: "10px 4px" }}>
            <Details.Summary style={{ cursor: "pointer", fontSize: "14px", fontWeight: 600, color: "var(--fgColor-default)" }}>
              {env.name} <span style={{ fontWeight: 400, color: "var(--fgColor-muted)" }}>· {env.secretNames.length}개</span>
            </Details.Summary>
            {/* LabelGroup으로 환경별 시크릿 이름 칩 오버플로 관리하기 */}
            <div style={{ marginTop: "8px" }}>
              <LabelGroup visibleChildCount="auto">
                {env.secretNames.map((n) => (
                  <Label key={n} variant="secondary">{n}</Label>
                ))}
              </LabelGroup>
            </div>
          </Details>
        ))}
      </div>

      {dialogOpen && <AddSecretDialog onClose={ => setDialogOpen(false)} onAdd={addSecret} />}
      {/* 삭제 작업 ConfirmationDialog로 재확인 */}
      {pendingDelete && (
        <ConfirmationDialog
          title={`"${pendingDelete.name}" 시크릿을 삭제할까요?`}
          onClose={confirmRemove}
          confirmButtonContent="삭제"
          confirmButtonType="danger"
          cancelButtonContent="취소"
        >
          삭제하면 이 시크릿을 쓰는 워크플로가 다음 실행부터 값을 찾지 못합니다.
        </ConfirmationDialog>
      )}
    </div>
  );
}
