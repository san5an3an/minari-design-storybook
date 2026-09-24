import * as React from "react";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { requestLibAxes, type LibAxes } from "@/export/client";
import { isLibBase, isMarkupBase, libFormatsFor } from "@/export/lib/registry";
import { type ExportRequest, type Format } from "@/export/types";
import type { SystemDefinition } from "@/systems/types";

const FORMAT_LABEL: Record<Format, string> = {
  html: "HTML",
  next: "Next.js 컴포넌트",
  both: "둘 다",
  theme: "테마만",
};

const OURS_FORMATS: readonly Format[] = ["html", "next", "both"];

// 축 저장용 특수 키 2개, prop 이름과 안 겹치게 밑줄로 감싸기
const PARTS = "__parts__";
const STATES = "__states__";

const CHROME_CONTROL_VARS = {
  ["--semantic-border-width-default" as string]: "0.0625rem",
  ["--component-checkbox-bg" as string]: "var(--background)",
  ["--component-checkbox-border" as string]: "var(--input)",
  ["--component-checkbox-mark" as string]: "var(--primary-foreground)",
  ["--component-checkbox-radius" as string]: "0.25rem",
  ["--component-checkbox-bg-checked" as string]: "var(--primary)",
  ["--component-checkbox-border-checked" as string]: "var(--primary)",
  ["--component-checkbox-disabled-bg" as string]: "var(--muted)",
  ["--component-checkbox-disabled-fg" as string]: "var(--muted-foreground)",
} as React.CSSProperties;

interface Choice {
  value: string;
  // 값 옆에 붙는 짧은 꼬리표, 기본값 또는 태그 이름 표시용
  note?: string;
}

// 축 하나, 컴포넌트 구분 기준
interface Axis {
  key: string;
  label: string;
  desc: string;
  choices: Choice[];
}

// 축 키별 선택된 값 목록
type Picked = Record<string, string[]>;

function pickAll(axes: readonly Axis[]): Picked {
  return Object.fromEntries(axes.map((a) => [a.key, a.choices.map((c) => c.value)]));
}

function pickNone(axes: readonly Axis[]): Picked {
  return Object.fromEntries(axes.map((a) => [a.key, []]));
}

