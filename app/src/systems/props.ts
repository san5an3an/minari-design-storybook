import type {
  ChangeEvent, ComponentType, FormEvent, ReactElement, ReactNode,
} from "react";

// 모든 컴포넌트 공통 prop
interface Common {
  className?: string;
  children?: ReactNode;
}

// 폼

export interface InputProps extends Common {
  // 라벨이 가리킬 id. Field 안에서 htmlFor와 짝으로 연결되어 있음
  id?: string;
  label?: ReactNode;
  help?: ReactNode;
  multiline?: boolean;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  "aria-invalid"?: boolean | "true" | "false";
}

// 이름 붙은 그룹, 항목 들여쓰기 표시
export interface SelectGroupSpec {
  label: string;
  // 값별 표시 이름 매핑
  items: Record<string, string>;
}

export interface SelectProps {
  size?: string;
  // {값: 보이는 이름} 형식. 값만 넘기면 트리거에 값이 그대로 노출
  items: Record<string, string>;
  // 그룹. 주어지면 이 값으로 목록 렌더링. items는 값-이름 변환표로만 사용
  groups?: ReadonlyArray<SelectGroupSpec>;
  // 잠글 값 목록. 선택 불가 항목은 잠그지 말고 제외
  disabledItems?: ReadonlyArray<string>;
  separators?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  "aria-invalid"?: boolean | "true" | "false";
  "aria-label"?: string;
  // 필드 이름. 접힌 상태 첫 항목 대체 금지
  label?: ReactNode;
  // 필드 아래 보조 설명, 선택 항목 안내
  description?: ReactNode;
  // 선택 항목을 트리거에 겹쳐 띄울지 여부. 기본값 true
  alignItemWithTrigger?: boolean;
}

export interface CheckboxProps extends Common {
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  "aria-invalid"?: boolean | "true" | "false";
  // 라벨 아래 설명 문구. 선택 시 벌어지는 일 안내
  description?: ReactNode;
}
export type CheckboxImpl = ComponentType<CheckboxProps> & {
  Group: ComponentType<Common>;
};

export interface RadioProps extends Common {
  id?: string;
  value: string;
  disabled?: boolean;
  "aria-invalid"?: boolean | "true" | "false";
  // 라벨 아래 설명 문구. 선택 시 벌어지는 일 안내
  description?: ReactNode;
}
export type RadioImpl = ComponentType<RadioProps> & {
  // 라디오는 그룹으로 묶어야 의미 형성
  Group: ComponentType<
    Common & { value?: string; defaultValue?: string; onValueChange?: (v: string) => void }
  >;
};

export interface SwitchProps extends Common {
  id?: string;
  size?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  "aria-label"?: string;
  "aria-invalid"?: boolean | "true" | "false";
  // 켤 때 동작 설명 영역
  description?: ReactNode;
}
export type SwitchImpl = ComponentType<SwitchProps> & {
  // 카드 전체 클릭 영역 지정
  Card: ComponentType<
    SwitchProps & { title?: ReactNode; description?: ReactNode }
  >;
};

// 표시

export interface BadgeProps extends Common {
  variant?: string;
  tone?: string;
  // 표시. 텍스트 대체 아님. 그림만 있는 배지는 읽을 수 없음
  icon?: ReactNode;
  // 표시 위치. 기본 앞쪽, 텍스트 우선 시 뒤쪽
  iconPosition?: "inline-start" | "inline-end";
}

export interface RingcarouselItem {
  id: string;
  label: string;
}
export interface RingcarouselProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  items: readonly RingcarouselItem[];
}

// 담아 둔 색 하나. value 가 곧 선택값이며 토큰이 아니라 데이터임
export interface ColorPickerSwatch {
  value: string;
  label: string;
}
export interface ColorPickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onChange" | "defaultValue"> {
  // 초기 색 목록, 추가 색 포함 최대 16개
  swatches?: readonly ColorPickerSwatch[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  // 자유색 펼침 허용 여부
  allowCustom?: boolean;
}

export interface CardProps extends Common {
  interactive?: boolean;
  title?: ReactNode;
  // 제목 아래 한 줄, CardDescription 대응
  description?: ReactNode;
  // 헤더 오른쪽 액션. CardAction이 위치 지정
  action?: ReactNode;
  // 하단 영역, CardFooter
  footer?: ReactNode;
}

