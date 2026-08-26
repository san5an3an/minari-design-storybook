/* antd 아이콘 이름 → **Lucide 아이콘**.
 *
 * 왜 이 파일이 있는가
 * ------------------
 * **아이콘은 Lucide 만 쓴다** — 전역 절대 규칙이다. 그런데 antd 공식 예제 845개는
 * `@ant-design/icons` 를 부른다(118종 · 369회). 예제 코드를 손대지 않고 규칙을 지키려면
 * **import 하는 곳만 바꾸면 된다** — 이름은 그대로 두고 실체만 Lucide 로 바꾼다.
 * 그래서 생성기(`tools/gen_antd_demos.py`)는 예제 코드의 본문을 한 글자도 안 고치고
 * `from '@ant-design/icons'` 를 `from '../_icons'` 로만 바꾼다.
 *
 * ⚠️ **이름이 antd 것이라고 antd 아이콘인 것은 아니다.** 여기서 내보내는 것은 전부
 *    Lucide 다. 이름을 antd 식으로 둔 이유는 예제 본문을 **원본 그대로** 두기 위해서다.
 *
 * ⚠️ **면(fill) ↔ 선(stroke).** antd 아이콘은 채워진 글리프이고 Lucide 는 선이다.
 *    `Filled` · `TwoTone` 변종도 Lucide 에는 없어서 같은 선 아이콘으로 보낸다.
 *    모양이 달라 보이는 것은 결함이 아니라 이 규칙을 지킨 결과다.
 *
 * ⚠️ **브랜드 마크는 Lucide 에 없다.** Facebook · Twitter · Linkedin · Youtube 는
 *    Lucide 1.32 에 아예 없다(실측). 남의 브랜드 마크를 담지 않는 것이 그쪽 방침이다.
 *    그래서 **뜻이 가까운 일반 아이콘으로 대신**했고, 그건 로고가 아니다 —
 *    아래 표에 `※` 로 표시해 두었다.
 *
 * ⚠️ `createFromIconfontCN` 은 아이콘이 아니라 **아이콘을 만드는 공장**이다.
 *    바깥 아이콘 폰트를 받아 오는 물건이라 옮길 대상이 아니다 — 그걸 쓰는 예제는
 *    생성기가 아예 세우지 않고 까닭을 화면에 적는다.
 */
import * as React from "react";
import {
  ArrowDown, ArrowLeftRight, ArrowUp, Apple, BarChart3, Bell, Briefcase, Calendar,
  CalendarCheck, ChartLine, ChartPie, ChartScatter, Check, ChevronDown, ChevronLeft,
  ChevronRight, ChevronUp, ChevronsLeft, ChevronsRight, CircleAlert, CircleCheck,
  CircleHelp, CircleMinus, CircleX, ClipboardList, Clock, Cloud, Container, Copy,
  CornerDownLeft, CornerDownRight, CornerUpLeft, CornerUpRight, Download, Ellipsis,
  Eye, EyeOff, File, FileText, Frown, GripVertical, Headphones, Heart, Highlighter,
  House, Inbox, Info, Laptop, LayoutGrid, Link, LoaderCircle, Lock, LogOut, Mail,
  Megaphone, Meh, Menu, MessageCircle, MessageSquare, Mic, Minus, Monitor, Moon,
  MoveHorizontal, PanelBottom, PanelLeftClose, PanelLeftOpen, PanelTop, Pencil, Play,
  Plus, Power, RefreshCw, Rocket, RotateCcw, RotateCw, Search, Send, Settings, Share2,
  Smartphone, Smile, Sparkles, SquarePen, SquareX, Star, Store, Sun, ThumbsUp, TriangleAlert,
  Trash2, Undo2, Upload, User, Users, Video, X, Zap, ZoomIn, ZoomOut,
  type LucideIcon,
} from "lucide-react";

