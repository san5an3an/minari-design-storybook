import * as React from "react";
import { Check, ChevronRight, ChevronsUpDown, Download, Palette } from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
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
import { requestExport } from "@/export/client";
import { sinkFor } from "@/export/sinks/registry";
import { ColorScheme } from "./preview/ColorScheme";
import { Typography } from "./preview/Typography";
import { ComponentPage } from "./preview/ComponentPage";
import { AntdReference } from "./preview/AntdReference";
import { ANTD_GROUPS, ANTD_INDEX, isAntdSlug } from "./preview/antdRef/loader";
import { MuiReference } from "./preview/MuiReference";
import { MUI_GROUPS, MUI_INDEX, isMuiSlug } from "./preview/muiRef/loader";
import { MODES, MODE_LABEL, type Mode } from "./preview/tokens";
import { DEFAULT_FONT, FONTS, fontByKey, loadFont } from "./preview/fonts";
import { SYSTEMS, systemBySlug } from "./systems/registry";
import { BASES, BASE_ORDER } from "./bases/registry";
import { resolveSystem } from "./systems/resolve";
import type { SystemDefinition } from "./systems/types";

const STYLE_ID = "ods-active-system";

// 컴포넌트 아닌 화면 목록, 컴포넌트 이름과 안 겹치는 값 사용
const COLORS = "__colors__";
const TYPE = "__type__";

const DOCS = "docs-";

const FOUNDATIONS: { key: string; label: string }[] = [
  { key: COLORS, label: "Color Scheme" },
  { key: TYPE, label: "Typography" },
];

const ROUTE_ALIAS: Record<string, string> = { colors: COLORS, "type-scale": TYPE };
const ROUTE_SLUG: Record<string, string> = { [COLORS]: "colors", [TYPE]: "type-scale" };

type Route = { base: string; slug: string; section: string };

