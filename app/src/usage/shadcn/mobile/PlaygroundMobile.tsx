"use client";
import * as React from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../../../bases/shadcn/Button";
import { Divider } from "../../../bases/shadcn/Divider";
import { Input } from "../../../bases/shadcn/Input";
import { Menu } from "../../../bases/shadcn/Menu";
import { Segmented } from "../../../bases/shadcn/Segmented";
import { Select } from "../../../bases/shadcn/Select";
import { Slider } from "../../../bases/shadcn/Slider";
import { MODEL_GROUPS, MODES, PRESETS, type ModeKey } from "../screens/PlaygroundScreen";
import { TOUCH } from "./MobileShell";

// 슬라이더 터치 영역을 모바일 껍데기 안에서만 확대. 템플릿 리터럴이라 문자열 안에 백틱, 주석을 넣으면 안 됨
const PLAYGROUND_CSS = `
[data-slot="usage-mobile-shell"] [data-slot="slider"] > :first-child {
  min-height: 2.75rem;
}
[data-slot="usage-mobile-shell"] [data-slot="slider-thumb"]::after {
  inset: -1.25rem;
}
`;

const SUBTLE = { color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" } as const;

// 설명 글 스타일 지정. 한글이 띄어쓰기에서만 줄바꿈되게 keep-all 적용함
const HINT = {
  ...SUBTLE,
  fontSize: "var(--semantic-text-caption)",
  lineHeight: "var(--semantic-line-height-relaxed)",
  wordBreak: "keep-all",
  overflowWrap: "anywhere",
} as const;

// 모델 값을 표시 이름으로 바꾸는 표 생성. 비워 두면 Select 트리거에 값이 그대로 보임
const MODEL_NAMES: Record<string, string> = Object.fromEntries(MODEL_GROUPS.flatMap((g) => Object.entries(g.items)));

// 이름, 현재 값, 슬라이더, 설명을 한 묶음으로 표시. 한 줄 전체를 label로 감싸 터치 영역 44px 이상 확보함
function KnobRow({ label, hint, value, onValue, min, max, step, format = (v: number) => String(v) }: {
  label: string;
  hint: string;
  value: number;
  onValue: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format?: (v: number) => string;
}) {
  return (
    <label className="flex flex-col gap-(--semantic-space-xs)" style={{ minHeight: TOUCH }}>
      <span className="flex items-center justify-between gap-(--semantic-space-sm)">
        <span
          className="min-w-0 truncate"
          style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body)" }}
        >
          {label}
        </span>
        <span
          className="shrink-0 tabular-nums"
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
      </span>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => onValue(Array.isArray(v) ? v[0] : (v as number))}
        aria-label={label}
      />
      <span style={HINT}>{hint}</span>
    </label>
  );
}

// 글 상자 높이를 height로 고정. 공용 CSS가 textarea의 min-height를 44px로 덮어 min-h 클래스가 무시됨
const TALL = { height: "12rem" } as const;

// 결과 출력 영역 표시
function ResultPane({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-40 p-(--semantic-space-md)"
      style={{
        background: "var(--semantic-bg-neutral-subtlest)",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        color: "var(--semantic-fg-neutral-subtle)",
        fontSize: "var(--semantic-text-body-sm)",
      }}
    >
      {children}
    </div>
  );
}

