import * as React from "react";
import { Braces, PanelRightOpen, Rows3 } from "lucide-react";
import { Button } from "../../../bases/shadcn/Button";
import { Divider } from "../../../bases/shadcn/Divider";
import { Hovercard } from "../../../bases/shadcn/Hovercard";
import { Input } from "../../../bases/shadcn/Input";
import { Menu } from "../../../bases/shadcn/Menu";
import { Segmented } from "../../../bases/shadcn/Segmented";
import { Select } from "../../../bases/shadcn/Select";
import { Slider } from "../../../bases/shadcn/Slider";

// 원본 프리셋 이름 목록
const PRESETS = {
  grammar: "문법 고치기",
  summarize: "2학년도 알아듣게 요약",
  parse: "비정형 자료를 표로",
  csv: "표에서 항목 뽑기",
  emoji: "이모지로 옮기기",
} as const;

// data/models.ts의 두 그룹 구조 유지, 이름만 현재 모델로 변경
const MODEL_GROUPS = [
  {
    label: "Opus",
    items: { "opus-5": "claude-opus-5", "opus-5-1m": "claude-opus-5[1m]" },
  },
  {
    label: "그 밖",
    items: { "sonnet-5": "claude-sonnet-5", "haiku-4-5": "claude-haiku-4-5" },
  },
] as const;

const MODES = {
  complete: { label: "이어 쓰기", Icon: Rows3 },
  insert: { label: "사이에 넣기", Icon: PanelRightOpen },
  edit: { label: "고쳐 쓰기", Icon: Braces },
} as const;
type ModeKey = keyof typeof MODES;

// 라벨, 현재 값, 슬라이더 세트
function Knob({
  label,
  hint,
  value,
  onValue,
  min,
  max,
  step,
  format = (v: number) => String(v),
}: {
  label: string;
  hint: string;
  value: number;
  onValue: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format?: (v: number) => string;
}) {
  const id = React.useId;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        {/* 이름 위 마우스 올리면 변경 대상 핸들 표시 */}
        <Hovercard
          trigger={
            <label
              htmlFor={id}
              className="cursor-help"
              style={{
                color: "var(--semantic-fg-neutral-default)",
                fontSize: "var(--semantic-text-body-sm)",
              }}
            >
              {label}
            </label>
          }
          side="left"
        >
          <span
            style={{
              color: "var(--semantic-fg-neutral-default)",
              fontSize: "var(--semantic-text-body-sm)",
              lineHeight: "var(--semantic-line-height-relaxed)",
            }}
          >
            {hint}
          </span>
        </Hovercard>
        <span
          className="tabular-nums"
          style={{
            background: "var(--semantic-bg-neutral-subtle)",
            borderRadius: "var(--semantic-radius-control)",
            color: "var(--semantic-fg-neutral-default)",
            fontSize: "var(--semantic-text-caption)",
            padding: "var(--semantic-pad-control-sm-block) var(--semantic-pad-control-sm-inline)",
          }}
        >
          {format(value)}
        </span>
      </div>
      <Slider
        value={value}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => onValue(Array.isArray(v) ? v[0] : (v as number))}
        aria-label={label}
      />
    </div>
  );
}