/** antd 아이콘이 받던 prop 들. Lucide 에 없는 것은 받되 흘려보낸다. */
export interface IconProps {
  /** antd 의 회전. Lucide 에는 없어서 CSS 로 돌린다. */
  spin?: boolean;
  /** antd 의 두 색 아이콘. Lucide 에는 없다 — 받되 쓰지 않는다. */
  twoToneColor?: string;
  /** antd 는 각도를 prop 으로 받는다. */
  rotate?: number;
  /** antd 아이콘은 이걸 받아 흐리게 그린다. SVG 에는 없는 속성이라 **받되 흘려보낸다** —
      그냥 넘기면 브라우저가 모르는 속성이라며 콘솔에 경고를 쏟는다. */
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  onMouseEnter?: React.MouseEventHandler<SVGSVGElement>;
  onMouseLeave?: React.MouseEventHandler<SVGSVGElement>;
}

/**
 * ⚠️ `size="1em"` 이 핵심이다. antd 아이콘은 **글자 크기를 그대로 따르고** Lucide 는
 *    24px 고정이라, 그대로 넣으면 작은 컨트롤 안에서 아이콘이 컨트롤보다 커진다.
 */
function shim(Icon: LucideIcon) {
  return function AntIcon(props: IconProps) {
    const { spin, twoToneColor, rotate, disabled, className, style, ...rest } = props;
    void twoToneColor;                       // Lucide 에는 두 색 아이콘이 없다
    void disabled;                           // SVG 에 붙일 수 없는 속성이다
    const cls = [className, spin ? "animate-spin" : null].filter(Boolean).join(" ");
    return (
      <Icon
        size="1em"
        className={cls || undefined}
        style={rotate ? { ...style, transform: `rotate(${rotate}deg)` } : style}
        {...rest}
      />
    );
  };
}

/* ── 표 ───────────────────────────────────────────────────────────────────
   왼쪽이 antd 이름, 오른쪽이 실제로 그려지는 Lucide 아이콘이다.
   `Filled` · `TwoTone` 는 Lucide 에 짝이 없어 같은 선 아이콘으로 보낸다. */