export function PlaygroundMobile() {
  const [preset, setPreset] = React.useState("grammar");
  const [model, setModel] = React.useState("opus-5");
  const [mode, setMode] = React.useState<ModeKey>("complete");
  const [temperature, setTemperature] = React.useState(0.56);
  const [maxLength, setMaxLength] = React.useState(256);
  const [topP, setTopP] = React.useState(0.9);

  return (
    <div className="flex flex-col gap-(--semantic-space-sm)">
      <style>{PLAYGROUND_CSS}</style>

      {/* 사전설정 Select는 폭 가득, 동작 버튼 네 개는 한 줄 네 칸으로 배치 */}
      <div className="flex flex-col gap-(--semantic-space-sm)">
        <div className="[&_[data-slot=select-trigger]]:w-full">
          <Select label="사전설정" aria-label="사전설정 고르기" value={preset} onValueChange={setPreset} items={PRESETS} />
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-(--semantic-space-sm)">
          <Button variant="outline">저장</Button>
          <Button variant="outline">코드 보기</Button>
          <Button variant="outline">공유</Button>
          {/* 메뉴 항목을 동작 없이 표시. 데스크탑 원본도 데모에서 동작하지 않음 */}
          <Menu
            align="end"
            trigger={
              <Button variant="outline" aria-label="그 밖의 동작" style={{ minWidth: TOUCH, minHeight: TOUCH, padding: 0 }}>
                <MoreHorizontal size={18} aria-hidden />
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

      {/* 설정 항목을 한 칸씩 세로로 배치 */}
      <div className="flex flex-col gap-(--semantic-space-lg)">
        <div className="flex flex-col gap-(--semantic-space-sm)">
          <span style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body-sm)" }}>모드</span>
          <Segmented
            value={[mode]}
            onValueChange={(v) => {
              if (v.length) setMode(v[0] as ModeKey);
            }}
            className="w-full"
          >
            {(Object.keys(MODES) as ModeKey[]).map((k) => (
              <Segmented.Item key={k} value={k} className="min-w-0 flex-1">
                <span className="whitespace-nowrap">{MODES[k].label}</span>
              </Segmented.Item>
            ))}
          </Segmented>
          <span style={HINT}>
            할 일에 맞는 방식을 고르세요. 이어 쓸 글머리만 줄 수도, 앞뒤를 주고 사이를 채우게 할 수도, 글과 지시를 함께 주고 고치게 할 수도 있습니다.
          </span>
        </div>

        <div className="[&_[data-slot=select-trigger]]:w-full">
          <Select
            label="모델"
            aria-label="모델 고르기"
            value={model}
            onValueChange={setModel}
            items={MODEL_NAMES}
            groups={MODEL_GROUPS.map((g) => ({ label: g.label, items: { ...g.items } }))}
          />
        </div>

        <KnobRow
          label="온도"
          hint="무엇을 고를지 얼마나 흔들지 정합니다. 0 에 가까울수록 같은 답이 나오고, 높을수록 뜻밖의 답이 섞입니다."
          value={temperature}
          onValue={setTemperature}
          min={0}
          max={1}
          step={0.01}
          format={(v) => v.toFixed(2)}
        />
        <KnobRow
          label="최대 길이"
          hint="답에 쓸 수 있는 토큰 수의 위쪽 한계입니다. 하나는 대략 네 글자쯤 됩니다."
          value={maxLength}
          onValue={setMaxLength}
          min={0}
          max={4000}
          step={16}
        />
        <KnobRow
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

      <Divider />

      {/* 모드별 글 상자 배치. 모바일은 모든 모드를 한 열로 표시함 */}
      <div className="flex min-w-0 flex-col gap-(--semantic-space-md)">
        {mode === "complete" ? (
          <Input
            multiline
            label="이어 쓸 글"
            placeholder="여기서부터 이어 쓰게 하세요…"
            style={TALL}
          />
        ) : null}

        {mode === "insert" ? (
          <>
            <Input
              multiline
              label="앞뒤 글"
              placeholder="앞부분을 쓰고, 채울 자리에 [insert] 를 두고, 뒷부분을 쓰세요."
              style={TALL}
            />
            <ResultPane>채워진 글이 여기 나옵니다</ResultPane>
          </>
        ) : null}

        {mode === "edit" ? (
          <>
            <Input multiline label="고칠 글" placeholder="고칠 글을 붙여 넣으세요." style={{ height: "10rem" }} />
            <Input
              multiline
              label="지시"
              placeholder="어떻게 고칠지 알려 주세요. 예: 문법을 바로잡아 주세요."
              style={{ height: "6rem" }}
            />
            <ResultPane>고쳐진 글이 여기 나옵니다</ResultPane>
          </>
        ) : null}

        <div className="flex flex-col gap-(--semantic-space-sm)">
          <Button variant="solid" tone="brand" style={{ minHeight: TOUCH, width: "100%" }}>보내기</Button>
          <Button variant="plain" style={{ minHeight: TOUCH, width: "100%" }}>지난 것 보기</Button>
        </div>
      </div>
    </div>
  );
}
