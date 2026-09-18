import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { Attachment, AttachmentContent, AttachmentDescription, AttachmentGroup, AttachmentMedia, AttachmentTitle } from "../components/ui/attachment";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Bubble, BubbleContent, BubbleGroup } from "../components/ui/bubble";
import { ButtonGroup } from "../components/ui/button-group";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "../components/ui/chart";
import { Checkbox } from "../components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "../components/ui/combobox";
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from "../components/ui/command";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "../components/ui/context-menu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../components/ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../components/ui/empty";
import { Field, FieldDescription, FieldLabel, FieldSet } from "../components/ui/field";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../components/ui/hover-card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../components/ui/input-group";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/ui/input-otp";
import { Input } from "../components/ui/input";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "../components/ui/item";
import { Kbd, KbdGroup } from "../components/ui/kbd";
import { Label } from "../components/ui/label";
import { Marker, MarkerContent, MarkerIcon } from "../components/ui/marker";
import { Menubar, MenubarMenu, MenubarTrigger } from "../components/ui/menubar";
import { Message, MessageAvatar, MessageContent, MessageGroup } from "../components/ui/message";
import { MessageScroller, MessageScrollerContent, MessageScrollerItem, MessageScrollerProvider, MessageScrollerViewport } from "../components/ui/message-scroller";
import { NativeSelect, NativeSelectOption } from "../components/ui/native-select";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../components/ui/navigation-menu";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../components/ui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Progress, ProgressLabel, ProgressValue } from "../components/ui/progress";
import { Questionnaire, QuestionnaireChoice, QuestionnaireChoices, QuestionnaireItem, QuestionnaireTitle } from "../components/ui/questionnaire";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../components/ui/resizable";
import { ScrollArea } from "../components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "../components/ui/sidebar";
import { Skeleton } from "../components/ui/skeleton";
import { Slider } from "../components/ui/slider";
import { Toaster as SonnerToaster } from "../components/ui/sonner";
import { Spinner } from "../components/ui/spinner";
import { Switch } from "../components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";
import { Toaster as BaseToaster, toast as baseToast } from "../components/ui/toast";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";
import { Toggle } from "../components/ui/toggle";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";
import {
  CircleIcon, FileTextIcon, InboxIcon, SearchIcon, TriangleAlertIcon, UserIcon,
} from "lucide-react";
import { toast as sonnerToast } from "sonner";

import type { ShadcnDoc } from "./shadcnRef/loader";

// 기본값이 닫힘 상태인 항목들. 정상 동작임을 명시
const NEEDS_INTERACTION: Record<string, string> = {
  "alert-dialog": "버튼을 누르면 진짜로 열려요. 닫힌 상태가 기본값이에요.",
  dialog: "버튼을 누르면 진짜로 열려요. 닫힌 상태가 기본값이에요.",
  sheet: "버튼을 누르면 옆에서 진짜로 열려요. 닫힌 상태가 기본값이에요.",
  drawer: "버튼을 누르면 아래에서 진짜로 열려요. 닫힌 상태가 기본값이에요.",
  popover: "버튼을 누르면 진짜로 떠요. 닫힌 상태가 기본값이에요.",
  "hover-card": "마우스를 올리면 진짜로 떠요.",
  "dropdown-menu": "버튼을 누르면 진짜 메뉴가 열려요.",
  "context-menu": "우클릭하면 진짜 메뉴가 열려요.",
  tooltip: "마우스를 올리면 진짜로 떠요.",
  combobox: "입력창을 누르면 진짜 목록이 열려요.",
  select: "선택창을 누르면 진짜 목록이 열려요.",
  toast: "버튼을 누르면 진짜 토스트가 떠요. 화면 아래쪽을 봐 주세요.",
  sonner: "버튼을 누르면 진짜 토스트가 떠요. 화면 아래쪽을 봐 주세요.",
};