export const AndroidOutlined = shim(Smartphone);          // ※ 로고 아님
export const AntDesignOutlined = shim(Sparkles);         // ※ 로고 아님
export const AppleOutlined = shim(Apple);
export const AppstoreOutlined = shim(LayoutGrid);
export const ArrowDownOutlined = shim(ArrowDown);
export const ArrowUpOutlined = shim(ArrowUp);
export const AudioOutlined = shim(Mic);
export const BarChartOutlined = shim(BarChart3);
export const BarsOutlined = shim(Menu);
export const BorderBottomOutlined = shim(PanelBottom);
export const BorderTopOutlined = shim(PanelTop);
export const CalendarOutlined = shim(Calendar);
export const CaretDownOutlined = shim(ChevronDown);
export const CaretLeftOutlined = shim(ChevronLeft);
export const CaretRightOutlined = shim(ChevronRight);
export const CaretUpOutlined = shim(ChevronUp);
export const CarryOutOutlined = shim(CalendarCheck);
export const CheckCircleFilled = shim(CircleCheck);
export const CheckCircleOutlined = shim(CircleCheck);
export const CheckCircleTwoTone = shim(CircleCheck);
export const CheckOutlined = shim(Check);
export const ClockCircleOutlined = shim(Clock);
export const CloseCircleFilled = shim(CircleX);
export const CloseCircleOutlined = shim(CircleX);
export const CloseOutlined = shim(X);
export const CloseSquareFilled = shim(SquareX);
export const CloudOutlined = shim(Cloud);
export const ColumnWidthOutlined = shim(MoveHorizontal);
export const CommentOutlined = shim(MessageSquare);
export const ContainerOutlined = shim(Container);
export const CopyOutlined = shim(Copy);
export const CustomerServiceOutlined = shim(Headphones);
export const DeleteOutlined = shim(Trash2);
export const DesktopOutlined = shim(Monitor);
export const DotChartOutlined = shim(ChartScatter);
export const DoubleLeftOutlined = shim(ChevronsLeft);
export const DoubleRightOutlined = shim(ChevronsRight);
export const DownOutlined = shim(ChevronDown);
export const DownloadOutlined = shim(Download);
export const EditOutlined = shim(Pencil);
export const EllipsisOutlined = shim(Ellipsis);
export const ExclamationCircleFilled = shim(CircleAlert);
export const ExclamationCircleOutlined = shim(CircleAlert);
export const EyeInvisibleOutlined = shim(EyeOff);
export const EyeTwoTone = shim(Eye);
export const FacebookOutlined = shim(Share2);             // ※ 로고 없음 — 뜻만 가깝게
export const FileOutlined = shim(File);
export const FileTextOutlined = shim(FileText);
export const FormOutlined = shim(SquarePen);
export const FrownFilled = shim(Frown);
export const FrownOutlined = shim(Frown);
export const HeartOutlined = shim(Heart);
export const HeartTwoTone = shim(Heart);
export const HighlightOutlined = shim(Highlighter);
export const HolderOutlined = shim(GripVertical);
export const HomeOutlined = shim(House);
export const InboxOutlined = shim(Inbox);
export const InfoCircleOutlined = shim(Info);
export const LaptopOutlined = shim(Laptop);
export const LeftOutlined = shim(ChevronLeft);
export const LikeOutlined = shim(ThumbsUp);
export const LineChartOutlined = shim(ChartLine);
export const LinkOutlined = shim(Link);
export const LinkedinOutlined = shim(Briefcase);          // ※ 로고 없음 — 뜻만 가깝게
export const LoadingOutlined = shim(LoaderCircle);
export const LockOutlined = shim(Lock);
export const LogoutOutlined = shim(LogOut);
export const MailOutlined = shim(Mail);
export const MehOutlined = shim(Meh);
export const MenuFoldOutlined = shim(PanelLeftClose);
export const MenuUnfoldOutlined = shim(PanelLeftOpen);
export const MessageOutlined = shim(MessageCircle);
export const MinusCircleOutlined = shim(CircleMinus);
export const MinusOutlined = shim(Minus);
export const MobileOutlined = shim(Smartphone);
export const MoonOutlined = shim(Moon);
export const NotificationOutlined = shim(Megaphone);
export const PieChartOutlined = shim(ChartPie);
export const PlusOutlined = shim(Plus);
export const PoweroffOutlined = shim(Power);
export const QuestionCircleOutlined = shim(CircleHelp);
export const QuestionOutlined = shim(CircleHelp);
export const RadiusBottomleftOutlined = shim(CornerDownLeft);
export const RadiusBottomrightOutlined = shim(CornerDownRight);
export const RadiusUpleftOutlined = shim(CornerUpLeft);
export const RadiusUprightOutlined = shim(CornerUpRight);
export const ReloadOutlined = shim(RotateCw);
export const RightOutlined = shim(ChevronRight);
export const RocketOutlined = shim(Rocket);
export const RotateLeftOutlined = shim(RotateCcw);
export const RotateRightOutlined = shim(RotateCw);
export const SearchOutlined = shim(Search);
export const SettingFilled = shim(Settings);
export const SettingOutlined = shim(Settings);
export const ShareAltOutlined = shim(Share2);
export const ShopOutlined = shim(Store);
export const SmileFilled = shim(Smile);
export const SmileOutlined = shim(Smile);
export const SmileTwoTone = shim(Smile);
export const SolutionOutlined = shim(ClipboardList);
export const StarOutlined = shim(Star);
export const SunOutlined = shim(Sun);
export const SwapOutlined = shim(ArrowLeftRight);
export const SyncOutlined = shim(RefreshCw);
export const TeamOutlined = shim(Users);
export const ThunderboltOutlined = shim(Zap);
export const TwitterOutlined = shim(Send);                // ※ 로고 없음 — 뜻만 가깝게
export const UndoOutlined = shim(Undo2);
export const UpOutlined = shim(ChevronUp);
export const UploadOutlined = shim(Upload);
export const UserOutlined = shim(User);
export const VideoCameraOutlined = shim(Video);
export const WarningOutlined = shim(TriangleAlert);
export const YoutubeOutlined = shim(Play);                // ※ 로고 없음 — 뜻만 가깝게
export const ZoomInOutlined = shim(ZoomIn);
export const ZoomOutOutlined = shim(ZoomOut);
export const BellOutlined = shim(Bell);
