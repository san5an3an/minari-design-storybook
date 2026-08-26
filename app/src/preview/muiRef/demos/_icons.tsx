/* MUI 아이콘 이름 → **Lucide 아이콘**. 자동 생성 — tools/gen_mui_demos.py.
 *
 * **아이콘은 Lucide 만 쓴다** — 전역 절대 규칙이다. 그런데 MUI 공식 예제는
 * `@mui/icons-material` 을 부른다. 예제 코드를 손대지 않고 규칙을 지키려면
 * **부르는 곳만 바꾸면 된다** — 이름은 그대로 두고 실체만 Lucide 로 바꾼다.
 *
 * ⚠️ **이름이 MUI 것이라고 MUI 아이콘인 것은 아니다.** 여기서 내보내는 것은
 *    전부 Lucide 다. 이름을 MUI 식으로 둔 이유는 예제 본문을 **원본 그대로**
 *    두기 위해서다.
 *
 * ⚠️ MUI 아이콘은 `fontSize`(small·medium·large·inherit) 와 `color` 를 받는다.
 *    Lucide 는 `size`(px) 와 `color` 를 받는다 — 그 번역을 여기서 한다.
 *    안 하면 예제가 넘기는 `fontSize="small"` 이 조용히 무시된다.
 */
import * as React from "react";
import {
  AlarmClock as LuAlarmClock, AlignCenter as LuAlignCenter, AlignJustify as LuAlignJustify, AlignLeft as LuAlignLeft, AlignRight as LuAlignRight, Angry as LuAngry, Archive as LuArchive, ArrowDown as LuArrowDown, ArrowLeft as LuArrowLeft, ArrowRight as LuArrowRight, BedDouble as LuBedDouble, Bell as LuBell, Bluetooth as LuBluetooth, Bold as LuBold, Bookmark as LuBookmark, Briefcase as LuBriefcase, Bug as LuBug, Calendar as LuCalendar, Check as LuCheck, ChevronDown as LuChevronDown, ChevronLeft as LuChevronLeft, ChevronRight as LuChevronRight, ChevronUp as LuChevronUp, ChevronsLeft as LuChevronsLeft, ChevronsRight as LuChevronsRight, Circle as LuCircle, CircleAlert as LuCircleAlert, CircleCheck as LuCircleCheck, CircleDot as LuCircleDot, CircleUser as LuCircleUser, ClipboardList as LuClipboardList, ClipboardPaste as LuClipboardPaste, Cloud as LuCloud, CloudUpload as LuCloudUpload, Contact as LuContact, Copy as LuCopy, Ellipsis as LuEllipsis, EllipsisVertical as LuEllipsisVertical, Eye as LuEye, EyeOff as LuEyeOff, FastForward as LuFastForward, File as LuFile, FileSearch as LuFileSearch, Fingerprint as LuFingerprint, Flame as LuFlame, Folder as LuFolder, FolderOpen as LuFolderOpen, Frown as LuFrown, Globe as LuGlobe, Grip as LuGrip, Heart as LuHeart, History as LuHistory, House as LuHouse, Image as LuImage, Images as LuImages, Inbox as LuInbox, Info as LuInfo, Italic as LuItalic, Laptop as LuLaptop, Laugh as LuLaugh, LayoutDashboard as LuLayoutDashboard, LayoutGrid as LuLayoutGrid, List as LuList, ListFilter as LuListFilter, LogOut as LuLogOut, Mail as LuMail, MailOpen as LuMailOpen, MapPin as LuMapPin, Meh as LuMeh, Menu as LuMenu, MessageSquare as LuMessageSquare, MonitorPlay as LuMonitorPlay, Navigation as LuNavigation, PaintBucket as LuPaintBucket, Pause as LuPause, Pencil as LuPencil, Phone as LuPhone, PhoneMissed as LuPhoneMissed, Play as LuPlay, Plus as LuPlus, Printer as LuPrinter, Repeat as LuRepeat, Rewind as LuRewind, Save as LuSave, Scissors as LuScissors, Search as LuSearch, Send as LuSend, Server as LuServer, Settings as LuSettings, Share2 as LuShare2, ShoppingCart as LuShoppingCart, SkipBack as LuSkipBack, SkipForward as LuSkipForward, Smartphone as LuSmartphone, Smile as LuSmile, Square as LuSquare, SquareCheckBig as LuSquareCheckBig, Star as LuStar, Trash2 as LuTrash2, TriangleAlert as LuTriangleAlert, Tv as LuTv, Umbrella as LuUmbrella, Underline as LuUnderline, User as LuUser, UserPlus as LuUserPlus, Users as LuUsers, Utensils as LuUtensils, Volume1 as LuVolume1, Volume2 as LuVolume2, Wifi as LuWifi, X as LuX,
  type LucideProps,
} from "lucide-react";

