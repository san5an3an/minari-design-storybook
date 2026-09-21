import * as React from "react";
import { InboxIcon } from "lucide-react";

// 단순, 원자 컴포넌트는 CossDoc.variants 값을 그대로 적용
import { Badge } from "../bases/coss-ui/badge";
import { Button } from "../bases/coss-ui/button";
import { Toggle } from "../bases/coss-ui/toggle";
import { Kbd } from "../bases/coss-ui/kbd";
import { Label } from "../bases/coss-ui/label";
import { Checkbox } from "../bases/coss-ui/checkbox";
import { Switch } from "../bases/coss-ui/switch";
import { Slider } from "../bases/coss-ui/slider";
import { Input } from "../bases/coss-ui/input";
import { Textarea } from "../bases/coss-ui/textarea";
import { Separator } from "../bases/coss-ui/separator";
import { Skeleton } from "../bases/coss-ui/skeleton";
import { Spinner } from "../bases/coss-ui/spinner";

// 합성 컴포넌트는 최소 실제 구조로 직접 구성하기
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from "../bases/coss-ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "../bases/coss-ui/alert";
import { Avatar, AvatarImage, AvatarFallback } from "../bases/coss-ui/avatar";
import { Tabs, TabsList, TabsTab, TabsPanel } from "../bases/coss-ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardPanel, CardFooter } from "../bases/coss-ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../bases/coss-ui/table";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "../bases/coss-ui/breadcrumb";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "../bases/coss-ui/pagination";
import { Calendar } from "../bases/coss-ui/calendar";
import { Select, SelectTrigger, SelectValue, SelectPopup, SelectItem } from "../bases/coss-ui/select";
import { RadioGroup, Radio } from "../bases/coss-ui/radio-group";
import { CheckboxGroup } from "../bases/coss-ui/checkbox-group";
import { ToggleGroup, ToggleGroupItem } from "../bases/coss-ui/toggle-group";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from "../bases/coss-ui/empty";
import { ScrollArea } from "../bases/coss-ui/scroll-area";
import { Field, FieldLabel, FieldDescription } from "../bases/coss-ui/field";
import { Fieldset, FieldsetLegend } from "../bases/coss-ui/fieldset";
import { Group, GroupText } from "../bases/coss-ui/group";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../bases/coss-ui/input-group";
import { Frame, FramePanel, FrameHeader, FrameTitle, FrameDescription } from "../bases/coss-ui/frame";
import { Form } from "../bases/coss-ui/form";
import { Collapsible, CollapsibleTrigger, CollapsiblePanel } from "../bases/coss-ui/collapsible";
import { Command, CommandInput, CommandList, CommandGroup, CommandGroupLabel, CommandItem, CommandEmpty } from "../bases/coss-ui/command";
import { Toolbar, ToolbarButton, ToolbarSeparator, ToolbarGroup } from "../bases/coss-ui/toolbar";
import { Autocomplete, AutocompleteInput } from "../bases/coss-ui/autocomplete";
import { NumberField, NumberFieldGroup, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "../bases/coss-ui/number-field";
import { OTPField, OTPFieldInput } from "../bases/coss-ui/otp-field";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from "../bases/coss-ui/sidebar";
import { PreviewCard, PreviewCardTrigger, PreviewCardPopup } from "../bases/coss-ui/preview-card";
import { Progress, ProgressTrack, ProgressIndicator } from "../bases/coss-ui/progress";
import { Meter, MeterTrack, MeterIndicator } from "../bases/coss-ui/meter";
import { Combobox, ComboboxInput, ComboboxPopup, ComboboxEmpty, ComboboxList, ComboboxItem } from "../bases/coss-ui/combobox";
import { AlertDialog, AlertDialogTrigger, AlertDialogPopup, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogClose } from "../bases/coss-ui/alert-dialog";
import { Dialog, DialogTrigger, DialogPopup, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "../bases/coss-ui/dialog";
import { Sheet, SheetTrigger, SheetPopup, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "../bases/coss-ui/sheet";
import { Drawer, DrawerTrigger, DrawerPopup, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "../bases/coss-ui/drawer";
import { Popover, PopoverTrigger, PopoverPopup, PopoverTitle, PopoverDescription, PopoverClose } from "../bases/coss-ui/popover";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipPopup } from "../bases/coss-ui/tooltip";
import { Menu, MenuTrigger, MenuPopup, MenuItem } from "../bases/coss-ui/menu";
import { ContextMenu, ContextMenuTrigger, ContextMenuPopup, ContextMenuItem } from "../bases/coss-ui/context-menu";
import { ToastProvider, toastManager } from "../bases/coss-ui/toast";

// 필드 오류 시에도 화면 전체 비지 않게 처리
class Cell extends React.Component<{ children: React.ReactNode }, { err: string | null }> {
  state = { err: null as string | null };
  static getDerivedStateFromError(e: unknown) {
    return { err: e instanceof Error ? e.message : String(e) };
  }
  render {
    if (this.state.err) {
      return <span className="doc-note" title={this.state.err}>홑으로는 못 세워요, {this.state.err}</span>;
    }
    return this.props.children;
  }
}

// 단순 컴포넌트 기본 상태. variant 만으론 비어 보이는 항목에 최소값 지정
const DEFAULT_PROPS: Record<string, Record<string, unknown>> = {
  checkbox: { defaultChecked: true },
  switch: { defaultChecked: true },
  slider: { defaultValue: 60 },
  input: { placeholder: "입력하세요", defaultValue: "" },
  textarea: { placeholder: "여러 줄 입력", defaultValue: "" },
};
const NO_CHILDREN = new Set(["checkbox", "switch", "slider", "input", "textarea", "separator", "skeleton", "spinner"]);
const SIMPLE: Record<string, React.ComponentType<Record<string, unknown>>> = {
  badge: Badge as React.ComponentType<Record<string, unknown>>,
  button: Button as React.ComponentType<Record<string, unknown>>,
  toggle: Toggle as React.ComponentType<Record<string, unknown>>,
  kbd: Kbd as React.ComponentType<Record<string, unknown>>,
  label: Label as React.ComponentType<Record<string, unknown>>,
  checkbox: Checkbox as React.ComponentType<Record<string, unknown>>,
  switch: Switch as React.ComponentType<Record<string, unknown>>,
  slider: Slider as React.ComponentType<Record<string, unknown>>,
  input: Input as React.ComponentType<Record<string, unknown>>,
  textarea: Textarea as React.ComponentType<Record<string, unknown>>,
  separator: Separator as React.ComponentType<Record<string, unknown>>,
  skeleton: Skeleton as React.ComponentType<Record<string, unknown>>,
  spinner: Spinner as React.ComponentType<Record<string, unknown>>,
};

type CossVariant = { axis: string; value: string };

function SimpleGrid({ slug, variant }: { slug: string; variant?: CossVariant }) {
  const Comp = SIMPLE[slug];
  const base = DEFAULT_PROPS[slug] ?? {};
  const kids = NO_CHILDREN.has(slug) ? undefined : slug === "kbd" ? "⌘K" : slug === "label" ? "레이블" : slug;
  if (variant) {
    return <Cell><Comp {...base} {...{ [variant.axis]: variant.value }}>{kids}</Comp></Cell>;
  }
  return (
    <Cell><Comp {...base}>{kids}</Comp></Cell>
  );
}

// 합성 컴포넌트마다 최소 구성 데모 작성하기. 구조 없이는 렌더링이 안 돼 자동화할 수 없음
const BESPOKE: Record<string, (variant?: CossVariant) => React.ReactNode> = {
  "alert-dialog":  => (
    <AlertDialog><AlertDialogTrigger render={<Button variant="outline">계정 삭제</Button>} /><AlertDialogPopup><AlertDialogHeader><AlertDialogTitle>정말 삭제할까요?</AlertDialogTitle><AlertDialogDescription>이 작업은 되돌릴 수 없어요.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogClose render={<Button variant="outline">취소</Button>} /><AlertDialogClose render={<Button variant="destructive">삭제</Button>} /></AlertDialogFooter></AlertDialogPopup></AlertDialog>
  ),
  dialog:  => (
    <Dialog><DialogTrigger render={<Button variant="outline">다이얼로그 열기</Button>} /><DialogPopup><DialogHeader><DialogTitle>프로필 편집</DialogTitle><DialogDescription>여기서 정보를 바꿀 수 있어요.</DialogDescription></DialogHeader><DialogFooter><DialogClose render={<Button>완료</Button>} /></DialogFooter></DialogPopup></Dialog>
  ),
  sheet:  => (
    <Sheet><SheetTrigger render={<Button variant="outline">시트 열기</Button>} /><SheetPopup><SheetHeader><SheetTitle>알림 설정</SheetTitle><SheetDescription>옆에서 열리는 패널이에요.</SheetDescription></SheetHeader><SheetFooter><SheetClose render={<Button>확인</Button>} /></SheetFooter></SheetPopup></Sheet>
  ),
  drawer:  => (
    <Drawer><DrawerTrigger render={<Button variant="outline">드로어 열기</Button>} /><DrawerPopup><DrawerHeader><DrawerTitle>세부 옵션</DrawerTitle><DrawerDescription>아래에서 설정을 바꿀 수 있어요.</DrawerDescription></DrawerHeader><DrawerFooter><DrawerClose render={<Button>확인</Button>} /></DrawerFooter></DrawerPopup></Drawer>
  ),
  popover:  => (
    <Popover><PopoverTrigger render={<Button variant="outline">팝오버 열기</Button>} /><PopoverPopup><div className="grid gap-1"><PopoverTitle>빠른 안내</PopoverTitle><PopoverDescription>원하는 내용을 여기에 넣을 수 있어요.</PopoverDescription><PopoverClose render={<Button size="sm" variant="outline">닫기</Button>} /></div></PopoverPopup></Popover>
  ),
  tooltip:  => (
    <TooltipProvider><Tooltip><TooltipTrigger render={<Button variant="outline">마우스를 올려보세요</Button>} /><TooltipPopup>여기 도움말이 떠요.</TooltipPopup></Tooltip></TooltipProvider>
  ),
  menu:  => (
    <Menu><MenuTrigger render={<Button variant="outline">메뉴 열기</Button>} /><MenuPopup><MenuItem>수정</MenuItem><MenuItem>복사</MenuItem><MenuItem variant="destructive">삭제</MenuItem></MenuPopup></Menu>
  ),
  "context-menu":  => (
    <ContextMenu><ContextMenuTrigger style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "5rem", width: "100%", border: "1px dashed var(--border)", borderRadius: "var(--radius-lg)", color: "var(--muted-foreground)", fontSize: "var(--text-sm)" }}>여기를 우클릭해 보세요</ContextMenuTrigger><ContextMenuPopup><ContextMenuItem>복사</ContextMenuItem><ContextMenuItem>붙여넣기</ContextMenuItem></ContextMenuPopup></ContextMenu>
  ),
  combobox:  => (
    <div style={{ maxWidth: "20rem" }}><Combobox items={["사과", "바나나", "체리"]}><ComboboxInput placeholder="과일 검색…" showClear /><ComboboxPopup><ComboboxEmpty>결과가 없어요.</ComboboxEmpty><ComboboxList>{(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}</ComboboxList></ComboboxPopup></Combobox></div>
  ),
  toast:  => <ToastDemo />,
  accordion:  => (
    <Accordion defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>첫 번째 항목</AccordionTrigger>
        <AccordionPanel>펼치면 보이는 본문이에요.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>두 번째 항목</AccordionTrigger>
        <AccordionPanel>두 번째 본문이에요.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
  alert: (variant) => (
    <Alert {...(variant?.axis === "variant" ? { variant: variant.value as "default" | "error" | "info" | "success" | "warning" } : {})}>
      <AlertTitle>알림 제목</AlertTitle>
      <AlertDescription>알림 본문 설명이에요.</AlertDescription>
    </Alert>
  ),
  avatar:  => (
    <div style={{ display: "flex", gap: ".75rem" }}>
      <Avatar><AvatarImage src="https://i.pravatar.cc/64" alt="" /><AvatarFallback>SK</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>후니</AvatarFallback></Avatar>
    </div>
  ),
  tabs:  => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTab value="tab1">첫째 탭</TabsTab>
        <TabsTab value="tab2">둘째 탭</TabsTab>
      </TabsList>
      <TabsPanel value="tab1">첫째 탭 내용이에요.</TabsPanel>
      <TabsPanel value="tab2">둘째 탭 내용이에요.</TabsPanel>
    </Tabs>
  ),
  card:  => (
    <Card>
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드 설명이에요.</CardDescription>
      </CardHeader>
      <CardPanel>본문 내용이 들어가는 자리예요.</CardPanel>
      <CardFooter><Button size="sm">확인</Button></CardFooter>
    </Card>
  ),
  table:  => (
    <Table>
      <TableHeader><TableRow><TableHead>이름</TableHead><TableHead>상태</TableHead></TableRow></TableHeader>
      <TableBody>
        <TableRow><TableCell>홍길동</TableCell><TableCell>활성</TableCell></TableRow>
        <TableRow><TableCell>김영희</TableCell><TableCell>대기</TableCell></TableRow>
      </TableBody>
    </Table>
  ),
  breadcrumb:  => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">홈</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">라이브러리</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>현재 항목</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  pagination:  => (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  calendar:  => <Calendar />,
  select: (variant) => (
    <Select defaultValue="apple">
      <SelectTrigger {...(variant?.axis === "size" ? { size: variant.value as "default" | "sm" | "lg" } : {})}><SelectValue placeholder="과일 선택" /></SelectTrigger>
      <SelectPopup>
        <SelectItem value="apple">사과</SelectItem>
        <SelectItem value="banana">바나나</SelectItem>
      </SelectPopup>
    </Select>
  ),
  "radio-group":  => (
    <RadioGroup defaultValue="a">
      <label style={{ display: "flex", gap: ".4rem", alignItems: "center" }}><Radio value="a" />옵션 A</label>
      <label style={{ display: "flex", gap: ".4rem", alignItems: "center" }}><Radio value="b" />옵션 B</label>
    </RadioGroup>
  ),
  "checkbox-group":  => (
    <CheckboxGroup defaultValue={["a"]}>
      <label style={{ display: "flex", gap: ".4rem", alignItems: "center" }}><Checkbox value="a" />항목 A</label>
      <label style={{ display: "flex", gap: ".4rem", alignItems: "center" }}><Checkbox value="b" />항목 B</label>
    </CheckboxGroup>
  ),
  "toggle-group":  => (
    <ToggleGroup defaultValue={["bold"]}>
      <ToggleGroupItem value="bold">굵게</ToggleGroupItem>
      <ToggleGroupItem value="italic">기울임</ToggleGroupItem>
    </ToggleGroup>
  ),
  empty: (variant) => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia {...(variant?.axis === "variant" ? { variant: variant.value as "default" | "icon" } : {})}><InboxIcon /></EmptyMedia>
        <EmptyTitle>항목이 없어요</EmptyTitle>
        <EmptyDescription>아직 추가된 게 없어요.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  "scroll-area":  => (
    <ScrollArea style={{ height: "8rem", width: "100%" }}>
      {Array.from({ length: 12 }, (_, i) => <p key={i} style={{ margin: ".25rem 0" }}>목록 항목 {i + 1}</p>)}
    </ScrollArea>
  ),
  field:  => (
    <Field>
      <FieldLabel>이메일</FieldLabel>
      <Input placeholder="you@example.com" />
      <FieldDescription>로그인에 쓰는 주소예요.</FieldDescription>
    </Field>
  ),
  fieldset:  => (
    <Fieldset>
      <FieldsetLegend>배송 정보</FieldsetLegend>
      <Field><FieldLabel>이름</FieldLabel><Input placeholder="이름" /></Field>
    </Fieldset>
  ),
  group: (variant) => (
    <Group {...(variant?.axis === "orientation" ? { orientation: variant.value as "horizontal" | "vertical" } : {})}>
      <Button variant="outline">이전</Button>
      <GroupText>1 / 3</GroupText>
      <Button variant="outline">다음</Button>
    </Group>
  ),
  "input-group": (variant) => (
    <InputGroup>
      <InputGroupAddon {...(variant?.axis === "align" ? { align: variant.value as "block-end" | "block-start" | "inline-end" | "inline-start" } : {})}>https://</InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
  frame:  => (
    <Frame>
      <FrameHeader><FrameTitle>프레임 제목</FrameTitle><FrameDescription>프레임 설명이에요.</FrameDescription></FrameHeader>
      <FramePanel>본문 영역이에요.</FramePanel>
    </Frame>
  ),
  form:  => (
    <Form>
      <Field><FieldLabel>이름</FieldLabel><Input placeholder="이름을 입력하세요" /></Field>
    </Form>
  ),
  collapsible:  => (
    <Collapsible defaultOpen>
      <CollapsibleTrigger>더 보기</CollapsibleTrigger>
      <CollapsiblePanel>펼쳐진 본문 내용이에요.</CollapsiblePanel>
    </Collapsible>
  ),
  command:  => (
    <div style={{ maxWidth: "20rem" }}>
      <Command>
        <CommandInput placeholder="명령 검색…" />
        <CommandList>
          <CommandEmpty>결과가 없어요.</CommandEmpty>
          <CommandGroup>
            <CommandGroupLabel>제안</CommandGroupLabel>
            <CommandItem>새 파일</CommandItem>
            <CommandItem>새 폴더</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
  toolbar:  => (
    <Toolbar>
      <ToolbarGroup>
        <ToolbarButton>굵게</ToolbarButton>
        <ToolbarButton>기울임</ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarButton>정렬</ToolbarButton>
    </Toolbar>
  ),
  autocomplete:  => (
    <Autocomplete items={["사과", "바나나", "체리"]}>
      <AutocompleteInput placeholder="과일 검색…" />
    </Autocomplete>
  ),
  "number-field":  => (
    <NumberField defaultValue={10}>
      <NumberFieldGroup>
        <NumberFieldDecrement>−</NumberFieldDecrement>
        <NumberFieldInput />
        <NumberFieldIncrement>+</NumberFieldIncrement>
      </NumberFieldGroup>
    </NumberField>
  ),
  "otp-field":  => (
    <OTPField length={4}>
      <OTPFieldInput />
    </OTPField>
  ),
  sidebar:  => (
    <SidebarProvider style={{ minHeight: "16rem" }}>
      <Sidebar>
        <SidebarHeader>메뉴</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>일반</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem><SidebarMenuButton>대시보드</SidebarMenuButton></SidebarMenuItem>
                <SidebarMenuItem><SidebarMenuButton>설정</SidebarMenuButton></SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>본문 영역이에요.</SidebarInset>
    </SidebarProvider>
  ),
  "preview-card":  => (
    <PreviewCard>
      <PreviewCardTrigger render={<a href="#">마우스를 올려보세요</a>} />
      <PreviewCardPopup>미리보기 내용이에요.</PreviewCardPopup>
    </PreviewCard>
  ),
  progress:  => (
    <Progress value={60}>
      <ProgressTrack><ProgressIndicator /></ProgressTrack>
    </Progress>
  ),
  meter:  => (
    <Meter value={60}>
      <MeterTrack><MeterIndicator /></MeterTrack>
    </Meter>
  ),
};

function ToastDemo {
  const [count, setCount] = React.useState(0);
  return (
    <ToastProvider>
      <Button onClick={ => {
        const next = count + 1;
        setCount(next);
        toastManager.add({ title: `알림 ${next}`, description: "Coss toastManager로 생성한 알림이에요.", type: "success" });
      }}>토스트 띄우기</Button>
    </ToastProvider>
  );
}

export function CossLive({ slug, variant }: { slug: string; variant?: CossVariant }) {
  return (
    <>
      {/* variant 있으면 이 문구 미표시. Master 호출 한 번이면 충분 */}
      {!variant ? (
        <p className="doc-note" style={{ marginTop: 0 }}>
          아래는 <b>coss 컴포넌트 그 자체</b>예요(<code>app/src/bases/coss-ui/{slug}.tsx</code>, coss.com 공식
          레지스트리로 실제 설치한 것). 색·모서리는 이 화면 크롬(shadcn 톤)을 그대로 물려받아요.
        </p>
      ) : null}
      {BESPOKE[slug] ? BESPOKE[slug](variant) : SIMPLE[slug] ? <SimpleGrid slug={slug} variant={variant} /> : <p className="doc-note">이 컴포넌트는 아직 데모가 없어요. 지어내지 않고 그대로 알립니다.</p>}
    </>
  );
}
