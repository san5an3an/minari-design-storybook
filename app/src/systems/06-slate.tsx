import { Table2 } from "lucide-react";
import { Button } from "../bases/antd/Button";
import { Link } from "../bases/antd/Link";
import { Input } from "../bases/antd/Input";
import { Select } from "../bases/antd/Select";
import { Checkbox } from "../bases/antd/Checkbox";
import { Radio } from "../bases/antd/Radio";
import { Switch } from "../bases/antd/Switch";
import { Badge } from "../bases/antd/Badge";
import { Card } from "../bases/antd/Card";
import { Dialog } from "../bases/antd/Dialog";
import { Alert } from "../bases/antd/Alert";
import { Toast } from "../bases/antd/Toast";
import { Tooltip } from "../bases/antd/Tooltip";
import { Spinner } from "../bases/antd/Spinner";
import { Divider } from "../bases/antd/Divider";
import { Accordion } from "../bases/antd/Accordion";
import { Alertdialog } from "../bases/antd/Alertdialog";
import { Avatar } from "../bases/antd/Avatar";
import { Breadcrumb } from "../bases/antd/Breadcrumb";
import { Calendar } from "../bases/antd/Calendar";
import { Combobox } from "../bases/antd/Combobox";
import { Contextmenu } from "../bases/antd/Contextmenu";
import { Datepicker } from "../bases/antd/Datepicker";
import { Drawer } from "../bases/antd/Drawer";
import { Hovercard } from "../bases/antd/Hovercard";
import { Inputgroup } from "../bases/antd/Inputgroup";
import { Inputotp } from "../bases/antd/Inputotp";
import { Listrow } from "../bases/antd/Listrow";
import { Menu } from "../bases/antd/Menu";
import { Menubar } from "../bases/antd/Menubar";
import { Navigationmenu } from "../bases/antd/Navigationmenu";
import { Pagination } from "../bases/antd/Pagination";
import { Popover } from "../bases/antd/Popover";
import { Progress } from "../bases/antd/Progress";
import { Prose } from "../bases/antd/Prose";
import { Resizable } from "../bases/antd/Resizable";
import { Sheet } from "../bases/antd/Sheet";
import { Skeleton } from "../bases/antd/Skeleton";
import { Slider } from "../bases/antd/Slider";
import { Stages } from "../bases/antd/Stages";
import { Stepper } from "../bases/antd/Stepper";
import { Tabs } from "../bases/antd/Tabs";
import { ConfigProvider } from "antd";
import { AntdStyleLayer } from "../bases/antdStyleLayer";
import { ANTD_BUTTON_CONFIG } from "../bases/antdButtonConfig";
import { byMode } from "../../../generated/06-slate/base/antd/theme";
import type { ComponentImpl, ProviderProps, SystemDefinition } from "./types";
import vars from "../../../generated/06-slate/vars.css?raw";
import refs from "../../../generated/06-slate/mapping.json";
import api from "../contract/06-slate/api.json";

// 베이스별 다른 props 한 곳에 보관
type Impl = ComponentImpl;

const Provider = ({ mode, children }: ProviderProps) => (
  <AntdStyleLayer>
    <ConfigProvider theme={byMode[mode]} button={ANTD_BUTTON_CONFIG}>{children}</ConfigProvider>
  </AntdStyleLayer>
);

