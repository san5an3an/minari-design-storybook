import * as React from "react";
import {
  BarChart3, Bell, Check, ClipboardList, FormInput, LayoutPanelLeft, Link2, LogOut, Settings2, Tag, X,
} from "lucide-react";
import { AlertDialog, AlertDialogClose, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogPopup, AlertDialogTitle } from "../../bases/coss-ui/alert-dialog";
import { Autocomplete, AutocompleteInput, AutocompleteItem, AutocompleteList, AutocompletePopup } from "../../bases/coss-ui/autocomplete";
import { Avatar, AvatarFallback } from "../../bases/coss-ui/avatar";
import { Badge } from "../../bases/coss-ui/badge";
import { Button } from "../../bases/coss-ui/button";
import { Combobox, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxPopup } from "../../bases/coss-ui/combobox";
import { Dialog, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogPanel, DialogPopup, DialogTitle } from "../../bases/coss-ui/dialog";
import { Field, FieldLabel } from "../../bases/coss-ui/field";
import { Fieldset, FieldsetLegend } from "../../bases/coss-ui/fieldset";
import { Form } from "../../bases/coss-ui/form";
import { Input } from "../../bases/coss-ui/input";
import { InputGroup, InputGroupAddon } from "../../bases/coss-ui/input-group";
import { Menu, MenuItem, MenuPopup, MenuSeparator, MenuTrigger } from "../../bases/coss-ui/menu";
import { NumberField, NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput } from "../../bases/coss-ui/number-field";
import { OTPField, OTPFieldInput } from "../../bases/coss-ui/otp-field";
import { Popover, PopoverPopup, PopoverTrigger } from "../../bases/coss-ui/popover";
import { Radio, RadioGroup } from "../../bases/coss-ui/radio-group";
import { Separator } from "../../bases/coss-ui/separator";
import { Sheet, SheetDescription, SheetFooter, SheetHeader, SheetPanel, SheetPopup, SheetTitle } from "../../bases/coss-ui/sheet";
import { Switch } from "../../bases/coss-ui/switch";
import { Textarea } from "../../bases/coss-ui/textarea";
import { Tooltip, TooltipPopup, TooltipProvider, TooltipTrigger } from "../../bases/coss-ui/tooltip";
import type { UsageDashboardProps } from "../registry";
import {
  CATEGORIES, SURVEYS, TAG_SUGGESTIONS, responseCountOf, surveyById,
  type Survey, type Visibility,
} from "./data";
import { SCREENS } from "./screens";

const NAV_ICON: Record<string, React.ComponentType<{ size?: number }>> = {
  list: ClipboardList, editor: LayoutPanelLeft, analytics: BarChart3,
};

interface DraftSurvey { title: string; description: string; category: string }
const EMPTY_DRAFT: DraftSurvey = { title: "", description: "", category: CATEGORIES[0] };