function AllRow({
  id, label, chosen, total, onToggle,
}: {
  id: string;
  label: React.ReactNode;
  chosen: number;
  total: number;
  onToggle: (on: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={id}
        checked={total > 0 && chosen === total}
        indeterminate={chosen > 0 && chosen < total}
        onCheckedChange={(next: boolean) => onToggle(next)}
        style={CHROME_CONTROL_VARS}
      />
      <Label htmlFor={id} className="cursor-pointer">
        {label}
        <span className="text-muted-foreground text-xs font-normal tabular-nums">
          {chosen}/{total}
        </span>
      </Label>
    </div>
  );
}

// 축 하나, 이름과 값 목록
function AxisRows({
  idBase, axis, picked, onToggleAxis, onToggleValue,
}: {
  idBase: string;
  axis: Axis;
  picked: readonly string[];
  onToggleAxis: (on: boolean) => void;
  onToggleValue: (value: string, on: boolean) => void;
}) {
  return (
    <section className="grid gap-2">
      <AllRow
        id={`${idBase}-${axis.key}-all`}
        label={<code className="font-mono text-sm">{axis.label}</code>}
        chosen={picked.length}
        total={axis.choices.length}
        onToggle={onToggleAxis}
      />
      {/* 축 설명 문구, api.json 선언 설명 그대로 사용 */}
      <p className="text-muted-foreground pl-6 text-xs">{axis.desc}</p>
      {/* 셀 수 고정하지 않음. 값 이름 길이가 축마다 달라서임 */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-x-4 gap-y-2 pl-6">
        {axis.choices.map((c) => {
          const id = `${idBase}-${axis.key}-${c.value}`;
          return (
            <div key={c.value} className="flex min-w-0 items-center gap-2">
              <Checkbox
                id={id}
                checked={picked.includes(c.value)}
                onCheckedChange={(next: boolean) => onToggleValue(c.value, next)}
                style={CHROME_CONTROL_VARS}
              />
              <Label htmlFor={id} className="cursor-pointer font-normal">
                <code className="font-mono">{c.value}</code>
                {c.note ? (
                  <span className="text-muted-foreground text-xs">{c.note}</span>
                ) : null}
              </Label>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ExportDialog({
  open, onOpenChange, system, section, title, onExport,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  system: SystemDefinition;
  // 현재 보고 있는 컴포넌트 이름. 파운데이션 화면에서는 열리지 않음
  section: string;
  // 화면에 적힌 이름 Alert, 상단바와 동일한 글자 사용
  title: string;
  // 내보내기 실행, 완료까지 대기하기
  onExport: (request: ExportRequest) => Promise<void>;
}) {
  const idBase = React.useId;

  // 라이브러리 경로 여부. 베이스 이름 나열 금지
  const isLib = isLibBase(system.baseKey);
  // 마크업 전용 여부, daisyUI SLDS 같은 예제 마크업 전용 라이브러리용
  const isMarkup = isLib && isMarkupBase(system.baseKey);
  const formats = isLib ? libFormatsFor(system.baseKey) : OURS_FORMATS;

  // 첫 셀에 이름 대신 값 사용. markup 전용은 next 없어 세그먼트 비활성 표시
  const [format, setFormat] = React.useState<Format>(formats[0]);

  // 라이브러리 경로에서 선택할 값, 서버가 제공
  const [lib, setLib] = React.useState<LibAxes | null>(null);
  const [libFailed, setLibFailed] = React.useState<string | null>(null);
  // 내보내는 중 상태와 실패 사유
  const [busy, setBusy] = React.useState(false);
  const [failed, setFailed] = React.useState<string | null>(null);

  const axes = React.useMemo<readonly Axis[]>( => {
    if (isLib) {
      const valueAxes = (lib?.props ?? []).map((p) => ({
        key: p.prop,
        label: p.prop,
        // 설명은 필수 입력. 계약 항목엔 desc가 항상 있어 라이브러리만 비면 화면이 어색해 보임
        desc: `${lib?.libTitle ?? "공식"} API 의 프롭이에요. 고른 값마다 한 판씩 나가요.`,
        choices: p.values.map((v) => ({
          value: v,
          note: v === p.default ? "기본" : undefined,
        })),
      }));
      const stateAxis = (lib?.states ?? []).length > 0
        ? [{
            key: STATES,
            label: "상태",
            desc: "값 없이 켜고 끄는 것. 켜면 그 상태의 패널도 함께 나가요.",
            choices: (lib?.states ?? []).map((v) => ({ value: v })),
          }]
        : [];
      return [...valueAxes, ...stateAxis];
    }

    const api = system.api[section];
    if (!api) return [];
    const out: Axis[] = [];

    for (const p of api.props) {
      if (p.values.length === 0) continue;
      out.push({
        key: p.prop,
        label: p.prop,
        desc: p.desc,
        choices: p.values.map((v) => ({
          // 기본값 표시. 선택 안 해도 이 값이 나가 생략 가능 여부 구분
          value: v,
          note: v === p.default ? "기본" : undefined,
        })),
      });
    }

    if (api.parts.length > 0) {
      out.push({
        key: PARTS,
        label: "부품",
        desc: "안에 들어가는 부분. 빼면 그 부분 없이 나가요.",
        // 태그를 라벨로 추가. 이름만으로는 글, 그림, 버튼 구분이 되지 않음
        choices: api.parts.map((p) => ({ value: p.name, note: `<${p.tag}>` })),
      });
    }

    const states = api.props.filter((p) => p.values.length === 0);
    if (states.length > 0) {
      out.push({
        key: STATES,
        label: "상태",
        desc: "값 없이 켜고 끄는 것. 켜면 그 상태의 패널도 함께 나가요.",
        choices: states.map((p) => ({ value: p.prop })),
      });
    }

    return out;
  }, [system, section, isLib, lib]);

  React.useEffect( => {
    if (!open || !isLib) {
      setLib(null);
      setLibFailed(null);
      return;
    }
    let cancelled = false;
    setLib(null);
    setLibFailed(null);
    requestLibAxes(system.baseKey, section)
      .then((v) => { if (!cancelled) setLib(v); })
      .catch((e: unknown) => {
        if (!cancelled) setLibFailed(e instanceof Error ? e.message : String(e));
      });
    return  => { cancelled = true; };
  }, [open, isLib, system.baseKey, section]);

  const [picked, setPicked] = React.useState<Picked>( => pickAll(axes));

  // 창 열 때마다 초기화. 이전 선택 남으면 숨은 필드값이 남을 수 있음
  React.useEffect( => {
    if (open) {
      setPicked(pickAll(axes));
      // 이전 실패 원인도 함께 초기화
      setFailed(null);
      // 형식도 초기화. 경로별 형식이 달라 안 하면 없는 형식이 선택된 채 남음
      setFormat((cur) => (formats.includes(cur) ? cur : formats[0]));
    }
  }, [open, axes, formats]);

  const total = axes.reduce((n, a) => n + a.choices.length, 0);
  const chosen = axes.reduce((n, a) => n + (picked[a.key]?.length ?? 0), 0);

  const toggleValue = (key: string, value: string, on: boolean) => {
    setPicked((prev) => {
      const cur = prev[key] ?? [];
      return { ...prev, [key]: on ? [...cur, value] : cur.filter((v) => v !== value) };
    });
  };

  const handleExport = async  => {
    // 화면 순서대로 수집. 선언 순서가 문서 순서
    const inOrder = (axis: Axis | undefined) =>
      axis ? axis.choices.map((c) => c.value).filter((v) => picked[axis.key]?.includes(v)) : [];
    setBusy(true);
    setFailed(null);
    try {
      await onExport({
        slug: system.slug,
        baseKey: system.baseKey,
        component: section,
        format,
        values: Object.fromEntries(
          axes.filter((a) => a.key !== PARTS && a.key !== STATES).map((a) => [a.key, inOrder(a)]),
        ),
        parts: inOrder(axes.find((a) => a.key === PARTS)),
        states: inOrder(axes.find((a) => a.key === STATES)),
      });
      // 성공 시에만 닫기
      onOpenChange(false);
    } catch (e) {
      setFailed(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* ods-chrome 클래스 지정. 안 붙이면 시스템 토큰이 흘러들어 모습이 제각각임 */}
      <DialogContent
        className="ods-chrome max-h-[85vh] gap-0 overflow-hidden p-0 sm:max-w-lg"
      >
        <DialogHeader className="p-4 pb-3">
          <DialogTitle>내보내기</DialogTitle>
          <DialogDescription>
            {/* 라이브러리 경로는 baseTitle 대신 npm 패키지명인 라이브러리 이름 사용 */}
            <b>{system.name}</b> 의 <b>{title}</b> 를{" "}
            {isLib ? (lib?.libTitle ?? system.baseTitle) : system.baseTitle} 로 내보내요.
          </DialogDescription>
        </DialogHeader>

        {/* 헤더와 푸터 고정, 가운데 영역만 스크롤 처리 */}
        <div className="grid gap-5 overflow-y-auto border-t px-4 py-4">
          <section className="grid gap-2">
            <span className="text-sm font-medium">형식</span>
            <ToggleGroup
              variant="outline"
              size="sm"
              spacing={0}
              value={[format]}
              // 값은 항상 배열. multiple 꺼져 있어도 배열이며, 정해진 세 형식으로 변환이 필수임
              onValueChange={(next: string[]) => {
                if (next.length > 0) setFormat(next[0] as Format);
              }}
              aria-label="내보낼 형식 고르기"
            >
              {formats.map((f) => (
                <ToggleGroupItem key={f} value={f} className="px-3">
                  {FORMAT_LABEL[f]}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            {/* 조건을 미리 안내하기 */}
            {isMarkup ? (
              // 이 계열 전용 컴포넌트 없음. 아래 라이브러리 문단 그대로 쓰면 오해 생길 수 있음
              <p className="text-muted-foreground text-xs">
                <b>{lib?.libTitle ?? system.baseTitle}</b> 의 <b>공식 예제 마크업</b>이 그대로
                나가요. 이 계열은 React 컴포넌트가 없어서(공식 예제가 마크업이에요) 없는 이름을
                지어내지 않아요. 이 시스템의 것은 <code>vars.css</code> · <code>theme.css</code> 로
                함께 가고, 그게 없으면 색이 죽어요.
              </p>
            ) : isLib ? (
              <p className="text-muted-foreground text-xs">
                <b>{lib?.libTitle ?? system.baseTitle}</b> 컴포넌트를 <b>그대로</b> 쓰는 코드가
                나가요. 이 시스템의 것은 테마와 토큰으로 실려요. <code>vars.css</code> 가 함께 가고,
                그게 없으면 색이 죽어요.
              </p>
            ) : system.baseKey !== "shadcn" && format !== "next" ? (
              // 미등재 베이스 chakra/mantine/standalone는 여기로, 자체 구현 처리
              <p className="text-muted-foreground text-xs">
                HTML 은 <b>{system.baseTitle}</b> 가 아니라 이 시스템의 <b>자체 구현</b>으로
                나가요. 정적 HTML 에는 그쪽 런타임이 없어요.
              </p>
            ) : null}
          </section>

          {isLib && libFailed ? (
            // 로드 실패와 데이터 없음 상태 확인
            <p className="text-destructive rounded-md border border-dashed p-4 text-sm">
              고를 것을 못 불러왔어요. {libFailed}
            </p>
          ) : isLib && !lib ? (
            <p className="text-muted-foreground rounded-md border border-dashed p-4 text-sm">
              {system.baseTitle} 공식 목록에서 고를 것을 불러오는 중이에요…
            </p>
          ) : axes.length === 0 ? (
            // 빈 상태를 명시적으로 표시. 비워 두면 로딩 중으로 오인될 수 있음
            <p className="text-muted-foreground rounded-md border border-dashed p-4 text-sm">
              <b>{title}</b> 은 갈리는 것이 없어요. 값 고르기도 부품도 없이 마크업과 토큰만으로
              정해져요.
            </p>
          ) : (
            <>
              <div className="border-t pt-4">
                <AllRow
                  id={`${idBase}-all`}
                  label={<span className="text-sm font-medium">{title} 에서 고를 것</span>}
                  chosen={chosen}
                  total={total}
                  onToggle={(on) => setPicked(on ? pickAll(axes) : pickNone(axes))}
                />
              </div>
              {axes.map((axis) => (
                <AxisRows
                  key={axis.key}
                  idBase={idBase}
                  axis={axis}
                  picked={picked[axis.key] ?? []}
                  onToggleAxis={(on) =>
                    setPicked((prev) => ({
                      ...prev,
                      [axis.key]: on ? axis.choices.map((c) => c.value) : [],
                    }))
                  }
                  onToggleValue={(value, on) => toggleValue(axis.key, value, on)}
                />
              ))}
            </>
          )}
        </div>

        <DialogFooter className="mx-0 mb-0">
          {/* 실패 메시지 창 내부 표시. 닫으면 선택 상태가 사라져 재선택 부담이 있음 */}
          {failed ? (
            <p className="text-destructive mr-auto self-center text-xs" role="alert">
              내보내지 못했어요. {failed}
            </p>
          ) : null}
          <Button variant="outline" onClick={ => onOpenChange(false)} disabled={busy}>
            취소
          </Button>
          {/* 선택 항목 없으면 내보내기 차단 */}
          <Button onClick={handleExport} disabled={busy || (axes.length > 0 && chosen === 0)}>
            {busy ? "내보내는 중…" : "내보내기"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
