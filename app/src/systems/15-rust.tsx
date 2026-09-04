import { Archive } from "lucide-react";
import { Button } from "../bases/standalone/Button";
import buttonCss from "./css/15-rust/button.json";
import { Dialog } from "../bases/standalone/Dialog";
import dialogCss from "./css/15-rust/dialog.json";
import { Toast } from "../bases/standalone/Toast";
import toastCss from "./css/15-rust/toast.json";
import { Colorpicker } from "../bases/standalone/Colorpicker";
import colorpickerCss from "./css/15-rust/colorpicker.json";
import { Ringcarousel } from "../bases/standalone/Ringcarousel";
import ringcarouselCss from "./css/15-rust/ringcarousel.json";
import type { ComponentImpl, ProviderProps, SystemDefinition } from "./types";
import vars from "./css/15-rust/_vars.json";
import refs from "../../../generated/15-rust/mapping.json";
import api from "../contract/15-rust/api.json";

// 베이스별 다른 props 한 곳에 보관
type Impl = ComponentImpl;

// 래퍼 불필요. 자체 베이스는 CSS만으로 렌더링되고 mode는 안 읽음
const Provider = ({ children }: ProviderProps) => <>{children}</>;

export const rust: SystemDefinition = {
  slug: "15-rust",
  name: "Rust",
  baseTitle: "자체 구현",
  baseKey: "standalone",
  tone: "적갈색 + 각진 형태 + 큰 타이포 비율. 아카이브·문서.",
  typeRatio: 1.333,
  brand: "#9e6954",
  Icon: Archive,
  css: [vars, buttonCss, dialogCss, toastCss, colorpickerCss, ringcarouselCss].join("\n"),
  vars,
  refs,
  api,
  Provider,
  impl: { button: Button as Impl, dialog: Dialog as Impl, toast: Toast as Impl, colorpicker: Colorpicker as Impl, ringcarousel: Ringcarousel as Impl },
  buttonVariants: ["solid", "subtle", "plain"],
  buttonTones: ["neutral", "brand", "danger", "success", "warning"],
  components: [
    { name: "button", title: "Button", summary: "사용자가 눌러 동작을 일으키는 컨트롤. variant 구성이 이 시스템의 elevation 성격에서 유래.", ready: true },
    { name: "link", title: "Link", summary: "이동하는 글자. 누르면 위치가 바뀌고, 뒤로 가기로 되돌아올 수 있음.", ready: false },
    { name: "input", title: "Input", summary: "한 줄 또는 여러 줄의 텍스트를 받는 폼 컨트롤. 해부 구조가 control 옵션에서 유래.", ready: false },
    { name: "label", title: "Label", summary: "컨트롤이 무엇을 받는 필드인지 알리는 이름. 자리표시자로 대신하지 않음.", ready: false },
    { name: "field", title: "Field", summary: "컨트롤 하나를 이름·설명·오류와 함께 묶는 컨테이너. 폼의 최소 단위임.", ready: false },
    { name: "select", title: "Select", summary: "접힌 목록에서 값 하나를 고르는 폼 컨트롤. 선택지가 적으면 Radio 사용.", ready: false },
    { name: "checkbox", title: "Checkbox", summary: "여러 개를 동시에 고르는 선택 컨트롤. 항목끼리 독립임. Radio(단일 선택)와 다른 컴포넌트임.", ready: false },
    { name: "radio", title: "Radio", summary: "여러 선택지 중 하나만 고르는 컨트롤. 같은 name 안에서 배타적임. Checkbox(다중 선택)와 다른 컴포넌트임.", ready: false },
    { name: "switch", title: "Switch", summary: "켜짐과 꺼짐을 즉시 전환하는 컨트롤. 핸들이 오른쪽인 상태가 켜짐임.", ready: false },
    { name: "badge", title: "Badge", summary: "짧은 상태나 분류를 나타내는 표시. 읽는 것이지 누르는 것이 아님.", ready: false },
    { name: "card", title: "Card", summary: "관련된 내용을 하나로 묶는 컨테이너. 읽는 것이고 결정을 받지 않음. 결정은 Dialog 의 몫임.", ready: false },
    { name: "dialog", title: "Dialog", summary: "흐름을 멈추고 결정을 받는 창. 확인 버튼은 항상 오른쪽이고, 버튼 그룹은 창의 아래쪽 끝에 붙음.", ready: true },
    { name: "alert", title: "Alert", summary: "화면에 머무르며 상태를 알리는 영역. 알릴 수 있는 종류가 이 시스템의 팔레트 구성에서 유래.", ready: false },
    { name: "toast", title: "Toast", summary: "떴다가 스스로 사라지는 알림. 놓쳐도 되는 것만 포함.", ready: true },
    { name: "tooltip", title: "Tooltip", summary: "가리켰을 때만 뜨는 짧은 덧말. 없어도 되는 말만 포함.", ready: false },
    { name: "spinner", title: "Spinner", summary: "끝을 모르는 기다림을 알리는 표시. 끝을 알면 Progress 사용.", ready: false },
    { name: "divider", title: "Divider", summary: "내용을 가르는 선. 뜻이 있는 선과 꾸미는 선을 구분해서 사용.", ready: false },
    { name: "accordion", title: "Accordion", summary: "눌러서 속을 펴는 그룹. 한 번에 하나만 펴야 한다면 Tabs 사용.", ready: false },
    { name: "alertdialog", title: "AlertDialog", summary: "되돌릴 수 없는 결정을 받는 창. 바깥을 눌러도 닫히지 않음.", ready: false },
    { name: "aspectratio", title: "AspectRatio", summary: "안에 무엇이 오든 비율을 지키는 컨테이너. 이미지가 오기 전에도 공간을 확보.", ready: false },
    { name: "attachment", title: "Attachment", summary: "대화에 딸려 온 파일 한 개. 아직 끝나지 않았을 수 있어 상태가 있음.", ready: false },
    { name: "avatar", title: "Avatar", summary: "사람이나 조직을 나타내는 작은 표시. 모서리가 이 시스템의 형태 기준에서 유래.", ready: false },
    { name: "banner", title: "Banner", summary: "화면에서 시선을 가장 먼저 끄는 큰 영역. 제목 크기가 이 시스템의 타이포 비율에서 유래.", ready: false },
    { name: "breadcrumb", title: "Breadcrumb", summary: "탐색 계층에서 지금 어디에 있는지와 어떻게 위로 올라가는지를 보여주는 경로.", ready: false },
    { name: "bubble", title: "Bubble", summary: "한 번에 한 말을 담는 컨테이너. 보내는 이·시각까지 필요하면 Message 임.", ready: false },
    { name: "calendar", title: "Calendar", summary: "날짜를 달력 모양으로 선택. 먼 날짜는 치는 편이 빠름.", ready: false },
    { name: "carousel", title: "Carousel", summary: "몇 개만 보이고 나머지는 밀어서 보는 줄. 다음 것이 있다는 사실을 버튼이 알림.", ready: false },
    { name: "chart", title: "Chart", summary: "수를 모양으로 읽게 하는 그림. 그리는 것은 라이브러리이고, 이 시스템의 몫은 색과 툴팁·라벨임.", ready: false },
    { name: "chip", title: "Chip", summary: "누르고 고르고 지울 수 있는 표시. 읽기만 하는 Badge 와 다른 컴포넌트임.", ready: false },
    { name: "collapsible", title: "Collapsible", summary: "단일 영역 접기, 펼치기. 여러 영역은 Accordion 사용", ready: false },
    { name: "colorpicker", title: "ColorPicker", summary: "색을 공간에서 집음. 담아 둔 것만 아래에 남음. 스와치는 쌓이는 위치이지 주어진 목록이 아님.", ready: true },
    { name: "combobox", title: "Combobox", summary: "쳐서 좁히며 고르는 필드. 항목이 열 개 남짓이면 Select 가 나음.", ready: false },
    { name: "command", title: "Command", summary: "쳐서 좁히고 골라 실행하는 요소. 이것만으로 기능을 제공하지 않음.", ready: false },
    { name: "contextmenu", title: "ContextMenu", summary: "오른쪽 눌러 여는 동작 목록. 여기에만 있는 동작은 없는 것과 같음.", ready: false },
    { name: "datatable", title: "DataTable", summary: "표에 정렬·거르기·고르기·쪽 넘김이 붙은 것. 기능이 없으면 그냥 Table 임.", ready: false },
    { name: "datepicker", title: "DatePicker", summary: "눌러서 달력을 띄워 고름. 루트 컴포넌트가 없는 조합임. Popover + Calendar.", ready: false },
    { name: "drawer", title: "Drawer", summary: "끌어서 여닫는 패널. 끌기가 조작 그 자체임. 잡을 위치가 보여야 함.", ready: false },
    { name: "empty", title: "Empty", summary: "보여줄 것이 없을 때의 화면. 왜 비었는지와 다음에 무엇을 할지를 함께 말함.", ready: false },
    { name: "hovercard", title: "HoverCard", summary: "hover 시 표시되는 미리보기. 터치 환경에서는 표시되지 않아 보조 정보만 사용", ready: false },
    { name: "inputgroup", title: "InputGroup", summary: "필드에 붙어 있는 부분을 한 상자로 통합. 테두리는 바깥 상자에만 표시.", ready: false },
    { name: "inputotp", title: "InputOTP", summary: "인증번호를 한 글자씩 필드를 나눠 받음. 보이는 필드는 표시이고 입력은 하나임.", ready: false },
    { name: "kbd", title: "Kbd", summary: "눌러야 하는 키를 글자로 보여 주는 표시. 버튼이 아니라 설명임.", ready: false },
    { name: "listrow", title: "ListRow", summary: "목록의 한 줄. 한 줄이 하나의 대상이며, 열끼리 견줘야 하면 Table 사용", ready: false },
    { name: "marker", title: "Marker", summary: "대화 사이에 끼는 한 줄. 누가 말한 것이 아니라 그 사이에 일어난 일을 알림.", ready: false },
    { name: "menu", title: "Menu", summary: "눌러서 펼치는 동작 목록. 고르는 것이 값이면 Select 사용", ready: false },
    { name: "menubar", title: "Menubar", summary: "늘 보이는 메뉴 막대. 동작이 아주 많은 편집기용임.", ready: false },
    { name: "message", title: "Message", summary: "대화 한 줄 전체. 누가 언제 말했는지까지 포함. 말만 담으면 Bubble 임.", ready: false },
    { name: "messagescroller", title: "MessageScroller", summary: "대화가 길어져도 스크롤 위치를 유지하는 컨테이너. 넘치는 것을 담는 ScrollArea 와 다름.", ready: false },
    { name: "meter", title: "Meter", summary: "임계값이 있는 측정치가 지금 어느 구간에 있는지 보여줌. Progress 와 다른 컴포넌트임.", ready: false },
    { name: "nativeselect", title: "NativeSelect", summary: "목록을 브라우저가 그리는 고르개. 항목을 꾸며야 하면 Select 임.", ready: false },
    { name: "navigationmenu", title: "NavigationMenu", summary: "위치를 옮기는 길잡이. 고르면 일이 일어나는 것은 Menu 임.", ready: false },
    { name: "pageheader", title: "PageHeader", summary: "화면 맨 위의 제목 구역. 동작이 주인공이면 Toolbar 사용", ready: false },
    { name: "pagination", title: "Pagination", summary: "긴 목록을 쪽으로 나눠 오가는 컨트롤. 쪽 번호는 저마다 주소를 가진 링크임.", ready: false },
    { name: "popover", title: "Popover", summary: "눌러서 뜨는 작은 창. 설명 한 줄이면 Tooltip, 고르면 닫히면 Menu 임.", ready: false },
    { name: "progress", title: "Progress", summary: "일이 얼마나 진행됐는지 보여주는 막대. 끝이 있는 작업에만 사용", ready: false },
    { name: "prose", title: "Prose", summary: "긴 글을 읽기 위한 조판. 한글 행간 기준은 측정 근거가 없는 경험칙임.", ready: false },
    { name: "questionnaire", title: "Questionnaire", summary: "한 번에 하나씩 묻는 폼. 전부 한 화면에 두면 Field 그룹임.", ready: false },
    { name: "resizable", title: "Resizable", summary: "두 위치의 경계를 사용자가 옮김. 핸들은 보이고 키보드로도 잡힘.", ready: false },
    { name: "ringcarousel", title: "RingCarousel", summary: "점성체처럼 붙었다 떨어지는 링. 버튼으로 넘기는 Carousel 과 다른 컴포넌트임.", ready: true },
    { name: "scrollarea", title: "ScrollArea", summary: "넘치는 내용을 자기 안에서 굴림. 막대를 숨기지 않고 얇게 만듦.", ready: false },
    { name: "segmented", title: "Segmented", summary: "붙어 있는 셀 중 하나만 고르는 띠. 내용이 바뀌면 Tabs 사용", ready: false },
    { name: "sheet", title: "Sheet", summary: "가장자리에서 밀려 나오는 패널. 끌어서 여닫는 것은 Drawer 임.", ready: false },
    { name: "sidebar", title: "Sidebar", summary: "옆에 늘 붙어 있는 길잡이. 접혀도 위치를 남기는 것이 시트와 다른 점임.", ready: false },
    { name: "skeleton", title: "Skeleton", summary: "내용이 오기 전 공간을 미리 확보하는 플레이스홀더.", ready: false },
    { name: "slider", title: "Slider", summary: "끌어서 범위 안의 값을 정하는 컨트롤. 읽기만 하면 Meter 사용", ready: false },
    { name: "stages", title: "Stages", summary: "여러 단계 중 지금 어디인지 보여주는 표시. 수량을 바꾸는 Stepper 와 다른 컴포넌트임.", ready: false },
    { name: "stat", title: "Stat", summary: "하나의 수치를 크게 보여주는 지표. 증감 색이 이 시스템의 팔레트 구성에서 옴.", ready: false },
    { name: "stepper", title: "Stepper", summary: "수를 한 칸씩 올리고 내리는 컨트롤. 테두리 구조는 이 시스템의 control 기준에서 유래", ready: false },
    { name: "table", title: "Table", summary: "행과 열로 데이터를 늘어놓는 표. 셀 여백은 이 시스템의 밀도 기준에서 유래", ready: false },
    { name: "tabs", title: "Tabs", summary: "같은 층위의 화면을 오가는 컨트롤. 활성 표시 방식은 이 시스템의 형태 기준에서 유래", ready: false },
    { name: "toggle", title: "Toggle", summary: "눌린 채로 있는 버튼. 하나를 켜고 끄는 용도. 여럿 중 고르는 것은 Segmented 사용", ready: false },
    { name: "toolbar", title: "Toolbar", summary: "자주 쓰는 동작을 한 줄에 모아 두는 띠. 버튼은 이 시스템의 Button 을 그대로 사용", ready: false },
  ],
};