/** MUI 아이콘이 받던 것. Lucide 에 없는 것은 받되 번역하거나 흘려보낸다. */
export interface IconProps extends Omit<LucideProps, "size" | "color"> {
  fontSize?: "inherit" | "small" | "medium" | "large";
  color?: string;
  /** MUI 아이콘이 스크린리더에 읽히는 이름. Lucide 에는 없어 `aria-label` 로 옮긴다.
   *  ⚠️ 이 값을 주면 그림이 **장식이 아니라 내용**이 된다 — `aria-hidden` 을 걷는다. */
  titleAccess?: string;
  /** MUI 는 `sx` 를 받는다. Lucide 는 모른다 — 받되 쓰지 않는다. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx?: any;
}

/* MUI 의 `fontSize` 계단. 그쪽 기본 테마 값 그대로다(20·24·35px, inherit=1em). */
const SIZE = { small: 20, medium: 24, large: 35 } as const;

function wrap(Icon: React.ComponentType<LucideProps>) {
  return function MuiIcon({ fontSize, color, sx, titleAccess, ...rest }: IconProps) {
    void sx;
    return (
      <Icon
        {...rest}
        aria-label={titleAccess}
        aria-hidden={titleAccess ? undefined : rest["aria-hidden"]}
        role={titleAccess ? "img" : rest.role}
        size={fontSize && fontSize !== "inherit" ? SIZE[fontSize] : undefined}
        color={color}
        style={fontSize === "inherit"
          ? { width: "1em", height: "1em", ...(rest.style ?? {}) }
          : rest.style}
      />
    );
  };
}

export const AccountCircle = wrap(LuCircleUser);
export const Adb = wrap(LuBug);
export const Add = wrap(LuPlus);
export const AddShoppingCart = wrap(LuShoppingCart);
export const Alarm = wrap(LuAlarmClock);
export const Archive = wrap(LuArchive);
export const ArrowBack = wrap(LuArrowLeft);
export const ArrowDownward = wrap(LuArrowDown);
export const ArrowDropDown = wrap(LuChevronDown);
export const ArrowForward = wrap(LuArrowRight);
export const ArrowForwardIosSharp = wrap(LuChevronRight);
export const ArrowRight = wrap(LuChevronRight);
export const Assignment = wrap(LuClipboardList);
export const BeachAccess = wrap(LuUmbrella);
export const Bluetooth = wrap(LuBluetooth);
export const Bookmark = wrap(LuBookmark);
export const BookmarkBorder = wrap(LuBookmark);
export const CalendarMonth = wrap(LuCalendar);
export const Check = wrap(LuCheck);
export const CheckBox = wrap(LuSquareCheckBig);
export const CheckBoxOutlineBlank = wrap(LuSquare);
export const CheckCircleOutlined = wrap(LuCircleCheck);
export const ChevronLeft = wrap(LuChevronLeft);
export const ChevronRight = wrap(LuChevronRight);
export const Close = wrap(LuX);
export const Cloud = wrap(LuCloud);
export const CloudUpload = wrap(LuCloudUpload);
export const Comment = wrap(LuMessageSquare);
export const ContentCopy = wrap(LuCopy);
export const ContentCut = wrap(LuScissors);
export const ContentPaste = wrap(LuClipboardPaste);
export const Delete = wrap(LuTrash2);
export const Directions = wrap(LuNavigation);
export const Dns = wrap(LuServer);
export const Done = wrap(LuCheck);
export const Drafts = wrap(LuMailOpen);
export const Edit = wrap(LuPencil);
export const ExpandLess = wrap(LuChevronUp);
export const ExpandMore = wrap(LuChevronDown);
export const Face = wrap(LuSmile);
export const FastForwardRounded = wrap(LuFastForward);
export const FastRewindRounded = wrap(LuRewind);
export const Fastfood = wrap(LuUtensils);
export const Favorite = wrap(LuHeart);
export const FavoriteBorder = wrap(LuHeart);
export const FileCopy = wrap(LuCopy);
export const FileCopyOutlined = wrap(LuCopy);
export const FilterList = wrap(LuListFilter);
export const Fingerprint = wrap(LuFingerprint);
export const FirstPage = wrap(LuChevronsLeft);
export const Folder = wrap(LuFolder);
export const FolderOpen = wrap(LuFolderOpen);
export const FormatAlignCenter = wrap(LuAlignCenter);
export const FormatAlignJustify = wrap(LuAlignJustify);
export const FormatAlignLeft = wrap(LuAlignLeft);
export const FormatAlignRight = wrap(LuAlignRight);
export const FormatBold = wrap(LuBold);
export const FormatColorFill = wrap(LuPaintBucket);
export const FormatItalic = wrap(LuItalic);
export const FormatUnderlined = wrap(LuUnderline);
export const Grain = wrap(LuGrip);
export const GroupAdd = wrap(LuUserPlus);
export const Home = wrap(LuHouse);
export const Hotel = wrap(LuBedDouble);
export const Image = wrap(LuImage);
export const Inbox = wrap(LuInbox);
export const Info = wrap(LuInfo);
export const InfoOutlined = wrap(LuInfo);
export const InsertDriveFile = wrap(LuFile);
export const KeyboardArrowDown = wrap(LuChevronDown);
export const KeyboardArrowLeft = wrap(LuChevronLeft);
export const KeyboardArrowRight = wrap(LuChevronRight);
export const KeyboardArrowUp = wrap(LuChevronUp);
export const Laptop = wrap(LuLaptop);
export const LaptopMac = wrap(LuLaptop);
export const LastPage = wrap(LuChevronsRight);
export const LocationOn = wrap(LuMapPin);
export const Logout = wrap(LuLogOut);
export const Mail = wrap(LuMail);
export const Menu = wrap(LuMenu);
export const MoreHoriz = wrap(LuEllipsis);
export const MoreVert = wrap(LuEllipsisVertical);
export const MoveToInbox = wrap(LuInbox);
export const NavigateNext = wrap(LuChevronRight);
export const Navigation = wrap(LuNavigation);
export const Notifications = wrap(LuBell);
export const Pageview = wrap(LuFileSearch);
export const PauseRounded = wrap(LuPause);
export const People = wrap(LuUsers);
export const PermMedia = wrap(LuImages);
export const Person = wrap(LuUser);
export const PersonAdd = wrap(LuUserPlus);
export const PersonPin = wrap(LuContact);
export const Phone = wrap(LuPhone);
export const PhoneAndroid = wrap(LuSmartphone);
export const PhoneMissed = wrap(LuPhoneMissed);
export const PlayArrow = wrap(LuPlay);
export const PlayArrowRounded = wrap(LuPlay);
export const Print = wrap(LuPrinter);
export const PriorityHigh = wrap(LuCircleAlert);
export const Public = wrap(LuGlobe);
export const RadioButtonChecked = wrap(LuCircleDot);
export const RadioButtonUnchecked = wrap(LuCircle);
export const Repeat = wrap(LuRepeat);
export const ReportProblemOutlined = wrap(LuTriangleAlert);
export const Restore = wrap(LuHistory);
export const Save = wrap(LuSave);
export const Search = wrap(LuSearch);
export const Send = wrap(LuSend);
export const SentimentDissatisfied = wrap(LuFrown);
export const SentimentSatisfied = wrap(LuMeh);
export const SentimentSatisfiedAltOutlined = wrap(LuSmile);
export const SentimentVeryDissatisfied = wrap(LuAngry);
export const SentimentVerySatisfied = wrap(LuLaugh);
export const Settings = wrap(LuSettings);
export const Share = wrap(LuShare2);
export const ShoppingCart = wrap(LuShoppingCart);
export const ShoppingCartOutlined = wrap(LuShoppingCart);
export const SkipNext = wrap(LuSkipForward);
export const SkipPrevious = wrap(LuSkipBack);
export const Star = wrap(LuStar);
export const StarBorder = wrap(LuStar);
export const TagFaces = wrap(LuSmile);
export const Tv = wrap(LuTv);
export const VideoLabel = wrap(LuMonitorPlay);
export const ViewList = wrap(LuList);
export const ViewModule = wrap(LuLayoutGrid);
export const ViewQuilt = wrap(LuLayoutDashboard);
export const Visibility = wrap(LuEye);
export const VisibilityOff = wrap(LuEyeOff);
export const VolumeDown = wrap(LuVolume1);
export const VolumeDownRounded = wrap(LuVolume1);
export const VolumeUp = wrap(LuVolume2);
export const VolumeUpRounded = wrap(LuVolume2);
export const Whatshot = wrap(LuFlame);
export const Wifi = wrap(LuWifi);
export const Work = wrap(LuBriefcase);
