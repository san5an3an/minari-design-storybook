import type { ReactNode } from "react";
import type { ComponentImpl, Mode } from "../systems/types";

import { ConfigProvider } from "antd";
import { AntdStyleLayer } from "./antdStyleLayer";
import { ANTD_BUTTON_CONFIG } from "./antdButtonConfig";
import { ANTD_AVATAR_CONFIG } from "./antdAvatarConfig";
import { ANTD_SPIN_CONFIG } from "./antdSpinConfig";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// chakra 컴포넌트 2종
import { Button as ChakraButton } from "./chakra/Button";
import { Dialog as ChakraDialog } from "./chakra/Dialog";

// mantine 2종
import { Button as MantineButton } from "./mantine/Button";
import { Dialog as MantineDialog } from "./mantine/Dialog";

// shadcn 67종
import { Accordion as ShadcnAccordion } from "./shadcn/Accordion";
import { Alert as ShadcnAlert } from "./shadcn/Alert";
import { Alertdialog as ShadcnAlertdialog } from "./shadcn/Alertdialog";
import { Aspectratio as ShadcnAspectratio } from "./shadcn/Aspectratio";
import { Attachment as ShadcnAttachment } from "./shadcn/Attachment";
import { Avatar as ShadcnAvatar } from "./shadcn/Avatar";
import { Badge as ShadcnBadge } from "./shadcn/Badge";
import { Banner as ShadcnBanner } from "./shadcn/Banner";
import { Breadcrumb as ShadcnBreadcrumb } from "./shadcn/Breadcrumb";
import { Bubble as ShadcnBubble } from "./shadcn/Bubble";
import { Button as ShadcnButton } from "./shadcn/Button";
import { Calendar as ShadcnCalendar } from "./shadcn/Calendar";
import { Card as ShadcnCard } from "./shadcn/Card";
import { Carousel as ShadcnCarousel } from "./shadcn/Carousel";
import { Chart as ShadcnChart } from "./shadcn/Chart";
import { Checkbox as ShadcnCheckbox } from "./shadcn/Checkbox";
import { Collapsible as ShadcnCollapsible } from "./shadcn/Collapsible";
import { Combobox as ShadcnCombobox } from "./shadcn/Combobox";
import { Command as ShadcnCommand } from "./shadcn/Command";
import { Contextmenu as ShadcnContextmenu } from "./shadcn/Contextmenu";
import { Datatable as ShadcnDatatable } from "./shadcn/Datatable";
import { Datepicker as ShadcnDatepicker } from "./shadcn/Datepicker";
import { Dialog as ShadcnDialog } from "./shadcn/Dialog";
import { Divider as ShadcnDivider } from "./shadcn/Divider";
import { Drawer as ShadcnDrawer } from "./shadcn/Drawer";
import { Empty as ShadcnEmpty } from "./shadcn/Empty";
import { Field as ShadcnField } from "./shadcn/Field";
import { Hovercard as ShadcnHovercard } from "./shadcn/Hovercard";
import { Input as ShadcnInput } from "./shadcn/Input";
import { Inputgroup as ShadcnInputgroup } from "./shadcn/Inputgroup";
import { Inputotp as ShadcnInputotp } from "./shadcn/Inputotp";
import { Kbd as ShadcnKbd } from "./shadcn/Kbd";
import { Label as ShadcnLabel } from "./shadcn/Label";
import { Link as ShadcnLink } from "./shadcn/Link";
import { Listrow as ShadcnListrow } from "./shadcn/Listrow";
import { Marker as ShadcnMarker } from "./shadcn/Marker";
import { Menu as ShadcnMenu } from "./shadcn/Menu";
import { Menubar as ShadcnMenubar } from "./shadcn/Menubar";
import { Message as ShadcnMessage } from "./shadcn/Message";
import { Messagescroller as ShadcnMessagescroller } from "./shadcn/Messagescroller";
import { Nativeselect as ShadcnNativeselect } from "./shadcn/Nativeselect";
import { Navigationmenu as ShadcnNavigationmenu } from "./shadcn/Navigationmenu";
import { Pageheader as ShadcnPageheader } from "./shadcn/Pageheader";
import { Pagination as ShadcnPagination } from "./shadcn/Pagination";
import { Popover as ShadcnPopover } from "./shadcn/Popover";
import { Progress as ShadcnProgress } from "./shadcn/Progress";
import { Prose as ShadcnProse } from "./shadcn/Prose";
import { Questionnaire as ShadcnQuestionnaire } from "./shadcn/Questionnaire";
import { Radio as ShadcnRadio } from "./shadcn/Radio";
import { Resizable as ShadcnResizable } from "./shadcn/Resizable";
import { Scrollarea as ShadcnScrollarea } from "./shadcn/Scrollarea";
import { Segmented as ShadcnSegmented } from "./shadcn/Segmented";
import { Select as ShadcnSelect } from "./shadcn/Select";
import { Sheet as ShadcnSheet } from "./shadcn/Sheet";
import { Sidebar as ShadcnSidebar } from "./shadcn/Sidebar";
import { Skeleton as ShadcnSkeleton } from "./shadcn/Skeleton";
import { Slider as ShadcnSlider } from "./shadcn/Slider";
import { Spinner as ShadcnSpinner } from "./shadcn/Spinner";
import { Stages as ShadcnStages } from "./shadcn/Stages";
import { Stepper as ShadcnStepper } from "./shadcn/Stepper";
import { Switch as ShadcnSwitch } from "./shadcn/Switch";
import { Table as ShadcnTable } from "./shadcn/Table";
import { Tabs as ShadcnTabs } from "./shadcn/Tabs";
import { Toast as ShadcnToast } from "./shadcn/Toast";
import { Toggle as ShadcnToggle } from "./shadcn/Toggle";
import { Toolbar as ShadcnToolbar } from "./shadcn/Toolbar";
import { Tooltip as ShadcnTooltip } from "./shadcn/Tooltip";

// standalone 18종
import { Badge as StandaloneBadge } from "./standalone/Badge";
import { Button as StandaloneButton } from "./standalone/Button";
import { Chip as StandaloneChip } from "./standalone/Chip";
import { Colorpicker as StandaloneColorpicker } from "./standalone/Colorpicker";
import { Dialog as StandaloneDialog } from "./standalone/Dialog";
import { Divider as StandaloneDivider } from "./standalone/Divider";
import { Empty as StandaloneEmpty } from "./standalone/Empty";
import { Kbd as StandaloneKbd } from "./standalone/Kbd";
import { Marker as StandaloneMarker } from "./standalone/Marker";
import { Meter as StandaloneMeter } from "./standalone/Meter";
import { Progress as StandaloneProgress } from "./standalone/Progress";
import { Prose as StandaloneProse } from "./standalone/Prose";
import { Ringcarousel as StandaloneRingcarousel } from "./standalone/Ringcarousel";
import { Skeleton as StandaloneSkeleton } from "./standalone/Skeleton";
import { Spinner as StandaloneSpinner } from "./standalone/Spinner";
import { Stat as StandaloneStat } from "./standalone/Stat";
import { Toast as StandaloneToast } from "./standalone/Toast";
import { Toggle as StandaloneToggle } from "./standalone/Toggle";

import { byMode as muiS01Cobalt } from "../../../generated/01-cobalt/base/mui/theme";
import { byMode as muiS02Graphite } from "../../../generated/02-graphite/base/mui/theme";
import { byMode as muiS03Ember } from "../../../generated/03-ember/base/mui/theme";
import { byMode as muiS04Jade } from "../../../generated/04-jade/base/mui/theme";
import { byMode as muiS05Plum } from "../../../generated/05-plum/base/mui/theme";
import { byMode as muiS06Slate } from "../../../generated/06-slate/base/mui/theme";
import { byMode as muiS07Emerald } from "../../../generated/07-emerald/base/mui/theme";
import { byMode as muiS08Indigo } from "../../../generated/08-indigo/base/mui/theme";
import { byMode as muiS09Sand } from "../../../generated/09-sand/base/mui/theme";
import { byMode as muiS10Teal } from "../../../generated/10-teal/base/mui/theme";
import { byMode as muiS11Crimson } from "../../../generated/11-crimson/base/mui/theme";
import { byMode as muiS12Moss } from "../../../generated/12-moss/base/mui/theme";
import { byMode as muiS13Azure } from "../../../generated/13-azure/base/mui/theme";
import { byMode as muiS14Violet } from "../../../generated/14-violet/base/mui/theme";
import { byMode as muiS15Rust } from "../../../generated/15-rust/base/mui/theme";
import { byMode as muiS16Mint } from "../../../generated/16-mint/base/mui/theme";
import { byMode as muiS17Navy } from "../../../generated/17-navy/base/mui/theme";
import { byMode as muiS18Saffron } from "../../../generated/18-saffron/base/mui/theme";
import { byMode as muiS19Fog } from "../../../generated/19-fog/base/mui/theme";
import { byMode as muiS20Berry } from "../../../generated/20-berry/base/mui/theme";
const MUI_THEME = {
  "01-cobalt": muiS01Cobalt,
  "02-graphite": muiS02Graphite,
  "03-ember": muiS03Ember,
  "04-jade": muiS04Jade,
  "05-plum": muiS05Plum,
  "06-slate": muiS06Slate,
  "07-emerald": muiS07Emerald,
  "08-indigo": muiS08Indigo,
  "09-sand": muiS09Sand,
  "10-teal": muiS10Teal,
  "11-crimson": muiS11Crimson,
  "12-moss": muiS12Moss,
  "13-azure": muiS13Azure,
  "14-violet": muiS14Violet,
  "15-rust": muiS15Rust,
  "16-mint": muiS16Mint,
  "17-navy": muiS17Navy,
  "18-saffron": muiS18Saffron,
  "19-fog": muiS19Fog,
  "20-berry": muiS20Berry,
};

