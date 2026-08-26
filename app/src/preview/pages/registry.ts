import * as accordion from "./accordion";
import * as alert from "./alert";
import * as aspectratio from "./aspectratio";
import * as attachment from "./attachment";
import * as badge from "./badge";
import * as bubble from "./bubble";
import * as banner from "./banner";
import * as breadcrumb from "./breadcrumb";
import * as button from "./button";
import * as card from "./card";
import * as carousel from "./carousel";
import * as chart from "./chart";
import * as checkbox from "./checkbox";
import * as dialog from "./dialog";
import * as divider from "./divider";
import * as field from "./field";
import * as input from "./input";
import * as inputgroup from "./inputgroup";
import * as inputotp from "./inputotp";
import * as kbd from "./kbd";
import * as label from "./label";
import * as link from "./link";
import * as listrow from "./listrow";
import * as marker from "./marker";
import * as menu from "./menu";
import * as nativeselect from "./nativeselect";
import * as message from "./message";
import * as messagescroller from "./messagescroller";
import * as pageheader from "./pageheader";
import * as pagination from "./pagination";
import * as progress from "./progress";
import * as questionnaire from "./questionnaire";
import * as radio from "./radio";
import * as select from "./select";
import * as spinner from "./spinner";
import * as stages from "./stages";
import * as stepper from "./stepper";
import * as switchPage from "./switch";
import * as tabs from "./tabs";
import * as toast from "./toast";
import * as toggle from "./toggle";
import * as tooltip from "./tooltip";
import * as collapsible from "./collapsible";
import * as resizable from "./resizable";
import * as scrollarea from "./scrollarea";
import * as avatar from "./avatar";
import * as skeleton from "./skeleton";
import * as slider from "./slider";
import * as table from "./table";
import * as empty from "./empty";
import * as toolbar from "./toolbar";
import * as segmented from "./segmented";
import * as prose from "./prose";
import * as popover from "./popover";
import * as hovercard from "./hovercard";
import * as alertdialog from "./alertdialog";
import * as sheet from "./sheet";
import * as drawer from "./drawer";
import * as contextmenu from "./contextmenu";
import * as menubar from "./menubar";
import * as navigationmenu from "./navigationmenu";
import * as command from "./command";
import * as combobox from "./combobox";
import * as calendar from "./calendar";
import * as datepicker from "./datepicker";
import * as datatable from "./datatable";
import * as sidebar from "./sidebar";
import type { PageModule } from "./types";

export const PAGES: Record<string, PageModule> = {
  accordion,
  alert,
  aspectratio,
  badge,
  banner,
  breadcrumb,
  button,
  card,
  checkbox,
  collapsible,
  dialog,
  divider,
  field,
  input,
  inputgroup,
  inputotp,
  kbd,
  label,
  link,
  listrow,
  menu,
  pageheader,
  pagination,
  progress,
  radio,
  resizable,
  scrollarea,
  select,
  spinner,
  stages,
  stepper,
  // 키는 컴포넌트 이름 유지. switch는 예약어라 그 이름으로 import 불가능한 구조임
  switch: switchPage,
  tabs,
  toast,
  toggle,
  tooltip,
  avatar,
  skeleton,
  slider,
  table,
  empty,
  toolbar,
  segmented,
  prose,
  popover,
  hovercard,
  alertdialog,
  sheet,
  drawer,
  contextmenu,
  menubar,
  navigationmenu,
  command,
  combobox,
  calendar,
  datepicker,
  datatable,
  sidebar,
  // 대화 화면 다섯 종류. 서로 맞물려 동작
  bubble,
  message,
  messagescroller,
  attachment,
  marker,
  nativeselect,
  carousel,
  chart,
  questionnaire,
};