// 렌더링 후 실제 노드 존재 자체 확인. shadcn 노드는 data-slot이 있음
function EmptyGuard({ slug, children }: { slug: string; children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [empty, setEmpty] = React.useState(false);
  React.useEffect( => {
    const id = requestAnimationFrame( => {
      const el = ref.current;
      setEmpty(!!el && el.querySelectorAll("[data-slot]").length === 0);
    });
    return  => cancelAnimationFrame(id);
  }, [slug]);
  return (
    <>
      <div ref={ref} style={{ display: "contents" }}>{children}</div>
      {empty ? (
        <p className="doc-note">
          여기에 shadcn 요소가 <b>하나도 안 그려졌어요.</b> 왜인지 이 프로젝트도 아직 몰라요.
          지어내지 않고 그대로 알립니다. (<code>ShadcnLive.tsx</code> 의{" "}
          <code>DEMOS</code> 를 봐 주세요.)
        </p>
      ) : null}
    </>
  );
}

// 슬러그 에러 발생해도 페이지 유지, 발생 위치에 에러 표시
class Cell extends React.Component<{ children: React.ReactNode }, { err: string | null }> {
  state = { err: null as string | null };
  static getDerivedStateFromError(e: unknown) {
    return { err: e instanceof Error ? e.message : String(e) };
  }
  render {
    if (this.state.err) {
      return (
        <p className="doc-note" title={this.state.err}>
          이 조립은 못 세웠어요. 필수 prop 이 더 있을 수 있어요.
        </p>
      );
    }
    return this.props.children;
  }
}

const chartData = [
  { month: "1월", value: 186 },
  { month: "2월", value: 305 },
  { month: "3월", value: 237 },
];
const chartConfig = { value: { label: "값", color: "var(--primary)" } } satisfies ChartConfig;

const DEMOS: Record<string,  => React.ReactNode> = {
  accordion:  => (
    <Accordion defaultValue={["item-1"]} style={{ width: "100%", maxWidth: "20rem" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>첫 번째 항목</AccordionTrigger>
        <AccordionContent>내용이 여기 들어가요.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>두 번째 항목</AccordionTrigger>
        <AccordionContent>더 많은 내용이 여기 들어가요.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  "alert-dialog":  => (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline">계정 삭제</Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>정말 삭제할까요?</AlertDialogTitle>
          <AlertDialogDescription>이 작업은 되돌릴 수 없어요.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction>삭제</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  alert:  => (
    <Alert style={{ maxWidth: "20rem" }}>
      <TriangleAlertIcon />
      <AlertTitle>업데이트가 있어요</AlertTitle>
      <AlertDescription>새 버전을 설치해 주세요.</AlertDescription>
    </Alert>
  ),
  "aspect-ratio":  => (
    <div style={{ width: "12rem" }}>
      <AspectRatio ratio={16 / 9} style={{ overflow: "hidden", borderRadius: "0.5rem", background: "var(--muted)" }}>
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted-foreground)", fontSize: "0.75rem" }}>16:9</div>
      </AspectRatio>
    </div>
  ),
  attachment:  => (
    <AttachmentGroup>
      <Attachment>
        <AttachmentMedia><FileTextIcon /></AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>보고서.pdf</AttachmentTitle>
          <AttachmentDescription>1.2MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </AttachmentGroup>
  ),
  avatar:  => (
    <div style={{ display: "flex", gap: "0.75rem" }}>
      <Avatar><AvatarFallback>YS</AvatarFallback></Avatar>
      <Avatar size="lg"><AvatarFallback>KJ</AvatarFallback></Avatar>
    </div>
  ),
  badge:  => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {(["default", "secondary", "destructive", "outline"] as const).map((v) => (
        <Badge key={v} variant={v}>{v}</Badge>
      ))}
    </div>
  ),
  breadcrumb:  => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">홈</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">설정</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>프로필</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  bubble:  => (
    <BubbleGroup style={{ maxWidth: "16rem" }}>
      <Bubble align="end"><BubbleContent>안녕하세요!</BubbleContent></Bubble>
      <Bubble align="start" variant="muted"><BubbleContent>네, 안녕하세요.</BubbleContent></Bubble>
    </BubbleGroup>
  ),
  "button-group":  => (
    <ButtonGroup>
      <Button variant="outline">왼쪽</Button>
      <Button variant="outline">가운데</Button>
      <Button variant="outline">오른쪽</Button>
    </ButtonGroup>
  ),
  button:  => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {(["default", "outline", "secondary", "ghost", "destructive", "link"] as const).map((v) => (
        <Button key={v} variant={v}>버튼</Button>
      ))}
    </div>
  ),
  calendar:  => <Calendar mode="single" style={{ borderRadius: "0.5rem", border: "1px solid var(--border)", width: "fit-content" }} />,
  card:  => (
    <Card style={{ maxWidth: "20rem" }}>
      <CardHeader>
        <CardTitle>월 매출</CardTitle>
        <CardDescription>이번 달 요약</CardDescription>
      </CardHeader>
      <CardContent>₩4,820,000</CardContent>
      <CardFooter><Button size="sm" variant="outline">보고서 보기</Button></CardFooter>
    </Card>
  ),
  carousel:  => (
    <Carousel style={{ maxWidth: "14rem" }}>
      <CarouselContent>
        {[1, 2, 3].map((i) => (
          <CarouselItem key={i}>
            <div style={{ display: "flex", aspectRatio: "1/1", alignItems: "center", justifyContent: "center", background: "var(--muted)", borderRadius: "0.5rem" }}>{i}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  chart:  => (
    <ChartContainer config={chartConfig} style={{ maxHeight: "12rem", width: "100%", maxWidth: "20rem" }}>
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="var(--color-value)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
  checkbox:  => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Checkbox id="live-checkbox" defaultChecked />
      <Label htmlFor="live-checkbox">이용약관에 동의해요</Label>
    </div>
  ),
  collapsible:  => (
    <Collapsible defaultOpen style={{ width: "16rem" }}>
      <CollapsibleTrigger render={<Button variant="outline" size="sm">더 보기</Button>} />
      <CollapsibleContent style={{ marginTop: "0.5rem", fontSize: "0.85rem" }}>숨겨진 내용이 여기 보여요.</CollapsibleContent>
    </Collapsible>
  ),
  combobox:  => (
    <Combobox items={["사과", "바나나", "포도"]}>
      <ComboboxInput placeholder="과일 검색…" />
      <ComboboxContent>
        <ComboboxEmpty>결과가 없어요</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
  command:  => (
    <Command style={{ maxWidth: "18rem", border: "1px solid var(--border)" }}>
      <CommandInput placeholder="명령어 검색…" />
      <CommandList>
        <CommandGroup heading="빠른 실행">
          <CommandItem>새 문서</CommandItem>
          <CommandItem>설정 열기</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  "context-menu":  => (
    <ContextMenu>
      <ContextMenuTrigger
        style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "5rem", border: "1px dashed var(--border)", borderRadius: "0.5rem", fontSize: "0.8rem", color: "var(--muted-foreground)" }}
      >
        여기를 우클릭해 보세요
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>복사</ContextMenuItem>
        <ContextMenuItem>붙여넣기</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  dialog:  => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">다이얼로그 열기</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>프로필 편집</DialogTitle>
          <DialogDescription>여기서 정보를 바꿀 수 있어요.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
  direction:  => null,
  drawer:  => (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline">드로어 열기</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>세부 옵션</DrawerTitle>
          <DrawerDescription>아래에서 설정을 바꿀 수 있어요.</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  ),
  "dropdown-menu":  => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">메뉴 열기</Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem>수정</DropdownMenuItem>
        <DropdownMenuItem>삭제</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  empty:  => (
    <Empty style={{ maxWidth: "20rem" }}>
      <EmptyHeader>
        <EmptyMedia variant="icon"><InboxIcon /></EmptyMedia>
        <EmptyTitle>아직 항목이 없어요</EmptyTitle>
        <EmptyDescription>새로 추가하면 여기 보여요.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  field:  => (
    <FieldSet style={{ maxWidth: "18rem" }}>
      <Field>
        <FieldLabel htmlFor="live-field-name">이름</FieldLabel>
        <Input id="live-field-name" placeholder="홍길동" />
        <FieldDescription>실명을 입력해 주세요.</FieldDescription>
      </Field>
    </FieldSet>
  ),
  "hover-card":  => (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link">@사용자이름</Button>} />
      <HoverCardContent>가입 2024년 3월 · 팔로워 128명</HoverCardContent>
    </HoverCard>
  ),
  "input-group":  => (
    <InputGroup style={{ maxWidth: "16rem" }}>
      <InputGroupAddon><SearchIcon /></InputGroupAddon>
      <InputGroupInput placeholder="검색…" />
    </InputGroup>
  ),
  "input-otp":  => (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        {[0, 1, 2, 3].map((i) => <InputOTPSlot key={i} index={i} />)}
      </InputOTPGroup>
    </InputOTP>
  ),
  input:  => <Input placeholder="이메일을 입력하세요" style={{ maxWidth: "16rem" }} />,
  item:  => (
    <ItemGroup style={{ maxWidth: "20rem" }}>
      <Item variant="outline">
        <ItemMedia variant="icon"><UserIcon /></ItemMedia>
        <ItemContent>
          <ItemTitle>김민준</ItemTitle>
          <ItemDescription>프로덕트 디자이너</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
  kbd:  => <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>,
  label:  => <Label htmlFor="live-label-demo">이메일 주소</Label>,
  marker:  => (
    <Marker>
      <MarkerIcon><CircleIcon /></MarkerIcon>
      <MarkerContent>진행중</MarkerContent>
    </Marker>
  ),
  menubar:  => (
    <Menubar>
      <MenubarMenu><MenubarTrigger>파일</MenubarTrigger></MenubarMenu>
      <MenubarMenu><MenubarTrigger>편집</MenubarTrigger></MenubarMenu>
      <MenubarMenu><MenubarTrigger>보기</MenubarTrigger></MenubarMenu>
    </Menubar>
  ),
  message:  => (
    <MessageGroup style={{ maxWidth: "18rem" }}>
      <Message>
        <MessageAvatar><Avatar><AvatarFallback>AI</AvatarFallback></Avatar></MessageAvatar>
        <MessageContent><Bubble><BubbleContent>무엇을 도와드릴까요?</BubbleContent></Bubble></MessageContent>
      </Message>
    </MessageGroup>
  ),
  "message-scroller":  => (
    <MessageScrollerProvider>
      <MessageScroller style={{ height: "8rem", border: "1px solid var(--border)", borderRadius: "0.5rem" }}>
        <MessageScrollerViewport>
          <MessageScrollerContent>
            <MessageScrollerItem>메시지 1</MessageScrollerItem>
            <MessageScrollerItem>메시지 2</MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </MessageScrollerProvider>
  ),
  "native-select":  => (
    <NativeSelect defaultValue="apple" style={{ maxWidth: "12rem" }}>
      <NativeSelectOption value="apple">사과</NativeSelectOption>
      <NativeSelectOption value="banana">바나나</NativeSelectOption>
    </NativeSelect>
  ),
  "navigation-menu":  => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem><NavigationMenuTrigger>제품</NavigationMenuTrigger></NavigationMenuItem>
        <NavigationMenuItem><NavigationMenuLink href="#">가격</NavigationMenuLink></NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  pagination:  => (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationEllipsis /></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  popover:  => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">팝오버 열기</Button>} />
      <PopoverContent>이 안에 원하는 내용을 넣을 수 있어요.</PopoverContent>
    </Popover>
  ),
  progress:  => (
    <Progress value={62} style={{ maxWidth: "16rem" }}>
      <ProgressLabel>업로드 중</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
  questionnaire:  => (
    <Questionnaire style={{ maxWidth: "20rem" }}>
      <QuestionnaireItem name="satisfaction">
        <QuestionnaireTitle>가장 만족스러운 점은?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="speed">속도</QuestionnaireChoice>
          <QuestionnaireChoice value="design">디자인</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
    </Questionnaire>
  ),
  "radio-group":  => (
    <RadioGroup defaultValue="a" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <RadioGroupItem value="a" id="live-radio-a" /><Label htmlFor="live-radio-a">옵션 A</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <RadioGroupItem value="b" id="live-radio-b" /><Label htmlFor="live-radio-b">옵션 B</Label>
      </div>
    </RadioGroup>
  ),
  resizable:  => (
    <ResizablePanelGroup style={{ height: "7rem", border: "1px solid var(--border)", borderRadius: "0.5rem" }}>
      <ResizablePanel defaultSize={50}><div style={{ padding: "1rem", fontSize: "0.8rem" }}>패널 A</div></ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}><div style={{ padding: "1rem", fontSize: "0.8rem" }}>패널 B</div></ResizablePanel>
    </ResizablePanelGroup>
  ),
  "scroll-area":  => (
    <ScrollArea style={{ height: "6rem", width: "12rem", border: "1px solid var(--border)", borderRadius: "0.5rem" }}>
      <div style={{ padding: "0.75rem" }}>
        {Array.from({ length: 8 }).map((_, i) => <p key={i} style={{ margin: "0 0 0.5rem", fontSize: "0.8rem" }}>목록 항목 {i + 1}</p>)}
      </div>
    </ScrollArea>
  ),
  select:  => (
    <Select defaultValue="apple">
      <SelectTrigger style={{ minWidth: "10rem" }}><SelectValue placeholder="과일 선택" /></SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">사과</SelectItem>
        <SelectItem value="banana">바나나</SelectItem>
      </SelectContent>
    </Select>
  ),
  separator:  => (
    <div style={{ width: "12rem" }}>
      <p style={{ margin: 0, fontSize: "0.8rem" }}>위</p>
      <Separator style={{ margin: "0.5rem 0" }} />
      <p style={{ margin: 0, fontSize: "0.8rem" }}>아래</p>
    </div>
  ),
  sheet:  => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">시트 열기</Button>} />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>알림 설정</SheetTitle>
          <SheetDescription>옆에서 열리는 패널이에요.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
  sidebar:  => (
    <SidebarProvider style={{ minHeight: "13rem", border: "1px solid var(--border)", borderRadius: "0.5rem", overflow: "hidden" }}>
      <Sidebar collapsible="none" style={{ width: "10rem" }}>
        <SidebarHeader style={{ fontSize: "0.8rem", padding: "0.5rem" }}>메뉴</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem><SidebarMenuButton>대시보드</SidebarMenuButton></SidebarMenuItem>
              <SidebarMenuItem><SidebarMenuButton isActive>설정</SidebarMenuButton></SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset style={{ padding: "1rem", fontSize: "0.8rem" }}>본문 영역</SidebarInset>
    </SidebarProvider>
  ),
  skeleton:  => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: "12rem" }}>
      <Skeleton style={{ height: "1rem", width: "70%" }} />
      <Skeleton style={{ height: "1rem", width: "100%" }} />
      <Skeleton style={{ height: "1rem", width: "85%" }} />
    </div>
  ),
  slider:  => <Slider defaultValue={[40]} style={{ maxWidth: "12rem" }} />,
  sonner:  => (
    <div>
      <Button variant="outline" onClick={ => sonnerToast("저장됐어요")}>토스트 띄우기</Button>
      <SonnerToaster />
    </div>
  ),
  spinner:  => <Spinner style={{ width: "1.5rem", height: "1.5rem" }} />,
  switch:  => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Switch defaultChecked id="live-switch" /><Label htmlFor="live-switch">알림 받기</Label>
    </div>
  ),
  table:  => (
    <Table>
      <TableHeader><TableRow><TableHead>이름</TableHead><TableHead>상태</TableHead></TableRow></TableHeader>
      <TableBody>
        <TableRow><TableCell>주문 #1029</TableCell><TableCell>배송중</TableCell></TableRow>
        <TableRow><TableCell>주문 #1028</TableCell><TableCell>완료</TableCell></TableRow>
      </TableBody>
    </Table>
  ),
  tabs:  => (
    <Tabs defaultValue="a" style={{ maxWidth: "16rem" }}>
      <TabsList><TabsTrigger value="a">개요</TabsTrigger><TabsTrigger value="b">상세</TabsTrigger></TabsList>
      <TabsContent value="a">개요 내용이에요.</TabsContent>
      <TabsContent value="b">상세 내용이에요.</TabsContent>
    </Tabs>
  ),
  textarea:  => <Textarea placeholder="메시지를 입력하세요" style={{ maxWidth: "16rem" }} />,
  toast:  => (
    <div>
      <Button variant="outline" onClick={ => baseToast.add({ title: "저장됐어요" })}>토스트 보내기</Button>
      <BaseToaster />
    </div>
  ),
  "toggle-group":  => (
    <ToggleGroup defaultValue={["bold"]} variant="outline">
      <ToggleGroupItem value="bold">B</ToggleGroupItem>
      <ToggleGroupItem value="italic">I</ToggleGroupItem>
      <ToggleGroupItem value="underline">U</ToggleGroupItem>
    </ToggleGroup>
  ),
  toggle:  => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Toggle aria-label="굵게">B</Toggle>
      <Toggle aria-label="기울임" defaultPressed>I</Toggle>
    </div>
  ),
  tooltip:  => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">마우스를 올려보세요</Button>} />
        <TooltipContent>여기 도움말이 떠요</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export function ShadcnLive({ slug }: { slug: string; doc: ShadcnDoc }) {
  if (slug === "direction") {
    return (
      <p className="doc-note" style={{ marginTop: 0 }}>
        <code>DirectionProvider</code> 는 그리는 컴포넌트가 아니라 RTL/LTR 방향을 하위 트리에
        내려주는 <b>컨텍스트 공급자</b>예요.
        혼자 세우면 아무것도 안 보이는 게 정상이에요.
      </p>
    );
  }

  const Demo = DEMOS[slug];
  if (!Demo) {
    return (
      <p className="doc-note" style={{ marginTop: 0 }}>
        이 컴포넌트는 아직 라이브 조립을 못 만들었어요. 지어내지 않고 그대로 알립니다.
      </p>
    );
  }

  const why = NEEDS_INTERACTION[slug];

  return (
    <EmptyGuard slug={slug}>
      <p className="doc-note" style={{ marginTop: 0 }}>
        아래는 <b>설치된 실제 shadcn 컴포넌트</b>예요. 직접 그린 게 아니라{" "}
        <code>app/src/components/ui/</code> 의 실물을 그대로 세운 거예요.
        {why ? <> {why}</> : null}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "flex-start" }}>
        <Cell><Demo /></Cell>
      </div>
    </EmptyGuard>
  );
}