import { byMode as antdS01Cobalt } from "../../../generated/01-cobalt/base/antd/theme";
import { byMode as antdS02Graphite } from "../../../generated/02-graphite/base/antd/theme";
import { byMode as antdS03Ember } from "../../../generated/03-ember/base/antd/theme";
import { byMode as antdS04Jade } from "../../../generated/04-jade/base/antd/theme";
import { byMode as antdS05Plum } from "../../../generated/05-plum/base/antd/theme";
import { byMode as antdS06Slate } from "../../../generated/06-slate/base/antd/theme";
import { byMode as antdS07Emerald } from "../../../generated/07-emerald/base/antd/theme";
import { byMode as antdS08Indigo } from "../../../generated/08-indigo/base/antd/theme";
import { byMode as antdS09Sand } from "../../../generated/09-sand/base/antd/theme";
import { byMode as antdS10Teal } from "../../../generated/10-teal/base/antd/theme";
import { byMode as antdS11Crimson } from "../../../generated/11-crimson/base/antd/theme";
import { byMode as antdS12Moss } from "../../../generated/12-moss/base/antd/theme";
import { byMode as antdS13Azure } from "../../../generated/13-azure/base/antd/theme";
import { byMode as antdS14Violet } from "../../../generated/14-violet/base/antd/theme";
import { byMode as antdS15Rust } from "../../../generated/15-rust/base/antd/theme";
import { byMode as antdS16Mint } from "../../../generated/16-mint/base/antd/theme";
import { byMode as antdS17Navy } from "../../../generated/17-navy/base/antd/theme";
import { byMode as antdS18Saffron } from "../../../generated/18-saffron/base/antd/theme";
import { byMode as antdS19Fog } from "../../../generated/19-fog/base/antd/theme";
import { byMode as antdS20Berry } from "../../../generated/20-berry/base/antd/theme";
const ANTD_THEME = {
  "01-cobalt": antdS01Cobalt,
  "02-graphite": antdS02Graphite,
  "03-ember": antdS03Ember,
  "04-jade": antdS04Jade,
  "05-plum": antdS05Plum,
  "06-slate": antdS06Slate,
  "07-emerald": antdS07Emerald,
  "08-indigo": antdS08Indigo,
  "09-sand": antdS09Sand,
  "10-teal": antdS10Teal,
  "11-crimson": antdS11Crimson,
  "12-moss": antdS12Moss,
  "13-azure": antdS13Azure,
  "14-violet": antdS14Violet,
  "15-rust": antdS15Rust,
  "16-mint": antdS16Mint,
  "17-navy": antdS17Navy,
  "18-saffron": antdS18Saffron,
  "19-fog": antdS19Fog,
  "20-berry": antdS20Berry,
};

import { byMode as chakraS01Cobalt } from "../../../generated/01-cobalt/base/chakra/theme";
import { byMode as chakraS02Graphite } from "../../../generated/02-graphite/base/chakra/theme";
import { byMode as chakraS03Ember } from "../../../generated/03-ember/base/chakra/theme";
import { byMode as chakraS04Jade } from "../../../generated/04-jade/base/chakra/theme";
import { byMode as chakraS05Plum } from "../../../generated/05-plum/base/chakra/theme";
import { byMode as chakraS06Slate } from "../../../generated/06-slate/base/chakra/theme";
import { byMode as chakraS07Emerald } from "../../../generated/07-emerald/base/chakra/theme";
import { byMode as chakraS08Indigo } from "../../../generated/08-indigo/base/chakra/theme";
import { byMode as chakraS09Sand } from "../../../generated/09-sand/base/chakra/theme";
import { byMode as chakraS10Teal } from "../../../generated/10-teal/base/chakra/theme";
import { byMode as chakraS11Crimson } from "../../../generated/11-crimson/base/chakra/theme";
import { byMode as chakraS12Moss } from "../../../generated/12-moss/base/chakra/theme";
import { byMode as chakraS13Azure } from "../../../generated/13-azure/base/chakra/theme";
import { byMode as chakraS14Violet } from "../../../generated/14-violet/base/chakra/theme";
import { byMode as chakraS15Rust } from "../../../generated/15-rust/base/chakra/theme";
import { byMode as chakraS16Mint } from "../../../generated/16-mint/base/chakra/theme";
import { byMode as chakraS17Navy } from "../../../generated/17-navy/base/chakra/theme";
import { byMode as chakraS18Saffron } from "../../../generated/18-saffron/base/chakra/theme";
import { byMode as chakraS19Fog } from "../../../generated/19-fog/base/chakra/theme";
import { byMode as chakraS20Berry } from "../../../generated/20-berry/base/chakra/theme";
const CHAKRA_CONFIG = {
  "01-cobalt": chakraS01Cobalt,
  "02-graphite": chakraS02Graphite,
  "03-ember": chakraS03Ember,
  "04-jade": chakraS04Jade,
  "05-plum": chakraS05Plum,
  "06-slate": chakraS06Slate,
  "07-emerald": chakraS07Emerald,
  "08-indigo": chakraS08Indigo,
  "09-sand": chakraS09Sand,
  "10-teal": chakraS10Teal,
  "11-crimson": chakraS11Crimson,
  "12-moss": chakraS12Moss,
  "13-azure": chakraS13Azure,
  "14-violet": chakraS14Violet,
  "15-rust": chakraS15Rust,
  "16-mint": chakraS16Mint,
  "17-navy": chakraS17Navy,
  "18-saffron": chakraS18Saffron,
  "19-fog": chakraS19Fog,
  "20-berry": chakraS20Berry,
};

import { byMode as mantineS01Cobalt } from "../../../generated/01-cobalt/base/mantine/theme";
import { byMode as mantineS02Graphite } from "../../../generated/02-graphite/base/mantine/theme";
import { byMode as mantineS03Ember } from "../../../generated/03-ember/base/mantine/theme";
import { byMode as mantineS04Jade } from "../../../generated/04-jade/base/mantine/theme";
import { byMode as mantineS05Plum } from "../../../generated/05-plum/base/mantine/theme";
import { byMode as mantineS06Slate } from "../../../generated/06-slate/base/mantine/theme";
import { byMode as mantineS07Emerald } from "../../../generated/07-emerald/base/mantine/theme";
import { byMode as mantineS08Indigo } from "../../../generated/08-indigo/base/mantine/theme";
import { byMode as mantineS09Sand } from "../../../generated/09-sand/base/mantine/theme";
import { byMode as mantineS10Teal } from "../../../generated/10-teal/base/mantine/theme";
import { byMode as mantineS11Crimson } from "../../../generated/11-crimson/base/mantine/theme";
import { byMode as mantineS12Moss } from "../../../generated/12-moss/base/mantine/theme";
import { byMode as mantineS13Azure } from "../../../generated/13-azure/base/mantine/theme";
import { byMode as mantineS14Violet } from "../../../generated/14-violet/base/mantine/theme";
import { byMode as mantineS15Rust } from "../../../generated/15-rust/base/mantine/theme";
import { byMode as mantineS16Mint } from "../../../generated/16-mint/base/mantine/theme";
import { byMode as mantineS17Navy } from "../../../generated/17-navy/base/mantine/theme";
import { byMode as mantineS18Saffron } from "../../../generated/18-saffron/base/mantine/theme";
import { byMode as mantineS19Fog } from "../../../generated/19-fog/base/mantine/theme";
import { byMode as mantineS20Berry } from "../../../generated/20-berry/base/mantine/theme";
const MANTINE_THEME = {
  "01-cobalt": mantineS01Cobalt,
  "02-graphite": mantineS02Graphite,
  "03-ember": mantineS03Ember,
  "04-jade": mantineS04Jade,
  "05-plum": mantineS05Plum,
  "06-slate": mantineS06Slate,
  "07-emerald": mantineS07Emerald,
  "08-indigo": mantineS08Indigo,
  "09-sand": mantineS09Sand,
  "10-teal": mantineS10Teal,
  "11-crimson": mantineS11Crimson,
  "12-moss": mantineS12Moss,
  "13-azure": mantineS13Azure,
  "14-violet": mantineS14Violet,
  "15-rust": mantineS15Rust,
  "16-mint": mantineS16Mint,
  "17-navy": mantineS17Navy,
  "18-saffron": mantineS18Saffron,
  "19-fog": mantineS19Fog,
  "20-berry": mantineS20Berry,
};

