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

export interface IconProps {
  spin?: boolean;
  twoToneColor?: string;
  rotate?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  onMouseEnter?: React.MouseEventHandler<SVGSVGElement>;
  onMouseLeave?: React.MouseEventHandler<SVGSVGElement>;
}

function shim(Icon: LucideIcon) {
  return function AntIcon(props: IconProps) {
    const { spin, twoToneColor, rotate, disabled, className, style, ...rest } = props;
    void twoToneColor;
    void disabled;
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

export const AndroidOutlined = shim(Smartphone);
export const AntDesignOutlined = shim(Sparkles);
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
export const FacebookOutlined = shim(Share2);
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
export const LinkedinOutlined = shim(Briefcase);
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
export const TwitterOutlined = shim(Send);
export const UndoOutlined = shim(Undo2);
export const UpOutlined = shim(ChevronUp);
export const UploadOutlined = shim(Upload);
export const UserOutlined = shim(User);
export const VideoCameraOutlined = shim(Video);
export const WarningOutlined = shim(TriangleAlert);
export const YoutubeOutlined = shim(Play);
export const ZoomInOutlined = shim(ZoomIn);
export const ZoomOutOutlined = shim(ZoomOut);
export const BellOutlined = shim(Bell);