function parseHash: Route | null {
  const raw = window.location.hash.replace(/^#\/?/, "");
  if (!raw) return null;
  const [rawBase, rawSlug, rawSection] = raw.split("/").map(decodeURIComponent);
  // 알 수 없는 베이스, 색이면 주소 무시. 없는 조합의 빈 화면 방지
  if (!(rawBase in BASES)) return null;
  if (!SYSTEMS.some((s) => s.slug === rawSlug)) return null;
  const legacy = !rawSection.startsWith(DOCS) && rawSection === "typography"
    ? TYPE : null;
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

function BaseCard({
  baseKey, active, onPick,
}: {
  baseKey: string;
  active: boolean;
  onPick: (key: string) => void;
}) {
  const base = BASES[baseKey];
  const n = Object.keys(base.impl).length;
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
                컴포넌트 {Object.keys(current.impl).length}종
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
          <div className="grid gap-2 sm:grid-cols-2">
            {BASE_ORDER.map((key) => (
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

function OfficialNav({ groups, title, section, onPick }: {
  groups: Record<string, string[]>;
  title: Map<string, string>;
  section: string;
  onPick: (section: string) => void;
}) {
  return (
    <>
      {Object.entries(groups).map(([group, slugs]) => (
        <SidebarGroup key={group}>
          <SidebarGroupLabel>{group} {slugs.length}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {slugs.map((slug) => (
                <SidebarMenuItem key={slug}>
                  <SidebarMenuButton
                    isActive={section === DOCS + slug}
                    onClick={ => onPick(DOCS + slug)}
                  >
                    {/* 공식 이름이 없으면 슬러그를 그대로 표시 */}
                    <span>{title.get(slug) ?? slug}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  );
}

function OursNav({ system, section, onPick }: {
  system: SystemDefinition;
  section: string;
  onPick: (section: string) => void;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        어댑터 {system.components.length}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {/* 정렬 적용 */}
          {[...system.components]
            .sort((a, b) => a.title.localeCompare(b.title, "en"))
            .map((c) => (
              <SidebarMenuItem key={c.name}>
                <SidebarMenuButton
                  isActive={section === c.name}
                  onClick={ => onPick(c.name)}
                >
                  <span>{c.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

// 페이지 목록. 현재 선택한 테마의 것만 표시
function PageNav({
  system, section, onPick,
}: {
  system: SystemDefinition;
  section: string;
  onPick: (section: string) => void;
}) {
  return (
    <>
      <SidebarGroup>
        {/* 재료 계층. 컴포넌트가 읽고 쓰며 상위 배치, 하위 계층이 사용 */}
        <SidebarGroupLabel>Foundations</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {FOUNDATIONS.map((f) => (
              <SidebarMenuItem key={f.key}>
                <SidebarMenuButton
                  isActive={section === f.key}
                  onClick={ => onPick(f.key)}
                >
                  <span>{f.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      {/* antd, MUI 공식 목록 그대로 사용. 자체 목록 맞추면 고유 컴포넌트 소실되는 문제임 */}
      {/* 커스텀 항목을 공식 항목보다 위에 정렬 */}
      {system.baseKey === "antd" || system.baseKey === "mui" ? (
        <>
          <OursNav system={system} section={section} onPick={onPick} />
          <OfficialNav
            groups={system.baseKey === "antd" ? ANTD_GROUPS : MUI_GROUPS}
            title={system.baseKey === "antd" ? ANTD_TITLE : MUI_TITLE}
            section={section} onPick={onPick} />
        </>
      ) : (
      <SidebarGroup>
        <SidebarGroupLabel>Components {system.components.length}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
          {/* 정렬 적용 */}
          {[...system.components]
            .sort((a, b) => a.title.localeCompare(b.title, "en"))
            .map((c) => (
            <SidebarMenuItem key={c.name}>
              <SidebarMenuButton
                isActive={section === c.name}
                onClick={ => onPick(c.name)}
              >
                <span>{c.title}</span>
                {/* 미사용 코드. 삭제하지 않고 보존 */}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      )}
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

  // 베이스 변경해도 섹션 구성 유지. 컴포넌트 없으면 "아직 없어요" 표시

  const official = system.baseKey === "antd" ? ANTD_TITLE
    : system.baseKey === "mui" ? MUI_TITLE
    : null;
  // 접두사 벗겨서 찾기. 안 벗기면 상단바 docs-button이 사이드바와 어긋나 있음
  const bare = section.startsWith(DOCS) ? section.slice(DOCS.length) : section;
  const here = FOUNDATIONS.find((f) => f.key === section)?.label
    ?? (section.startsWith(DOCS) ? official?.get(bare) : undefined)
    ?? system.components.find((c) => c.name === bare)?.title
    ?? bare;

  const exportable =
    section !== COLORS && section !== TYPE && !section.startsWith(DOCS) &&
    system.components.some((c) => c.name === bare);

  return (
    <SidebarProvider>
      {/* ods-chrome이 경계. 안쪽은 시스템 설정과 무관하게 같은 모습 유지 */}
      <Sidebar className="ods-chrome">
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
        </SidebarHeader>
        <SidebarContent>
          <BasePicker base={base} color={color} onPick={setBase} />
          <SidebarSeparator />
          <PageNav system={system} section={section} onPick={(s2) => pick(slug, s2)} />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>

      {/* min-w-0 지정. 없으면 본문 열이 넓어져 사이드바 밖으로 삐져나올 수 있음 */}
      <SidebarInset className="min-w-0">
        {/* z-30 사용. 미리보기 컴포넌트가 z-10, z-20을 사용해 겹침 방지 */}
        <header
          className="ods-chrome bg-background sticky top-0 z-30 flex h-14 shrink-0
                     items-center gap-2 border-b px-4"
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
          <span className="text-muted-foreground shrink-0 text-xs">
            베이스 {system.baseTitle}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <ExportButton disabled={!exportable} onOpen={ => setExportOpen(true)} />
            <SystemSelect slug={slug} onPick={(next) => pick(next, section)} />
            <FontSelect font={font} onPick={setFont} />
            <ModeSelect mode={mode} onPick={setMode} />
          </div>
        </header>

        {/* 내보낼 수 없는 화면은 생성 금지. parseHash로 직접 접근하는 경로가 있음 */}
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
        <main className="doc-page">
          {section === COLORS ? (
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
            system.baseKey === "antd" && section.startsWith(DOCS)
              && isAntdSlug(section.slice(DOCS.length)) ? (
              <AntdReference slug={section.slice(DOCS.length)} system={system}
                active={mode} />
            ) : system.baseKey === "mui" && section.startsWith(DOCS)
              && isMuiSlug(section.slice(DOCS.length)) ? (
              <MuiReference slug={section.slice(DOCS.length)} system={system}
                active={mode} />
            ) : (
              <ComponentPage system={system} name={bare} active={mode} />
            )
          )}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