import cssS01CobaltBadge from "../systems/css/01-cobalt/badge.json";
import cssS01CobaltButton from "../systems/css/01-cobalt/button.json";
import cssS01CobaltChip from "../systems/css/01-cobalt/chip.json";
import cssS01CobaltColorpicker from "../systems/css/01-cobalt/colorpicker.json";
import cssS01CobaltDialog from "../systems/css/01-cobalt/dialog.json";
import cssS01CobaltDivider from "../systems/css/01-cobalt/divider.json";
import cssS01CobaltEmpty from "../systems/css/01-cobalt/empty.json";
import cssS01CobaltKbd from "../systems/css/01-cobalt/kbd.json";
import cssS01CobaltMarker from "../systems/css/01-cobalt/marker.json";
import cssS01CobaltMeter from "../systems/css/01-cobalt/meter.json";
import cssS01CobaltProgress from "../systems/css/01-cobalt/progress.json";
import cssS01CobaltProse from "../systems/css/01-cobalt/prose.json";
import cssS01CobaltRingcarousel from "../systems/css/01-cobalt/ringcarousel.json";
import cssS01CobaltSkeleton from "../systems/css/01-cobalt/skeleton.json";
import cssS01CobaltSpinner from "../systems/css/01-cobalt/spinner.json";
import cssS01CobaltStat from "../systems/css/01-cobalt/stat.json";
import cssS01CobaltToast from "../systems/css/01-cobalt/toast.json";
import cssS01CobaltToggle from "../systems/css/01-cobalt/toggle.json";
import cssS02GraphiteBadge from "../systems/css/02-graphite/badge.json";
import cssS02GraphiteButton from "../systems/css/02-graphite/button.json";
import cssS02GraphiteChip from "../systems/css/02-graphite/chip.json";
import cssS02GraphiteColorpicker from "../systems/css/02-graphite/colorpicker.json";
import cssS02GraphiteDialog from "../systems/css/02-graphite/dialog.json";
import cssS02GraphiteDivider from "../systems/css/02-graphite/divider.json";
import cssS02GraphiteEmpty from "../systems/css/02-graphite/empty.json";
import cssS02GraphiteKbd from "../systems/css/02-graphite/kbd.json";
import cssS02GraphiteMarker from "../systems/css/02-graphite/marker.json";
import cssS02GraphiteMeter from "../systems/css/02-graphite/meter.json";
import cssS02GraphiteProgress from "../systems/css/02-graphite/progress.json";
import cssS02GraphiteProse from "../systems/css/02-graphite/prose.json";
import cssS02GraphiteRingcarousel from "../systems/css/02-graphite/ringcarousel.json";
import cssS02GraphiteSkeleton from "../systems/css/02-graphite/skeleton.json";
import cssS02GraphiteSpinner from "../systems/css/02-graphite/spinner.json";
import cssS02GraphiteStat from "../systems/css/02-graphite/stat.json";
import cssS02GraphiteToast from "../systems/css/02-graphite/toast.json";
import cssS02GraphiteToggle from "../systems/css/02-graphite/toggle.json";
import cssS03EmberBadge from "../systems/css/03-ember/badge.json";
import cssS03EmberButton from "../systems/css/03-ember/button.json";
import cssS03EmberChip from "../systems/css/03-ember/chip.json";
import cssS03EmberColorpicker from "../systems/css/03-ember/colorpicker.json";
import cssS03EmberDialog from "../systems/css/03-ember/dialog.json";
import cssS03EmberDivider from "../systems/css/03-ember/divider.json";
import cssS03EmberEmpty from "../systems/css/03-ember/empty.json";
import cssS03EmberKbd from "../systems/css/03-ember/kbd.json";
import cssS03EmberMarker from "../systems/css/03-ember/marker.json";
import cssS03EmberMeter from "../systems/css/03-ember/meter.json";
import cssS03EmberProgress from "../systems/css/03-ember/progress.json";
import cssS03EmberProse from "../systems/css/03-ember/prose.json";
import cssS03EmberRingcarousel from "../systems/css/03-ember/ringcarousel.json";
import cssS03EmberSkeleton from "../systems/css/03-ember/skeleton.json";
import cssS03EmberSpinner from "../systems/css/03-ember/spinner.json";
import cssS03EmberStat from "../systems/css/03-ember/stat.json";
import cssS03EmberToast from "../systems/css/03-ember/toast.json";
import cssS03EmberToggle from "../systems/css/03-ember/toggle.json";
import cssS04JadeBadge from "../systems/css/04-jade/badge.json";
import cssS04JadeButton from "../systems/css/04-jade/button.json";
import cssS04JadeChip from "../systems/css/04-jade/chip.json";
import cssS04JadeColorpicker from "../systems/css/04-jade/colorpicker.json";
import cssS04JadeDialog from "../systems/css/04-jade/dialog.json";
import cssS04JadeDivider from "../systems/css/04-jade/divider.json";
import cssS04JadeEmpty from "../systems/css/04-jade/empty.json";
import cssS04JadeKbd from "../systems/css/04-jade/kbd.json";
import cssS04JadeMarker from "../systems/css/04-jade/marker.json";
import cssS04JadeMeter from "../systems/css/04-jade/meter.json";
import cssS04JadeProgress from "../systems/css/04-jade/progress.json";
import cssS04JadeProse from "../systems/css/04-jade/prose.json";
import cssS04JadeRingcarousel from "../systems/css/04-jade/ringcarousel.json";
import cssS04JadeSkeleton from "../systems/css/04-jade/skeleton.json";
import cssS04JadeSpinner from "../systems/css/04-jade/spinner.json";
import cssS04JadeStat from "../systems/css/04-jade/stat.json";
import cssS04JadeToast from "../systems/css/04-jade/toast.json";
import cssS04JadeToggle from "../systems/css/04-jade/toggle.json";
import cssS05PlumBadge from "../systems/css/05-plum/badge.json";
import cssS05PlumButton from "../systems/css/05-plum/button.json";
import cssS05PlumChip from "../systems/css/05-plum/chip.json";
import cssS05PlumColorpicker from "../systems/css/05-plum/colorpicker.json";
import cssS05PlumDialog from "../systems/css/05-plum/dialog.json";
import cssS05PlumDivider from "../systems/css/05-plum/divider.json";
import cssS05PlumEmpty from "../systems/css/05-plum/empty.json";
import cssS05PlumKbd from "../systems/css/05-plum/kbd.json";
import cssS05PlumMarker from "../systems/css/05-plum/marker.json";
import cssS05PlumMeter from "../systems/css/05-plum/meter.json";
import cssS05PlumProgress from "../systems/css/05-plum/progress.json";
import cssS05PlumProse from "../systems/css/05-plum/prose.json";
import cssS05PlumRingcarousel from "../systems/css/05-plum/ringcarousel.json";
import cssS05PlumSkeleton from "../systems/css/05-plum/skeleton.json";
import cssS05PlumSpinner from "../systems/css/05-plum/spinner.json";
import cssS05PlumStat from "../systems/css/05-plum/stat.json";
import cssS05PlumToast from "../systems/css/05-plum/toast.json";
import cssS05PlumToggle from "../systems/css/05-plum/toggle.json";
import cssS06SlateBadge from "../systems/css/06-slate/badge.json";
import cssS06SlateButton from "../systems/css/06-slate/button.json";
import cssS06SlateChip from "../systems/css/06-slate/chip.json";
import cssS06SlateColorpicker from "../systems/css/06-slate/colorpicker.json";
import cssS06SlateDialog from "../systems/css/06-slate/dialog.json";
import cssS06SlateDivider from "../systems/css/06-slate/divider.json";
import cssS06SlateEmpty from "../systems/css/06-slate/empty.json";
import cssS06SlateKbd from "../systems/css/06-slate/kbd.json";
import cssS06SlateMarker from "../systems/css/06-slate/marker.json";
import cssS06SlateMeter from "../systems/css/06-slate/meter.json";
import cssS06SlateProgress from "../systems/css/06-slate/progress.json";
import cssS06SlateProse from "../systems/css/06-slate/prose.json";
import cssS06SlateRingcarousel from "../systems/css/06-slate/ringcarousel.json";
import cssS06SlateSkeleton from "../systems/css/06-slate/skeleton.json";
import cssS06SlateSpinner from "../systems/css/06-slate/spinner.json";
import cssS06SlateStat from "../systems/css/06-slate/stat.json";
import cssS06SlateToast from "../systems/css/06-slate/toast.json";
import cssS06SlateToggle from "../systems/css/06-slate/toggle.json";
import cssS07EmeraldBadge from "../systems/css/07-emerald/badge.json";
import cssS07EmeraldButton from "../systems/css/07-emerald/button.json";
import cssS07EmeraldChip from "../systems/css/07-emerald/chip.json";
import cssS07EmeraldColorpicker from "../systems/css/07-emerald/colorpicker.json";
import cssS07EmeraldDialog from "../systems/css/07-emerald/dialog.json";
import cssS07EmeraldDivider from "../systems/css/07-emerald/divider.json";
import cssS07EmeraldEmpty from "../systems/css/07-emerald/empty.json";
import cssS07EmeraldKbd from "../systems/css/07-emerald/kbd.json";
import cssS07EmeraldMarker from "../systems/css/07-emerald/marker.json";
import cssS07EmeraldMeter from "../systems/css/07-emerald/meter.json";
import cssS07EmeraldProgress from "../systems/css/07-emerald/progress.json";
import cssS07EmeraldProse from "../systems/css/07-emerald/prose.json";
import cssS07EmeraldRingcarousel from "../systems/css/07-emerald/ringcarousel.json";
import cssS07EmeraldSkeleton from "../systems/css/07-emerald/skeleton.json";
import cssS07EmeraldSpinner from "../systems/css/07-emerald/spinner.json";
import cssS07EmeraldStat from "../systems/css/07-emerald/stat.json";
import cssS07EmeraldToast from "../systems/css/07-emerald/toast.json";
import cssS07EmeraldToggle from "../systems/css/07-emerald/toggle.json";
import cssS08IndigoBadge from "../systems/css/08-indigo/badge.json";
import cssS08IndigoButton from "../systems/css/08-indigo/button.json";
import cssS08IndigoChip from "../systems/css/08-indigo/chip.json";
import cssS08IndigoColorpicker from "../systems/css/08-indigo/colorpicker.json";
import cssS08IndigoDialog from "../systems/css/08-indigo/dialog.json";
import cssS08IndigoDivider from "../systems/css/08-indigo/divider.json";
import cssS08IndigoEmpty from "../systems/css/08-indigo/empty.json";
import cssS08IndigoKbd from "../systems/css/08-indigo/kbd.json";
import cssS08IndigoMarker from "../systems/css/08-indigo/marker.json";
import cssS08IndigoMeter from "../systems/css/08-indigo/meter.json";
import cssS08IndigoProgress from "../systems/css/08-indigo/progress.json";
import cssS08IndigoProse from "../systems/css/08-indigo/prose.json";
import cssS08IndigoRingcarousel from "../systems/css/08-indigo/ringcarousel.json";
import cssS08IndigoSkeleton from "../systems/css/08-indigo/skeleton.json";
import cssS08IndigoSpinner from "../systems/css/08-indigo/spinner.json";
import cssS08IndigoStat from "../systems/css/08-indigo/stat.json";
import cssS08IndigoToast from "../systems/css/08-indigo/toast.json";
import cssS08IndigoToggle from "../systems/css/08-indigo/toggle.json";
import cssS09SandBadge from "../systems/css/09-sand/badge.json";
import cssS09SandButton from "../systems/css/09-sand/button.json";
import cssS09SandChip from "../systems/css/09-sand/chip.json";
import cssS09SandColorpicker from "../systems/css/09-sand/colorpicker.json";
import cssS09SandDialog from "../systems/css/09-sand/dialog.json";
import cssS09SandDivider from "../systems/css/09-sand/divider.json";
import cssS09SandEmpty from "../systems/css/09-sand/empty.json";
import cssS09SandKbd from "../systems/css/09-sand/kbd.json";
import cssS09SandMarker from "../systems/css/09-sand/marker.json";
import cssS09SandMeter from "../systems/css/09-sand/meter.json";
import cssS09SandProgress from "../systems/css/09-sand/progress.json";
import cssS09SandProse from "../systems/css/09-sand/prose.json";
import cssS09SandRingcarousel from "../systems/css/09-sand/ringcarousel.json";
import cssS09SandSkeleton from "../systems/css/09-sand/skeleton.json";
import cssS09SandSpinner from "../systems/css/09-sand/spinner.json";
import cssS09SandStat from "../systems/css/09-sand/stat.json";
import cssS09SandToast from "../systems/css/09-sand/toast.json";
import cssS09SandToggle from "../systems/css/09-sand/toggle.json";
import cssS10TealBadge from "../systems/css/10-teal/badge.json";
import cssS10TealButton from "../systems/css/10-teal/button.json";
import cssS10TealChip from "../systems/css/10-teal/chip.json";
import cssS10TealColorpicker from "../systems/css/10-teal/colorpicker.json";
import cssS10TealDialog from "../systems/css/10-teal/dialog.json";
import cssS10TealDivider from "../systems/css/10-teal/divider.json";
import cssS10TealEmpty from "../systems/css/10-teal/empty.json";
import cssS10TealKbd from "../systems/css/10-teal/kbd.json";
import cssS10TealMarker from "../systems/css/10-teal/marker.json";
import cssS10TealMeter from "../systems/css/10-teal/meter.json";
import cssS10TealProgress from "../systems/css/10-teal/progress.json";
import cssS10TealProse from "../systems/css/10-teal/prose.json";
import cssS10TealRingcarousel from "../systems/css/10-teal/ringcarousel.json";
import cssS10TealSkeleton from "../systems/css/10-teal/skeleton.json";
import cssS10TealSpinner from "../systems/css/10-teal/spinner.json";
import cssS10TealStat from "../systems/css/10-teal/stat.json";
import cssS10TealToast from "../systems/css/10-teal/toast.json";
import cssS10TealToggle from "../systems/css/10-teal/toggle.json";
import cssS11CrimsonBadge from "../systems/css/11-crimson/badge.json";
import cssS11CrimsonButton from "../systems/css/11-crimson/button.json";
import cssS11CrimsonChip from "../systems/css/11-crimson/chip.json";
import cssS11CrimsonColorpicker from "../systems/css/11-crimson/colorpicker.json";
import cssS11CrimsonDialog from "../systems/css/11-crimson/dialog.json";
import cssS11CrimsonDivider from "../systems/css/11-crimson/divider.json";
import cssS11CrimsonEmpty from "../systems/css/11-crimson/empty.json";
import cssS11CrimsonKbd from "../systems/css/11-crimson/kbd.json";
import cssS11CrimsonMarker from "../systems/css/11-crimson/marker.json";
import cssS11CrimsonMeter from "../systems/css/11-crimson/meter.json";
import cssS11CrimsonProgress from "../systems/css/11-crimson/progress.json";
import cssS11CrimsonProse from "../systems/css/11-crimson/prose.json";
import cssS11CrimsonRingcarousel from "../systems/css/11-crimson/ringcarousel.json";
import cssS11CrimsonSkeleton from "../systems/css/11-crimson/skeleton.json";
import cssS11CrimsonSpinner from "../systems/css/11-crimson/spinner.json";
import cssS11CrimsonStat from "../systems/css/11-crimson/stat.json";
import cssS11CrimsonToast from "../systems/css/11-crimson/toast.json";
import cssS11CrimsonToggle from "../systems/css/11-crimson/toggle.json";
import cssS12MossBadge from "../systems/css/12-moss/badge.json";
import cssS12MossButton from "../systems/css/12-moss/button.json";
import cssS12MossChip from "../systems/css/12-moss/chip.json";
import cssS12MossColorpicker from "../systems/css/12-moss/colorpicker.json";
import cssS12MossDialog from "../systems/css/12-moss/dialog.json";
import cssS12MossDivider from "../systems/css/12-moss/divider.json";
import cssS12MossEmpty from "../systems/css/12-moss/empty.json";
import cssS12MossKbd from "../systems/css/12-moss/kbd.json";
import cssS12MossMarker from "../systems/css/12-moss/marker.json";
import cssS12MossMeter from "../systems/css/12-moss/meter.json";
import cssS12MossProgress from "../systems/css/12-moss/progress.json";
import cssS12MossProse from "../systems/css/12-moss/prose.json";
import cssS12MossRingcarousel from "../systems/css/12-moss/ringcarousel.json";
import cssS12MossSkeleton from "../systems/css/12-moss/skeleton.json";
import cssS12MossSpinner from "../systems/css/12-moss/spinner.json";
import cssS12MossStat from "../systems/css/12-moss/stat.json";
import cssS12MossToast from "../systems/css/12-moss/toast.json";
import cssS12MossToggle from "../systems/css/12-moss/toggle.json";
import cssS13AzureBadge from "../systems/css/13-azure/badge.json";
import cssS13AzureButton from "../systems/css/13-azure/button.json";
import cssS13AzureChip from "../systems/css/13-azure/chip.json";
import cssS13AzureColorpicker from "../systems/css/13-azure/colorpicker.json";
import cssS13AzureDialog from "../systems/css/13-azure/dialog.json";
import cssS13AzureDivider from "../systems/css/13-azure/divider.json";
import cssS13AzureEmpty from "../systems/css/13-azure/empty.json";
import cssS13AzureKbd from "../systems/css/13-azure/kbd.json";
import cssS13AzureMarker from "../systems/css/13-azure/marker.json";
import cssS13AzureMeter from "../systems/css/13-azure/meter.json";
import cssS13AzureProgress from "../systems/css/13-azure/progress.json";
import cssS13AzureProse from "../systems/css/13-azure/prose.json";
import cssS13AzureRingcarousel from "../systems/css/13-azure/ringcarousel.json";
import cssS13AzureSkeleton from "../systems/css/13-azure/skeleton.json";
import cssS13AzureSpinner from "../systems/css/13-azure/spinner.json";
import cssS13AzureStat from "../systems/css/13-azure/stat.json";
import cssS13AzureToast from "../systems/css/13-azure/toast.json";
import cssS13AzureToggle from "../systems/css/13-azure/toggle.json";
import cssS14VioletBadge from "../systems/css/14-violet/badge.json";
import cssS14VioletButton from "../systems/css/14-violet/button.json";
import cssS14VioletChip from "../systems/css/14-violet/chip.json";
import cssS14VioletColorpicker from "../systems/css/14-violet/colorpicker.json";
import cssS14VioletDialog from "../systems/css/14-violet/dialog.json";
import cssS14VioletDivider from "../systems/css/14-violet/divider.json";
import cssS14VioletEmpty from "../systems/css/14-violet/empty.json";
import cssS14VioletKbd from "../systems/css/14-violet/kbd.json";
import cssS14VioletMarker from "../systems/css/14-violet/marker.json";
import cssS14VioletMeter from "../systems/css/14-violet/meter.json";
import cssS14VioletProgress from "../systems/css/14-violet/progress.json";
import cssS14VioletProse from "../systems/css/14-violet/prose.json";
import cssS14VioletRingcarousel from "../systems/css/14-violet/ringcarousel.json";
import cssS14VioletSkeleton from "../systems/css/14-violet/skeleton.json";
import cssS14VioletSpinner from "../systems/css/14-violet/spinner.json";
import cssS14VioletStat from "../systems/css/14-violet/stat.json";
import cssS14VioletToast from "../systems/css/14-violet/toast.json";
import cssS14VioletToggle from "../systems/css/14-violet/toggle.json";
import cssS15RustBadge from "../systems/css/15-rust/badge.json";
import cssS15RustButton from "../systems/css/15-rust/button.json";
import cssS15RustChip from "../systems/css/15-rust/chip.json";
import cssS15RustColorpicker from "../systems/css/15-rust/colorpicker.json";
import cssS15RustDialog from "../systems/css/15-rust/dialog.json";
import cssS15RustDivider from "../systems/css/15-rust/divider.json";
import cssS15RustEmpty from "../systems/css/15-rust/empty.json";
import cssS15RustKbd from "../systems/css/15-rust/kbd.json";
import cssS15RustMarker from "../systems/css/15-rust/marker.json";
import cssS15RustMeter from "../systems/css/15-rust/meter.json";
import cssS15RustProgress from "../systems/css/15-rust/progress.json";
import cssS15RustProse from "../systems/css/15-rust/prose.json";
import cssS15RustRingcarousel from "../systems/css/15-rust/ringcarousel.json";
import cssS15RustSkeleton from "../systems/css/15-rust/skeleton.json";
import cssS15RustSpinner from "../systems/css/15-rust/spinner.json";
import cssS15RustStat from "../systems/css/15-rust/stat.json";
import cssS15RustToast from "../systems/css/15-rust/toast.json";
import cssS15RustToggle from "../systems/css/15-rust/toggle.json";
import cssS16MintBadge from "../systems/css/16-mint/badge.json";
import cssS16MintButton from "../systems/css/16-mint/button.json";
import cssS16MintChip from "../systems/css/16-mint/chip.json";
import cssS16MintColorpicker from "../systems/css/16-mint/colorpicker.json";
import cssS16MintDialog from "../systems/css/16-mint/dialog.json";
import cssS16MintDivider from "../systems/css/16-mint/divider.json";
import cssS16MintEmpty from "../systems/css/16-mint/empty.json";
import cssS16MintKbd from "../systems/css/16-mint/kbd.json";
import cssS16MintMarker from "../systems/css/16-mint/marker.json";
import cssS16MintMeter from "../systems/css/16-mint/meter.json";
import cssS16MintProgress from "../systems/css/16-mint/progress.json";
import cssS16MintProse from "../systems/css/16-mint/prose.json";
import cssS16MintRingcarousel from "../systems/css/16-mint/ringcarousel.json";
import cssS16MintSkeleton from "../systems/css/16-mint/skeleton.json";
import cssS16MintSpinner from "../systems/css/16-mint/spinner.json";
import cssS16MintStat from "../systems/css/16-mint/stat.json";
import cssS16MintToast from "../systems/css/16-mint/toast.json";
import cssS16MintToggle from "../systems/css/16-mint/toggle.json";
import cssS17NavyBadge from "../systems/css/17-navy/badge.json";
import cssS17NavyButton from "../systems/css/17-navy/button.json";
import cssS17NavyChip from "../systems/css/17-navy/chip.json";
import cssS17NavyColorpicker from "../systems/css/17-navy/colorpicker.json";
import cssS17NavyDialog from "../systems/css/17-navy/dialog.json";
import cssS17NavyDivider from "../systems/css/17-navy/divider.json";
import cssS17NavyEmpty from "../systems/css/17-navy/empty.json";
import cssS17NavyKbd from "../systems/css/17-navy/kbd.json";
import cssS17NavyMarker from "../systems/css/17-navy/marker.json";
import cssS17NavyMeter from "../systems/css/17-navy/meter.json";
import cssS17NavyProgress from "../systems/css/17-navy/progress.json";
import cssS17NavyProse from "../systems/css/17-navy/prose.json";
import cssS17NavyRingcarousel from "../systems/css/17-navy/ringcarousel.json";
import cssS17NavySkeleton from "../systems/css/17-navy/skeleton.json";
import cssS17NavySpinner from "../systems/css/17-navy/spinner.json";
import cssS17NavyStat from "../systems/css/17-navy/stat.json";
import cssS17NavyToast from "../systems/css/17-navy/toast.json";
import cssS17NavyToggle from "../systems/css/17-navy/toggle.json";
import cssS18SaffronBadge from "../systems/css/18-saffron/badge.json";
import cssS18SaffronButton from "../systems/css/18-saffron/button.json";
import cssS18SaffronChip from "../systems/css/18-saffron/chip.json";
import cssS18SaffronColorpicker from "../systems/css/18-saffron/colorpicker.json";
import cssS18SaffronDialog from "../systems/css/18-saffron/dialog.json";
import cssS18SaffronDivider from "../systems/css/18-saffron/divider.json";
import cssS18SaffronEmpty from "../systems/css/18-saffron/empty.json";
import cssS18SaffronKbd from "../systems/css/18-saffron/kbd.json";
import cssS18SaffronMarker from "../systems/css/18-saffron/marker.json";
import cssS18SaffronMeter from "../systems/css/18-saffron/meter.json";
import cssS18SaffronProgress from "../systems/css/18-saffron/progress.json";
import cssS18SaffronProse from "../systems/css/18-saffron/prose.json";
import cssS18SaffronRingcarousel from "../systems/css/18-saffron/ringcarousel.json";
import cssS18SaffronSkeleton from "../systems/css/18-saffron/skeleton.json";
import cssS18SaffronSpinner from "../systems/css/18-saffron/spinner.json";
import cssS18SaffronStat from "../systems/css/18-saffron/stat.json";
import cssS18SaffronToast from "../systems/css/18-saffron/toast.json";
import cssS18SaffronToggle from "../systems/css/18-saffron/toggle.json";
import cssS19FogBadge from "../systems/css/19-fog/badge.json";
import cssS19FogButton from "../systems/css/19-fog/button.json";
import cssS19FogChip from "../systems/css/19-fog/chip.json";
import cssS19FogColorpicker from "../systems/css/19-fog/colorpicker.json";
import cssS19FogDialog from "../systems/css/19-fog/dialog.json";
import cssS19FogDivider from "../systems/css/19-fog/divider.json";
import cssS19FogEmpty from "../systems/css/19-fog/empty.json";
import cssS19FogKbd from "../systems/css/19-fog/kbd.json";
import cssS19FogMarker from "../systems/css/19-fog/marker.json";
import cssS19FogMeter from "../systems/css/19-fog/meter.json";
import cssS19FogProgress from "../systems/css/19-fog/progress.json";
import cssS19FogProse from "../systems/css/19-fog/prose.json";
import cssS19FogRingcarousel from "../systems/css/19-fog/ringcarousel.json";
import cssS19FogSkeleton from "../systems/css/19-fog/skeleton.json";
import cssS19FogSpinner from "../systems/css/19-fog/spinner.json";
import cssS19FogStat from "../systems/css/19-fog/stat.json";
import cssS19FogToast from "../systems/css/19-fog/toast.json";
import cssS19FogToggle from "../systems/css/19-fog/toggle.json";
import cssS20BerryBadge from "../systems/css/20-berry/badge.json";
import cssS20BerryButton from "../systems/css/20-berry/button.json";
import cssS20BerryChip from "../systems/css/20-berry/chip.json";
import cssS20BerryColorpicker from "../systems/css/20-berry/colorpicker.json";
import cssS20BerryDialog from "../systems/css/20-berry/dialog.json";
import cssS20BerryDivider from "../systems/css/20-berry/divider.json";
import cssS20BerryEmpty from "../systems/css/20-berry/empty.json";
import cssS20BerryKbd from "../systems/css/20-berry/kbd.json";
import cssS20BerryMarker from "../systems/css/20-berry/marker.json";
import cssS20BerryMeter from "../systems/css/20-berry/meter.json";
import cssS20BerryProgress from "../systems/css/20-berry/progress.json";
import cssS20BerryProse from "../systems/css/20-berry/prose.json";
import cssS20BerryRingcarousel from "../systems/css/20-berry/ringcarousel.json";
import cssS20BerrySkeleton from "../systems/css/20-berry/skeleton.json";
import cssS20BerrySpinner from "../systems/css/20-berry/spinner.json";
import cssS20BerryStat from "../systems/css/20-berry/stat.json";
import cssS20BerryToast from "../systems/css/20-berry/toast.json";
import cssS20BerryToggle from "../systems/css/20-berry/toggle.json";
const STANDALONE_CSS: Record<string, string> = {
  "01-cobalt": [cssS01CobaltBadge, cssS01CobaltButton, cssS01CobaltChip, cssS01CobaltColorpicker, cssS01CobaltDialog, cssS01CobaltDivider, cssS01CobaltEmpty, cssS01CobaltKbd, cssS01CobaltMarker, cssS01CobaltMeter, cssS01CobaltProgress, cssS01CobaltProse, cssS01CobaltRingcarousel, cssS01CobaltSkeleton, cssS01CobaltSpinner, cssS01CobaltStat, cssS01CobaltToast, cssS01CobaltToggle].join("\n"),
  "02-graphite": [cssS02GraphiteBadge, cssS02GraphiteButton, cssS02GraphiteChip, cssS02GraphiteColorpicker, cssS02GraphiteDialog, cssS02GraphiteDivider, cssS02GraphiteEmpty, cssS02GraphiteKbd, cssS02GraphiteMarker, cssS02GraphiteMeter, cssS02GraphiteProgress, cssS02GraphiteProse, cssS02GraphiteRingcarousel, cssS02GraphiteSkeleton, cssS02GraphiteSpinner, cssS02GraphiteStat, cssS02GraphiteToast, cssS02GraphiteToggle].join("\n"),
  "03-ember": [cssS03EmberBadge, cssS03EmberButton, cssS03EmberChip, cssS03EmberColorpicker, cssS03EmberDialog, cssS03EmberDivider, cssS03EmberEmpty, cssS03EmberKbd, cssS03EmberMarker, cssS03EmberMeter, cssS03EmberProgress, cssS03EmberProse, cssS03EmberRingcarousel, cssS03EmberSkeleton, cssS03EmberSpinner, cssS03EmberStat, cssS03EmberToast, cssS03EmberToggle].join("\n"),
  "04-jade": [cssS04JadeBadge, cssS04JadeButton, cssS04JadeChip, cssS04JadeColorpicker, cssS04JadeDialog, cssS04JadeDivider, cssS04JadeEmpty, cssS04JadeKbd, cssS04JadeMarker, cssS04JadeMeter, cssS04JadeProgress, cssS04JadeProse, cssS04JadeRingcarousel, cssS04JadeSkeleton, cssS04JadeSpinner, cssS04JadeStat, cssS04JadeToast, cssS04JadeToggle].join("\n"),
  "05-plum": [cssS05PlumBadge, cssS05PlumButton, cssS05PlumChip, cssS05PlumColorpicker, cssS05PlumDialog, cssS05PlumDivider, cssS05PlumEmpty, cssS05PlumKbd, cssS05PlumMarker, cssS05PlumMeter, cssS05PlumProgress, cssS05PlumProse, cssS05PlumRingcarousel, cssS05PlumSkeleton, cssS05PlumSpinner, cssS05PlumStat, cssS05PlumToast, cssS05PlumToggle].join("\n"),
  "06-slate": [cssS06SlateBadge, cssS06SlateButton, cssS06SlateChip, cssS06SlateColorpicker, cssS06SlateDialog, cssS06SlateDivider, cssS06SlateEmpty, cssS06SlateKbd, cssS06SlateMarker, cssS06SlateMeter, cssS06SlateProgress, cssS06SlateProse, cssS06SlateRingcarousel, cssS06SlateSkeleton, cssS06SlateSpinner, cssS06SlateStat, cssS06SlateToast, cssS06SlateToggle].join("\n"),
  "07-emerald": [cssS07EmeraldBadge, cssS07EmeraldButton, cssS07EmeraldChip, cssS07EmeraldColorpicker, cssS07EmeraldDialog, cssS07EmeraldDivider, cssS07EmeraldEmpty, cssS07EmeraldKbd, cssS07EmeraldMarker, cssS07EmeraldMeter, cssS07EmeraldProgress, cssS07EmeraldProse, cssS07EmeraldRingcarousel, cssS07EmeraldSkeleton, cssS07EmeraldSpinner, cssS07EmeraldStat, cssS07EmeraldToast, cssS07EmeraldToggle].join("\n"),
  "08-indigo": [cssS08IndigoBadge, cssS08IndigoButton, cssS08IndigoChip, cssS08IndigoColorpicker, cssS08IndigoDialog, cssS08IndigoDivider, cssS08IndigoEmpty, cssS08IndigoKbd, cssS08IndigoMarker, cssS08IndigoMeter, cssS08IndigoProgress, cssS08IndigoProse, cssS08IndigoRingcarousel, cssS08IndigoSkeleton, cssS08IndigoSpinner, cssS08IndigoStat, cssS08IndigoToast, cssS08IndigoToggle].join("\n"),
  "09-sand": [cssS09SandBadge, cssS09SandButton, cssS09SandChip, cssS09SandColorpicker, cssS09SandDialog, cssS09SandDivider, cssS09SandEmpty, cssS09SandKbd, cssS09SandMarker, cssS09SandMeter, cssS09SandProgress, cssS09SandProse, cssS09SandRingcarousel, cssS09SandSkeleton, cssS09SandSpinner, cssS09SandStat, cssS09SandToast, cssS09SandToggle].join("\n"),
  "10-teal": [cssS10TealBadge, cssS10TealButton, cssS10TealChip, cssS10TealColorpicker, cssS10TealDialog, cssS10TealDivider, cssS10TealEmpty, cssS10TealKbd, cssS10TealMarker, cssS10TealMeter, cssS10TealProgress, cssS10TealProse, cssS10TealRingcarousel, cssS10TealSkeleton, cssS10TealSpinner, cssS10TealStat, cssS10TealToast, cssS10TealToggle].join("\n"),
  "11-crimson": [cssS11CrimsonBadge, cssS11CrimsonButton, cssS11CrimsonChip, cssS11CrimsonColorpicker, cssS11CrimsonDialog, cssS11CrimsonDivider, cssS11CrimsonEmpty, cssS11CrimsonKbd, cssS11CrimsonMarker, cssS11CrimsonMeter, cssS11CrimsonProgress, cssS11CrimsonProse, cssS11CrimsonRingcarousel, cssS11CrimsonSkeleton, cssS11CrimsonSpinner, cssS11CrimsonStat, cssS11CrimsonToast, cssS11CrimsonToggle].join("\n"),
  "12-moss": [cssS12MossBadge, cssS12MossButton, cssS12MossChip, cssS12MossColorpicker, cssS12MossDialog, cssS12MossDivider, cssS12MossEmpty, cssS12MossKbd, cssS12MossMarker, cssS12MossMeter, cssS12MossProgress, cssS12MossProse, cssS12MossRingcarousel, cssS12MossSkeleton, cssS12MossSpinner, cssS12MossStat, cssS12MossToast, cssS12MossToggle].join("\n"),
  "13-azure": [cssS13AzureBadge, cssS13AzureButton, cssS13AzureChip, cssS13AzureColorpicker, cssS13AzureDialog, cssS13AzureDivider, cssS13AzureEmpty, cssS13AzureKbd, cssS13AzureMarker, cssS13AzureMeter, cssS13AzureProgress, cssS13AzureProse, cssS13AzureRingcarousel, cssS13AzureSkeleton, cssS13AzureSpinner, cssS13AzureStat, cssS13AzureToast, cssS13AzureToggle].join("\n"),
  "14-violet": [cssS14VioletBadge, cssS14VioletButton, cssS14VioletChip, cssS14VioletColorpicker, cssS14VioletDialog, cssS14VioletDivider, cssS14VioletEmpty, cssS14VioletKbd, cssS14VioletMarker, cssS14VioletMeter, cssS14VioletProgress, cssS14VioletProse, cssS14VioletRingcarousel, cssS14VioletSkeleton, cssS14VioletSpinner, cssS14VioletStat, cssS14VioletToast, cssS14VioletToggle].join("\n"),
  "15-rust": [cssS15RustBadge, cssS15RustButton, cssS15RustChip, cssS15RustColorpicker, cssS15RustDialog, cssS15RustDivider, cssS15RustEmpty, cssS15RustKbd, cssS15RustMarker, cssS15RustMeter, cssS15RustProgress, cssS15RustProse, cssS15RustRingcarousel, cssS15RustSkeleton, cssS15RustSpinner, cssS15RustStat, cssS15RustToast, cssS15RustToggle].join("\n"),
  "16-mint": [cssS16MintBadge, cssS16MintButton, cssS16MintChip, cssS16MintColorpicker, cssS16MintDialog, cssS16MintDivider, cssS16MintEmpty, cssS16MintKbd, cssS16MintMarker, cssS16MintMeter, cssS16MintProgress, cssS16MintProse, cssS16MintRingcarousel, cssS16MintSkeleton, cssS16MintSpinner, cssS16MintStat, cssS16MintToast, cssS16MintToggle].join("\n"),
  "17-navy": [cssS17NavyBadge, cssS17NavyButton, cssS17NavyChip, cssS17NavyColorpicker, cssS17NavyDialog, cssS17NavyDivider, cssS17NavyEmpty, cssS17NavyKbd, cssS17NavyMarker, cssS17NavyMeter, cssS17NavyProgress, cssS17NavyProse, cssS17NavyRingcarousel, cssS17NavySkeleton, cssS17NavySpinner, cssS17NavyStat, cssS17NavyToast, cssS17NavyToggle].join("\n"),
  "18-saffron": [cssS18SaffronBadge, cssS18SaffronButton, cssS18SaffronChip, cssS18SaffronColorpicker, cssS18SaffronDialog, cssS18SaffronDivider, cssS18SaffronEmpty, cssS18SaffronKbd, cssS18SaffronMarker, cssS18SaffronMeter, cssS18SaffronProgress, cssS18SaffronProse, cssS18SaffronRingcarousel, cssS18SaffronSkeleton, cssS18SaffronSpinner, cssS18SaffronStat, cssS18SaffronToast, cssS18SaffronToggle].join("\n"),
  "19-fog": [cssS19FogBadge, cssS19FogButton, cssS19FogChip, cssS19FogColorpicker, cssS19FogDialog, cssS19FogDivider, cssS19FogEmpty, cssS19FogKbd, cssS19FogMarker, cssS19FogMeter, cssS19FogProgress, cssS19FogProse, cssS19FogRingcarousel, cssS19FogSkeleton, cssS19FogSpinner, cssS19FogStat, cssS19FogToast, cssS19FogToggle].join("\n"),
  "20-berry": [cssS20BerryBadge, cssS20BerryButton, cssS20BerryChip, cssS20BerryColorpicker, cssS20BerryDialog, cssS20BerryDivider, cssS20BerryEmpty, cssS20BerryKbd, cssS20BerryMarker, cssS20BerryMeter, cssS20BerryProgress, cssS20BerryProse, cssS20BerryRingcarousel, cssS20BerrySkeleton, cssS20BerrySpinner, cssS20BerryStat, cssS20BerryToast, cssS20BerryToggle].join("\n"),
};