export interface AlertProps extends Common {
  tone?: string;
  title?: ReactNode;
  // 종류 표시 여부
  icon?: boolean;
  action?: ReactNode;
  closable?: boolean;
}

export interface ToastProps extends Common {
  title?: ReactNode;
  description?: ReactNode;
  type?: string;
}
export type ToastImpl = ComponentType<ToastProps> & {
  // 토스트 표시 위치, 화면당 한 번만 배치. 중복 배치 시 토스트 중복 표시 문제 있음
  Region: ComponentType;
  // 토스트 실제 표시, toast.add 직접 호출하기
  show: (opts: {
    title?: string;
    description?: string;
    type?: string;
    // 동작 버튼. 하위 Button props를 그대로 전달받기
    actionProps?: { children?: ReactNode; onClick?:  => void };
  }) => void;
};

export interface TooltipProps {
  // 툴팁이 부착되는 대상. 단독으로 존재할 수 없음
  children: ReactNode;
  content: ReactNode;
  // 띄우는 방향. 대상이 화면 가장자리에 붙으면 자동 전환
  side?: "top" | "right" | "bottom" | "left";
}

export interface SpinnerProps {
  onFill?: boolean;
  label?: ReactNode;
}

export interface DividerProps {
  strong?: boolean;
  inset?: boolean;
  vertical?: boolean;
  // 가운데 글자 삽입 시 선이 둘로 분리
  label?: ReactNode;
}

export interface LinkProps extends Common {
  href?: string;
  external?: boolean;
}

// 탐색

export interface TabsProps {
  items: ReadonlyArray<{
    value: string;
    label: ReactNode;
    content?: ReactNode;
    // 일시 비활성화 처리. 영구 제외 항목은 목록에서 삭제
    disabled?: boolean;
    // 앞머리 표시, 텍스트 대체 아님, 한 행 내 전부 표시 또는 제외
    icon?: ReactNode;
  }>;
  defaultValue?: string;
  // 활성 표시 방식, 기본값은 디자인 시스템 형태 기준이 지정
  variant?: string;
  // 탭 배치 방향
  orientation?: "horizontal" | "vertical";
}

export interface BreadcrumbProps {
  // 마지막 셀은 현재 위치, 링크 아닌 텍스트로 표시
  items: ReadonlyArray<{ label: ReactNode; href?: string; ellipsis?: boolean }>;
  // 셀 사이 구분자, 기본값은 꺾쇠임
  separator?: ReactNode;
}

export interface MenuProps {
  trigger: ReactNode;
  // ContextMenu, Menubar 와 동일한 형태, ActionItemSpec 사용
  items: ReadonlyArray<ActionItemSpec>;
  // 표시 위치. DropdownMenuContent prop 그대로임
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  minWidth?: string;
}

export interface PaginationProps {
  page: number;
  total: number;
  onPage?: (page: number) => void;
}

export interface AccordionProps {
  items: ReadonlyArray<{ value: string; title: ReactNode; body: ReactNode }>;
  // 동시 다중 펼침 허용 여부
  multiple?: boolean;
  defaultValue?: string[];
}

// 기타 signature

export interface ProgressProps {
  // 0~100 진행률. 끝 모르면 indeterminate 사용
  value?: number;
  lg?: boolean;
  indeterminate?: boolean;
  label?: ReactNode;
  showValue?: boolean;
}

export interface PageHeaderProps extends Common {
  title: ReactNode;
  lede?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
}

export interface BannerProps extends Common {
  soft?: boolean;
  title?: ReactNode;
  actions?: ReactNode;
}

export interface StepperProps {
  value: number;
  min?: number;
  max?: number;
  onValueChange?: (value: number) => void;
  "aria-label"?: string;
}

export interface ListRowProps extends Common {
  interactive?: boolean;
  lead?: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  trail?: ReactNode;
  // 줄 위 ItemHeader 영역
  header?: ReactNode;
  // 줄 아래 ItemFooter 영역
  footer?: ReactNode;
}
export type ListRowImpl = ComponentType<ListRowProps> & {
  // 줄은 목록 안에서만 의미가 있음. 개별로는 단순 카드임
  List: ComponentType<Common>;
};

