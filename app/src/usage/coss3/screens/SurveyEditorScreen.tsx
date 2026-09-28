import * as React from "react";
import {
  AlignLeft, CalendarDays, ChevronDown as ChevronDownIcon, ChevronLeft, ChevronRight, ChevronUp,
  CircleDot, Copy, Eye, GripVertical, Hash, ListChecks, ListFilter, Plus, SlidersHorizontal,
  Trash2, Type as TypeIcon,
} from "lucide-react";
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "../../../bases/coss-ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "../../../bases/coss-ui/alert";
import { Badge } from "../../../bases/coss-ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../../bases/coss-ui/breadcrumb";
import { Button } from "../../../bases/coss-ui/button";
import { Calendar } from "../../../bases/coss-ui/calendar";
import { Checkbox } from "../../../bases/coss-ui/checkbox";
import { CheckboxGroup } from "../../../bases/coss-ui/checkbox-group";
import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "../../../bases/coss-ui/collapsible";
import { Command, CommandEmpty, CommandGroup, CommandGroupLabel, CommandInput, CommandItem, CommandList } from "../../../bases/coss-ui/command";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../../../bases/coss-ui/empty";
import { Field, FieldLabel } from "../../../bases/coss-ui/field";
import { Fieldset, FieldsetLegend } from "../../../bases/coss-ui/fieldset";
import { Group, GroupText } from "../../../bases/coss-ui/group";
import { Input } from "../../../bases/coss-ui/input";
import { Kbd } from "../../../bases/coss-ui/kbd";
import { Label } from "../../../bases/coss-ui/label";
import { NumberField, NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput } from "../../../bases/coss-ui/number-field";
import { Popover, PopoverPopup, PopoverTrigger } from "../../../bases/coss-ui/popover";
import { Radio, RadioGroup } from "../../../bases/coss-ui/radio-group";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "../../../bases/coss-ui/select";
import { Sheet, SheetDescription, SheetHeader, SheetPopup, SheetTitle } from "../../../bases/coss-ui/sheet";
import { Slider, SliderValue } from "../../../bases/coss-ui/slider";
import { Switch } from "../../../bases/coss-ui/switch";
import { Textarea } from "../../../bases/coss-ui/textarea";
import { Toolbar, ToolbarButton, ToolbarSeparator } from "../../../bases/coss-ui/toolbar";
import { Tooltip, TooltipPopup, TooltipProvider, TooltipTrigger } from "../../../bases/coss-ui/tooltip";
import {
  QUESTION_TYPE_META, createDefaultQuestion, surveyById,
  type Question, type QuestionType,
} from "../data";
import type { ScreenProps } from "../screens";

const TYPE_ICON: Record<QuestionType, React.ComponentType<{ size?: number }>> = {
  short: TypeIcon, long: AlignLeft, single: CircleDot, multi: ListChecks,
  scale: SlidersHorizontal, number: Hash, select: ListFilter, date: CalendarDays,
};