import shadcnInteropS01Cobalt from "../systems/css/01-cobalt/_theme-shadcn.json";
import shadcnInteropS02Graphite from "../systems/css/02-graphite/_theme-shadcn.json";
import shadcnInteropS03Ember from "../systems/css/03-ember/_theme-shadcn.json";
import shadcnInteropS04Jade from "../systems/css/04-jade/_theme-shadcn.json";
import shadcnInteropS05Plum from "../systems/css/05-plum/_theme-shadcn.json";
import shadcnInteropS06Slate from "../systems/css/06-slate/_theme-shadcn.json";
import shadcnInteropS07Emerald from "../systems/css/07-emerald/_theme-shadcn.json";
import shadcnInteropS08Indigo from "../systems/css/08-indigo/_theme-shadcn.json";
import shadcnInteropS09Sand from "../systems/css/09-sand/_theme-shadcn.json";
import shadcnInteropS10Teal from "../systems/css/10-teal/_theme-shadcn.json";
import shadcnInteropS11Crimson from "../systems/css/11-crimson/_theme-shadcn.json";
import shadcnInteropS12Moss from "../systems/css/12-moss/_theme-shadcn.json";
import shadcnInteropS13Azure from "../systems/css/13-azure/_theme-shadcn.json";
import shadcnInteropS14Violet from "../systems/css/14-violet/_theme-shadcn.json";
import shadcnInteropS15Rust from "../systems/css/15-rust/_theme-shadcn.json";
import shadcnInteropS16Mint from "../systems/css/16-mint/_theme-shadcn.json";
import shadcnInteropS17Navy from "../systems/css/17-navy/_theme-shadcn.json";
import shadcnInteropS18Saffron from "../systems/css/18-saffron/_theme-shadcn.json";
import shadcnInteropS19Fog from "../systems/css/19-fog/_theme-shadcn.json";
import shadcnInteropS20Berry from "../systems/css/20-berry/_theme-shadcn.json";
const SHADCN_INTEROP: Record<string, string> = {
  "01-cobalt": shadcnInteropS01Cobalt,
  "02-graphite": shadcnInteropS02Graphite,
  "03-ember": shadcnInteropS03Ember,
  "04-jade": shadcnInteropS04Jade,
  "05-plum": shadcnInteropS05Plum,
  "06-slate": shadcnInteropS06Slate,
  "07-emerald": shadcnInteropS07Emerald,
  "08-indigo": shadcnInteropS08Indigo,
  "09-sand": shadcnInteropS09Sand,
  "10-teal": shadcnInteropS10Teal,
  "11-crimson": shadcnInteropS11Crimson,
  "12-moss": shadcnInteropS12Moss,
  "13-azure": shadcnInteropS13Azure,
  "14-violet": shadcnInteropS14Violet,
  "15-rust": shadcnInteropS15Rust,
  "16-mint": shadcnInteropS16Mint,
  "17-navy": shadcnInteropS17Navy,
  "18-saffron": shadcnInteropS18Saffron,
  "19-fog": shadcnInteropS19Fog,
  "20-berry": shadcnInteropS20Berry,
};