function NewSurveyDialog({ open, onOpenChange, onCreate }: { open: boolean; onOpenChange: (o: boolean) => void; onCreate: (draft: DraftSurvey) => void }) {
  const [draft, setDraft] = React.useState<DraftSurvey>(EMPTY_DRAFT);
  const canSubmit = draft.title.trim !== "";

  const submit =  => {
    if (!canSubmit) return;
    onCreate(draft);
    setDraft(EMPTY_DRAFT);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPopup>
        <Form className="contents" onSubmit={(e) => { e.preventDefault; submit; }}>
          <DialogHeader>
            <DialogTitle>새 설문 만들기</DialogTitle>
            <DialogDescription>제목만 정하면 바로 편집기로 이동해서 문항을 채울 수 있어요.</DialogDescription>
          </DialogHeader>
          <DialogPanel>
            <div className="flex flex-col gap-3.5">
              <Field>
                <FieldLabel>제목</FieldLabel>
                <Input value={draft.title} onChange={(e) => { const v = e.target.value; setDraft((d) => ({ ...d, title: v })); }} placeholder="예: 10월 사내 만족도 조사" autoFocus />
              </Field>
              <Field>
                <FieldLabel>설명(선택)</FieldLabel>
                <Textarea value={draft.description} onChange={(e) => { const v = e.target.value; setDraft((d) => ({ ...d, description: v })); }} placeholder="이 설문의 목적을 한 줄로 적어주세요" />
              </Field>
              <Field>
                <FieldLabel>카테고리</FieldLabel>
                <Combobox items={CATEGORIES} value={draft.category} onValueChange={(v) => setDraft((d) => ({ ...d, category: (v as string) ?? d.category }))}>
                  <ComboboxInput placeholder="카테고리 검색…" />
                  <ComboboxPopup>
                    <ComboboxEmpty>결과가 없어요.</ComboboxEmpty>
                    <ComboboxList>{(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}</ComboboxList>
                  </ComboboxPopup>
                </Combobox>
              </Field>
            </div>
          </DialogPanel>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">취소</Button>} />
            <Button type="submit" disabled={!canSubmit}>만들기</Button>
          </DialogFooter>
        </Form>
      </DialogPopup>
    </Dialog>
  );
}

function ShareSheet({ survey, onOpenChange, onUpdate, onRequestClose }: {
  survey: Survey | null; onOpenChange: (o: boolean) => void; onUpdate: (s: Survey) => void; onRequestClose: (id: string) => void;
}) {
  const [tagInput, setTagInput] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  if (!survey) return <Sheet open={false} onOpenChange={onOpenChange}><SheetPopup /></Sheet>;

  const shareUrl = `https://forms.example.com/s/${survey.id}`;
  const copyLink =  => {
    if (typeof navigator !== "undefined" && navigator.clipboard) navigator.clipboard.writeText(shareUrl).catch( => undefined);
    setCopied(true);
    window.setTimeout( => setCopied(false), 1500);
  };
  const availableTags = TAG_SUGGESTIONS.filter((t) => !survey.tags.includes(t));

  return (
    <Sheet open onOpenChange={onOpenChange}>
      <SheetPopup>
        <SheetHeader>
          <SheetTitle>공유 설정</SheetTitle>
          <SheetDescription>{survey.title}</SheetDescription>
        </SheetHeader>
        <SheetPanel>
          <div className="flex flex-col gap-5">
            <Field>
              <FieldLabel>공유 링크</FieldLabel>
              <InputGroup>
                <Input unstyled value={shareUrl} readOnly />
                <InputGroupAddon align="inline-end">
                  <Button variant="ghost" size="icon-sm" onClick={copyLink} aria-label="링크 복사">{copied ? <Check size={14} /> : <Link2 size={14} />}</Button>
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <Fieldset className="flex flex-col gap-3">
              <FieldsetLegend>공개 설정</FieldsetLegend>
              <RadioGroup value={survey.visibility} onValueChange={(v) => onUpdate({ ...survey, visibility: v as Visibility })}>
                <label className="flex items-center gap-2"><Radio value="전체공개" />전체공개. 누구나 볼 수 있어요</label>
                <label className="flex items-center gap-2"><Radio value="링크공개" />링크공개. 링크가 있는 사람만</label>
                <label className="flex items-center gap-2"><Radio value="비공개" />비공개. 접근 코드가 필요해요</label>
              </RadioGroup>
              {survey.visibility === "비공개" ? (
                <div className="flex flex-col gap-2 ps-1">
                  <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>접근 코드</span>
                  <OTPField key={survey.id} length={4} defaultValue={survey.accessCode || "0000"}>
                    <OTPFieldInput /><OTPFieldInput /><OTPFieldInput /><OTPFieldInput />
                  </OTPField>
                </div>
              ) : null}
            </Fieldset>

            <Separator />

            <Fieldset className="flex flex-col gap-3">
              <FieldsetLegend>응답 설정</FieldsetLegend>
              <label className="flex items-center justify-between gap-2">
                <span>응답 받기</span>
                <Switch
                  checked={survey.status === "진행중"}
                  onCheckedChange={(checked) => { if (checked) onUpdate({ ...survey, status: "진행중" }); else onRequestClose(survey.id); }}
                  disabled={survey.status === "초안"}
                />
              </label>
              <label className="flex items-center justify-between gap-2">
                <span>익명 응답 허용</span>
                <Switch checked={survey.allowAnonymous} onCheckedChange={(checked) => onUpdate({ ...survey, allowAnonymous: checked })} />
              </label>
              <label className="flex items-center justify-between gap-2">
                <span>새 응답 알림 받기</span>
                <Switch checked={survey.notifyOnResponse} onCheckedChange={(checked) => onUpdate({ ...survey, notifyOnResponse: checked })} />
              </label>
              <Field>
                <FieldLabel>목표 응답 수</FieldLabel>
                <NumberField value={survey.targetResponses} min={1} max={1000} onValueChange={(v) => onUpdate({ ...survey, targetResponses: v ?? survey.targetResponses })} style={{ width: "10rem" }}>
                  <NumberFieldGroup><NumberFieldDecrement /><NumberFieldInput /><NumberFieldIncrement /></NumberFieldGroup>
                </NumberField>
              </Field>
              <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>현재 응답 {responseCountOf(survey.id)}명 · 마감일 {survey.deadline}</span>
            </Fieldset>

            <Separator />

            <Field>
              <FieldLabel>태그</FieldLabel>
              <div className="flex flex-wrap gap-1.5">
                {survey.tags.map((t) => (
                  <Badge key={t} variant="secondary">
                    <Tag size={11} />{t}
                    <button type="button" aria-label={`${t} 태그 삭제`} onClick={ => onUpdate({ ...survey, tags: survey.tags.filter((x) => x !== t) })}><X size={11} /></button>
                  </Badge>
                ))}
              </div>
              {availableTags.length > 0 ? (
                <Autocomplete
                  items={availableTags}
                  value={tagInput}
                  onValueChange={setTagInput}
                >
                  <AutocompleteInput
                    placeholder="태그 추가 후 Enter"
                    onKeyDown={(e: React.KeyboardEvent) => {
                      if (e.key === "Enter" && tagInput.trim) {
                        onUpdate({ ...survey, tags: [...survey.tags, tagInput.trim] });
                        setTagInput("");
                      }
                    }}
                  />
                  <AutocompletePopup>
                    <AutocompleteList>
                      {availableTags.filter((t) => t.includes(tagInput)).map((t) => (
                        <AutocompleteItem key={t} value={t} onClick={ => { onUpdate({ ...survey, tags: [...survey.tags, t] }); setTagInput(""); }}>{t}</AutocompleteItem>
                      ))}
                    </AutocompleteList>
                  </AutocompletePopup>
                </Autocomplete>
              ) : null}
            </Field>
          </div>
        </SheetPanel>
        <SheetFooter>
          <SheetDescription className="me-auto self-center">변경 사항은 바로 반영돼요.</SheetDescription>
          <DialogCloseButton onClick={ => onOpenChange(false)} />
        </SheetFooter>
      </SheetPopup>
    </Sheet>
  );
}

function DialogCloseButton({ onClick }: { onClick:  => void }) {
  return <Button variant="outline" onClick={onClick}>닫기</Button>;
}

function NotificationBell({ surveys }: { surveys: Survey[] }) {
  const urgent = surveys.filter((s) => s.status === "진행중" && responseCountOf(s.id) < s.targetResponses * 0.5);
  return (
    <Popover>
      <PopoverTrigger
        render={
          <button
            type="button"
            aria-label={`알림 ${urgent.length}건`}
            className="relative flex size-8 shrink-0 items-center justify-center rounded-lg hover:bg-accent"
          >
            <Bell size={16} />
            {urgent.length > 0 ? (
              <span aria-hidden className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full px-1 tabular-nums" style={{ background: "var(--semantic-bg-danger-default)", color: "var(--semantic-fg-on-danger-default)", fontSize: "0.625rem" }}>{urgent.length}</span>
            ) : null}
          </button>
        }
      />
      <PopoverPopup align="end" style={{ width: "17rem" }}>
        <span className="mb-2 block font-medium">응답이 저조한 설문</span>
        {urgent.length === 0 ? (
          <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>관심이 필요한 설문이 없어요.</span>
        ) : (
          <div className="flex flex-col gap-2">
            {urgent.map((s) => (
              <div key={s.id} className="flex items-center justify-between gap-2">
                <span className="min-w-0 truncate" style={{ fontSize: "var(--semantic-text-body-sm)" }}>{s.title}</span>
                <span className="shrink-0 tabular-nums text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{responseCountOf(s.id)}/{s.targetResponses}</span>
              </div>
            ))}
          </div>
        )}
      </PopoverPopup>
    </Popover>
  );
}

const SHELL = "ods-coss3-shell";
const SHELL_HEIGHT = "max(20rem, calc(100dvh - 9rem))";
const SHELL_CSS = `
.${SHELL} { height: ${SHELL_HEIGHT}; display: flex; flex-direction: column; overflow: hidden; }
.${SHELL} [data-slot="switch"][data-checked] [data-slot="switch-thumb"] {
  translate: calc(var(--thumb-size) - 4px) 0 !important;
}
.${SHELL} [data-slot="switch"][data-unchecked] [data-slot="switch-thumb"] {
  translate: 0 !important;
}
`;

export function CossUsage3({ system }: UsageDashboardProps) {
  const [surveys, setSurveys] = React.useState<Survey[]>(SURVEYS);
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(SURVEYS[0].id);
  const [createOpen, setCreateOpen] = React.useState(false);
  const [shareId, setShareId] = React.useState<string | null>(null);
  const [confirm, setConfirm] = React.useState<{ kind: "delete" | "close"; id: string } | null>(null);

  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;
  const shareSurvey = shareId ? surveyById(surveys, shareId) : null;
  const confirmSurvey = surveyById(surveys, confirm?.id);

  const updateSurvey = (next: Survey) => setSurveys((prev) => prev.map((s) => (s.id === next.id ? next : s)));
  const createSurvey = (draft: { title: string; description: string; category: string }) => {
    const id = `s-new-${Date.now}`;
    const created: Survey = {
      id, title: draft.title.trim, description: draft.description.trim || "새로 만든 설문이에요.",
      status: "초안", category: draft.category, createdAt: "오늘", deadline: "추후 지정", targetResponses: 30,
      owner: { name: system.name, role: "설문 관리자", email: "owner@forms.example" },
      questions: [], tags: [], visibility: "링크공개", allowAnonymous: false, notifyOnResponse: true,
      accessCodeEnabled: false, accessCode: "",
    };
    setSurveys((prev) => [created, ...prev]);
    setSelectedId(id);
    setScreenKey("editor");
    setCreateOpen(false);
  };
  const commitConfirm =  => {
    if (!confirm) return;
    if (confirm.kind === "delete") setSurveys((prev) => prev.filter((s) => s.id !== confirm.id));
    else setSurveys((prev) => prev.map((s) => (s.id === confirm.id ? { ...s, status: "마감" as const } : s)));
  };

  return (
    <div className={SHELL} style={{ border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", boxShadow: "var(--semantic-shadow-raised)" }}>
      <style>{SHELL_CSS}</style>

      <div className="flex shrink-0 items-center justify-between gap-3 border-b px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span aria-hidden className="flex size-7 shrink-0 items-center justify-center rounded-lg" style={{ background: "var(--semantic-bg-brand-default)", color: "var(--semantic-fg-on-brand-default)" }}><FormInput size={15} /></span>
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-semibold leading-tight">폼즈</span>
            <span className="truncate text-muted-foreground leading-tight" style={{ fontSize: "var(--semantic-text-caption)" }}>{screen.lede}</span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <NotificationBell surveys={surveys} />
          <Menu>
            <MenuTrigger
              render={
                <button type="button" className="flex items-center gap-1.5 rounded-lg p-1 hover:bg-accent" aria-label="계정 메뉴">
                  <Avatar className="size-6.5"><AvatarFallback className="text-[0.625rem]">{system.name[0]}</AvatarFallback></Avatar>
                </button>
              }
            />
            <MenuPopup align="end">
              <div className="flex flex-col px-2 py-1.5">
                <span style={{ fontSize: "var(--semantic-text-body-sm)" }}>{system.name} 운영자</span>
                <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>owner@forms.example</span>
              </div>
              <MenuSeparator />
              <MenuItem><Settings2 size={14} />설정</MenuItem>
              <MenuItem variant="destructive"><LogOut size={14} />로그아웃</MenuItem>
            </MenuPopup>
          </Menu>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        <TooltipProvider>
          <nav aria-label="주요 화면" className="flex shrink-0 flex-col items-center gap-1 border-e px-1.5 py-3">
            {SCREENS.map((s) => {
              const Icon = NAV_ICON[s.key] ?? ClipboardList;
              const active = s.key === screenKey;
              return (
                <Tooltip key={s.key}>
                  <TooltipTrigger
                    render={
                      <Button
                        variant={active ? "secondary" : "ghost"}
                        size="icon-sm"
                        aria-label={s.label}
                        aria-current={active ? "page" : undefined}
                        onClick={ => setScreenKey(s.key)}
                      >
                        <Icon size={16} />
                      </Button>
                    }
                  />
                  <TooltipPopup side="right">{s.label}</TooltipPopup>
                </Tooltip>
              );
            })}
          </nav>
        </TooltipProvider>

        <div className="min-h-0 min-w-0 flex-1 overflow-y-auto p-4">
          <Screen
            surveys={surveys}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onNavigate={setScreenKey}
            onCreateSurvey={ => setCreateOpen(true)}
            onUpdateSurvey={updateSurvey}
            onOpenShare={setShareId}
            onRequestDelete={(id) => setConfirm({ kind: "delete", id })}
            onRequestClose={(id) => setConfirm({ kind: "close", id })}
          />
        </div>
      </div>

      <NewSurveyDialog open={createOpen} onOpenChange={setCreateOpen} onCreate={createSurvey} />

      <ShareSheet
        key={shareId ?? "none"}
        survey={shareSurvey}
        onOpenChange={(o) => { if (!o) setShareId(null); }}
        onUpdate={updateSurvey}
        onRequestClose={(id) => setConfirm({ kind: "close", id })}
      />

      <AlertDialog open={confirm !== null} onOpenChange={(o) => { if (!o) setConfirm(null); }}>
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>{confirm?.kind === "delete" ? "이 설문을 삭제할까요?" : "이 설문을 종료할까요?"}</AlertDialogTitle>
            <AlertDialogDescription>
              {confirm?.kind === "delete"
                ? `"${confirmSurvey?.title}" 설문과 응답 데이터가 모두 사라져요. 되돌릴 수 없어요.`
                : `"${confirmSurvey?.title}" 설문은 더 이상 응답을 받지 않아요. 분석은 계속 볼 수 있어요.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="outline">취소</Button>} />
            <AlertDialogClose render={<Button variant="destructive" onClick={commitConfirm}>{confirm?.kind === "delete" ? "삭제" : "종료"}</Button>} />
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    </div>
  );
}