export interface StagesProps {
  items: ReadonlyArray<{ label: ReactNode }>;
  // 현재 인덱스, 0부터 시작. 이전은 완료, 이후는 미완료
  current: number;
}

export interface LabelProps extends Common {
  // 반드시 채워야 하는 필드
  required?: boolean;
  // 셀 잠기면 이름도 흐려지게 표시
  disabled?: boolean;
  // 이름 옆 보조 문구, 선택 입력 여부 표시
  hint?: ReactNode;
  "aria-invalid"?: boolean | "true" | "false";
  htmlFor?: string;
}

export interface FieldProps extends Common {
  // 배치 방향값을 그대로 재사용
  orientation?: "vertical" | "horizontal" | "responsive";
  // 필드 이름
  label?: ReactNode;
  // 라벨이 가리킬 컨트롤 id. 없으면 라벨을 눌러도 포커스가 잡히지 않음
  htmlFor?: string;
  // 필드 아래 보조 설명
  description?: ReactNode;
  // 오류 문구 있으면 설명 위치를 대신 사용
  error?: ReactNode;
  disabled?: boolean;
}

export type FieldImpl = ComponentType<FieldProps> & {
  Group: ComponentType<Common>;
  // 관련 필드 그룹. fieldset과 legend 사용해야 보조기술에 그룹 정보가 전달되는 구조임
  Set: ComponentType<Common & { legend?: ReactNode; description?: ReactNode }>;
  // 그룹 사이 구분선 표시. 글자 지정 시 가운데 정렬
  Separator: ComponentType<{ children?: ReactNode }>;
  // 라벨과 설명을 묶는 영역 FieldContent
  Content: ComponentType<Common>;
  // 선택 그룹 제목, FieldTitle 대응값
  Title: ComponentType<Common>;
  // 라벨, 대응 FieldLabel
  Label: ComponentType<Common & { htmlFor?: string }>;
  Description: ComponentType<Common>;
  Error: ComponentType<Common>;
};

export interface KbdProps extends Common {}
export type KbdImpl = ComponentType<KbdProps> & {
  // 조합키 그룹, 키마다 kbd 하나씩
  Group: ComponentType<Common & { keys?: string[] }>;
};

export interface ToggleProps extends Common {
  variant?: string;
  size?: string;
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
}

export interface InputgroupProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  // 왼쪽에 붙는 요소
  prefix?: ReactNode;
  // 오른쪽에 붙는 요소
  suffix?: ReactNode;
  // 여러 줄 입력은 InputGroupTextarea 사용
  multiline?: boolean;
  // 상단 한 줄 요소, 여러 줄 입력 전용
  blockStart?: ReactNode;
  // 하단에 한 줄로 붙는 요소
  blockEnd?: ReactNode;
  className?: string;
}
export type InputgroupImpl = ComponentType<InputgroupProps> & {
  Text: ComponentType<Common>;
  // InputGroupButton은 Button의 variant, size 그대로 상속받기
  Button: ComponentType<React.ComponentProps<"button"> & {
    variant?: string;
    size?: string;
    "aria-label"?: string;
  }>;
};

