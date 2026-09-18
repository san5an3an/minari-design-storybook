import * as React from "react";
import { Check, ChevronRight, ChevronsUpDown, Download, Palette, Search } from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExportDialog } from "@/components/ExportDialog";
import { ImportButton, ImportDialog } from "@/components/ImportDialog";
import { requestExport } from "@/export/client";
import { isLibBase } from "@/export/lib/registry";
import { sinkFor } from "@/export/sinks/registry";
import { ColorScheme } from "./preview/ColorScheme";
import { Typography } from "./preview/Typography";
import { UsagePage } from "./usage/UsagePage";
import { ComponentPage } from "./preview/ComponentPage";
import { ANTD_GROUPS, ANTD_INDEX, isAntdSlug } from "./preview/antdRef/loader";
import { MUI_GROUPS, MUI_INDEX, isMuiSlug } from "./preview/muiRef/loader";
// 13종 어댑터는 정적 로드, 라이브러리/CSS/화면은 지연 로드하기
import { carbonAdapter } from "./preview/carbonRef/adapter";
import { chakraAdapter } from "./preview/chakraRef/adapter";
import { bootstrapAdapter } from "./preview/bootstrapRef/adapter";
import { flowbiteAdapter } from "./preview/flowbiteRef/adapter";
import { grommetAdapter } from "./preview/grommetRef/adapter";
import { primerAdapter } from "./preview/primerRef/adapter";
import { lightningAdapter } from "./preview/lightningRef/adapter";
import { fluentAdapter } from "./preview/fluentRef/adapter";
import { spectrumAdapter } from "./preview/spectrumRef/adapter";
import { blueprintAdapter } from "./preview/blueprintRef/adapter";
import { daisyuiAdapter } from "./preview/daisyuiRef/adapter";
import { cloudscapeAdapter } from "./preview/cloudscapeRef/adapter";
import { herouiAdapter } from "./preview/herouiRef/adapter";
import { primereactAdapter } from "./preview/primereactRef/adapter";
import { COSS_INDEX, isCossSlug } from "./preview/cossRef/loader";
import type { BaseRefAdapter } from "./preview/refContract";
import { MODES, MODE_LABEL, type Mode } from "./preview/tokens";
import { DEFAULT_FONT, FONTS, fontByKey, loadFont } from "./preview/fonts";
import { SYSTEMS, systemBySlug } from "./systems/registry";
import { BASES, BASE_ORDER } from "./bases/registry";
import { resolveSystem } from "./systems/resolve";
import type { SystemDefinition } from "./systems/types";

// named export를 default로 감싸 지연 로드용 변환
const AntdReference = React.lazy( =>
  import("./preview/AntdReference").then((m) => ({ default: m.AntdReference })));
const MuiReference = React.lazy( =>
  import("./preview/MuiReference").then((m) => ({ default: m.MuiReference })));
// coss도 antd, mui와 같은 전용 화면 구조. 20번째 베이스로 신규 등록
const CossReference = React.lazy( =>
  import("./preview/CossReference").then((m) => ({ default: m.CossReference })));
function baseReference(baseKey: string, adapter: BaseRefAdapter, baseTitle: string) {
  return React.lazy( =>
    import("./preview/BaseReference").then((m) => ({
      default: (p: { slug: string; system: SystemDefinition; active: Mode }) => (
        <m.BaseReference {...p} baseKey={baseKey} adapter={adapter} baseTitle={baseTitle} />
      ),
    })));
}
const CarbonReference = baseReference("carbon", carbonAdapter, "Carbon");
const ChakraReference = baseReference("chakra", chakraAdapter, "Chakra UI");
const BootstrapReference = baseReference("bootstrap", bootstrapAdapter, "React Bootstrap");
const FlowbiteReference = baseReference("flowbite", flowbiteAdapter, "Flowbite React");
const GrommetReference = baseReference("grommet", grommetAdapter, "Grommet");
const PrimerReference = baseReference("primer", primerAdapter, "Primer");
const LightningReference = baseReference("lightning", lightningAdapter, "Lightning");
const FluentReference = baseReference("fluent", fluentAdapter, "Fluent UI");
const SpectrumReference = baseReference("spectrum", spectrumAdapter, "React Spectrum");
const BlueprintReference = baseReference("blueprint", blueprintAdapter, "Blueprint");
const DaisyuiReference = baseReference("daisyui", daisyuiAdapter, "daisyUI");
const CloudscapeReference = baseReference("cloudscape", cloudscapeAdapter, "Cloudscape");
const HerouiReference = baseReference("heroui", herouiAdapter, "HeroUI");
const PrimereactReference = baseReference("primereact", primereactAdapter, "PrimeReact");