export const slate: SystemDefinition = {
  slug: "06-slate",
  name: "Slate",
  baseTitle: "Ant Design",
  baseKey: "antd",
  tone: "고밀도 데이터 UI. 좁은 간격, 얇은 테두리, 낮은 채도.",
  typeRatio: 1.2,
  brand: "#14233c",
  Icon: Table2,
  css: vars,
  vars,
  refs,
  api,
  Provider,
  impl: { button: Button as Impl, link: Link as Impl, input: Input as Impl, select: Select as Impl, checkbox: Checkbox as Impl, radio: Radio as Impl, switch: Switch as Impl, badge: Badge as Impl, card: Card as Impl, dialog: Dialog as Impl, alert: Alert as Impl, toast: Toast as Impl, tooltip: Tooltip as Impl, spinner: Spinner as Impl, divider: Divider as Impl, accordion: Accordion as Impl, alertdialog: Alertdialog as Impl, avatar: Avatar as Impl, breadcrumb: Breadcrumb as Impl, calendar: Calendar as Impl, combobox: Combobox as Impl, contextmenu: Contextmenu as Impl, datepicker: Datepicker as Impl, drawer: Drawer as Impl, hovercard: Hovercard as Impl, inputgroup: Inputgroup as Impl, inputotp: Inputotp as Impl, listrow: Listrow as Impl, menu: Menu as Impl, menubar: Menubar as Impl, navigationmenu: Navigationmenu as Impl, pagination: Pagination as Impl, popover: Popover as Impl, progress: Progress as Impl, prose: Prose as Impl, resizable: Resizable as Impl, sheet: Sheet as Impl, skeleton: Skeleton as Impl, slider: Slider as Impl, stages: Stages as Impl, stepper: Stepper as Impl, tabs: Tabs as Impl },
  buttonVariants: ["solid", "outline", "subtle", "plain"],
  buttonTones: ["neutral", "brand", "danger", "success", "warning", "info"],
  components: [
    { name: "button", title: "Button", summary: "사용자가 눌러 동작을 일으키는 컨트롤. variant 구성이 이 시스템의 elevation 성격에서 유래.", ready: true },
    { name: "link", title: "Link", summary: "이동하는 글자. 누르면 위치가 바뀌고, 뒤로 가기로 되돌아올 수 있음.", ready: true },
    { name: "input", title: "Input", summary: "한 줄 또는 여러 줄의 텍스트를 받는 폼 컨트롤. 해부 구조가 control 옵션에서 유래.", ready: true },
    { name: "label", title: "Label", summary: "컨트롤이 무엇을 받는 필드인지 알리는 이름. 자리표시자로 대신하지 않음.", ready: false },
    { name: "field", title: "Field", summary: "컨트롤 하나를 이름·설명·오류와 함께 묶는 컨테이너. 폼의 최소 단위임.", ready: false },
    { name: "select", title: "Select", summary: "접힌 목록에서 값 하나를 고르는 폼 컨트롤. 선택지가 적으면 Radio 사용.", ready: true },
    { name: "checkbox", title: "Checkbox", summary: "여러 개를 동시에 고르는 선택 컨트롤. 항목끼리 독립임. Radio(단일 선택)와 다른 컴포넌트임.", ready: true },
    { name: "radio", title: "Radio", summary: "여러 선택지 중 하나만 고르는 컨트롤. 같은 name 안에서 배타적임. Checkbox(다중 선택)와 다른 컴포넌트임.", ready: true },
    { name: "switch", title: "Switch", summary: "켜짐과 꺼짐을 즉시 전환하는 컨트롤. 핸들이 오른쪽인 상태가 켜짐임.", ready: true },
    { name: "badge", title: "Badge", summary: "짧은 상태나 분류를 나타내는 표시. 읽는 것이지 누르는 것이 아님.", ready: true },
    { name: "card", title: "Card", summary: "관련된 내용을 하나로 묶는 컨테이너. 읽는 것이고 결정을 받지 않음. 결정은 Dialog 의 몫임.", ready: true },
    { name: "dialog", title: "Dialog", summary: "흐름을 멈추고 결정을 받는 창. 확인 버튼은 항상 오른쪽이고, 버튼 그룹은 창의 아래쪽 끝에 붙음.", ready: true },
    { name: "alert", title: "Alert", summary: "화면에 머무르며 상태를 알리는 영역. 알릴 수 있는 종류가 이 시스템의 팔레트 구성에서 유래.", ready: true },
    { name: "toast", title: "Toast", summary: "떴다가 스스로 사라지는 알림. 놓쳐도 되는 것만 포함.", ready: true },
    { name: "tooltip", title: "Tooltip", summary: "가리켰을 때만 뜨는 짧은 덧말. 없어도 되는 말만 포함.", ready: true },
    { name: "spinner", title: "Spinner", summary: "끝을 모르는 기다림을 알리는 표시. 끝을 알면 Progress 사용.", ready: true },
    { name: "divider", title: "Divider", summary: "내용을 가르는 선. 뜻이 있는 선과 꾸미는 선을 구분해서 사용.", ready: true },
    { name: "accordion", title: "Accordion", summary: "눌러서 속을 펴는 그룹. 한 번에 하나만 펴야 한다면 Tabs 사용.", ready: true },
    { name: "alertdialog", title: "AlertDialog", summary: "되돌릴 수 없는 결정을 받는 창. 바깥을 눌러도 닫히지 않음.", ready: true },
    { name: "aspectratio", title: "AspectRatio", summary: "안에 무엇이 오든 비율을 지키는 컨테이너. 이미지가 오기 전에도 공간을 확보.", ready: false },
    { name: "attachment", title: "Attachment", summary: "대화에 딸려 온 파일 한 개. 아직 끝나지 않았을 수 있어 상태가 있음.", ready: false },
    { name: "avatar", title: "Avatar", summary: "사람이나 조직을 나타내는 작은 표시. 모서리가 이 시스템의 형태 기준에서 유래.", ready: true },
    { name: "banner", title: "Banner", summary: "화면에서 시선을 가장 먼저 끄는 큰 영역. 제목 크기가 이 시스템의 타이포 비율에서 유래.", ready: false },
    { name: "breadcrumb", title: "Breadcrumb", summary: "탐색 계층에서 지금 어디에 있는지와 어떻게 위로 올라가는지를 보여주는 경로.", ready: true },
    { name: "bubble", title: "Bubble", summary: "한 번에 한 말을 담는 컨테이너. 보내는 이·시각까지 필요하면 Message 임.", ready: false },
    { name: "calendar", title: "Calendar", summary: "날짜를 달력 모양으로 선택. 먼 날짜는 치는 편이 빠름.", ready: true },
    { name: "carousel", title: "Carousel", summary: "몇 개만 보이고 나머지는 밀어서 보는 줄. 다음 것이 있다는 사실을 버튼이 알림.", ready: false },
    { name: "chart", title: "Chart", summary: "수를 모양으로 읽게 하는 그림. 그리는 것은 라이브러리이고, 이 시스템의 몫은 색과 툴팁·라벨임.", ready: false },
    { name: "chip", title: "Chip", summary: "누르고 고르고 지울 수 있는 표시. 읽기만 하는 Badge 와 다른 컴포넌트임.", ready: false },
    { name: "collapsible", title: "Collapsible", summary: "단일 영역 접기, 펼치기. 여러 영역은 Accordion 사용", ready: false },
    { name: "combobox", title: "Combobox", summary: "쳐서 좁히며 고르는 필드. 항목이 열 개 남짓이면 Select 가 나음.", ready: true },
    { name: "command", title: "Command", summary: "쳐서 좁히고 골라 실행하는 요소. 이것만으로 기능을 제공하지 않음.", ready: false },
    { name: "contextmenu", title: "ContextMenu", summary: "오른쪽 눌러 여는 동작 목록. 여기에만 있는 동작은 없는 것과 같음.", ready: true },
    { name: "datatable", title: "DataTable", summary: "표에 정렬·거르기·고르기·쪽 넘김이 붙은 것. 기능이 없으면 그냥 Table 임.", ready: false },
    { name: "datepicker", title: "DatePicker", summary: "눌러서 달력을 띄워 고름. 루트 컴포넌트가 없는 조합임. Popover + Calendar.", ready: true },
    { name: "drawer", title: "Drawer", summary: "끌어서 여닫는 패널. 끌기가 조작 그 자체임. 잡을 위치가 보여야 함.", ready: true },
    { name: "empty", title: "Empty", summary: "보여줄 것이 없을 때의 화면. 왜 비었는지와 다음에 무엇을 할지를 함께 말함.", ready: false },
    { name: "hovercard", title: "HoverCard", summary: "hover 시 표시되는 미리보기. 터치 환경에서는 표시되지 않아 보조 정보만 사용", ready: true },
    { name: "inputgroup", title: "InputGroup", summary: "필드에 붙어 있는 부분을 한 상자로 통합. 테두리는 바깥 상자에만 표시.", ready: true },
    { name: "inputotp", title: "InputOTP", summary: "인증번호를 한 글자씩 필드를 나눠 받음. 보이는 필드는 표시이고 입력은 하나임.", ready: true },
    { name: "kbd", title: "Kbd", summary: "눌러야 하는 키를 글자로 보여 주는 표시. 버튼이 아니라 설명임.", ready: false },
    { name: "listrow", title: "ListRow", summary: "목록의 한 줄. 한 줄이 하나의 대상이며, 열끼리 견줘야 하면 Table 사용", ready: true },
    { name: "marker", title: "Marker", summary: "대화 사이에 끼는 한 줄. 누가 말한 것이 아니라 그 사이에 일어난 일을 알림.", ready: false },
    { name: "menu", title: "Menu", summary: "눌러서 펼치는 동작 목록. 고르는 것이 값이면 Select 사용", ready: true },
    { name: "menubar", title: "Menubar", summary: "늘 보이는 메뉴 막대. 동작이 아주 많은 편집기용임.", ready: true },
    { name: "message", title: "Message", summary: "대화 한 줄 전체. 누가 언제 말했는지까지 포함. 말만 담으면 Bubble 임.", ready: false },
    { name: "messagescroller", title: "MessageScroller", summary: "대화가 길어져도 스크롤 위치를 유지하는 컨테이너. 넘치는 것을 담는 ScrollArea 와 다름.", ready: false },
    { name: "meter", title: "Meter", summary: "임계값이 있는 측정치가 지금 어느 구간에 있는지 보여줌. Progress 와 다른 컴포넌트임.", ready: false },
    { name: "nativeselect", title: "NativeSelect", summary: "목록을 브라우저가 그리는 고르개. 항목을 꾸며야 하면 Select 임.", ready: false },
    { name: "navigationmenu", title: "NavigationMenu", summary: "위치를 옮기는 길잡이. 고르면 일이 일어나는 것은 Menu 임.", ready: true },
    { name: "pageheader", title: "PageHeader", summary: "화면 맨 위의 제목 구역. 동작이 주인공이면 Toolbar 사용", ready: false },
    { name: "pagination", title: "Pagination", summary: "긴 목록을 쪽으로 나눠 오가는 컨트롤. 쪽 번호는 저마다 주소를 가진 링크임.", ready: true },
    { name: "popover", title: "Popover", summary: "눌러서 뜨는 작은 창. 설명 한 줄이면 Tooltip, 고르면 닫히면 Menu 임.", ready: true },
    { name: "progress", title: "Progress", summary: "일이 얼마나 진행됐는지 보여주는 막대. 끝이 있는 작업에만 사용", ready: true },
    { name: "prose", title: "Prose", summary: "긴 글을 읽기 위한 조판. 한글 행간 기준은 측정 근거가 없는 경험칙임.", ready: true },
    { name: "questionnaire", title: "Questionnaire", summary: "한 번에 하나씩 묻는 폼. 전부 한 화면에 두면 Field 그룹임.", ready: false },
    { name: "resizable", title: "Resizable", summary: "두 위치의 경계를 사용자가 옮김. 핸들은 보이고 키보드로도 잡힘.", ready: true },
    { name: "scrollarea", title: "ScrollArea", summary: "넘치는 내용을 자기 안에서 굴림. 막대를 숨기지 않고 얇게 만듦.", ready: false },
    { name: "segmented", title: "Segmented", summary: "붙어 있는 셀 중 하나만 고르는 띠. 내용이 바뀌면 Tabs 사용", ready: false },
    { name: "sheet", title: "Sheet", summary: "가장자리에서 밀려 나오는 패널. 끌어서 여닫는 것은 Drawer 임.", ready: true },
    { name: "sidebar", title: "Sidebar", summary: "옆에 늘 붙어 있는 길잡이. 접혀도 위치를 남기는 것이 시트와 다른 점임.", ready: false },
    { name: "skeleton", title: "Skeleton", summary: "내용이 오기 전 공간을 미리 확보하는 플레이스홀더.", ready: true },
    { name: "slider", title: "Slider", summary: "끌어서 범위 안의 값을 정하는 컨트롤. 읽기만 하면 Meter 사용", ready: true },
    { name: "stages", title: "Stages", summary: "여러 단계 중 지금 어디인지 보여주는 표시. 수량을 바꾸는 Stepper 와 다른 컴포넌트임.", ready: true },
    { name: "stat", title: "Stat", summary: "하나의 수치를 크게 보여주는 지표. 증감 색이 이 시스템의 팔레트 구성에서 옴.", ready: false },
    { name: "stepper", title: "Stepper", summary: "수를 한 칸씩 올리고 내리는 컨트롤. 테두리 구조는 이 시스템의 control 기준에서 유래", ready: true },
    { name: "table", title: "Table", summary: "행과 열로 데이터를 늘어놓는 표. 셀 여백은 이 시스템의 밀도 기준에서 유래", ready: false },
    { name: "tabs", title: "Tabs", summary: "같은 층위의 화면을 오가는 컨트롤. 활성 표시 방식은 이 시스템의 형태 기준에서 유래", ready: true },
    { name: "toggle", title: "Toggle", summary: "눌린 채로 있는 버튼. 하나를 켜고 끄는 용도. 여럿 중 고르는 것은 Segmented 사용", ready: false },
    { name: "toolbar", title: "Toolbar", summary: "자주 쓰는 동작을 한 줄에 모아 두는 띠. 버튼은 이 시스템의 Button 을 그대로 사용", ready: false },
  ],
};