// 베이스 공급자가 받는 props. mode는 필수
export interface BaseProviderProps { slug: string; mode: Mode; children: ReactNode }

export interface BaseDefinition {
  // 명세 base 값. 주소에 그대로 사용
  key: string;
  // 화면 표시 이름
  title: string;
  // 베이스가 실제 구현한 컴포넌트
  impl: Record<string, ComponentImpl>;
  // 받은 색의 테마 적용. 감쌀 대상 없는 베이스는 그대로 전달
  Provider: (props: BaseProviderProps) => ReactNode;
  // vars.css 외 이 색에 추가할 CSS. 없으면 빈 문자열
  css: (slug: string) => string;
}

// 색에 맞는 테마 선택. 매칭 실패 시 알림 표시
function pick<T>(map: Record<string, T>, slug: string, base: string): T {
  const found = map[slug];
  if (!found) {
    throw new Error(
      `${base}: ${slug} 의 테마가 없음. 토큰 빌드를 다시 실행할 것`,
    );
  }
  return found;
}

function antdProvider({ slug, mode, children }: BaseProviderProps) {
  return (
    <AntdStyleLayer>
      <ConfigProvider
        theme={pick(ANTD_THEME, slug, "antd")[mode]}
        button={ANTD_BUTTON_CONFIG}
        avatar={ANTD_AVATAR_CONFIG}
        spin={ANTD_SPIN_CONFIG}
      >
        {children}
      </ConfigProvider>
    </AntdStyleLayer>
  );
}