// 지연 로드 전 위치 표시
function ReferenceLoading({ title }: { title: string }) {
  return (
    <div className="text-muted-foreground px-6 py-10 text-sm" role="status" aria-live="polite">
      {title} 화면을 불러오고 있어요…
    </div>
  );
}

const STYLE_ID = "ods-active-system";

// 컴포넌트 아닌 화면 목록, 컴포넌트 이름과 안 겹치는 값 사용
const COLORS = "__colors__";
const TYPE = "__type__";

const USAGE1 = "__usage__";
const USAGE2 = "__usage2__";
const USAGE3 = "__usage3__";
const USAGE_VARIANT: Record<string, 1 | 2 | 3> = { [USAGE1]: 1, [USAGE2]: 2, [USAGE3]: 3 };

const MAIN: { key: string; label: string }[] = [
  { key: USAGE1, label: "Usage 1" },
  { key: USAGE2, label: "Usage 2" },
  { key: USAGE3, label: "Usage 3" },
];

const FOUNDATIONS: { key: string; label: string }[] = [
  { key: COLORS, label: "Color Scheme" },
  { key: TYPE, label: "Typography" },
];

// 구 주소 usage를 usage1로 처리
const ROUTE_ALIAS: Record<string, string> = {
  colors: COLORS, "type-scale": TYPE,
  usage: USAGE1, usage1: USAGE1, usage2: USAGE2, usage3: USAGE3,
};
const ROUTE_SLUG: Record<string, string> = {
  [COLORS]: "colors", [TYPE]: "type-scale",
  [USAGE1]: "usage1", [USAGE2]: "usage2", [USAGE3]: "usage3",
};

type Route = { base: string; slug: string; section: string };