export function PlaygroundScreen {
  const [preset, setPreset] = React.useState("grammar");
  const [model, setModel] = React.useState("opus-5");
  const [mode, setMode] = React.useState<ModeKey>("complete");
  const [temperature, setTemperature] = React.useState(0.56);
  const [maxLength, setMaxLength] = React.useState(256);
  const [topP, setTopP] = React.useState(0.9);

  return (
    <div className="flex flex-col gap-6">
      {/* 헤더. 좁으면 두 행으로 접힘, md:h-16 원본은 한 행 고정 */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3
          style={{
            color: "var(--semantic-fg-neutral-default)",
            fontSize: "var(--semantic-text-heading-sm)",
            letterSpacing: "var(--semantic-tracking-heading-sm)",
          }}
        >
          Playground
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <Select
            aria-label="사전설정 고르기"
            size="sm"
            value={preset}
            onValueChange={setPreset}
            items={PRESETS}
          />
          <Button variant="outline">저장</Button>
          <Button variant="outline">코드 보기</Button>
          <Button variant="outline">공유</Button>
          {/* 메뉴 클릭 무반응. Menu 콜백 없고 PresetActions도 데모서 미동작 상태임 */}
          <Menu
            align="end"
            trigger={
              <Button variant="outline" aria-label="그 밖의 동작">
                ⋯
              </Button>
            }
            items={[
              { label: "사전설정 이름 바꾸기" },
              { separator: true },
              { label: "사전설정 지우기", danger: true },
            ]}
          />
        </div>
      </div>

      <Divider />

      {/* 본문 레이아웃. 넓으면 설정 오른쪽, 좁으면 위로 이동 고정 */}
      <div className="grid gap-6 md:grid-cols-[1fr_15rem]">
        <div className="flex flex-col gap-4 md:order-2">
          <div className="flex flex-col gap-3">
            <Hovercard
              trigger={
                <span
                  className="cursor-help"
                  style={{
                    color: "var(--semantic-fg-neutral-default)",
                    fontSize: "var(--semantic-text-body-sm)",
                  }}
                >
                  모드
                </span>
              }
              side="left"
            >
              <span
                style={{
                  color: "var(--semantic-fg-neutral-default)",
                  fontSize: "var(--semantic-text-body-sm)",
                  lineHeight: "var(--semantic-line-height-relaxed)",
                }}
              >
                할 일에 맞는 방식을 고르세요. 이어 쓸 글머리만 줄 수도, 앞뒤를 주고 사이를
                채우게 할 수도, 글과 지시를 함께 주고 고치게 할 수도 있습니다.
              </span>
            </Hovercard>
            <Segmented
              value={[mode]}
              onValueChange={(v) => {
                if (v.length) setMode(v[0] as ModeKey);
              }}
              className="w-full"
            >
              {(Object.keys(MODES) as ModeKey[]).map((k) => {
                const { label, Icon } = MODES[k];
                return (
                  <Segmented.Item key={k} value={k}>
                    <Icon size={16} aria-hidden />
                    <span className="sr-only">{label}</span>
                  </Segmented.Item>
                );
              })}
            </Segmented>
          </div>

          <Select
            label="모델"
            aria-label="모델 고르기"
            value={model}
            onValueChange={setModel}
            items={{}}
            groups={MODEL_GROUPS.map((g) => ({ label: g.label, items: { ...g.items } }))}
          />

          <Knob
            label="온도"
            hint="무엇을 고를지 얼마나 흔들지 정합니다. 0 에 가까울수록 같은 답이 나오고, 높을수록 뜻밖의 답이 섞입니다."
            value={temperature}
            onValue={setTemperature}
            min={0}
            max={1}
            step={0.01}
            format={(v) => v.toFixed(2)}
          />
          <Knob
            label="최대 길이"
            hint="답에 쓸 수 있는 토큰 수의 위쪽 한계입니다. 하나는 대략 네 글자쯤 됩니다."
            value={maxLength}
            onValue={setMaxLength}
            min={0}
            max={4000}
            step={16}
          />
          <Knob
            label="Top P"
            hint="가능한 낱말을 확률이 높은 쪽부터 담다가 합이 이 값을 넘으면 멈춥니다. 온도와 함께 쓰기보다 둘 중 하나만 만지는 편이 낫습니다."
            value={topP}
            onValue={setTopP}
            min={0}
            max={1}
            step={0.01}
            format={(v) => v.toFixed(2)}
          />
        </div>

        <div className="flex min-w-0 flex-col gap-4 md:order-1">
          {mode === "complete" ? (
            <Input
              multiline
              aria-label="이어 쓸 글"
              placeholder="여기서부터 이어 쓰게 하세요…"
              className="min-h-64"
            />
          ) : null}

          {mode === "insert" ? (
            // 앞뒤를 지정하고 사이를 채움. 원본은 [insert] 플레이스홀더 사용
            <div className="grid gap-4 lg:grid-cols-2">
              <Input
                multiline
                aria-label="앞뒤 글"
                placeholder="앞부분을 쓰고, 채울 위치에 [insert] 를 두고, 뒷부분을 쓰세요."
                className="min-h-64"
              />
              <div
                className="min-h-64 p-4"
                style={{
                  background: "var(--semantic-bg-neutral-subtlest)",
                  border:
                    "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                  borderRadius: "var(--semantic-radius-container)",
                  color: "var(--semantic-fg-neutral-subtle)",
                  fontSize: "var(--semantic-text-body-sm)",
                }}
              >
                채워진 글이 여기 나옵니다
              </div>
            </div>
          ) : null}

          {mode === "edit" ? (
            // 텍스트와 지시사항을 따로 전달받기. 위아래 두 영역으로 정렬
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <Input
                  multiline
                  aria-label="고칠 글"
                  placeholder="고칠 글을 붙여 넣으세요."
                  className="min-h-40"
                />
                <Input
                  multiline
                  aria-label="지시"
                  placeholder="어떻게 고칠지 알려 주세요. 예: 문법을 바로잡아 주세요."
                  className="min-h-20"
                />
              </div>
              <div
                className="min-h-64 p-4"
                style={{
                  background: "var(--semantic-bg-neutral-subtlest)",
                  border:
                    "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                  borderRadius: "var(--semantic-radius-container)",
                  color: "var(--semantic-fg-neutral-subtle)",
                  fontSize: "var(--semantic-text-body-sm)",
                }}
              >
                고쳐진 글이 여기 나옵니다
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="solid" tone="brand">보내기</Button>
            <Button variant="plain">지난 것 보기</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