// 색, 모드 조합마다 system 캐싱. 매번 생성 시 스타일 전체 재계산
const CHAKRA_SYSTEM: Record<string, ReturnType<typeof createSystem>> = {};
function chakraSystem(slug: string, mode: Mode) {
  return (CHAKRA_SYSTEM[`${slug}/${mode}`] ??= createSystem(
    defaultConfig, pick(CHAKRA_CONFIG, slug, "chakra")[mode]));
}
function chakraProvider({ slug, mode, children }: BaseProviderProps) {
  return <ChakraProvider value={chakraSystem(slug, mode)}>{children}</ChakraProvider>;
}

// forceColorScheme으로 밝기 고정, 안 하면 다크 규칙이 다시 얹힐 수 있음
function mantineProvider({ slug, mode, children }: BaseProviderProps) {
  return (
    <MantineProvider
      theme={pick(MANTINE_THEME, slug, "mantine")[mode]}
      forceColorScheme={mode === "light" ? "light" : "dark"}
    >
      {children}
    </MantineProvider>
  );
}

function muiProvider({ slug, mode, children }: BaseProviderProps) {
  return (
    <ThemeProvider theme={pick(MUI_THEME, slug, "mui")[mode]}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

// 래퍼 불필요. CSS 변수만 맞으면 정상 렌더링. mode는 안 읽음
function shadcnProvider({ children }: BaseProviderProps) {
  return <>{children}</>;
}

// 래퍼 불필요. 자체 베이스는 CSS만으로 렌더링에 문제 없음
function standaloneProvider({ children }: BaseProviderProps) {
  return <>{children}</>;
}

export const BASES: Record<string, BaseDefinition> = {
  antd: {
    key: "antd",
    title: "Ant Design",
    impl: {  },
    Provider: antdProvider,
    css:  => "",
  },
  chakra: {
    key: "chakra",
    title: "Chakra UI",
    impl: { button: ChakraButton as ComponentImpl, dialog: ChakraDialog as ComponentImpl },
    Provider: chakraProvider,
    css:  => "",
  },
  mantine: {
    key: "mantine",
    title: "Mantine",
    impl: { button: MantineButton as ComponentImpl, dialog: MantineDialog as ComponentImpl },
    Provider: mantineProvider,
    css:  => "",
  },
  mui: {
    key: "mui",
    title: "MUI",
    impl: {  },
    Provider: muiProvider,
    css:  => "",
  },
  shadcn: {
    key: "shadcn",
    title: "shadcn/ui",
    impl: { accordion: ShadcnAccordion as ComponentImpl, alert: ShadcnAlert as ComponentImpl, alertdialog: ShadcnAlertdialog as ComponentImpl, aspectratio: ShadcnAspectratio as ComponentImpl, attachment: ShadcnAttachment as ComponentImpl, avatar: ShadcnAvatar as ComponentImpl, badge: ShadcnBadge as ComponentImpl, banner: ShadcnBanner as ComponentImpl, breadcrumb: ShadcnBreadcrumb as ComponentImpl, bubble: ShadcnBubble as ComponentImpl, button: ShadcnButton as ComponentImpl, calendar: ShadcnCalendar as ComponentImpl, card: ShadcnCard as ComponentImpl, carousel: ShadcnCarousel as ComponentImpl, chart: ShadcnChart as ComponentImpl, checkbox: ShadcnCheckbox as ComponentImpl, collapsible: ShadcnCollapsible as ComponentImpl, combobox: ShadcnCombobox as ComponentImpl, command: ShadcnCommand as ComponentImpl, contextmenu: ShadcnContextmenu as ComponentImpl, datatable: ShadcnDatatable as ComponentImpl, datepicker: ShadcnDatepicker as ComponentImpl, dialog: ShadcnDialog as ComponentImpl, divider: ShadcnDivider as ComponentImpl, drawer: ShadcnDrawer as ComponentImpl, empty: ShadcnEmpty as ComponentImpl, field: ShadcnField as ComponentImpl, hovercard: ShadcnHovercard as ComponentImpl, input: ShadcnInput as ComponentImpl, inputgroup: ShadcnInputgroup as ComponentImpl, inputotp: ShadcnInputotp as ComponentImpl, kbd: ShadcnKbd as ComponentImpl, label: ShadcnLabel as ComponentImpl, link: ShadcnLink as ComponentImpl, listrow: ShadcnListrow as ComponentImpl, marker: ShadcnMarker as ComponentImpl, menu: ShadcnMenu as ComponentImpl, menubar: ShadcnMenubar as ComponentImpl, message: ShadcnMessage as ComponentImpl, messagescroller: ShadcnMessagescroller as ComponentImpl, nativeselect: ShadcnNativeselect as ComponentImpl, navigationmenu: ShadcnNavigationmenu as ComponentImpl, pageheader: ShadcnPageheader as ComponentImpl, pagination: ShadcnPagination as ComponentImpl, popover: ShadcnPopover as ComponentImpl, progress: ShadcnProgress as ComponentImpl, prose: ShadcnProse as ComponentImpl, questionnaire: ShadcnQuestionnaire as ComponentImpl, radio: ShadcnRadio as ComponentImpl, resizable: ShadcnResizable as ComponentImpl, scrollarea: ShadcnScrollarea as ComponentImpl, segmented: ShadcnSegmented as ComponentImpl, select: ShadcnSelect as ComponentImpl, sheet: ShadcnSheet as ComponentImpl, sidebar: ShadcnSidebar as ComponentImpl, skeleton: ShadcnSkeleton as ComponentImpl, slider: ShadcnSlider as ComponentImpl, spinner: ShadcnSpinner as ComponentImpl, stages: ShadcnStages as ComponentImpl, stepper: ShadcnStepper as ComponentImpl, switch: ShadcnSwitch as ComponentImpl, table: ShadcnTable as ComponentImpl, tabs: ShadcnTabs as ComponentImpl, toast: ShadcnToast as ComponentImpl, toggle: ShadcnToggle as ComponentImpl, toolbar: ShadcnToolbar as ComponentImpl, tooltip: ShadcnTooltip as ComponentImpl },
    Provider: shadcnProvider,
    css: (slug: string) => SHADCN_INTEROP[slug] ?? "",
  },
  standalone: {
    key: "standalone",
    title: "자체 구현",
    impl: { badge: StandaloneBadge as ComponentImpl, button: StandaloneButton as ComponentImpl, chip: StandaloneChip as ComponentImpl, colorpicker: StandaloneColorpicker as ComponentImpl, dialog: StandaloneDialog as ComponentImpl, divider: StandaloneDivider as ComponentImpl, empty: StandaloneEmpty as ComponentImpl, kbd: StandaloneKbd as ComponentImpl, marker: StandaloneMarker as ComponentImpl, meter: StandaloneMeter as ComponentImpl, progress: StandaloneProgress as ComponentImpl, prose: StandaloneProse as ComponentImpl, ringcarousel: StandaloneRingcarousel as ComponentImpl, skeleton: StandaloneSkeleton as ComponentImpl, spinner: StandaloneSpinner as ComponentImpl, stat: StandaloneStat as ComponentImpl, toast: StandaloneToast as ComponentImpl, toggle: StandaloneToggle as ComponentImpl },
    Provider: standaloneProvider,
    css: (slug: string) => STANDALONE_CSS[slug] ?? "",
  },
};

// 구현 많은 순서대로 화면 나열. 그 수가 프로젝트 범위
export const BASE_ORDER: string[] = ["shadcn", "standalone", "chakra", "mantine", "antd", "mui"];