function OptionListEditor({ options, onChange }: { options: string[]; onChange: (next: string[]) => void }) {
  return (
    <div className="flex flex-col gap-1.5">
      {options.map((opt, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <Input
            value={opt}
            aria-label={`옵션 ${i + 1}`}
            onChange={(e) => { const v = e.target.value; onChange(options.map((o, oi) => (oi === i ? v : o))); }}
          />
          <Button variant="ghost" size="icon-sm" aria-label="옵션 삭제" disabled={options.length <= 2} onClick={ => onChange(options.filter((_, oi) => oi !== i))}>
            <Trash2 size={13} />
          </Button>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={ => onChange([...options, `옵션 ${options.length + 1}`])}>
        <Plus size={13} />옵션 추가
      </Button>
    </div>
  );
}

function QuestionConfigEditor({ question, onChange }: { question: Question; onChange: (next: Question) => void }) {
  if (question.type === "single" || question.type === "multi" || question.type === "select") {
    return <OptionListEditor options={question.options ?? []} onChange={(options) => onChange({ ...question, options })} />;
  }
  if (question.type === "scale") {
    const scale = question.scale ?? { min: 1, max: 5, minLabel: "", maxLabel: "" };
    return (
      <div className="flex flex-wrap items-end gap-2.5">
        <Field><FieldLabel>최소값</FieldLabel><NumberField value={scale.min} min={0} max={scale.max - 1} onValueChange={(v) => onChange({ ...question, scale: { ...scale, min: v ?? scale.min } })} size="sm" style={{ width: "6rem" }}><NumberFieldGroup><NumberFieldDecrement /><NumberFieldInput /><NumberFieldIncrement /></NumberFieldGroup></NumberField></Field>
        <Field><FieldLabel>최대값</FieldLabel><NumberField value={scale.max} min={scale.min + 1} max={10} onValueChange={(v) => onChange({ ...question, scale: { ...scale, max: v ?? scale.max } })} size="sm" style={{ width: "6rem" }}><NumberFieldGroup><NumberFieldDecrement /><NumberFieldInput /><NumberFieldIncrement /></NumberFieldGroup></NumberField></Field>
        <Field style={{ minWidth: "8rem" }}><FieldLabel>최소값 라벨</FieldLabel><Input value={scale.minLabel} onChange={(e) => { const v = e.target.value; onChange({ ...question, scale: { ...scale, minLabel: v } }); }} /></Field>
        <Field style={{ minWidth: "8rem" }}><FieldLabel>최대값 라벨</FieldLabel><Input value={scale.maxLabel} onChange={(e) => { const v = e.target.value; onChange({ ...question, scale: { ...scale, maxLabel: v } }); }} /></Field>
      </div>
    );
  }
  if (question.type === "number") {
    const range = question.numberRange ?? { min: 0, max: 100, unit: "" };
    return (
      <div className="flex flex-wrap items-end gap-2.5">
        <Field><FieldLabel>최소값</FieldLabel><NumberField value={range.min} onValueChange={(v) => onChange({ ...question, numberRange: { ...range, min: v ?? range.min } })} size="sm" style={{ width: "6rem" }}><NumberFieldGroup><NumberFieldDecrement /><NumberFieldInput /><NumberFieldIncrement /></NumberFieldGroup></NumberField></Field>
        <Field><FieldLabel>최대값</FieldLabel><NumberField value={range.max} onValueChange={(v) => onChange({ ...question, numberRange: { ...range, max: v ?? range.max } })} size="sm" style={{ width: "6rem" }}><NumberFieldGroup><NumberFieldDecrement /><NumberFieldInput /><NumberFieldIncrement /></NumberFieldGroup></NumberField></Field>
        <Field style={{ minWidth: "6rem" }}><FieldLabel>단위</FieldLabel><Input value={range.unit} placeholder="예: 시간" onChange={(e) => { const v = e.target.value; onChange({ ...question, numberRange: { ...range, unit: v } }); }} /></Field>
      </div>
    );
  }
  return null;
}

interface QuestionEditorProps {
  question: Question; index: number; total: number;
  onChange: (next: Question) => void; onRemove:  => void; onDuplicate:  => void; onMove: (dir: -1 | 1) => void;
}

function QuestionEditorItem({ question, index, total, onChange, onRemove, onDuplicate, onMove }: QuestionEditorProps) {
  const Icon = TYPE_ICON[question.type];
  const meta = QUESTION_TYPE_META.find((m) => m.type === question.type);
  return (
    <AccordionItem value={question.id}>
      <div className="flex items-center gap-1">
        <GripVertical size={14} aria-hidden className="shrink-0 text-muted-foreground" />
        <AccordionTrigger className="min-w-0 py-3">
          <span className="flex min-w-0 flex-1 items-center gap-2">
            <Icon size={14} />
            <span className="truncate font-medium">{index + 1}. {question.title || "제목 없는 문항"}</span>
            {question.required ? <Badge variant="destructive" size="sm">필수</Badge> : null}
            <Badge variant="secondary" size="sm">{meta?.label}</Badge>
          </span>
        </AccordionTrigger>
      </div>
      <AccordionPanel>
        <div className="flex flex-col gap-3 ps-5">
          <Toolbar aria-label="문항 작업">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger render={<ToolbarButton render={<Button variant="ghost" size="icon-sm" disabled={index === 0} onClick={ => onMove(-1)}><ChevronUp size={13} /></Button>} />} />
                <TooltipPopup>위로 이동</TooltipPopup>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger render={<ToolbarButton render={<Button variant="ghost" size="icon-sm" disabled={index === total - 1} onClick={ => onMove(1)}><ChevronDownIcon size={13} /></Button>} />} />
                <TooltipPopup>아래로 이동</TooltipPopup>
              </Tooltip>
              <ToolbarSeparator />
              <Tooltip>
                <TooltipTrigger render={<ToolbarButton render={<Button variant="ghost" size="icon-sm" onClick={onDuplicate}><Copy size={13} /></Button>} />} />
                <TooltipPopup>문항 복제</TooltipPopup>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger render={<ToolbarButton render={<Button variant="ghost" size="icon-sm" onClick={onRemove}><Trash2 size={13} /></Button>} />} />
                <TooltipPopup>문항 삭제</TooltipPopup>
              </Tooltip>
            </TooltipProvider>
          </Toolbar>

          <Field>
            <FieldLabel>질문 내용</FieldLabel>
            <Input value={question.title} onChange={(e) => { const v = e.target.value; onChange({ ...question, title: v }); }} placeholder="질문을 입력하세요" />
          </Field>

          <QuestionConfigEditor question={question} onChange={onChange} />

          <Collapsible>
            <CollapsibleTrigger render={<Button variant="ghost" size="sm" className="w-fit">고급 설정</Button>} />
            <CollapsiblePanel>
              <div className="flex flex-col gap-3 pt-2">
                <Field>
                  <FieldLabel>설명(선택)</FieldLabel>
                  <Textarea value={question.description ?? ""} onChange={(e) => { const v = e.target.value; onChange({ ...question, description: v }); }} placeholder="응답자에게 보여줄 부가 설명이에요" />
                </Field>
                <label className="flex w-fit items-center gap-2">
                  <Switch checked={question.required} onCheckedChange={(checked) => onChange({ ...question, required: checked })} />
                  <Label>필수 응답으로 지정</Label>
                </label>
              </div>
            </CollapsiblePanel>
          </Collapsible>
        </div>
      </AccordionPanel>
    </AccordionItem>
  );
}

function AddQuestionPalette({ onAdd }: { onAdd: (type: QuestionType) => void }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger render={<Button size="sm"><Plus size={14} />문항 추가</Button>} />
      <PopoverPopup align="start" style={{ width: "18rem", padding: 0 }}>
        <Command>
          <CommandInput placeholder="문항 유형 검색…" />
          <CommandList>
            <CommandEmpty>결과가 없어요.</CommandEmpty>
            <CommandGroup>
              <CommandGroupLabel>문항 유형</CommandGroupLabel>
              {QUESTION_TYPE_META.map((m) => {
                const Icon = TYPE_ICON[m.type];
                return (
                  <CommandItem key={m.type} onClick={ => { onAdd(m.type); setOpen(false); }}>
                    <Icon size={14} />
                    <span className="flex min-w-0 flex-col">
                      <span>{m.label}</span>
                      <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{m.hint}</span>
                    </span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverPopup>
    </Popover>
  );
}

function DatePreview({ value, onChange }: { value: string | undefined; onChange: (v: string) => void }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger render={<Button variant="outline" className="w-fit justify-start"><CalendarDays size={14} />{value ?? "날짜 선택"}</Button>} />
      <PopoverPopup align="start">
        <Calendar
          mode="single"
          onSelect={(d: Date | undefined) => { if (d) { onChange(d.toLocaleDateString("ko-KR", { month: "long", day: "numeric" })); setOpen(false); } }}
        />
      </PopoverPopup>
    </Popover>
  );
}

function CanvasField({ question }: { question: Question }) {
  const [text, setText] = React.useState("");
  const [choice, setChoice] = React.useState<string | undefined>(undefined);
  const [multi, setMulti] = React.useState<string[]>([]);
  const [scaleVal, setScaleVal] = React.useState(question.scale ? Math.round((question.scale.min + question.scale.max) / 2) : 3);
  const [numVal, setNumVal] = React.useState<number | null>(question.numberRange?.min ?? 0);
  const [dateVal, setDateVal] = React.useState<string | undefined>(undefined);

  switch (question.type) {
    case "short":
      return <Input value={text} onChange={(e) => { const v = e.target.value; setText(v); }} placeholder="답변을 입력하세요" />;
    case "long":
      return <Textarea value={text} onChange={(e) => { const v = e.target.value; setText(v); }} placeholder="답변을 입력하세요" />;
    case "single":
      return (
        <RadioGroup value={choice} onValueChange={(v) => setChoice(v as string)}>
          {(question.options ?? []).map((opt) => (
            <label key={opt} className="flex items-center gap-2"><Radio value={opt} />{opt}</label>
          ))}
        </RadioGroup>
      );
    case "multi":
      return (
        <CheckboxGroup value={multi} onValueChange={(v) => setMulti(v)}>
          {(question.options ?? []).map((opt) => (
            <label key={opt} className="flex items-center gap-2"><Checkbox value={opt} />{opt}</label>
          ))}
        </CheckboxGroup>
      );
    case "scale": {
      const scale = question.scale ?? { min: 1, max: 5, minLabel: "", maxLabel: "" };
      return (
        <div className="flex flex-col gap-2">
          <Slider value={scaleVal} min={scale.min} max={scale.max} step={1} onValueChange={(v) => setScaleVal(Array.isArray(v) ? v[0] : v)}><SliderValue /></Slider>
          <div className="flex justify-between text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>
            <span>{scale.minLabel || scale.min}</span><span>{scale.maxLabel || scale.max}</span>
          </div>
        </div>
      );
    }
    case "number": {
      const range = question.numberRange ?? { min: 0, max: 100, unit: "" };
      return (
        <NumberField value={numVal ?? undefined} min={range.min} max={range.max} onValueChange={setNumVal} style={{ width: "10rem" }}>
          <NumberFieldGroup><NumberFieldDecrement /><NumberFieldInput /><NumberFieldIncrement /></NumberFieldGroup>
        </NumberField>
      );
    }
    case "select":
      return (
        <Select value={choice} onValueChange={(v) => setChoice(v as string)}>
          <SelectTrigger style={{ width: "100%" }}><SelectValue placeholder="선택해주세요" /></SelectTrigger>
          <SelectPopup>{(question.options ?? []).map((opt) => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}</SelectPopup>
        </Select>
      );
    case "date":
      return <DatePreview value={dateVal} onChange={setDateVal} />;
  }
}

function Canvas({ questions }: { questions: Question[] }) {
  const [active, setActive] = React.useState(0);
  const safeActive = questions.length === 0 ? 0 : Math.min(active, questions.length - 1);
  if (questions.length === 0) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon"><Eye /></EmptyMedia>
          <EmptyTitle>아직 미리 볼 문항이 없어요</EmptyTitle>
          <EmptyDescription>왼쪽에서 문항을 추가하면 여기서 실제 화면처럼 미리 볼 수 있어요.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }
  const q = questions[safeActive];
  return (
    <div className="flex flex-col gap-3">
      <Fieldset className="flex flex-col gap-2 rounded-xl border p-4">
        <FieldsetLegend className="flex items-center gap-2">
          {q.title || "제목 없는 문항"}
          {q.required ? <Badge variant="destructive" size="sm">필수</Badge> : null}
        </FieldsetLegend>
        {q.description ? <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{q.description}</span> : null}
        <div className="mt-1"><CanvasField key={q.id} question={q} /></div>
      </Fieldset>
      <Group className="self-center">
        <Button variant="outline" disabled={safeActive === 0} onClick={ => setActive((a) => Math.max(0, a - 1))}><ChevronLeft size={14} />이전</Button>
        <GroupText>{safeActive + 1} / {questions.length}</GroupText>
        <Button variant="outline" disabled={safeActive === questions.length - 1} onClick={ => setActive((a) => Math.min(questions.length - 1, a + 1))}>다음<ChevronRight size={14} /></Button>
      </Group>
    </div>
  );
}

const SHELL = "ods-coss3-editor";
const SHELL_CSS = `
.${SHELL} { container-type: inline-size; container-name: ced; }
.${SHELL} .ced-split { display: flex; flex-direction: column; gap: 1rem; }
.${SHELL} .ced-canvas-inline { display: none; }
.${SHELL} .ced-preview-btn { display: inline-flex; }
@container ced (min-width: 42rem) {
  .${SHELL} .ced-split { flex-direction: row; }
  .${SHELL} .ced-list { flex: 1 1 55%; min-width: 0; }
  .${SHELL} .ced-canvas-inline { display: block; flex: 1 1 45%; min-width: 0; }
  .${SHELL} .ced-preview-btn { display: none; }
}
`;

export function SurveyEditorScreen({ surveys, selectedId, onNavigate, onUpdateSurvey, onOpenShare }: ScreenProps) {
  const survey = surveyById(surveys, selectedId);
  const [questions, setQuestions] = React.useState<Question[]>( => survey.questions);
  const [previewOpen, setPreviewOpen] = React.useState(false);

  const sync = (next: Question[]) => {
    setQuestions(next);
    onUpdateSurvey({ ...survey, questions: next });
  };

  const updateAt = (id: string, next: Question) => sync(questions.map((q) => (q.id === id ? next : q)));
  const removeAt = (id: string) => sync(questions.filter((q) => q.id !== id));
  const duplicateAt = (id: string) => {
    const idx = questions.findIndex((q) => q.id === id);
    if (idx === -1) return;
    const copy: Question = { ...questions[idx], id: `${questions[idx].id}-copy-${Date.now}`, title: `${questions[idx].title} (복사본)` };
    sync([...questions.slice(0, idx + 1), copy, ...questions.slice(idx + 1)]);
  };
  const moveAt = (id: string, dir: -1 | 1) => {
    const idx = questions.findIndex((q) => q.id === id);
    const to = idx + dir;
    if (idx === -1 || to < 0 || to >= questions.length) return;
    const next = [...questions];
    [next[idx], next[to]] = [next[to], next[idx]];
    sync(next);
  };
  const addQuestion = (type: QuestionType) => sync([...questions, createDefaultQuestion(type)]);

  return (
    <div className={SHELL}>
      <style>{SHELL_CSS}</style>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink onClick={ => onNavigate?.("list")} className="cursor-pointer">설문 목록</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>{survey.title} 편집</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-2">
            <Badge variant={survey.status === "진행중" ? "default" : survey.status === "마감" ? "outline" : "secondary"}>{survey.status}</Badge>
            <Button variant="outline" size="sm" onClick={ => onOpenShare(survey.id)}>공유 설정</Button>
            <Button variant="outline" size="sm" className="ced-preview-btn" onClick={ => setPreviewOpen(true)}><Eye size={14} />미리보기</Button>
          </div>
        </div>
        <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>{survey.description}</span>
        {survey.status === "마감" ? (
          <Alert variant="error">
            <AlertTitle>이 설문은 마감됐어요</AlertTitle>
            <AlertDescription>더 이상 새 응답을 받지 않아요. 문항은 계속 편집할 수 있지만, 응답자에게는 보이지 않아요.</AlertDescription>
          </Alert>
        ) : null}
      </div>

      <div className="ced-split mt-4">
        <div className="ced-list flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <span className="font-medium">문항 {questions.length}개</span>
            <span className="flex items-center gap-2">
              <AddQuestionPalette onAdd={addQuestion} />
              <Kbd>⌘N</Kbd>
            </span>
          </div>
          {questions.length === 0 ? (
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon"><Plus /></EmptyMedia>
                <EmptyTitle>문항이 없어요</EmptyTitle>
                <EmptyDescription>이 설문은 아직 초안이에요. 문항을 추가해보세요.</EmptyDescription>
              </EmptyHeader>
              <AddQuestionPalette onAdd={addQuestion} />
            </Empty>
          ) : (
            <Accordion defaultValue={[questions[0].id]}>
              {questions.map((q, i) => (
                <QuestionEditorItem
                  key={q.id} question={q} index={i} total={questions.length}
                  onChange={(next) => updateAt(q.id, next)}
                  onRemove={ => removeAt(q.id)}
                  onDuplicate={ => duplicateAt(q.id)}
                  onMove={(dir) => moveAt(q.id, dir)}
                />
              ))}
            </Accordion>
          )}
        </div>

        <div className="ced-canvas-inline">
          <span className="mb-2 block font-medium">실시간 미리보기</span>
          <Canvas questions={questions} />
        </div>
      </div>

      <Sheet open={previewOpen} onOpenChange={setPreviewOpen}>
        <SheetPopup>
          <SheetHeader>
            <SheetTitle>실시간 미리보기</SheetTitle>
            <SheetDescription>응답자에게 보이는 화면을 그대로 보여줘요.</SheetDescription>
          </SheetHeader>
          <div className="p-6 pt-1"><Canvas questions={questions} /></div>
        </SheetPopup>
      </Sheet>
    </div>
  );
}