function parseHash: Route | null {
  const raw = window.location.hash.replace(/^#\/?/, "");
  if (!raw) return null;
  const [rawBase, rawSlug, rawSection] = raw.split("/").map(decodeURIComponent);
  // 알 수 없는 베이스, 색이면 주소 무시. 없는 조합의 빈 화면 방지
  if (!(rawBase in BASES)) return null;
  if (!SYSTEMS.some((s) => s.slug === rawSlug)) return null;
  const officialHasType = MIRRORS[rawBase]?.isSlug("typography") ?? false;
  const legacy = rawSection === "typography" && !officialHasType ? TYPE : null;
  const section = legacy ?? (rawSection ? (ROUTE_ALIAS[rawSection] ?? rawSection) : COLORS);
  return { base: rawBase, slug: rawSlug, section };
}

function hashOf(base: string, slug: string, section: string) {
  return `#/${base}/${slug}/${ROUTE_SLUG[section] ?? section}`;
}

function modeFromQuery: Mode {
  if (typeof window === "undefined") return "light";
  const asked = new URLSearchParams(window.location.search).get("mode");
  return (MODES as readonly string[]).includes(asked ?? "") ? (asked as Mode) : "light";
}

function useSystemStyles(system: SystemDefinition) {
  React.useEffect( => {
    let el = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
    if (!el) {
      el = document.createElement("style");
      el.id = STYLE_ID;
      document.head.appendChild(el);
    }
    el.textContent = system.css;
  }, [system]);
}

function useFont(key: string) {
  React.useEffect( => {
    const font = fontByKey(key);
    loadFont(font);
    document.documentElement.style.setProperty("--base-font-family-sans", font.stack);
    document.documentElement.style.setProperty("--base-font-name-sans", font.label);
  }, [key]);
}

function useTheme(mode: Mode) {
  React.useEffect( => {
    const root = document.documentElement;
    root.dataset.theme = mode;
    root.classList.toggle("dark", mode !== "light");
  }, [mode]);
}

function drawnCount(baseKey: string, impl: Record<string, unknown>): number {
  const mirror = MIRRORS[baseKey];
  // 사이드바 렌더링 개수 계산
  if (mirror?.noOurs && mirror.GROUPS) return Object.values(mirror.GROUPS).reduce((n, g) => n + g.length, 0);
  if (mirror) return mirror.INDEX.length;
  return Object.keys(impl).length;
}

function BaseCard({
  baseKey, active, onPick,
}: {
  baseKey: string;
  active: boolean;
  onPick: (key: string) => void;
}) {
  const base = BASES[baseKey];
  const n = drawnCount(base.key, base.impl);
  return (
    <button
      type="button"
      onClick={ => onPick(baseKey)}
      aria-pressed={active}
      className={`flex w-full items-start gap-2.5 rounded-md border p-3 text-left
                  transition-colors hover:bg-accent
                  ${active ? "border-primary bg-accent" : "border-border"}`}
    >
      <span className="grid min-w-0 gap-0.5">
        <span className="flex items-center gap-1.5 text-sm font-medium">
          {base.title}
          {active ? <Check className="size-3.5 shrink-0" /> : null}
        </span>
        <span className="text-muted-foreground text-xs">
          React 로 볼 수 있는 컴포넌트 {n}종 · 색은 20종 모두
        </span>
      </span>
    </button>
  );
}

const HIDDEN_BASES: string[] = [];

const CARD_ORDER = ["shadcn", "antd", "mui", "standalone", "blueprint"];
const cardRank = (key: string) => {
  const i = CARD_ORDER.indexOf(key);
  return i < 0 ? CARD_ORDER.length : i; // 알 수 없는 베이스는 뒤로 정렬
};

function BasePicker({
  base, color, onPick,
}: {
  base: string;
  color: SystemDefinition;
  onPick: (key: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const current = BASES[base];
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            onClick={ => setOpen(true)}
            tooltip="컴포넌트 시스템 바꾸기"
            aria-haspopup="dialog"
          >
            <color.Icon className="size-4 shrink-0" style={{ color: color.brand }} />
            <span className="grid text-left leading-tight">
              <span className="text-sm font-medium">{current.title}</span>
              <span className="text-muted-foreground text-xs">
                컴포넌트 {drawnCount(current.key, current.impl)}종
              </span>
            </span>
            <ChevronsUpDown className="ml-auto size-4 shrink-0 opacity-50" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      {/* ods-chrome 클래스 지정. 팝업도 없으면 토큰이 흘러들어 모습이 제각각임 */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="ods-chrome max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>컴포넌트 시스템 고르기</DialogTitle>
            <DialogDescription>
              컴포넌트를 <b>무엇으로 만드는가</b>를 골라요. 어느 것을 골라도
              <b> 색 20종을 모두</b> 쓸 수 있어요. 색은 상단바에서 골라요.
            </DialogDescription>
          </DialogHeader>
          {/* BASE_ORDER 그대로 안 쓰고 HIDDEN_BASES 제외해 재구성 */}
          <div className="grid gap-2 sm:grid-cols-2">
            {BASE_ORDER.filter((key) => !HIDDEN_BASES.includes(key))
              .sort((a, b) => cardRank(a) - cardRank(b))
              .map((key) => (
                <BaseCard
                  key={key}
                  baseKey={key}
                  active={key === base}
                  onPick={(next) => {
                    onPick(next);
                    setOpen(false);
                  }}
                />
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

const ANTD_TITLE = new Map(ANTD_INDEX.map((c) => [c.slug, c.title]));
const MUI_TITLE = new Map(MUI_INDEX.map((c) => [c.slug, c.title]));

type MirrorEntry = {
  // 베이스의 슬러그 실제 보유 여부. 목록 기준 확인
  isSlug: (slug: string) => boolean;
  // 화면 렌더링 목록, 여기서는 drawnCount 개수만 사용
  INDEX: readonly unknown[];
  // 공식 사이드바 그룹, 순서 재정렬 없이 유지
  GROUPS?: Record<string, string[]>;
  // 슬러그를 공식 이름과 연결. Record가 아니라 Map임
  TITLE?: Map<string, string>;
  Reference: React.LazyExoticComponent<
    React.ComponentType<React.ComponentProps<typeof AntdReference>>
  >;
  // 13종, 어댑터 섹션 없는 미러라 사이드바 섹션 미표시
  noOurs?: true;
};

// coss는 group 없어 GROUPS 미제공, flat 목록으로 처리
const COSS_TITLE = new Map(COSS_INDEX.map((c) => [c.slug, c.title]));

const MIRRORS: Record<string, MirrorEntry> = {
  antd: { isSlug: isAntdSlug, INDEX: ANTD_INDEX, GROUPS: ANTD_GROUPS, TITLE: ANTD_TITLE, Reference: AntdReference },
  mui: { isSlug: isMuiSlug, INDEX: MUI_INDEX, GROUPS: MUI_GROUPS, TITLE: MUI_TITLE, Reference: MuiReference },
  coss: { isSlug: isCossSlug, INDEX: COSS_INDEX, TITLE: COSS_TITLE, Reference: CossReference, noOurs: true },
  carbon: {
    isSlug: carbonAdapter.isSlug, INDEX: carbonAdapter.INDEX, GROUPS: carbonAdapter.GROUPS,
    TITLE: carbonAdapter.TITLE, Reference: CarbonReference, noOurs: true,
  },
  chakra: {
    isSlug: chakraAdapter.isSlug, INDEX: chakraAdapter.INDEX, GROUPS: chakraAdapter.GROUPS,
    TITLE: chakraAdapter.TITLE, Reference: ChakraReference, noOurs: true,
  },
  bootstrap: {
    isSlug: bootstrapAdapter.isSlug, INDEX: bootstrapAdapter.INDEX, GROUPS: bootstrapAdapter.GROUPS,
    TITLE: bootstrapAdapter.TITLE, Reference: BootstrapReference, noOurs: true,
  },
  flowbite: {
    isSlug: flowbiteAdapter.isSlug, INDEX: flowbiteAdapter.INDEX, GROUPS: flowbiteAdapter.GROUPS,
    TITLE: flowbiteAdapter.TITLE, Reference: FlowbiteReference, noOurs: true,
  },
  grommet: {
    isSlug: grommetAdapter.isSlug, INDEX: grommetAdapter.INDEX, GROUPS: grommetAdapter.GROUPS,
    TITLE: grommetAdapter.TITLE, Reference: GrommetReference, noOurs: true,
  },
  primer: {
    isSlug: primerAdapter.isSlug, INDEX: primerAdapter.INDEX, GROUPS: primerAdapter.GROUPS,
    TITLE: primerAdapter.TITLE, Reference: PrimerReference, noOurs: true,
  },
  lightning: {
    isSlug: lightningAdapter.isSlug, INDEX: lightningAdapter.INDEX, GROUPS: lightningAdapter.GROUPS,
    TITLE: lightningAdapter.TITLE, Reference: LightningReference, noOurs: true,
  },
  fluent: {
    isSlug: fluentAdapter.isSlug, INDEX: fluentAdapter.INDEX, GROUPS: fluentAdapter.GROUPS,
    TITLE: fluentAdapter.TITLE, Reference: FluentReference, noOurs: true,
  },
  spectrum: {
    isSlug: spectrumAdapter.isSlug, INDEX: spectrumAdapter.INDEX, GROUPS: spectrumAdapter.GROUPS,
    TITLE: spectrumAdapter.TITLE, Reference: SpectrumReference, noOurs: true,
  },
  blueprint: {
    isSlug: blueprintAdapter.isSlug, INDEX: blueprintAdapter.INDEX, GROUPS: blueprintAdapter.GROUPS,
    TITLE: blueprintAdapter.TITLE, Reference: BlueprintReference, noOurs: true,
  },
  daisyui: {
    isSlug: daisyuiAdapter.isSlug, INDEX: daisyuiAdapter.INDEX, GROUPS: daisyuiAdapter.GROUPS,
    TITLE: daisyuiAdapter.TITLE, Reference: DaisyuiReference, noOurs: true,
  },
  cloudscape: {
    isSlug: cloudscapeAdapter.isSlug, INDEX: cloudscapeAdapter.INDEX, GROUPS: cloudscapeAdapter.GROUPS,
    TITLE: cloudscapeAdapter.TITLE, Reference: CloudscapeReference, noOurs: true,
  },
  heroui: {
    isSlug: herouiAdapter.isSlug, INDEX: herouiAdapter.INDEX, GROUPS: herouiAdapter.GROUPS,
    TITLE: herouiAdapter.TITLE, Reference: HerouiReference, noOurs: true,
  },
  primereact: {
    isSlug: primereactAdapter.isSlug, INDEX: primereactAdapter.INDEX, GROUPS: primereactAdapter.GROUPS,
    TITLE: primereactAdapter.TITLE, Reference: PrimereactReference, noOurs: true,
  },
};

type NavItem = { key: string; label: string };
type NavSpec = {
  label: string;
  // 이름 뒤 개수 표시, Main, Foundations 제외
  count?: boolean;
  items: NavItem[];
};

function filterSpec(spec: NavSpec, q: string): NavSpec | null {
  if (spec.items.length === 0) return null; // 빈 그룹은 검색 결과와 무관하게 렌더링 제외
  if (q === "") return spec;
  const items = spec.label.toLowerCase.includes(q)
    ? spec.items
    : spec.items.filter((i) => i.label.toLowerCase.includes(q));
  return items.length === 0 ? null : { ...spec, items };
}

// 그룹 단위 렌더링. 필터링 없이 완료된 데이터 사용
function NavGroup({ spec, section, onPick }: {
  spec: NavSpec;
  section: string;
  onPick: (section: string) => void;
}) {
  return (
    <SidebarGroup>
      {/* 라벨이 빈 그룹은 헤더 생략 */}
      {spec.label ? (
        <SidebarGroupLabel>
          {spec.count ? `${spec.label} ${spec.items.length}` : spec.label}
        </SidebarGroupLabel>
      ) : null}
      <SidebarGroupContent>
        <SidebarMenu>
          {spec.items.map((it) => (
            <SidebarMenuItem key={it.key}>
              <SidebarMenuButton
                isActive={section === it.key}
                onClick={ => onPick(it.key)}
              >
                <span>{it.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

// 라벨 없는 그룹 하나, 순서는 INDEX 그대로 유지
function officialFlatSpec(index: { slug: string; title: string }[]): NavSpec {
  return { label: "", count: false, items: index.map(({ slug, title }) => ({ key: slug, label: title || slug })) };
}

// 공식 문서 목록을 그룹으로 이전, 이름과 순서는 공식 그대로 유지
function officialSpecs(groups: Record<string, string[]>, title: Map<string, string>): NavSpec[] {
  return Object.entries(groups).map(([group, slugs]) => ({
    label: group,
    count: true,
    items: slugs.map((slug) => ({
      // 공식 이름이 없으면 슬러그를 그대로 표시
      key: slug,
      label: title.get(slug) ?? slug,
    })),
  }));
}

function componentSpec(system: SystemDefinition, label: string): NavSpec {
  return {
    label,
    count: true,
    items: [...system.components]
      .sort((a, b) => a.title.localeCompare(b.title, "en"))
      .map((c) => ({ key: c.name, label: c.title })),
  };
}

// 페이지 목록. 현재 선택한 테마의 것만 표시
function PageNav({
  system, section, onPick, query,
}: {
  system: SystemDefinition;
  section: string;
  onPick: (section: string) => void;
  query: string;
}) {
  const q = query.trim.toLowerCase;

  const mirror = MIRRORS[system.baseKey];
  const specs: NavSpec[] = [
    { label: "Main", items: MAIN.map((m) => ({ key: m.key, label: m.label })) },
    { label: "Foundations", items: FOUNDATIONS.map((f) => ({ key: f.key, label: f.label })) },
    ...(mirror
      ? [
          ...(mirror.noOurs ? [] : [componentSpec(system, "이 어댑터")]),
          ...(mirror.GROUPS && mirror.TITLE
            ? officialSpecs(mirror.GROUPS, mirror.TITLE)
            // 공식 분류 없는 lightning 베이스는 INDEX 순서로 한 행 표시. 그룹명 임의 생성 방지 위해 라벨 제외
            : mirror.noOurs
              ? [officialFlatSpec(mirror.INDEX as { slug: string; title: string }[])]
              : []),
        ]
      : [componentSpec(system, "Components")]),
  ];

  const shown = specs
    .map((s) => filterSpec(s, q))
    .filter((s): s is NavSpec => s !== null);

  if (shown.length === 0) {
    return (
      <div className="text-muted-foreground px-4 py-6 text-sm">
        <p>
          <b className="text-foreground">{query.trim}</b> 와 맞는 것이 없어요.
        </p>
        <p className="mt-1.5 text-xs">그룹 이름으로도 찾을 수 있어요. Foundations · Components …</p>
      </div>
    );
  }

  return (
    <>
      {shown.map((s) => (
        <NavGroup key={s.label} spec={s} section={section} onPick={onPick} />
      ))}
    </>
  );
}

// 모드 선택 상단바 배치. items 없으면 닫힌 상태 텍스트가 값 그대로 노출되는 문제 있음
function SystemSelect({ slug, onPick }: { slug: string; onPick: (slug: string) => void }) {
  const current = systemBySlug(slug);
  const items = SYSTEMS.map((sys) => ({ value: sys.slug, label: sys.name }));
  return (
    <Select
      items={items}
      value={slug}
      onValueChange={(v: string | null) => { if (v) onPick(v); }}
    >
      <SelectTrigger size="sm" className="w-36" aria-label="색 고르기">
        <span
          aria-hidden="true"
          className="size-3 shrink-0 rounded-full border"
          style={{ background: current.brand }}
        />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {SYSTEMS.map((sys) => (
          <SelectItem key={sys.slug} value={sys.slug}>
            <span
              aria-hidden="true"
              className="size-3 shrink-0 rounded-full border"
              style={{ background: sys.brand }}
            />
            {sys.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

// 글꼴 선택 상단바. 색상은 오른쪽, 모드는 왼쪽에 배치
function FontSelect({ font, onPick }: { font: string; onPick: (key: string) => void }) {
  const items = FONTS.map((f) => ({ value: f.key, label: f.label }));
  return (
    <Select
      items={items}
      value={font}
      onValueChange={(v: string | null) => { if (v) onPick(v); }}
    >
      <SelectTrigger size="sm" className="w-36" aria-label="글꼴 고르기">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {FONTS.map((f) => (
          <SelectItem key={f.key} value={f.key}>
            {/* 이름을 해당 글꼴로 렌더링. 이름만으로 모양을 알 수 없어서임 */}
            <span style={{ fontFamily: f.stack }}>{f.label}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const MODE_ITEMS = MODES.map((m) => ({ value: m, label: MODE_LABEL[m] }));

function ModeSelect({ mode, onPick }: { mode: Mode; onPick: (m: Mode) => void }) {
  return (
    <Select
      items={MODE_ITEMS}
      value={mode}
      // null 허용 안 하는 선택. 모드는 항상 셋 중 하나임
      onValueChange={(v: string | null) => { if (v) onPick(v as Mode); }}
    >
      <SelectTrigger size="sm" className="w-32" aria-label="모드 고르기">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {MODES.map((m) => (
          <SelectItem key={m} value={m}>{MODE_LABEL[m]}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function ExportButton({ disabled, onOpen }: { disabled: boolean; onOpen:  => void }) {
  const button = (
    <Button variant="outline" size="sm" onClick={onOpen} disabled={disabled}>
      {/* 크기 직접 지정 안 함. size-4 추가 시 svg 고정이 풀려 크기 달라지는 문제임 */}
      <Download />
      내보내기
    </Button>
  );
  if (!disabled) return button;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<span className="inline-flex" />}>{button}</TooltipTrigger>
        {/* ods-chrome 클래스 지정. 툴팁도 없으면 시스템 색이 보임 */}
        <TooltipContent className="ods-chrome" side="bottom">
          컴포넌트를 고르면 내보낼 수 있어요
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function App {
  // 초기 상태 URL에서 지정. 링크로 연 사용자가 그 화면을 봐야 하는 제약임
  const [slug, setSlug] = React.useState( => parseHash?.slug ?? SYSTEMS[0].slug);
  const [base, setBase] = React.useState( => parseHash?.base ?? SYSTEMS[0].baseKey);
  const [section, setSection] = React.useState<string>( => parseHash?.section ?? COLORS);
  const [mode, setMode] = React.useState<Mode>(modeFromQuery);
  // 글꼴은 URL에 미포함. 모드와 마찬가지로 결과물이 아닌 보기 방식이기 때문임
  const [font, setFont] = React.useState<string>(DEFAULT_FONT);
  // 내보내기 창은 URL 반영에서 제외
  const [exportOpen, setExportOpen] = React.useState(false);
  const [importOpen, setImportOpen] = React.useState(false);
  // 사이드바 검색어 URL 제외
  const [query, setQuery] = React.useState("");
  const searchRef = React.useRef<HTMLInputElement>(null);

  React.useEffect( => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "/" || !(e.metaKey || e.ctrlKey)) return;
      const el = e.target as HTMLElement | null;
      const tag = el?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || el?.isContentEditable) return;
      e.preventDefault;
      searchRef.current?.focus;
      searchRef.current?.select;
    };
    window.addEventListener("keydown", onKey);
    return  => window.removeEventListener("keydown", onKey);
  }, []);

  // 색과 베이스를 병합. 명세와 일치하면 해당 모듈 그대로 반환
  const system = React.useMemo( => resolveSystem(slug, base), [slug, base]);
  const color = systemBySlug(slug);
  useSystemStyles(system);
  useTheme(mode);
  useFont(font);

  // 상태와 주소 연동. 선택 변경 시 주소도 변경
  React.useEffect( => {
    const next = hashOf(base, slug, section);
    if (window.location.hash !== next) window.location.hash = next;
  }, [base, slug, section]);

  // URL을 상태값으로 변환, 뒤로가기 앞으로가기 직접 입력 모두 처리
  React.useEffect( => {
    const onHash =  => {
      const r = parseHash;
      if (!r) return;
      setBase(r.base);
      setSlug(r.slug);
      setSection(r.section);
    };
    window.addEventListener("hashchange", onHash);
    return  => window.removeEventListener("hashchange", onHash);
  }, []);

  const pick = React.useCallback((nextSlug: string, nextSection: string) => {
    setSlug(nextSlug);
    setSection(nextSection);
  }, []);

  const pickBase = React.useCallback((nextBase: string) => {
    setBase(nextBase);
    setSection(USAGE1);
  }, []);

  const mirror = MIRRORS[system.baseKey];
  // TITLE 없는 미러는 slug 그대로 표시. 제목 없는 출처는 bare로 대체되는 방식임
  const official = mirror?.TITLE ?? null;
  // 접두어 없어 벗길 것 없음, 이름 그대로 사용
  const bare = section;

  // 공식 문서 화면 여부 확인
  const isOfficialSection = mirror?.isSlug(section) ?? false;
  // MAIN도 함께 확인. 누락되면 상단바에 __usage__ 내부 키가 그대로 남음
  const here = MAIN.find((m) => m.key === section)?.label
    ?? FOUNDATIONS.find((f) => f.key === section)?.label
    ?? (isOfficialSection ? official?.get(bare) : undefined)
    ?? system.components.find((c) => c.name === bare)?.title
    ?? bare;

  const exportable =
    section !== COLORS && section !== TYPE &&
    (isOfficialSection
      ? isLibBase(system.baseKey)
      : system.components.some((c) => c.name === bare));

  return (
    <SidebarProvider>
      {/* ods-chrome이 경계. 안쪽은 시스템 설정과 무관하게 같은 모습 유지 */}
      <Sidebar className="ods-chrome">
        {/* 헤더와 하단 선택기 스크롤 고정. 스크롤은 SidebarContent만 사용 */}
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <Palette className="size-4 shrink-0" />
            <div className="grid text-left text-sm leading-tight">
              <span className="font-semibold">minari-design-storybook</span>
              <span className="text-xs text-muted-foreground">
                독립된 {SYSTEMS.length}종
              </span>
            </div>
          </div>
          <BasePicker base={base} color={color} onPick={pickBase} />

          {/* 검색창은 헤더에 고정되어 목록과 함께 스크롤되지 않음 */}
          <div className="relative">
            <Search
              aria-hidden="true"
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-2 size-3.5 -translate-y-1/2"
            />
            <SidebarInput
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Escape") setQuery(""); }}
              placeholder="찾기…"
              aria-label="컴포넌트 찾기. 그룹 이름으로도 찾을 수 있어요"
              className="pl-7"
            />
          </div>

          {/* 고정/스크롤 영역 경계선, 헤더에 고정. 본문 두면 스크롤 시 사라지는 문제 있음 */}
          {/* mx-0 지정. 헤더에 p-2 있어 mx-2 두면 16px 겹치는 문제 있음 */}
          <SidebarSeparator className="mx-0" />
        </SidebarHeader>
        <SidebarContent>
          <PageNav
            system={system}
            section={section}
            onPick={(s2) => pick(slug, s2)}
            query={query}
          />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>

      {/* min-w-0 지정. 없으면 본문 열이 넓어져 사이드바 밖으로 삐져나올 수 있음 */}
      <SidebarInset className="min-w-0">
        {/* z-30 사용. 미리보기 컴포넌트가 z-10, z-20을 사용해 겹침 방지 */}
        {/* flex-wrap으로 접힘, 높이는 고정 아닌 최소값임 */}
        <header
          className="ods-chrome bg-background sticky top-0 z-30 flex min-h-14 shrink-0
                     flex-wrap items-center gap-2 border-b px-4 py-2"
        >
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 !h-4" />
          <h1 className="shrink-0 text-sm font-semibold">{system.name}</h1>
          {/* 시스템 성격을 한 행으로 설명. 이름만으론 Cobalt 성격 몰라 옆 괄호에 표기 */}
          <span className="text-muted-foreground hidden min-w-0 truncate text-xs lg:block">
            ({system.tone})
          </span>
          <ChevronRight className="text-muted-foreground size-3.5 shrink-0" />
          <span className="shrink-0 text-sm">{here}</span>
          {/* 좁은 화면에서 베이스 이름 숨김 처리 */}
          <span className="text-muted-foreground hidden shrink-0 text-xs sm:inline">
            베이스 {system.baseTitle}
          </span>
          {/* 그룹도 접힘. 넷이 한 행에 안 들어가면 둘씩 두 행 배치 */}
          <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
            {/* 내보내기를 색상, 글꼴, 모드 세트 왼쪽에 배치 */}
            <ImportButton onOpen={ => setImportOpen(true)} />
            <ExportButton disabled={!exportable} onOpen={ => setExportOpen(true)} />
            <SystemSelect slug={slug} onPick={(next) => pick(next, section)} />
            <FontSelect font={font} onPick={setFont} />
            <ModeSelect mode={mode} onPick={setMode} />
          </div>
        </header>

        {/* 내보낼 수 없는 화면은 생성 금지. parseHash로 직접 접근하는 경로가 있음 */}
        {/* ExportDialog와 달리 조건부로 감싸지 않기 */}
        <ImportDialog open={importOpen} onOpenChange={setImportOpen} system={system} />

        {exportable ? (
          <ExportDialog
            open={exportOpen}
            onOpenChange={setExportOpen}
            system={system}
            // 접두사 벗겨서 전달. 안 벗기면 계약에서 이름을 못 찾아 잘못 표시되는 문제 있음
            section={bare}
            title={here}
            onExport={async (request) => {
              await sinkFor("download")(await requestExport(request));
            }}
          />
        ) : null}

        {/* 미리보기 영역 */}
        <div className="doc-page">
          {section in USAGE_VARIANT ? (
            // 이 경우 최우선 배치. __usage__는 계약에 없는 이름이라 잘못 표시되는 문제임
            <UsagePage system={system} active={mode} variant={USAGE_VARIANT[section]} />
          ) : section === COLORS ? (
            <>
              <p className="doc-lead">{system.tone}</p>
              <ColorScheme vars={system.vars} refs={system.refs} active={mode} />
            </>
          ) : section === TYPE ? (
            <Typography
              vars={system.vars}
              refs={system.refs}
              ratio={system.typeRatio}
              font={fontByKey(font)}
            />
          ) : (
            // 접두사 없으면 슬러그 실제 보유 여부로 구분. 이름 충돌에도 안전
            isOfficialSection && mirror ? (
              <React.Suspense fallback={<ReferenceLoading title={system.baseTitle} />}>
                <mirror.Reference slug={section} system={system}
                  active={mode} />
              </React.Suspense>
            ) : (
              <ComponentPage system={system} name={bare} active={mode} />
            )
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