export interface InputotpProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "defaultValue"> {
  // 자릿수
  length?: number;
  // 몇 개 단위로 그룹화
  groupSize?: number;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export interface AspectratioProps extends Common {
  // 영역의 가로세로 비, 이름 문자열 또는 16/9 형식의 숫자
  ratio?: string | number;
  style?: React.CSSProperties;
}

export interface ScrollareaProps extends Common {
  // 스크롤 방향. ScrollBar의 prop임
  orientation?: string;
  style?: React.CSSProperties;
}

export interface CollapsibleProps extends Common {
  // 펼침 상태, 값 전달 시 제어 컴포넌트 전환, onOpenChange와 짝 이루기
  open?: boolean;
  // 초기 펼쳐진 상태. 비제어 시 기본값으로 사용
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  // 클릭 무반응 상태
  disabled?: boolean;
}

// 여는 버튼, render로 교체 가능
export interface CollapsibleTriggerProps extends Common {
  // 이 요소로 변경
  render?: ReactElement;
}

// 펼쳐지는 내용, Collapsible.Panel
export interface CollapsibleContentProps extends Common {}

export type CollapsibleImpl = ComponentType<CollapsibleProps> & {
  Trigger: ComponentType<CollapsibleTriggerProps>;
  Content: ComponentType<CollapsibleContentProps>;
};

export interface ResizableProps extends Common {
  orientation?: string;
  // 첫 패널 차지 비율(%), 패널별 prop으로 전달
  defaultSize?: number;
  // 핸들 눈금 표시. 경계선은 값과 무관하게 항상 표시
  withHandle?: boolean;
  start?: ReactNode;
  end?: ReactNode;
  style?: React.CSSProperties;
}

// components/ui/ 공식 파일 래핑, prop 이름과 값 형태는 원본 그대로 유지

// 사람 아바타 위치, 사진 없거나 로드 실패 시 fallback 표시
export interface AvatarProps extends Common {
  size?: string;
  src?: string;
  alt?: string;
  // 사진 없을 때 대체 표시, 보통 이름 첫 글자 사용
  fallback?: ReactNode;
}
export type AvatarImpl = ComponentType<AvatarProps> & {
  // 여러 항목 겹쳐 놓는 위치
  Group: ComponentType<Common>;
  // 겹친 항목 뒤에 붙는 +N 표시
  GroupCount: ComponentType<Common>;
  // 우하단 상태 배지
  Badge: ComponentType<Common>;
};

// 표시 위치를 미리 확보. 크기는 className, style로 지정
export interface SkeletonProps extends Common {
  style?: React.CSSProperties;
}

// 범위 내 값 지정. value는 숫자 또는 숫자 배열
export interface SliderProps {
  value?: number | readonly number[];
  defaultValue?: number | readonly number[];
  // 배열은 readonly 타입 유지. 타입 좁히면 안 되는 제약임
  onValueChange?: (value: number | readonly number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  className?: string;
}

export interface TableProps extends Common {}
export type TableImpl = ComponentType<TableProps> & {
  Header: ComponentType<Common>;
  Body: ComponentType<Common>;
  Footer: ComponentType<Common>;
  Row: ComponentType<Common>;
  // 열 이름 필드, th 요소 사용
  Head: ComponentType<Common>;
  Cell: ComponentType<Common>;
  // 표 설명 한 문장, 아래에 위치
  Caption: ComponentType<Common>;
};

// 빈 상태 표시, 빈 이유와 다음 행동 함께 안내하기
export interface EmptyProps extends Common {}
export type EmptyImpl = ComponentType<EmptyProps> & {
  Header: ComponentType<Common>;
  // 표시 위치. variant가 icon이면 상자 자동 렌더링
  Media: ComponentType<Common & { variant?: string }>;
  Title: ComponentType<Common>;
  Description: ComponentType<Common>;
  // 다음 동작 위치
  Content: ComponentType<Common>;
};

// 관련 동작을 ButtonGroup으로 그룹화
export interface ToolbarProps extends Common {
  orientation?: "horizontal" | "vertical";
}
export type ToolbarImpl = ComponentType<ToolbarProps> & {
  // 버튼 사이 단위, 접두어 텍스트
  Text: ComponentType<Common>;
  Separator: ComponentType<{ orientation?: "horizontal" | "vertical" }>;
};

export interface SegmentedProps extends Common {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  // 다중 선택 가능 여부, 기본값 false
  multiple?: boolean;
  variant?: string;
  size?: string;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
}
export type SegmentedImpl = ComponentType<SegmentedProps> & {
  Item: ComponentType<Common & { value: string; disabled?: boolean }>;
};

// 긴 글 배경 컨테이너, 태그 유지한 채 간격만 지정
export interface ProseProps extends Common {}

// 겹쳐 뜨는 요소 4종. 정지 대상으로 구분, Popover는 배경 동작 유지

export interface PopoverProps extends Common {
  // 여는 트리거 위치, 클릭 가능 요소만 사용
  trigger?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// 업로드만 해도 표시되는 미리보기, 필수 확인 항목은 제외
export interface HovercardProps extends Common {
  trigger?: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

// 바깥 클릭으로 닫기 비활성화
export interface AlertdialogProps extends Common {
  trigger?: ReactNode;
  variant?: "default" | "destructive";
  // 창 크기, 공식 AlertDialogContent size 값 그대로 사용
  size?: "default" | "sm";
  title?: ReactNode;
  description?: ReactNode;
  // 성격 표시 배지. AlertDialogMedia가 위치 차지
  media?: ReactNode;
  // 물러나는 측 글자, 동작 그대로 표시
  cancelLabel?: ReactNode;
  // 되돌릴 수 없는 쪽의 글자
  actionLabel?: ReactNode;
  onAction?:  => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface SheetProps extends Common {
  trigger?: ReactNode;
  // 나오는 변, 왼쪽은 길잡이용, 오른쪽은 보조용으로 지정
  side?: "top" | "right" | "bottom" | "left";
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// 드래그 여닫기 패널, 잡을 위치 표시
export interface DrawerProps extends Common {
  trigger?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// 동작 선택 컴포넌트 5종 분류. 여는 방식과 선택 후 결과로 구분하기

export interface ActionItemSpec {
  label?: ReactNode;
  onSelect?:  => void;
  // 단축키 같은 보조 정보
  hint?: string;
  danger?: boolean;
  separator?: boolean;
  heading?: ReactNode;
  // 라벨 없이 관련 항목끼리만 그룹 표시
  group?: ReadonlyArray<ActionItemSpec>;
  // 하위 메뉴 있으면 항목 옆으로 펼치기
  items?: ReadonlyArray<ActionItemSpec>;
  // 켜고 끄는 항목, *CheckboxItem 패턴
  checked?: boolean;
  // 단일 선택, RadioGroup + RadioItem 조합
  radio?: {
    value?: string;
    items: ReadonlyArray<{ value: string; label: ReactNode }>;
  };
}

// 우클릭 메뉴에 노출할 동작 목록. 여기 없는 동작은 없는 것과 동일한 취급임
export interface ContextmenuProps extends Common {
  // 오른쪽 클릭 대상
  trigger?: ReactNode;
  items: ReadonlyArray<ActionItemSpec>;
}

// 동작 많을 때만 메뉴 막대 상시 노출
export interface MenubarProps extends Common {
  menus: ReadonlyArray<{ label: ReactNode; items: ReadonlyArray<ActionItemSpec> }>;
}

// 위치 이동 가이드, 현재 위치 항상 표시
export interface NavigationmenuProps extends Common {
  // NavigationMenuIndicator 참고, 선택 항목 아래 미끄럼 표시 적용
  indicator?: boolean;
  items: ReadonlyArray<{
    label: ReactNode;
    href?: string;
    // 현재 위치를 색상 외 요소로도 표시
    current?: boolean;
    // 펼쳐지는 영역, 링크는 최소로 유지
    content?: ReactNode;
  }>;
}

// 입력해서 좁혀 실행하는 위치 지정
export interface CommandProps extends Common {
  placeholder?: string;
  groups: ReadonlyArray<{
    heading?: ReactNode;
    items: ReadonlyArray<{ label: ReactNode; hint?: string }>;
  }>;
  // CommandSeparator로 그룹 사이 구분선 표시
  separators?: boolean;
  // 매칭 없음 상태. 빈 값으로 두지 않음
  empty?: ReactNode;
}

// 입력해서 좁혀 값 선택하는 필드. 목록은 함수형 children 사용
export interface ComboboxProps extends Common {
  items: ReadonlyArray<string>;
  // ComboboxGroup+ComboboxLabel+ComboboxCollection 표시
  groups?: ReadonlyArray<{ label: ReactNode; items: ReadonlyArray<string> }>;
  placeholder?: string;
  // 다중 선택, 선택 항목은 입력 필드 안에 유지
  multiple?: boolean;
  empty?: ReactNode;
}

// DatePicker, DataTable 등 공식 비인정 조합 컴포넌트 포함하기

// 달력 UI로 날짜 선택 지정
export interface CalendarProps extends Common {
  // 그대로 사용하는 이름. 단일, 다중, 범위
  mode?: "single" | "multiple" | "range";
  selected?: unknown;
  onSelect?: (value: never) => void;
  // 월 이름 문자 표시 여부
  captionLayout?: "label" | "dropdown" | "dropdown-months" | "dropdown-years";
  startMonth?: Date;
  endMonth?: Date;
  // 연도 목록 최신순 정렬. 9.9.0부터 원본 이름 유지
  reverseYears?: boolean;
}

// 누르면 달력 띄워 선택. 루트 컴포넌트 없는 조합임
export interface DatepickerProps extends Common {
  // 선택한 날짜, 트리거에 그대로 표시
  value?: Date;
  onValueChange?: (date: Date | undefined) => void;
  // 미선택 상태 안내 문구
  placeholder?: string;
}

export interface DatatableProps extends Common {
  columns: ReadonlyArray<{
    key: string;
    header: string;
    // 수치 필드를 오른쪽으로, 자릿수 맞춰 정렬
    numeric?: boolean;
  }>;
  rows: ReadonlyArray<Record<string, string | number>>;
  // 필터 대상 열, 지정하면 툴바에 필드 표시
  filterKey?: string;
  filterPlaceholder?: string;
  // 페이지당 행 수. 지정하면 페이지네이션 추가
  pageSize?: number;
}

// 텍스트 흐름 방향을 정하는 래퍼. 자체 렌더링 없음
export interface DirectionProps extends Common {
  dir?: "ltr" | "rtl";
}

// 옆에 항상 붙는 안내 요소, 접혀도 위치 유지
export interface SidebarProps extends Common {
  // 그룹이 하나뿐일 때의 간편 옵션. 그룹이 여럿이면 groups 사용
  items?: ReadonlyArray<{
    label: ReactNode;
    icon?: ReactNode;
    active?: boolean;
    href?: string;
    onSelect?:  => void;
    // 줄 오른쪽 SidebarMenuAction 영역
    action?: ReactNode;
    // 클릭 시 열리는 드롭다운 목록
    actionItems?: ReadonlyArray<ActionItemSpec>;
    // 마우스 오버 시에만 표시, showOnHover
    actionOnHover?: boolean;
    // 목록 여는 더보기류 항목 흐림 처리
    muted?: boolean;
    // 개수 표시용 작은 배지, SidebarMenuBadge
    badge?: ReactNode;
    // 하위 항목. SidebarMenuSub 컴포넌트
    items?: ReadonlyArray<{ label: ReactNode; href?: string; active?: boolean }>;
  }>;
  // 그룹 여러 개 지정. 주어지면 items, groupLabel 대신 이것으로 렌더링
  groups?: ReadonlyArray<{
    label?: ReactNode;
    action?: ReactNode;
    items: NonNullable<SidebarProps["items"]>;
    // 접히면 그룹 전체 숨김. 아이콘만 남는 폭에서는 목록형 그룹을 표시할 수 없음
    hideWhenCollapsed?: boolean;
  }>;
  header?: ReactNode;
  footer?: ReactNode;
  groupLabel?: ReactNode;
  // 그룹 라벨 옆 동작 버튼 렌더링. SidebarGroupAction 사용
  groupAction?: ReactNode;
  showTrigger?: boolean;
  // 외부 제어용 열기/닫기 상태. Provider가 받는 이름 그대로임
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  // 접힘 방식 지정, icon 이면 아이콘만 유지
  collapsible?: "offcanvas" | "icon" | "none";
  side?: "left" | "right";
  defaultOpen?: boolean;
}

// 머리, 바닥 하위 컴포넌트 그대로 노출
export type SidebarImpl = ComponentType<SidebarProps> & {
  Menu: ComponentType<Common>;
  MenuItem: ComponentType<Common>;
  MenuButton: ComponentType<Common & {
    size?: "default" | "sm" | "lg";
    isActive?: boolean;
    tooltip?: string;
    render?: ReactNode;
  }>;
  MenuBadge: ComponentType<Common>;
  MenuAction: ComponentType<Common>;
  MenuSub: ComponentType<Common>;
  MenuSubItem: ComponentType<Common>;
  MenuSubButton: ComponentType<Common & { isActive?: boolean; render?: ReactNode }>;
  Trigger: ComponentType<Record<string, never>>;
};

// 대화 화면 다섯은 서로 맞물려 동작. 이름이 비슷해도 병합 금지

export interface BubbleProps extends Common {
  variant?: string;
  // 붙는 위치로 발신자 표시. 색만으로는 구분이 어려워 필수임
  align?: "start" | "end";
}
export type BubbleImpl = ComponentType<BubbleProps> & {
  // 텍스트 자체, 링크나 버튼으로 대체 가능
  Content: ComponentType<Common & { render?: ReactNode }>;
  Reactions: ComponentType<Common & {
    side?: "top" | "bottom";
    align?: "start" | "end";
    role?: string;
    "aria-label"?: string;
  }>;
  // 같은 화자의 연속 발화 그룹화
  Group: ComponentType<Common>;
};

// 대화 한 행 전체. 말풍선에 얼굴, 이름, 시각 포함
export interface MessageProps extends Common {
  align?: "start" | "end";
}
export type MessageImpl = ComponentType<MessageProps> & {
  Group: ComponentType<Common>;
  // 아바타 위치, 말풍선 아래쪽에 정렬
  Avatar: ComponentType<Common>;
  Content: ComponentType<Common>;
  // 이름, 시각을 align과 무관하게 시작 쪽에 고정
  Header: ComponentType<Common>;
  // 상태, 동작. 말풍선 쪽에 고정
  Footer: ComponentType<Common>;
};

export type MessagescrollerImpl = ComponentType<Common> & {
  Provider: ComponentType<Common & {
    // 맨 아래 위치일 때만 자동 스크롤 따라가기
    autoScroll?: boolean;
    defaultScrollPosition?: "start" | "end" | "last-anchor";
    scrollEdgeThreshold?: number;
    scrollMargin?: number;
    scrollPreviousItemPeek?: number;
  }>;
  // 위쪽 항목 추가 시 보던 위치 고정. 기본값 true
  Viewport: ComponentType<Common & { preserveScrollOnPrepend?: boolean }>;
  Content: ComponentType<Common>;
  Item: ComponentType<Common & {
    messageId?: string;
    scrollAnchor?: boolean;
  }>;
  // 이동 대상 없으면 자동 숨김 처리
  Button: ComponentType<Common & {
    direction?: "start" | "end";
    behavior?: ScrollBehavior;
    render?: ReactNode;
  }>;
};

// 대화에 딸려 온 파일 한 개. 완료되지 않았을 수 있어 상태 값이 있음
export interface AttachmentProps extends Common {
  style?: React.CSSProperties;
  state?: "idle" | "uploading" | "processing" | "error" | "done";
  size?: "default" | "sm" | "xs";
  orientation?: "horizontal" | "vertical";
}
export type AttachmentImpl = ComponentType<AttachmentProps> & {
  Media: ComponentType<Common & { variant?: "icon" | "image" }>;
  Content: ComponentType<Common>;
  // 파일 이름. 업로드나 처리 중에는 반짝임 효과 표시
  Title: ComponentType<Common>;
  Description: ComponentType<Common>;
  Actions: ComponentType<Common>;
  // 동작 버튼 하나. 하위 Button을 그대로 렌더링하며 props 전달
  Action: ComponentType<Common & {
    size?: string;
    variant?: string;
    "aria-label"?: string;
    onClick?:  => void;
  }>;
  // 카드 전체 클릭 영역 지정
  Trigger: ComponentType<Common & { render?: ReactNode; "aria-label"?: string }>;
  // 여러 항목 가로 배치, 슬라이드로 넘기기
  Group: ComponentType<Common>;
};

// 대화 사이 이벤트 행
export interface MarkerProps extends Common {
  variant?: "default" | "border" | "separator";
  render?: ReactNode;
  // 진행 알림 시 status 값 지정. 없으면 스크린리더 사용자에게 전달되지 않음
  role?: string;
}
// 라이브러리가 내보내는 markerVariants는 여기서 내보내지 않음
export type MarkerImpl = ComponentType<MarkerProps> & {
  // 표시. 스크린리더가 읽지 않음. 같은 의미가 텍스트에도 있어야 하는 제약임
  Icon: ComponentType<Common>;
  Content: ComponentType<Common>;
};

// 고르개, 그림, 긴 폼

// 브라우저 네이티브 선택 요소, Select와 다른 컴포넌트
export interface NativeselectProps extends Common {
  id?: string;
  name?: string;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  "aria-invalid"?: boolean | "true" | "false";
  "aria-label"?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}
export type NativeselectImpl = ComponentType<NativeselectProps> & {
  // 안내 문구로 쓸 항목은 value 비우기
  Option: ComponentType<Common & { value?: string; disabled?: boolean }>;
  // 항목 그룹. 구분선 없이 이름 자체가 경계 역할
  OptGroup: ComponentType<Common & { label?: string; disabled?: boolean }>;
};

export interface CarouselProps extends Common {
  orientation?: "horizontal" | "vertical";
  // Embla 옵션 설정, 라이브러리 문서 명칭 그대로 사용
  opts?: Record<string, unknown>;
  // 외부 제어용 핸들
  setApi?: (api: unknown) => void;
}
export type CarouselImpl = ComponentType<CarouselProps> & {
  Content: ComponentType<Common>;
  // 셀 하나, 순서를 aria-label로 표시
  Item: ComponentType<Common & { "aria-label"?: string }>;
  // 앞 요소 없으면 비활성 처리
  Previous: ComponentType<Common>;
  Next: ComponentType<Common>;
};

// 계열 하나의 설정값. 표시 이름과 색
export interface ChartSeriesSpec {
  label?: ReactNode;
  // 컴포넌트 토큰을 --color-{키}로 반영하는 색상 설정
  color?: string;
  icon?: ComponentType;
}

export interface ChartProps extends Common {
  config: Record<string, ChartSeriesSpec>;
}
export type ChartImpl = ComponentType<ChartProps> & {
  // 툴팁 위치 지정. content에 TooltipContent 전달
  Tooltip: ComponentType<Record<string, unknown>>;
  TooltipContent: ComponentType<Record<string, unknown>>;
  Legend: ComponentType<Record<string, unknown>>;
  LegendContent: ComponentType<Record<string, unknown>>;
  // 계열 색을 CSS 변수로 지정. 그림과 라벨을 떨어뜨려 배치할 때만 추가 지정 필요
  Style: ComponentType<{ id: string; config: Record<string, ChartSeriesSpec> }>;
};

// 서버에서 진행도, 이동, 단축키 프리렌더용 질문 목록
export interface QuestionnaireItemSpec {
  name: string;
  required?: boolean;
  disabled?: boolean;
  choices?: ReadonlyArray<{ value: string; disabled?: boolean }>;
}

export interface QuestionnaireProps extends Common {
  // 질문 목록. 지정하면 진행도, 이동, 단축키가 처음부터 맞음
  items?: ReadonlyArray<QuestionnaireItemSpec>;
  item?: string;
  defaultItem?: string;
  onItemChange?: (item: string) => void;
  // 답에 붙는 단축키. 글자 또는 숫자
  shortcuts?: "letters" | "numbers";
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}
export type QuestionnaireImpl = ComponentType<QuestionnaireProps> & {
  // 현재 순서 항상 표시. 남은 개수 모르면 중도 이탈 발생
  Progress: ComponentType<Common>;
  Item: ComponentType<Common & {
    name: string;
    required?: boolean;
    multiple?: boolean;
    disabled?: boolean;
    invalid?: boolean;
  }>;
  // 질문 텍스트, legend로 표시
  Title: ComponentType<Common>;
  Description: ComponentType<Common>;
  Choices: ComponentType<Common>;
  // 정답 단일 선택. label로 렌더링되어 행 전체가 클릭 영역임
  Choice: ComponentType<Common & {
    value: string;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
  }>;
  ChoiceDescription: ComponentType<Common>;
  // 자유 서술형 답. name은 상위 Item이 지정
  Input: ComponentType<Common & {
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    "aria-label"?: string;
  }>;
  // 값이 유효하지 않을 때만 오류 메시지 표시. 수정하면 즉시 숨김 처리
  Error: ComponentType<Common>;
  Actions: ComponentType<Common>;
  Previous: ComponentType<Common>;
  // 건너뛸 수 있는 질문에서만 노출, 버튼 유무가 필수 여부 표시임
  Skip: ComponentType<Common>;
  Next: ComponentType<Common>;
  Submit: ComponentType<Common>;
};
