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

// standalone 38종
import { Accordion as StandaloneAccordion } from "./standalone/Accordion";
import { Alert as StandaloneAlert } from "./standalone/Alert";
import { Aspectratio as StandaloneAspectratio } from "./standalone/Aspectratio";
import { Badge as StandaloneBadge } from "./standalone/Badge";
import { Banner as StandaloneBanner } from "./standalone/Banner";
import { Breadcrumb as StandaloneBreadcrumb } from "./standalone/Breadcrumb";
import { Button as StandaloneButton } from "./standalone/Button";
import { Card as StandaloneCard } from "./standalone/Card";
import { Checkbox as StandaloneCheckbox } from "./standalone/Checkbox";
import { Chip as StandaloneChip } from "./standalone/Chip";
import { Colorpicker as StandaloneColorpicker } from "./standalone/Colorpicker";
import { Dialog as StandaloneDialog } from "./standalone/Dialog";
import { Divider as StandaloneDivider } from "./standalone/Divider";
import { Empty as StandaloneEmpty } from "./standalone/Empty";
import { Input as StandaloneInput } from "./standalone/Input";
import { Kbd as StandaloneKbd } from "./standalone/Kbd";
import { Label as StandaloneLabel } from "./standalone/Label";
import { Link as StandaloneLink } from "./standalone/Link";
import { Marker as StandaloneMarker } from "./standalone/Marker";
import { Meter as StandaloneMeter } from "./standalone/Meter";
import { Nativeselect as StandaloneNativeselect } from "./standalone/Nativeselect";
import { Pageheader as StandalonePageheader } from "./standalone/Pageheader";
import { Pagination as StandalonePagination } from "./standalone/Pagination";
import { Progress as StandaloneProgress } from "./standalone/Progress";
import { Prose as StandaloneProse } from "./standalone/Prose";
import { Radio as StandaloneRadio } from "./standalone/Radio";
import { Ringcarousel as StandaloneRingcarousel } from "./standalone/Ringcarousel";
import { Scrollarea as StandaloneScrollarea } from "./standalone/Scrollarea";
import { Segmented as StandaloneSegmented } from "./standalone/Segmented";
import { Skeleton as StandaloneSkeleton } from "./standalone/Skeleton";
import { Spinner as StandaloneSpinner } from "./standalone/Spinner";
import { Stages as StandaloneStages } from "./standalone/Stages";
import { Stat as StandaloneStat } from "./standalone/Stat";
import { Stepper as StandaloneStepper } from "./standalone/Stepper";
import { Switch as StandaloneSwitch } from "./standalone/Switch";
import { Table as StandaloneTable } from "./standalone/Table";
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

import cssS01CobaltAccordion from "../systems/css/01-cobalt/accordion.json";
import cssS01CobaltAlert from "../systems/css/01-cobalt/alert.json";
import cssS01CobaltAspectratio from "../systems/css/01-cobalt/aspectratio.json";
import cssS01CobaltBadge from "../systems/css/01-cobalt/badge.json";
import cssS01CobaltBanner from "../systems/css/01-cobalt/banner.json";
import cssS01CobaltBreadcrumb from "../systems/css/01-cobalt/breadcrumb.json";
import cssS01CobaltButton from "../systems/css/01-cobalt/button.json";
import cssS01CobaltCard from "../systems/css/01-cobalt/card.json";
import cssS01CobaltCheckbox from "../systems/css/01-cobalt/checkbox.json";
import cssS01CobaltChip from "../systems/css/01-cobalt/chip.json";
import cssS01CobaltColorpicker from "../systems/css/01-cobalt/colorpicker.json";
import cssS01CobaltDialog from "../systems/css/01-cobalt/dialog.json";
import cssS01CobaltDivider from "../systems/css/01-cobalt/divider.json";
import cssS01CobaltEmpty from "../systems/css/01-cobalt/empty.json";
import cssS01CobaltInput from "../systems/css/01-cobalt/input.json";
import cssS01CobaltKbd from "../systems/css/01-cobalt/kbd.json";
import cssS01CobaltLabel from "../systems/css/01-cobalt/label.json";
import cssS01CobaltLink from "../systems/css/01-cobalt/link.json";
import cssS01CobaltMarker from "../systems/css/01-cobalt/marker.json";
import cssS01CobaltMeter from "../systems/css/01-cobalt/meter.json";
import cssS01CobaltNativeselect from "../systems/css/01-cobalt/nativeselect.json";
import cssS01CobaltPageheader from "../systems/css/01-cobalt/pageheader.json";
import cssS01CobaltPagination from "../systems/css/01-cobalt/pagination.json";
import cssS01CobaltProgress from "../systems/css/01-cobalt/progress.json";
import cssS01CobaltProse from "../systems/css/01-cobalt/prose.json";
import cssS01CobaltRadio from "../systems/css/01-cobalt/radio.json";
import cssS01CobaltRingcarousel from "../systems/css/01-cobalt/ringcarousel.json";
import cssS01CobaltScrollarea from "../systems/css/01-cobalt/scrollarea.json";
import cssS01CobaltSegmented from "../systems/css/01-cobalt/segmented.json";
import cssS01CobaltSkeleton from "../systems/css/01-cobalt/skeleton.json";
import cssS01CobaltSpinner from "../systems/css/01-cobalt/spinner.json";
import cssS01CobaltStages from "../systems/css/01-cobalt/stages.json";
import cssS01CobaltStat from "../systems/css/01-cobalt/stat.json";
import cssS01CobaltStepper from "../systems/css/01-cobalt/stepper.json";
import cssS01CobaltSwitch from "../systems/css/01-cobalt/switch.json";
import cssS01CobaltTable from "../systems/css/01-cobalt/table.json";
import cssS01CobaltToast from "../systems/css/01-cobalt/toast.json";
import cssS01CobaltToggle from "../systems/css/01-cobalt/toggle.json";
import cssS02GraphiteAccordion from "../systems/css/02-graphite/accordion.json";
import cssS02GraphiteAlert from "../systems/css/02-graphite/alert.json";
import cssS02GraphiteAspectratio from "../systems/css/02-graphite/aspectratio.json";
import cssS02GraphiteBadge from "../systems/css/02-graphite/badge.json";
import cssS02GraphiteBanner from "../systems/css/02-graphite/banner.json";
import cssS02GraphiteBreadcrumb from "../systems/css/02-graphite/breadcrumb.json";
import cssS02GraphiteButton from "../systems/css/02-graphite/button.json";
import cssS02GraphiteCard from "../systems/css/02-graphite/card.json";
import cssS02GraphiteCheckbox from "../systems/css/02-graphite/checkbox.json";
import cssS02GraphiteChip from "../systems/css/02-graphite/chip.json";
import cssS02GraphiteColorpicker from "../systems/css/02-graphite/colorpicker.json";
import cssS02GraphiteDialog from "../systems/css/02-graphite/dialog.json";
import cssS02GraphiteDivider from "../systems/css/02-graphite/divider.json";
import cssS02GraphiteEmpty from "../systems/css/02-graphite/empty.json";
import cssS02GraphiteInput from "../systems/css/02-graphite/input.json";
import cssS02GraphiteKbd from "../systems/css/02-graphite/kbd.json";
import cssS02GraphiteLabel from "../systems/css/02-graphite/label.json";
import cssS02GraphiteLink from "../systems/css/02-graphite/link.json";
import cssS02GraphiteMarker from "../systems/css/02-graphite/marker.json";
import cssS02GraphiteMeter from "../systems/css/02-graphite/meter.json";
import cssS02GraphiteNativeselect from "../systems/css/02-graphite/nativeselect.json";
import cssS02GraphitePageheader from "../systems/css/02-graphite/pageheader.json";
import cssS02GraphitePagination from "../systems/css/02-graphite/pagination.json";
import cssS02GraphiteProgress from "../systems/css/02-graphite/progress.json";
import cssS02GraphiteProse from "../systems/css/02-graphite/prose.json";
import cssS02GraphiteRadio from "../systems/css/02-graphite/radio.json";
import cssS02GraphiteRingcarousel from "../systems/css/02-graphite/ringcarousel.json";
import cssS02GraphiteScrollarea from "../systems/css/02-graphite/scrollarea.json";
import cssS02GraphiteSegmented from "../systems/css/02-graphite/segmented.json";
import cssS02GraphiteSkeleton from "../systems/css/02-graphite/skeleton.json";
import cssS02GraphiteSpinner from "../systems/css/02-graphite/spinner.json";
import cssS02GraphiteStages from "../systems/css/02-graphite/stages.json";
import cssS02GraphiteStat from "../systems/css/02-graphite/stat.json";
import cssS02GraphiteStepper from "../systems/css/02-graphite/stepper.json";
import cssS02GraphiteSwitch from "../systems/css/02-graphite/switch.json";
import cssS02GraphiteTable from "../systems/css/02-graphite/table.json";
import cssS02GraphiteToast from "../systems/css/02-graphite/toast.json";
import cssS02GraphiteToggle from "../systems/css/02-graphite/toggle.json";
import cssS03EmberAccordion from "../systems/css/03-ember/accordion.json";
import cssS03EmberAlert from "../systems/css/03-ember/alert.json";
import cssS03EmberAspectratio from "../systems/css/03-ember/aspectratio.json";
import cssS03EmberBadge from "../systems/css/03-ember/badge.json";
import cssS03EmberBanner from "../systems/css/03-ember/banner.json";
import cssS03EmberBreadcrumb from "../systems/css/03-ember/breadcrumb.json";
import cssS03EmberButton from "../systems/css/03-ember/button.json";
import cssS03EmberCard from "../systems/css/03-ember/card.json";
import cssS03EmberCheckbox from "../systems/css/03-ember/checkbox.json";
import cssS03EmberChip from "../systems/css/03-ember/chip.json";
import cssS03EmberColorpicker from "../systems/css/03-ember/colorpicker.json";
import cssS03EmberDialog from "../systems/css/03-ember/dialog.json";
import cssS03EmberDivider from "../systems/css/03-ember/divider.json";
import cssS03EmberEmpty from "../systems/css/03-ember/empty.json";
import cssS03EmberInput from "../systems/css/03-ember/input.json";
import cssS03EmberKbd from "../systems/css/03-ember/kbd.json";
import cssS03EmberLabel from "../systems/css/03-ember/label.json";
import cssS03EmberLink from "../systems/css/03-ember/link.json";
import cssS03EmberMarker from "../systems/css/03-ember/marker.json";
import cssS03EmberMeter from "../systems/css/03-ember/meter.json";
import cssS03EmberNativeselect from "../systems/css/03-ember/nativeselect.json";
import cssS03EmberPageheader from "../systems/css/03-ember/pageheader.json";
import cssS03EmberPagination from "../systems/css/03-ember/pagination.json";
import cssS03EmberProgress from "../systems/css/03-ember/progress.json";
import cssS03EmberProse from "../systems/css/03-ember/prose.json";
import cssS03EmberRadio from "../systems/css/03-ember/radio.json";
import cssS03EmberRingcarousel from "../systems/css/03-ember/ringcarousel.json";
import cssS03EmberScrollarea from "../systems/css/03-ember/scrollarea.json";
import cssS03EmberSegmented from "../systems/css/03-ember/segmented.json";
import cssS03EmberSkeleton from "../systems/css/03-ember/skeleton.json";
import cssS03EmberSpinner from "../systems/css/03-ember/spinner.json";
import cssS03EmberStages from "../systems/css/03-ember/stages.json";
import cssS03EmberStat from "../systems/css/03-ember/stat.json";
import cssS03EmberStepper from "../systems/css/03-ember/stepper.json";
import cssS03EmberSwitch from "../systems/css/03-ember/switch.json";
import cssS03EmberTable from "../systems/css/03-ember/table.json";
import cssS03EmberToast from "../systems/css/03-ember/toast.json";
import cssS03EmberToggle from "../systems/css/03-ember/toggle.json";
import cssS04JadeAccordion from "../systems/css/04-jade/accordion.json";
import cssS04JadeAlert from "../systems/css/04-jade/alert.json";
import cssS04JadeAspectratio from "../systems/css/04-jade/aspectratio.json";
import cssS04JadeBadge from "../systems/css/04-jade/badge.json";
import cssS04JadeBanner from "../systems/css/04-jade/banner.json";
import cssS04JadeBreadcrumb from "../systems/css/04-jade/breadcrumb.json";
import cssS04JadeButton from "../systems/css/04-jade/button.json";
import cssS04JadeCard from "../systems/css/04-jade/card.json";
import cssS04JadeCheckbox from "../systems/css/04-jade/checkbox.json";
import cssS04JadeChip from "../systems/css/04-jade/chip.json";
import cssS04JadeColorpicker from "../systems/css/04-jade/colorpicker.json";
import cssS04JadeDialog from "../systems/css/04-jade/dialog.json";
import cssS04JadeDivider from "../systems/css/04-jade/divider.json";
import cssS04JadeEmpty from "../systems/css/04-jade/empty.json";
import cssS04JadeInput from "../systems/css/04-jade/input.json";
import cssS04JadeKbd from "../systems/css/04-jade/kbd.json";
import cssS04JadeLabel from "../systems/css/04-jade/label.json";
import cssS04JadeLink from "../systems/css/04-jade/link.json";
import cssS04JadeMarker from "../systems/css/04-jade/marker.json";
import cssS04JadeMeter from "../systems/css/04-jade/meter.json";
import cssS04JadeNativeselect from "../systems/css/04-jade/nativeselect.json";
import cssS04JadePageheader from "../systems/css/04-jade/pageheader.json";
import cssS04JadePagination from "../systems/css/04-jade/pagination.json";
import cssS04JadeProgress from "../systems/css/04-jade/progress.json";
import cssS04JadeProse from "../systems/css/04-jade/prose.json";
import cssS04JadeRadio from "../systems/css/04-jade/radio.json";
import cssS04JadeRingcarousel from "../systems/css/04-jade/ringcarousel.json";
import cssS04JadeScrollarea from "../systems/css/04-jade/scrollarea.json";
import cssS04JadeSegmented from "../systems/css/04-jade/segmented.json";
import cssS04JadeSkeleton from "../systems/css/04-jade/skeleton.json";
import cssS04JadeSpinner from "../systems/css/04-jade/spinner.json";
import cssS04JadeStages from "../systems/css/04-jade/stages.json";
import cssS04JadeStat from "../systems/css/04-jade/stat.json";
import cssS04JadeStepper from "../systems/css/04-jade/stepper.json";
import cssS04JadeSwitch from "../systems/css/04-jade/switch.json";
import cssS04JadeTable from "../systems/css/04-jade/table.json";
import cssS04JadeToast from "../systems/css/04-jade/toast.json";
import cssS04JadeToggle from "../systems/css/04-jade/toggle.json";
import cssS05PlumAccordion from "../systems/css/05-plum/accordion.json";
import cssS05PlumAlert from "../systems/css/05-plum/alert.json";
import cssS05PlumAspectratio from "../systems/css/05-plum/aspectratio.json";
import cssS05PlumBadge from "../systems/css/05-plum/badge.json";
import cssS05PlumBanner from "../systems/css/05-plum/banner.json";
import cssS05PlumBreadcrumb from "../systems/css/05-plum/breadcrumb.json";
import cssS05PlumButton from "../systems/css/05-plum/button.json";
import cssS05PlumCard from "../systems/css/05-plum/card.json";
import cssS05PlumCheckbox from "../systems/css/05-plum/checkbox.json";
import cssS05PlumChip from "../systems/css/05-plum/chip.json";
import cssS05PlumColorpicker from "../systems/css/05-plum/colorpicker.json";
import cssS05PlumDialog from "../systems/css/05-plum/dialog.json";
import cssS05PlumDivider from "../systems/css/05-plum/divider.json";
import cssS05PlumEmpty from "../systems/css/05-plum/empty.json";
import cssS05PlumInput from "../systems/css/05-plum/input.json";
import cssS05PlumKbd from "../systems/css/05-plum/kbd.json";
import cssS05PlumLabel from "../systems/css/05-plum/label.json";
import cssS05PlumLink from "../systems/css/05-plum/link.json";
import cssS05PlumMarker from "../systems/css/05-plum/marker.json";
import cssS05PlumMeter from "../systems/css/05-plum/meter.json";
import cssS05PlumNativeselect from "../systems/css/05-plum/nativeselect.json";
import cssS05PlumPageheader from "../systems/css/05-plum/pageheader.json";
import cssS05PlumPagination from "../systems/css/05-plum/pagination.json";
import cssS05PlumProgress from "../systems/css/05-plum/progress.json";
import cssS05PlumProse from "../systems/css/05-plum/prose.json";
import cssS05PlumRadio from "../systems/css/05-plum/radio.json";
import cssS05PlumRingcarousel from "../systems/css/05-plum/ringcarousel.json";
import cssS05PlumScrollarea from "../systems/css/05-plum/scrollarea.json";
import cssS05PlumSegmented from "../systems/css/05-plum/segmented.json";
import cssS05PlumSkeleton from "../systems/css/05-plum/skeleton.json";
import cssS05PlumSpinner from "../systems/css/05-plum/spinner.json";
import cssS05PlumStages from "../systems/css/05-plum/stages.json";
import cssS05PlumStat from "../systems/css/05-plum/stat.json";
import cssS05PlumStepper from "../systems/css/05-plum/stepper.json";
import cssS05PlumSwitch from "../systems/css/05-plum/switch.json";
import cssS05PlumTable from "../systems/css/05-plum/table.json";
import cssS05PlumToast from "../systems/css/05-plum/toast.json";
import cssS05PlumToggle from "../systems/css/05-plum/toggle.json";
import cssS06SlateAccordion from "../systems/css/06-slate/accordion.json";
import cssS06SlateAlert from "../systems/css/06-slate/alert.json";
import cssS06SlateAspectratio from "../systems/css/06-slate/aspectratio.json";
import cssS06SlateBadge from "../systems/css/06-slate/badge.json";
import cssS06SlateBanner from "../systems/css/06-slate/banner.json";
import cssS06SlateBreadcrumb from "../systems/css/06-slate/breadcrumb.json";
import cssS06SlateButton from "../systems/css/06-slate/button.json";
import cssS06SlateCard from "../systems/css/06-slate/card.json";
import cssS06SlateCheckbox from "../systems/css/06-slate/checkbox.json";
import cssS06SlateChip from "../systems/css/06-slate/chip.json";
import cssS06SlateColorpicker from "../systems/css/06-slate/colorpicker.json";
import cssS06SlateDialog from "../systems/css/06-slate/dialog.json";
import cssS06SlateDivider from "../systems/css/06-slate/divider.json";
import cssS06SlateEmpty from "../systems/css/06-slate/empty.json";
import cssS06SlateInput from "../systems/css/06-slate/input.json";
import cssS06SlateKbd from "../systems/css/06-slate/kbd.json";
import cssS06SlateLabel from "../systems/css/06-slate/label.json";
import cssS06SlateLink from "../systems/css/06-slate/link.json";
import cssS06SlateMarker from "../systems/css/06-slate/marker.json";
import cssS06SlateMeter from "../systems/css/06-slate/meter.json";
import cssS06SlateNativeselect from "../systems/css/06-slate/nativeselect.json";
import cssS06SlatePageheader from "../systems/css/06-slate/pageheader.json";
import cssS06SlatePagination from "../systems/css/06-slate/pagination.json";
import cssS06SlateProgress from "../systems/css/06-slate/progress.json";
import cssS06SlateProse from "../systems/css/06-slate/prose.json";
import cssS06SlateRadio from "../systems/css/06-slate/radio.json";
import cssS06SlateRingcarousel from "../systems/css/06-slate/ringcarousel.json";
import cssS06SlateScrollarea from "../systems/css/06-slate/scrollarea.json";
import cssS06SlateSegmented from "../systems/css/06-slate/segmented.json";
import cssS06SlateSkeleton from "../systems/css/06-slate/skeleton.json";
import cssS06SlateSpinner from "../systems/css/06-slate/spinner.json";
import cssS06SlateStages from "../systems/css/06-slate/stages.json";
import cssS06SlateStat from "../systems/css/06-slate/stat.json";
import cssS06SlateStepper from "../systems/css/06-slate/stepper.json";
import cssS06SlateSwitch from "../systems/css/06-slate/switch.json";
import cssS06SlateTable from "../systems/css/06-slate/table.json";
import cssS06SlateToast from "../systems/css/06-slate/toast.json";
import cssS06SlateToggle from "../systems/css/06-slate/toggle.json";
import cssS07EmeraldAccordion from "../systems/css/07-emerald/accordion.json";
import cssS07EmeraldAlert from "../systems/css/07-emerald/alert.json";
import cssS07EmeraldAspectratio from "../systems/css/07-emerald/aspectratio.json";
import cssS07EmeraldBadge from "../systems/css/07-emerald/badge.json";
import cssS07EmeraldBanner from "../systems/css/07-emerald/banner.json";
import cssS07EmeraldBreadcrumb from "../systems/css/07-emerald/breadcrumb.json";
import cssS07EmeraldButton from "../systems/css/07-emerald/button.json";
import cssS07EmeraldCard from "../systems/css/07-emerald/card.json";
import cssS07EmeraldCheckbox from "../systems/css/07-emerald/checkbox.json";
import cssS07EmeraldChip from "../systems/css/07-emerald/chip.json";
import cssS07EmeraldColorpicker from "../systems/css/07-emerald/colorpicker.json";
import cssS07EmeraldDialog from "../systems/css/07-emerald/dialog.json";
import cssS07EmeraldDivider from "../systems/css/07-emerald/divider.json";
import cssS07EmeraldEmpty from "../systems/css/07-emerald/empty.json";
import cssS07EmeraldInput from "../systems/css/07-emerald/input.json";
import cssS07EmeraldKbd from "../systems/css/07-emerald/kbd.json";
import cssS07EmeraldLabel from "../systems/css/07-emerald/label.json";
import cssS07EmeraldLink from "../systems/css/07-emerald/link.json";
import cssS07EmeraldMarker from "../systems/css/07-emerald/marker.json";
import cssS07EmeraldMeter from "../systems/css/07-emerald/meter.json";
import cssS07EmeraldNativeselect from "../systems/css/07-emerald/nativeselect.json";
import cssS07EmeraldPageheader from "../systems/css/07-emerald/pageheader.json";
import cssS07EmeraldPagination from "../systems/css/07-emerald/pagination.json";
import cssS07EmeraldProgress from "../systems/css/07-emerald/progress.json";
import cssS07EmeraldProse from "../systems/css/07-emerald/prose.json";
import cssS07EmeraldRadio from "../systems/css/07-emerald/radio.json";
import cssS07EmeraldRingcarousel from "../systems/css/07-emerald/ringcarousel.json";
import cssS07EmeraldScrollarea from "../systems/css/07-emerald/scrollarea.json";
import cssS07EmeraldSegmented from "../systems/css/07-emerald/segmented.json";
import cssS07EmeraldSkeleton from "../systems/css/07-emerald/skeleton.json";
import cssS07EmeraldSpinner from "../systems/css/07-emerald/spinner.json";
import cssS07EmeraldStages from "../systems/css/07-emerald/stages.json";
import cssS07EmeraldStat from "../systems/css/07-emerald/stat.json";
import cssS07EmeraldStepper from "../systems/css/07-emerald/stepper.json";
import cssS07EmeraldSwitch from "../systems/css/07-emerald/switch.json";
import cssS07EmeraldTable from "../systems/css/07-emerald/table.json";
import cssS07EmeraldToast from "../systems/css/07-emerald/toast.json";
import cssS07EmeraldToggle from "../systems/css/07-emerald/toggle.json";
import cssS08IndigoAccordion from "../systems/css/08-indigo/accordion.json";
import cssS08IndigoAlert from "../systems/css/08-indigo/alert.json";
import cssS08IndigoAspectratio from "../systems/css/08-indigo/aspectratio.json";
import cssS08IndigoBadge from "../systems/css/08-indigo/badge.json";
import cssS08IndigoBanner from "../systems/css/08-indigo/banner.json";
import cssS08IndigoBreadcrumb from "../systems/css/08-indigo/breadcrumb.json";
import cssS08IndigoButton from "../systems/css/08-indigo/button.json";
import cssS08IndigoCard from "../systems/css/08-indigo/card.json";
import cssS08IndigoCheckbox from "../systems/css/08-indigo/checkbox.json";
import cssS08IndigoChip from "../systems/css/08-indigo/chip.json";
import cssS08IndigoColorpicker from "../systems/css/08-indigo/colorpicker.json";
import cssS08IndigoDialog from "../systems/css/08-indigo/dialog.json";
import cssS08IndigoDivider from "../systems/css/08-indigo/divider.json";
import cssS08IndigoEmpty from "../systems/css/08-indigo/empty.json";
import cssS08IndigoInput from "../systems/css/08-indigo/input.json";
import cssS08IndigoKbd from "../systems/css/08-indigo/kbd.json";
import cssS08IndigoLabel from "../systems/css/08-indigo/label.json";
import cssS08IndigoLink from "../systems/css/08-indigo/link.json";
import cssS08IndigoMarker from "../systems/css/08-indigo/marker.json";
import cssS08IndigoMeter from "../systems/css/08-indigo/meter.json";
import cssS08IndigoNativeselect from "../systems/css/08-indigo/nativeselect.json";
import cssS08IndigoPageheader from "../systems/css/08-indigo/pageheader.json";
import cssS08IndigoPagination from "../systems/css/08-indigo/pagination.json";
import cssS08IndigoProgress from "../systems/css/08-indigo/progress.json";
import cssS08IndigoProse from "../systems/css/08-indigo/prose.json";
import cssS08IndigoRadio from "../systems/css/08-indigo/radio.json";
import cssS08IndigoRingcarousel from "../systems/css/08-indigo/ringcarousel.json";
import cssS08IndigoScrollarea from "../systems/css/08-indigo/scrollarea.json";
import cssS08IndigoSegmented from "../systems/css/08-indigo/segmented.json";
import cssS08IndigoSkeleton from "../systems/css/08-indigo/skeleton.json";
import cssS08IndigoSpinner from "../systems/css/08-indigo/spinner.json";
import cssS08IndigoStages from "../systems/css/08-indigo/stages.json";
import cssS08IndigoStat from "../systems/css/08-indigo/stat.json";
import cssS08IndigoStepper from "../systems/css/08-indigo/stepper.json";
import cssS08IndigoSwitch from "../systems/css/08-indigo/switch.json";
import cssS08IndigoTable from "../systems/css/08-indigo/table.json";
import cssS08IndigoToast from "../systems/css/08-indigo/toast.json";
import cssS08IndigoToggle from "../systems/css/08-indigo/toggle.json";
import cssS09SandAccordion from "../systems/css/09-sand/accordion.json";
import cssS09SandAlert from "../systems/css/09-sand/alert.json";
import cssS09SandAspectratio from "../systems/css/09-sand/aspectratio.json";
import cssS09SandBadge from "../systems/css/09-sand/badge.json";
import cssS09SandBanner from "../systems/css/09-sand/banner.json";
import cssS09SandBreadcrumb from "../systems/css/09-sand/breadcrumb.json";
import cssS09SandButton from "../systems/css/09-sand/button.json";
import cssS09SandCard from "../systems/css/09-sand/card.json";
import cssS09SandCheckbox from "../systems/css/09-sand/checkbox.json";
import cssS09SandChip from "../systems/css/09-sand/chip.json";
import cssS09SandColorpicker from "../systems/css/09-sand/colorpicker.json";
import cssS09SandDialog from "../systems/css/09-sand/dialog.json";
import cssS09SandDivider from "../systems/css/09-sand/divider.json";
import cssS09SandEmpty from "../systems/css/09-sand/empty.json";
import cssS09SandInput from "../systems/css/09-sand/input.json";
import cssS09SandKbd from "../systems/css/09-sand/kbd.json";
import cssS09SandLabel from "../systems/css/09-sand/label.json";
import cssS09SandLink from "../systems/css/09-sand/link.json";
import cssS09SandMarker from "../systems/css/09-sand/marker.json";
import cssS09SandMeter from "../systems/css/09-sand/meter.json";
import cssS09SandNativeselect from "../systems/css/09-sand/nativeselect.json";
import cssS09SandPageheader from "../systems/css/09-sand/pageheader.json";
import cssS09SandPagination from "../systems/css/09-sand/pagination.json";
import cssS09SandProgress from "../systems/css/09-sand/progress.json";
import cssS09SandProse from "../systems/css/09-sand/prose.json";
import cssS09SandRadio from "../systems/css/09-sand/radio.json";
import cssS09SandRingcarousel from "../systems/css/09-sand/ringcarousel.json";
import cssS09SandScrollarea from "../systems/css/09-sand/scrollarea.json";
import cssS09SandSegmented from "../systems/css/09-sand/segmented.json";
import cssS09SandSkeleton from "../systems/css/09-sand/skeleton.json";
import cssS09SandSpinner from "../systems/css/09-sand/spinner.json";
import cssS09SandStages from "../systems/css/09-sand/stages.json";
import cssS09SandStat from "../systems/css/09-sand/stat.json";
import cssS09SandStepper from "../systems/css/09-sand/stepper.json";
import cssS09SandSwitch from "../systems/css/09-sand/switch.json";
import cssS09SandTable from "../systems/css/09-sand/table.json";
import cssS09SandToast from "../systems/css/09-sand/toast.json";
import cssS09SandToggle from "../systems/css/09-sand/toggle.json";
import cssS10TealAccordion from "../systems/css/10-teal/accordion.json";
import cssS10TealAlert from "../systems/css/10-teal/alert.json";
import cssS10TealAspectratio from "../systems/css/10-teal/aspectratio.json";
import cssS10TealBadge from "../systems/css/10-teal/badge.json";
import cssS10TealBanner from "../systems/css/10-teal/banner.json";
import cssS10TealBreadcrumb from "../systems/css/10-teal/breadcrumb.json";
import cssS10TealButton from "../systems/css/10-teal/button.json";
import cssS10TealCard from "../systems/css/10-teal/card.json";
import cssS10TealCheckbox from "../systems/css/10-teal/checkbox.json";
import cssS10TealChip from "../systems/css/10-teal/chip.json";
import cssS10TealColorpicker from "../systems/css/10-teal/colorpicker.json";
import cssS10TealDialog from "../systems/css/10-teal/dialog.json";
import cssS10TealDivider from "../systems/css/10-teal/divider.json";
import cssS10TealEmpty from "../systems/css/10-teal/empty.json";
import cssS10TealInput from "../systems/css/10-teal/input.json";
import cssS10TealKbd from "../systems/css/10-teal/kbd.json";
import cssS10TealLabel from "../systems/css/10-teal/label.json";
import cssS10TealLink from "../systems/css/10-teal/link.json";
import cssS10TealMarker from "../systems/css/10-teal/marker.json";
import cssS10TealMeter from "../systems/css/10-teal/meter.json";
import cssS10TealNativeselect from "../systems/css/10-teal/nativeselect.json";
import cssS10TealPageheader from "../systems/css/10-teal/pageheader.json";
import cssS10TealPagination from "../systems/css/10-teal/pagination.json";
import cssS10TealProgress from "../systems/css/10-teal/progress.json";
import cssS10TealProse from "../systems/css/10-teal/prose.json";
import cssS10TealRadio from "../systems/css/10-teal/radio.json";
import cssS10TealRingcarousel from "../systems/css/10-teal/ringcarousel.json";
import cssS10TealScrollarea from "../systems/css/10-teal/scrollarea.json";
import cssS10TealSegmented from "../systems/css/10-teal/segmented.json";
import cssS10TealSkeleton from "../systems/css/10-teal/skeleton.json";
import cssS10TealSpinner from "../systems/css/10-teal/spinner.json";
import cssS10TealStages from "../systems/css/10-teal/stages.json";
import cssS10TealStat from "../systems/css/10-teal/stat.json";
import cssS10TealStepper from "../systems/css/10-teal/stepper.json";
import cssS10TealSwitch from "../systems/css/10-teal/switch.json";
import cssS10TealTable from "../systems/css/10-teal/table.json";
import cssS10TealToast from "../systems/css/10-teal/toast.json";
import cssS10TealToggle from "../systems/css/10-teal/toggle.json";
import cssS11CrimsonAccordion from "../systems/css/11-crimson/accordion.json";
import cssS11CrimsonAlert from "../systems/css/11-crimson/alert.json";
import cssS11CrimsonAspectratio from "../systems/css/11-crimson/aspectratio.json";
import cssS11CrimsonBadge from "../systems/css/11-crimson/badge.json";
import cssS11CrimsonBanner from "../systems/css/11-crimson/banner.json";
import cssS11CrimsonBreadcrumb from "../systems/css/11-crimson/breadcrumb.json";
import cssS11CrimsonButton from "../systems/css/11-crimson/button.json";
import cssS11CrimsonCard from "../systems/css/11-crimson/card.json";
import cssS11CrimsonCheckbox from "../systems/css/11-crimson/checkbox.json";
import cssS11CrimsonChip from "../systems/css/11-crimson/chip.json";
import cssS11CrimsonColorpicker from "../systems/css/11-crimson/colorpicker.json";
import cssS11CrimsonDialog from "../systems/css/11-crimson/dialog.json";
import cssS11CrimsonDivider from "../systems/css/11-crimson/divider.json";
import cssS11CrimsonEmpty from "../systems/css/11-crimson/empty.json";
import cssS11CrimsonInput from "../systems/css/11-crimson/input.json";
import cssS11CrimsonKbd from "../systems/css/11-crimson/kbd.json";
import cssS11CrimsonLabel from "../systems/css/11-crimson/label.json";
import cssS11CrimsonLink from "../systems/css/11-crimson/link.json";
import cssS11CrimsonMarker from "../systems/css/11-crimson/marker.json";
import cssS11CrimsonMeter from "../systems/css/11-crimson/meter.json";
import cssS11CrimsonNativeselect from "../systems/css/11-crimson/nativeselect.json";
import cssS11CrimsonPageheader from "../systems/css/11-crimson/pageheader.json";
import cssS11CrimsonPagination from "../systems/css/11-crimson/pagination.json";
import cssS11CrimsonProgress from "../systems/css/11-crimson/progress.json";
import cssS11CrimsonProse from "../systems/css/11-crimson/prose.json";
import cssS11CrimsonRadio from "../systems/css/11-crimson/radio.json";
import cssS11CrimsonRingcarousel from "../systems/css/11-crimson/ringcarousel.json";
import cssS11CrimsonScrollarea from "../systems/css/11-crimson/scrollarea.json";
import cssS11CrimsonSegmented from "../systems/css/11-crimson/segmented.json";
import cssS11CrimsonSkeleton from "../systems/css/11-crimson/skeleton.json";
import cssS11CrimsonSpinner from "../systems/css/11-crimson/spinner.json";
import cssS11CrimsonStages from "../systems/css/11-crimson/stages.json";
import cssS11CrimsonStat from "../systems/css/11-crimson/stat.json";
import cssS11CrimsonStepper from "../systems/css/11-crimson/stepper.json";
import cssS11CrimsonSwitch from "../systems/css/11-crimson/switch.json";
import cssS11CrimsonTable from "../systems/css/11-crimson/table.json";
import cssS11CrimsonToast from "../systems/css/11-crimson/toast.json";
import cssS11CrimsonToggle from "../systems/css/11-crimson/toggle.json";
import cssS12MossAccordion from "../systems/css/12-moss/accordion.json";
import cssS12MossAlert from "../systems/css/12-moss/alert.json";
import cssS12MossAspectratio from "../systems/css/12-moss/aspectratio.json";
import cssS12MossBadge from "../systems/css/12-moss/badge.json";
import cssS12MossBanner from "../systems/css/12-moss/banner.json";
import cssS12MossBreadcrumb from "../systems/css/12-moss/breadcrumb.json";
import cssS12MossButton from "../systems/css/12-moss/button.json";
import cssS12MossCard from "../systems/css/12-moss/card.json";
import cssS12MossCheckbox from "../systems/css/12-moss/checkbox.json";
import cssS12MossChip from "../systems/css/12-moss/chip.json";
import cssS12MossColorpicker from "../systems/css/12-moss/colorpicker.json";
import cssS12MossDialog from "../systems/css/12-moss/dialog.json";
import cssS12MossDivider from "../systems/css/12-moss/divider.json";
import cssS12MossEmpty from "../systems/css/12-moss/empty.json";
import cssS12MossInput from "../systems/css/12-moss/input.json";
import cssS12MossKbd from "../systems/css/12-moss/kbd.json";
import cssS12MossLabel from "../systems/css/12-moss/label.json";
import cssS12MossLink from "../systems/css/12-moss/link.json";
import cssS12MossMarker from "../systems/css/12-moss/marker.json";
import cssS12MossMeter from "../systems/css/12-moss/meter.json";
import cssS12MossNativeselect from "../systems/css/12-moss/nativeselect.json";
import cssS12MossPageheader from "../systems/css/12-moss/pageheader.json";
import cssS12MossPagination from "../systems/css/12-moss/pagination.json";
import cssS12MossProgress from "../systems/css/12-moss/progress.json";
import cssS12MossProse from "../systems/css/12-moss/prose.json";
import cssS12MossRadio from "../systems/css/12-moss/radio.json";
import cssS12MossRingcarousel from "../systems/css/12-moss/ringcarousel.json";
import cssS12MossScrollarea from "../systems/css/12-moss/scrollarea.json";
import cssS12MossSegmented from "../systems/css/12-moss/segmented.json";
import cssS12MossSkeleton from "../systems/css/12-moss/skeleton.json";
import cssS12MossSpinner from "../systems/css/12-moss/spinner.json";
import cssS12MossStages from "../systems/css/12-moss/stages.json";
import cssS12MossStat from "../systems/css/12-moss/stat.json";
import cssS12MossStepper from "../systems/css/12-moss/stepper.json";
import cssS12MossSwitch from "../systems/css/12-moss/switch.json";
import cssS12MossTable from "../systems/css/12-moss/table.json";
import cssS12MossToast from "../systems/css/12-moss/toast.json";
import cssS12MossToggle from "../systems/css/12-moss/toggle.json";
import cssS13AzureAccordion from "../systems/css/13-azure/accordion.json";
import cssS13AzureAlert from "../systems/css/13-azure/alert.json";
import cssS13AzureAspectratio from "../systems/css/13-azure/aspectratio.json";
import cssS13AzureBadge from "../systems/css/13-azure/badge.json";
import cssS13AzureBanner from "../systems/css/13-azure/banner.json";
import cssS13AzureBreadcrumb from "../systems/css/13-azure/breadcrumb.json";
import cssS13AzureButton from "../systems/css/13-azure/button.json";
import cssS13AzureCard from "../systems/css/13-azure/card.json";
import cssS13AzureCheckbox from "../systems/css/13-azure/checkbox.json";
import cssS13AzureChip from "../systems/css/13-azure/chip.json";
import cssS13AzureColorpicker from "../systems/css/13-azure/colorpicker.json";
import cssS13AzureDialog from "../systems/css/13-azure/dialog.json";
import cssS13AzureDivider from "../systems/css/13-azure/divider.json";
import cssS13AzureEmpty from "../systems/css/13-azure/empty.json";
import cssS13AzureInput from "../systems/css/13-azure/input.json";
import cssS13AzureKbd from "../systems/css/13-azure/kbd.json";
import cssS13AzureLabel from "../systems/css/13-azure/label.json";
import cssS13AzureLink from "../systems/css/13-azure/link.json";
import cssS13AzureMarker from "../systems/css/13-azure/marker.json";
import cssS13AzureMeter from "../systems/css/13-azure/meter.json";
import cssS13AzureNativeselect from "../systems/css/13-azure/nativeselect.json";
import cssS13AzurePageheader from "../systems/css/13-azure/pageheader.json";
import cssS13AzurePagination from "../systems/css/13-azure/pagination.json";
import cssS13AzureProgress from "../systems/css/13-azure/progress.json";
import cssS13AzureProse from "../systems/css/13-azure/prose.json";
import cssS13AzureRadio from "../systems/css/13-azure/radio.json";
import cssS13AzureRingcarousel from "../systems/css/13-azure/ringcarousel.json";
import cssS13AzureScrollarea from "../systems/css/13-azure/scrollarea.json";
import cssS13AzureSegmented from "../systems/css/13-azure/segmented.json";
import cssS13AzureSkeleton from "../systems/css/13-azure/skeleton.json";
import cssS13AzureSpinner from "../systems/css/13-azure/spinner.json";
import cssS13AzureStages from "../systems/css/13-azure/stages.json";
import cssS13AzureStat from "../systems/css/13-azure/stat.json";
import cssS13AzureStepper from "../systems/css/13-azure/stepper.json";
import cssS13AzureSwitch from "../systems/css/13-azure/switch.json";
import cssS13AzureTable from "../systems/css/13-azure/table.json";
import cssS13AzureToast from "../systems/css/13-azure/toast.json";
import cssS13AzureToggle from "../systems/css/13-azure/toggle.json";
import cssS14VioletAccordion from "../systems/css/14-violet/accordion.json";
import cssS14VioletAlert from "../systems/css/14-violet/alert.json";
import cssS14VioletAspectratio from "../systems/css/14-violet/aspectratio.json";
import cssS14VioletBadge from "../systems/css/14-violet/badge.json";
import cssS14VioletBanner from "../systems/css/14-violet/banner.json";
import cssS14VioletBreadcrumb from "../systems/css/14-violet/breadcrumb.json";
import cssS14VioletButton from "../systems/css/14-violet/button.json";
import cssS14VioletCard from "../systems/css/14-violet/card.json";
import cssS14VioletCheckbox from "../systems/css/14-violet/checkbox.json";
import cssS14VioletChip from "../systems/css/14-violet/chip.json";
import cssS14VioletColorpicker from "../systems/css/14-violet/colorpicker.json";
import cssS14VioletDialog from "../systems/css/14-violet/dialog.json";
import cssS14VioletDivider from "../systems/css/14-violet/divider.json";
import cssS14VioletEmpty from "../systems/css/14-violet/empty.json";
import cssS14VioletInput from "../systems/css/14-violet/input.json";
import cssS14VioletKbd from "../systems/css/14-violet/kbd.json";
import cssS14VioletLabel from "../systems/css/14-violet/label.json";
import cssS14VioletLink from "../systems/css/14-violet/link.json";
import cssS14VioletMarker from "../systems/css/14-violet/marker.json";
import cssS14VioletMeter from "../systems/css/14-violet/meter.json";
import cssS14VioletNativeselect from "../systems/css/14-violet/nativeselect.json";
import cssS14VioletPageheader from "../systems/css/14-violet/pageheader.json";
import cssS14VioletPagination from "../systems/css/14-violet/pagination.json";
import cssS14VioletProgress from "../systems/css/14-violet/progress.json";
import cssS14VioletProse from "../systems/css/14-violet/prose.json";
import cssS14VioletRadio from "../systems/css/14-violet/radio.json";
import cssS14VioletRingcarousel from "../systems/css/14-violet/ringcarousel.json";
import cssS14VioletScrollarea from "../systems/css/14-violet/scrollarea.json";
import cssS14VioletSegmented from "../systems/css/14-violet/segmented.json";
import cssS14VioletSkeleton from "../systems/css/14-violet/skeleton.json";
import cssS14VioletSpinner from "../systems/css/14-violet/spinner.json";
import cssS14VioletStages from "../systems/css/14-violet/stages.json";
import cssS14VioletStat from "../systems/css/14-violet/stat.json";
import cssS14VioletStepper from "../systems/css/14-violet/stepper.json";
import cssS14VioletSwitch from "../systems/css/14-violet/switch.json";
import cssS14VioletTable from "../systems/css/14-violet/table.json";
import cssS14VioletToast from "../systems/css/14-violet/toast.json";
import cssS14VioletToggle from "../systems/css/14-violet/toggle.json";
import cssS15RustAccordion from "../systems/css/15-rust/accordion.json";
import cssS15RustAlert from "../systems/css/15-rust/alert.json";
import cssS15RustAspectratio from "../systems/css/15-rust/aspectratio.json";
import cssS15RustBadge from "../systems/css/15-rust/badge.json";
import cssS15RustBanner from "../systems/css/15-rust/banner.json";
import cssS15RustBreadcrumb from "../systems/css/15-rust/breadcrumb.json";
import cssS15RustButton from "../systems/css/15-rust/button.json";
import cssS15RustCard from "../systems/css/15-rust/card.json";
import cssS15RustCheckbox from "../systems/css/15-rust/checkbox.json";
import cssS15RustChip from "../systems/css/15-rust/chip.json";
import cssS15RustColorpicker from "../systems/css/15-rust/colorpicker.json";
import cssS15RustDialog from "../systems/css/15-rust/dialog.json";
import cssS15RustDivider from "../systems/css/15-rust/divider.json";
import cssS15RustEmpty from "../systems/css/15-rust/empty.json";
import cssS15RustInput from "../systems/css/15-rust/input.json";
import cssS15RustKbd from "../systems/css/15-rust/kbd.json";
import cssS15RustLabel from "../systems/css/15-rust/label.json";
import cssS15RustLink from "../systems/css/15-rust/link.json";
import cssS15RustMarker from "../systems/css/15-rust/marker.json";
import cssS15RustMeter from "../systems/css/15-rust/meter.json";
import cssS15RustNativeselect from "../systems/css/15-rust/nativeselect.json";
import cssS15RustPageheader from "../systems/css/15-rust/pageheader.json";
import cssS15RustPagination from "../systems/css/15-rust/pagination.json";
import cssS15RustProgress from "../systems/css/15-rust/progress.json";
import cssS15RustProse from "../systems/css/15-rust/prose.json";
import cssS15RustRadio from "../systems/css/15-rust/radio.json";
import cssS15RustRingcarousel from "../systems/css/15-rust/ringcarousel.json";
import cssS15RustScrollarea from "../systems/css/15-rust/scrollarea.json";
import cssS15RustSegmented from "../systems/css/15-rust/segmented.json";
import cssS15RustSkeleton from "../systems/css/15-rust/skeleton.json";
import cssS15RustSpinner from "../systems/css/15-rust/spinner.json";
import cssS15RustStages from "../systems/css/15-rust/stages.json";
import cssS15RustStat from "../systems/css/15-rust/stat.json";
import cssS15RustStepper from "../systems/css/15-rust/stepper.json";
import cssS15RustSwitch from "../systems/css/15-rust/switch.json";
import cssS15RustTable from "../systems/css/15-rust/table.json";
import cssS15RustToast from "../systems/css/15-rust/toast.json";
import cssS15RustToggle from "../systems/css/15-rust/toggle.json";
import cssS16MintAccordion from "../systems/css/16-mint/accordion.json";
import cssS16MintAlert from "../systems/css/16-mint/alert.json";
import cssS16MintAspectratio from "../systems/css/16-mint/aspectratio.json";
import cssS16MintBadge from "../systems/css/16-mint/badge.json";
import cssS16MintBanner from "../systems/css/16-mint/banner.json";
import cssS16MintBreadcrumb from "../systems/css/16-mint/breadcrumb.json";
import cssS16MintButton from "../systems/css/16-mint/button.json";
import cssS16MintCard from "../systems/css/16-mint/card.json";
import cssS16MintCheckbox from "../systems/css/16-mint/checkbox.json";
import cssS16MintChip from "../systems/css/16-mint/chip.json";
import cssS16MintColorpicker from "../systems/css/16-mint/colorpicker.json";
import cssS16MintDialog from "../systems/css/16-mint/dialog.json";
import cssS16MintDivider from "../systems/css/16-mint/divider.json";
import cssS16MintEmpty from "../systems/css/16-mint/empty.json";
import cssS16MintInput from "../systems/css/16-mint/input.json";
import cssS16MintKbd from "../systems/css/16-mint/kbd.json";
import cssS16MintLabel from "../systems/css/16-mint/label.json";
import cssS16MintLink from "../systems/css/16-mint/link.json";
import cssS16MintMarker from "../systems/css/16-mint/marker.json";
import cssS16MintMeter from "../systems/css/16-mint/meter.json";
import cssS16MintNativeselect from "../systems/css/16-mint/nativeselect.json";
import cssS16MintPageheader from "../systems/css/16-mint/pageheader.json";
import cssS16MintPagination from "../systems/css/16-mint/pagination.json";
import cssS16MintProgress from "../systems/css/16-mint/progress.json";
import cssS16MintProse from "../systems/css/16-mint/prose.json";
import cssS16MintRadio from "../systems/css/16-mint/radio.json";
import cssS16MintRingcarousel from "../systems/css/16-mint/ringcarousel.json";
import cssS16MintScrollarea from "../systems/css/16-mint/scrollarea.json";
import cssS16MintSegmented from "../systems/css/16-mint/segmented.json";
import cssS16MintSkeleton from "../systems/css/16-mint/skeleton.json";
import cssS16MintSpinner from "../systems/css/16-mint/spinner.json";
import cssS16MintStages from "../systems/css/16-mint/stages.json";
import cssS16MintStat from "../systems/css/16-mint/stat.json";
import cssS16MintStepper from "../systems/css/16-mint/stepper.json";
import cssS16MintSwitch from "../systems/css/16-mint/switch.json";
import cssS16MintTable from "../systems/css/16-mint/table.json";
import cssS16MintToast from "../systems/css/16-mint/toast.json";
import cssS16MintToggle from "../systems/css/16-mint/toggle.json";
import cssS17NavyAccordion from "../systems/css/17-navy/accordion.json";
import cssS17NavyAlert from "../systems/css/17-navy/alert.json";
import cssS17NavyAspectratio from "../systems/css/17-navy/aspectratio.json";
import cssS17NavyBadge from "../systems/css/17-navy/badge.json";
import cssS17NavyBanner from "../systems/css/17-navy/banner.json";
import cssS17NavyBreadcrumb from "../systems/css/17-navy/breadcrumb.json";
import cssS17NavyButton from "../systems/css/17-navy/button.json";
import cssS17NavyCard from "../systems/css/17-navy/card.json";
import cssS17NavyCheckbox from "../systems/css/17-navy/checkbox.json";
import cssS17NavyChip from "../systems/css/17-navy/chip.json";
import cssS17NavyColorpicker from "../systems/css/17-navy/colorpicker.json";
import cssS17NavyDialog from "../systems/css/17-navy/dialog.json";
import cssS17NavyDivider from "../systems/css/17-navy/divider.json";
import cssS17NavyEmpty from "../systems/css/17-navy/empty.json";
import cssS17NavyInput from "../systems/css/17-navy/input.json";
import cssS17NavyKbd from "../systems/css/17-navy/kbd.json";
import cssS17NavyLabel from "../systems/css/17-navy/label.json";
import cssS17NavyLink from "../systems/css/17-navy/link.json";
import cssS17NavyMarker from "../systems/css/17-navy/marker.json";
import cssS17NavyMeter from "../systems/css/17-navy/meter.json";
import cssS17NavyNativeselect from "../systems/css/17-navy/nativeselect.json";
import cssS17NavyPageheader from "../systems/css/17-navy/pageheader.json";
import cssS17NavyPagination from "../systems/css/17-navy/pagination.json";
import cssS17NavyProgress from "../systems/css/17-navy/progress.json";
import cssS17NavyProse from "../systems/css/17-navy/prose.json";
import cssS17NavyRadio from "../systems/css/17-navy/radio.json";
import cssS17NavyRingcarousel from "../systems/css/17-navy/ringcarousel.json";
import cssS17NavyScrollarea from "../systems/css/17-navy/scrollarea.json";
import cssS17NavySegmented from "../systems/css/17-navy/segmented.json";
import cssS17NavySkeleton from "../systems/css/17-navy/skeleton.json";
import cssS17NavySpinner from "../systems/css/17-navy/spinner.json";
import cssS17NavyStages from "../systems/css/17-navy/stages.json";
import cssS17NavyStat from "../systems/css/17-navy/stat.json";
import cssS17NavyStepper from "../systems/css/17-navy/stepper.json";
import cssS17NavySwitch from "../systems/css/17-navy/switch.json";
import cssS17NavyTable from "../systems/css/17-navy/table.json";
import cssS17NavyToast from "../systems/css/17-navy/toast.json";
import cssS17NavyToggle from "../systems/css/17-navy/toggle.json";
import cssS18SaffronAccordion from "../systems/css/18-saffron/accordion.json";
import cssS18SaffronAlert from "../systems/css/18-saffron/alert.json";
import cssS18SaffronAspectratio from "../systems/css/18-saffron/aspectratio.json";
import cssS18SaffronBadge from "../systems/css/18-saffron/badge.json";
import cssS18SaffronBanner from "../systems/css/18-saffron/banner.json";
import cssS18SaffronBreadcrumb from "../systems/css/18-saffron/breadcrumb.json";
import cssS18SaffronButton from "../systems/css/18-saffron/button.json";
import cssS18SaffronCard from "../systems/css/18-saffron/card.json";
import cssS18SaffronCheckbox from "../systems/css/18-saffron/checkbox.json";
import cssS18SaffronChip from "../systems/css/18-saffron/chip.json";
import cssS18SaffronColorpicker from "../systems/css/18-saffron/colorpicker.json";
import cssS18SaffronDialog from "../systems/css/18-saffron/dialog.json";
import cssS18SaffronDivider from "../systems/css/18-saffron/divider.json";
import cssS18SaffronEmpty from "../systems/css/18-saffron/empty.json";
import cssS18SaffronInput from "../systems/css/18-saffron/input.json";
import cssS18SaffronKbd from "../systems/css/18-saffron/kbd.json";
import cssS18SaffronLabel from "../systems/css/18-saffron/label.json";
import cssS18SaffronLink from "../systems/css/18-saffron/link.json";
import cssS18SaffronMarker from "../systems/css/18-saffron/marker.json";
import cssS18SaffronMeter from "../systems/css/18-saffron/meter.json";
import cssS18SaffronNativeselect from "../systems/css/18-saffron/nativeselect.json";
import cssS18SaffronPageheader from "../systems/css/18-saffron/pageheader.json";
import cssS18SaffronPagination from "../systems/css/18-saffron/pagination.json";
import cssS18SaffronProgress from "../systems/css/18-saffron/progress.json";
import cssS18SaffronProse from "../systems/css/18-saffron/prose.json";
import cssS18SaffronRadio from "../systems/css/18-saffron/radio.json";
import cssS18SaffronRingcarousel from "../systems/css/18-saffron/ringcarousel.json";
import cssS18SaffronScrollarea from "../systems/css/18-saffron/scrollarea.json";
import cssS18SaffronSegmented from "../systems/css/18-saffron/segmented.json";
import cssS18SaffronSkeleton from "../systems/css/18-saffron/skeleton.json";
import cssS18SaffronSpinner from "../systems/css/18-saffron/spinner.json";
import cssS18SaffronStages from "../systems/css/18-saffron/stages.json";
import cssS18SaffronStat from "../systems/css/18-saffron/stat.json";
import cssS18SaffronStepper from "../systems/css/18-saffron/stepper.json";
import cssS18SaffronSwitch from "../systems/css/18-saffron/switch.json";
import cssS18SaffronTable from "../systems/css/18-saffron/table.json";
import cssS18SaffronToast from "../systems/css/18-saffron/toast.json";
import cssS18SaffronToggle from "../systems/css/18-saffron/toggle.json";
import cssS19FogAccordion from "../systems/css/19-fog/accordion.json";
import cssS19FogAlert from "../systems/css/19-fog/alert.json";
import cssS19FogAspectratio from "../systems/css/19-fog/aspectratio.json";
import cssS19FogBadge from "../systems/css/19-fog/badge.json";
import cssS19FogBanner from "../systems/css/19-fog/banner.json";
import cssS19FogBreadcrumb from "../systems/css/19-fog/breadcrumb.json";
import cssS19FogButton from "../systems/css/19-fog/button.json";
import cssS19FogCard from "../systems/css/19-fog/card.json";
import cssS19FogCheckbox from "../systems/css/19-fog/checkbox.json";
import cssS19FogChip from "../systems/css/19-fog/chip.json";
import cssS19FogColorpicker from "../systems/css/19-fog/colorpicker.json";
import cssS19FogDialog from "../systems/css/19-fog/dialog.json";
import cssS19FogDivider from "../systems/css/19-fog/divider.json";
import cssS19FogEmpty from "../systems/css/19-fog/empty.json";
import cssS19FogInput from "../systems/css/19-fog/input.json";
import cssS19FogKbd from "../systems/css/19-fog/kbd.json";
import cssS19FogLabel from "../systems/css/19-fog/label.json";
import cssS19FogLink from "../systems/css/19-fog/link.json";
import cssS19FogMarker from "../systems/css/19-fog/marker.json";
import cssS19FogMeter from "../systems/css/19-fog/meter.json";
import cssS19FogNativeselect from "../systems/css/19-fog/nativeselect.json";
import cssS19FogPageheader from "../systems/css/19-fog/pageheader.json";
import cssS19FogPagination from "../systems/css/19-fog/pagination.json";
import cssS19FogProgress from "../systems/css/19-fog/progress.json";
import cssS19FogProse from "../systems/css/19-fog/prose.json";
import cssS19FogRadio from "../systems/css/19-fog/radio.json";
import cssS19FogRingcarousel from "../systems/css/19-fog/ringcarousel.json";
import cssS19FogScrollarea from "../systems/css/19-fog/scrollarea.json";
import cssS19FogSegmented from "../systems/css/19-fog/segmented.json";
import cssS19FogSkeleton from "../systems/css/19-fog/skeleton.json";
import cssS19FogSpinner from "../systems/css/19-fog/spinner.json";
import cssS19FogStages from "../systems/css/19-fog/stages.json";
import cssS19FogStat from "../systems/css/19-fog/stat.json";
import cssS19FogStepper from "../systems/css/19-fog/stepper.json";
import cssS19FogSwitch from "../systems/css/19-fog/switch.json";
import cssS19FogTable from "../systems/css/19-fog/table.json";
import cssS19FogToast from "../systems/css/19-fog/toast.json";
import cssS19FogToggle from "../systems/css/19-fog/toggle.json";
import cssS20BerryAccordion from "../systems/css/20-berry/accordion.json";
import cssS20BerryAlert from "../systems/css/20-berry/alert.json";
import cssS20BerryAspectratio from "../systems/css/20-berry/aspectratio.json";
import cssS20BerryBadge from "../systems/css/20-berry/badge.json";
import cssS20BerryBanner from "../systems/css/20-berry/banner.json";
import cssS20BerryBreadcrumb from "../systems/css/20-berry/breadcrumb.json";
import cssS20BerryButton from "../systems/css/20-berry/button.json";
import cssS20BerryCard from "../systems/css/20-berry/card.json";
import cssS20BerryCheckbox from "../systems/css/20-berry/checkbox.json";
import cssS20BerryChip from "../systems/css/20-berry/chip.json";
import cssS20BerryColorpicker from "../systems/css/20-berry/colorpicker.json";
import cssS20BerryDialog from "../systems/css/20-berry/dialog.json";
import cssS20BerryDivider from "../systems/css/20-berry/divider.json";
import cssS20BerryEmpty from "../systems/css/20-berry/empty.json";
import cssS20BerryInput from "../systems/css/20-berry/input.json";
import cssS20BerryKbd from "../systems/css/20-berry/kbd.json";
import cssS20BerryLabel from "../systems/css/20-berry/label.json";
import cssS20BerryLink from "../systems/css/20-berry/link.json";
import cssS20BerryMarker from "../systems/css/20-berry/marker.json";
import cssS20BerryMeter from "../systems/css/20-berry/meter.json";
import cssS20BerryNativeselect from "../systems/css/20-berry/nativeselect.json";
import cssS20BerryPageheader from "../systems/css/20-berry/pageheader.json";
import cssS20BerryPagination from "../systems/css/20-berry/pagination.json";
import cssS20BerryProgress from "../systems/css/20-berry/progress.json";
import cssS20BerryProse from "../systems/css/20-berry/prose.json";
import cssS20BerryRadio from "../systems/css/20-berry/radio.json";
import cssS20BerryRingcarousel from "../systems/css/20-berry/ringcarousel.json";
import cssS20BerryScrollarea from "../systems/css/20-berry/scrollarea.json";
import cssS20BerrySegmented from "../systems/css/20-berry/segmented.json";
import cssS20BerrySkeleton from "../systems/css/20-berry/skeleton.json";
import cssS20BerrySpinner from "../systems/css/20-berry/spinner.json";
import cssS20BerryStages from "../systems/css/20-berry/stages.json";
import cssS20BerryStat from "../systems/css/20-berry/stat.json";
import cssS20BerryStepper from "../systems/css/20-berry/stepper.json";
import cssS20BerrySwitch from "../systems/css/20-berry/switch.json";
import cssS20BerryTable from "../systems/css/20-berry/table.json";
import cssS20BerryToast from "../systems/css/20-berry/toast.json";
import cssS20BerryToggle from "../systems/css/20-berry/toggle.json";
const STANDALONE_CSS: Record<string, string> = {
  "01-cobalt": [cssS01CobaltAccordion, cssS01CobaltAlert, cssS01CobaltAspectratio, cssS01CobaltBadge, cssS01CobaltBanner, cssS01CobaltBreadcrumb, cssS01CobaltButton, cssS01CobaltCard, cssS01CobaltCheckbox, cssS01CobaltChip, cssS01CobaltColorpicker, cssS01CobaltDialog, cssS01CobaltDivider, cssS01CobaltEmpty, cssS01CobaltInput, cssS01CobaltKbd, cssS01CobaltLabel, cssS01CobaltLink, cssS01CobaltMarker, cssS01CobaltMeter, cssS01CobaltNativeselect, cssS01CobaltPageheader, cssS01CobaltPagination, cssS01CobaltProgress, cssS01CobaltProse, cssS01CobaltRadio, cssS01CobaltRingcarousel, cssS01CobaltScrollarea, cssS01CobaltSegmented, cssS01CobaltSkeleton, cssS01CobaltSpinner, cssS01CobaltStages, cssS01CobaltStat, cssS01CobaltStepper, cssS01CobaltSwitch, cssS01CobaltTable, cssS01CobaltToast, cssS01CobaltToggle].join("\n"),
  "02-graphite": [cssS02GraphiteAccordion, cssS02GraphiteAlert, cssS02GraphiteAspectratio, cssS02GraphiteBadge, cssS02GraphiteBanner, cssS02GraphiteBreadcrumb, cssS02GraphiteButton, cssS02GraphiteCard, cssS02GraphiteCheckbox, cssS02GraphiteChip, cssS02GraphiteColorpicker, cssS02GraphiteDialog, cssS02GraphiteDivider, cssS02GraphiteEmpty, cssS02GraphiteInput, cssS02GraphiteKbd, cssS02GraphiteLabel, cssS02GraphiteLink, cssS02GraphiteMarker, cssS02GraphiteMeter, cssS02GraphiteNativeselect, cssS02GraphitePageheader, cssS02GraphitePagination, cssS02GraphiteProgress, cssS02GraphiteProse, cssS02GraphiteRadio, cssS02GraphiteRingcarousel, cssS02GraphiteScrollarea, cssS02GraphiteSegmented, cssS02GraphiteSkeleton, cssS02GraphiteSpinner, cssS02GraphiteStages, cssS02GraphiteStat, cssS02GraphiteStepper, cssS02GraphiteSwitch, cssS02GraphiteTable, cssS02GraphiteToast, cssS02GraphiteToggle].join("\n"),
  "03-ember": [cssS03EmberAccordion, cssS03EmberAlert, cssS03EmberAspectratio, cssS03EmberBadge, cssS03EmberBanner, cssS03EmberBreadcrumb, cssS03EmberButton, cssS03EmberCard, cssS03EmberCheckbox, cssS03EmberChip, cssS03EmberColorpicker, cssS03EmberDialog, cssS03EmberDivider, cssS03EmberEmpty, cssS03EmberInput, cssS03EmberKbd, cssS03EmberLabel, cssS03EmberLink, cssS03EmberMarker, cssS03EmberMeter, cssS03EmberNativeselect, cssS03EmberPageheader, cssS03EmberPagination, cssS03EmberProgress, cssS03EmberProse, cssS03EmberRadio, cssS03EmberRingcarousel, cssS03EmberScrollarea, cssS03EmberSegmented, cssS03EmberSkeleton, cssS03EmberSpinner, cssS03EmberStages, cssS03EmberStat, cssS03EmberStepper, cssS03EmberSwitch, cssS03EmberTable, cssS03EmberToast, cssS03EmberToggle].join("\n"),
  "04-jade": [cssS04JadeAccordion, cssS04JadeAlert, cssS04JadeAspectratio, cssS04JadeBadge, cssS04JadeBanner, cssS04JadeBreadcrumb, cssS04JadeButton, cssS04JadeCard, cssS04JadeCheckbox, cssS04JadeChip, cssS04JadeColorpicker, cssS04JadeDialog, cssS04JadeDivider, cssS04JadeEmpty, cssS04JadeInput, cssS04JadeKbd, cssS04JadeLabel, cssS04JadeLink, cssS04JadeMarker, cssS04JadeMeter, cssS04JadeNativeselect, cssS04JadePageheader, cssS04JadePagination, cssS04JadeProgress, cssS04JadeProse, cssS04JadeRadio, cssS04JadeRingcarousel, cssS04JadeScrollarea, cssS04JadeSegmented, cssS04JadeSkeleton, cssS04JadeSpinner, cssS04JadeStages, cssS04JadeStat, cssS04JadeStepper, cssS04JadeSwitch, cssS04JadeTable, cssS04JadeToast, cssS04JadeToggle].join("\n"),
  "05-plum": [cssS05PlumAccordion, cssS05PlumAlert, cssS05PlumAspectratio, cssS05PlumBadge, cssS05PlumBanner, cssS05PlumBreadcrumb, cssS05PlumButton, cssS05PlumCard, cssS05PlumCheckbox, cssS05PlumChip, cssS05PlumColorpicker, cssS05PlumDialog, cssS05PlumDivider, cssS05PlumEmpty, cssS05PlumInput, cssS05PlumKbd, cssS05PlumLabel, cssS05PlumLink, cssS05PlumMarker, cssS05PlumMeter, cssS05PlumNativeselect, cssS05PlumPageheader, cssS05PlumPagination, cssS05PlumProgress, cssS05PlumProse, cssS05PlumRadio, cssS05PlumRingcarousel, cssS05PlumScrollarea, cssS05PlumSegmented, cssS05PlumSkeleton, cssS05PlumSpinner, cssS05PlumStages, cssS05PlumStat, cssS05PlumStepper, cssS05PlumSwitch, cssS05PlumTable, cssS05PlumToast, cssS05PlumToggle].join("\n"),
  "06-slate": [cssS06SlateAccordion, cssS06SlateAlert, cssS06SlateAspectratio, cssS06SlateBadge, cssS06SlateBanner, cssS06SlateBreadcrumb, cssS06SlateButton, cssS06SlateCard, cssS06SlateCheckbox, cssS06SlateChip, cssS06SlateColorpicker, cssS06SlateDialog, cssS06SlateDivider, cssS06SlateEmpty, cssS06SlateInput, cssS06SlateKbd, cssS06SlateLabel, cssS06SlateLink, cssS06SlateMarker, cssS06SlateMeter, cssS06SlateNativeselect, cssS06SlatePageheader, cssS06SlatePagination, cssS06SlateProgress, cssS06SlateProse, cssS06SlateRadio, cssS06SlateRingcarousel, cssS06SlateScrollarea, cssS06SlateSegmented, cssS06SlateSkeleton, cssS06SlateSpinner, cssS06SlateStages, cssS06SlateStat, cssS06SlateStepper, cssS06SlateSwitch, cssS06SlateTable, cssS06SlateToast, cssS06SlateToggle].join("\n"),
  "07-emerald": [cssS07EmeraldAccordion, cssS07EmeraldAlert, cssS07EmeraldAspectratio, cssS07EmeraldBadge, cssS07EmeraldBanner, cssS07EmeraldBreadcrumb, cssS07EmeraldButton, cssS07EmeraldCard, cssS07EmeraldCheckbox, cssS07EmeraldChip, cssS07EmeraldColorpicker, cssS07EmeraldDialog, cssS07EmeraldDivider, cssS07EmeraldEmpty, cssS07EmeraldInput, cssS07EmeraldKbd, cssS07EmeraldLabel, cssS07EmeraldLink, cssS07EmeraldMarker, cssS07EmeraldMeter, cssS07EmeraldNativeselect, cssS07EmeraldPageheader, cssS07EmeraldPagination, cssS07EmeraldProgress, cssS07EmeraldProse, cssS07EmeraldRadio, cssS07EmeraldRingcarousel, cssS07EmeraldScrollarea, cssS07EmeraldSegmented, cssS07EmeraldSkeleton, cssS07EmeraldSpinner, cssS07EmeraldStages, cssS07EmeraldStat, cssS07EmeraldStepper, cssS07EmeraldSwitch, cssS07EmeraldTable, cssS07EmeraldToast, cssS07EmeraldToggle].join("\n"),
  "08-indigo": [cssS08IndigoAccordion, cssS08IndigoAlert, cssS08IndigoAspectratio, cssS08IndigoBadge, cssS08IndigoBanner, cssS08IndigoBreadcrumb, cssS08IndigoButton, cssS08IndigoCard, cssS08IndigoCheckbox, cssS08IndigoChip, cssS08IndigoColorpicker, cssS08IndigoDialog, cssS08IndigoDivider, cssS08IndigoEmpty, cssS08IndigoInput, cssS08IndigoKbd, cssS08IndigoLabel, cssS08IndigoLink, cssS08IndigoMarker, cssS08IndigoMeter, cssS08IndigoNativeselect, cssS08IndigoPageheader, cssS08IndigoPagination, cssS08IndigoProgress, cssS08IndigoProse, cssS08IndigoRadio, cssS08IndigoRingcarousel, cssS08IndigoScrollarea, cssS08IndigoSegmented, cssS08IndigoSkeleton, cssS08IndigoSpinner, cssS08IndigoStages, cssS08IndigoStat, cssS08IndigoStepper, cssS08IndigoSwitch, cssS08IndigoTable, cssS08IndigoToast, cssS08IndigoToggle].join("\n"),
  "09-sand": [cssS09SandAccordion, cssS09SandAlert, cssS09SandAspectratio, cssS09SandBadge, cssS09SandBanner, cssS09SandBreadcrumb, cssS09SandButton, cssS09SandCard, cssS09SandCheckbox, cssS09SandChip, cssS09SandColorpicker, cssS09SandDialog, cssS09SandDivider, cssS09SandEmpty, cssS09SandInput, cssS09SandKbd, cssS09SandLabel, cssS09SandLink, cssS09SandMarker, cssS09SandMeter, cssS09SandNativeselect, cssS09SandPageheader, cssS09SandPagination, cssS09SandProgress, cssS09SandProse, cssS09SandRadio, cssS09SandRingcarousel, cssS09SandScrollarea, cssS09SandSegmented, cssS09SandSkeleton, cssS09SandSpinner, cssS09SandStages, cssS09SandStat, cssS09SandStepper, cssS09SandSwitch, cssS09SandTable, cssS09SandToast, cssS09SandToggle].join("\n"),
  "10-teal": [cssS10TealAccordion, cssS10TealAlert, cssS10TealAspectratio, cssS10TealBadge, cssS10TealBanner, cssS10TealBreadcrumb, cssS10TealButton, cssS10TealCard, cssS10TealCheckbox, cssS10TealChip, cssS10TealColorpicker, cssS10TealDialog, cssS10TealDivider, cssS10TealEmpty, cssS10TealInput, cssS10TealKbd, cssS10TealLabel, cssS10TealLink, cssS10TealMarker, cssS10TealMeter, cssS10TealNativeselect, cssS10TealPageheader, cssS10TealPagination, cssS10TealProgress, cssS10TealProse, cssS10TealRadio, cssS10TealRingcarousel, cssS10TealScrollarea, cssS10TealSegmented, cssS10TealSkeleton, cssS10TealSpinner, cssS10TealStages, cssS10TealStat, cssS10TealStepper, cssS10TealSwitch, cssS10TealTable, cssS10TealToast, cssS10TealToggle].join("\n"),
  "11-crimson": [cssS11CrimsonAccordion, cssS11CrimsonAlert, cssS11CrimsonAspectratio, cssS11CrimsonBadge, cssS11CrimsonBanner, cssS11CrimsonBreadcrumb, cssS11CrimsonButton, cssS11CrimsonCard, cssS11CrimsonCheckbox, cssS11CrimsonChip, cssS11CrimsonColorpicker, cssS11CrimsonDialog, cssS11CrimsonDivider, cssS11CrimsonEmpty, cssS11CrimsonInput, cssS11CrimsonKbd, cssS11CrimsonLabel, cssS11CrimsonLink, cssS11CrimsonMarker, cssS11CrimsonMeter, cssS11CrimsonNativeselect, cssS11CrimsonPageheader, cssS11CrimsonPagination, cssS11CrimsonProgress, cssS11CrimsonProse, cssS11CrimsonRadio, cssS11CrimsonRingcarousel, cssS11CrimsonScrollarea, cssS11CrimsonSegmented, cssS11CrimsonSkeleton, cssS11CrimsonSpinner, cssS11CrimsonStages, cssS11CrimsonStat, cssS11CrimsonStepper, cssS11CrimsonSwitch, cssS11CrimsonTable, cssS11CrimsonToast, cssS11CrimsonToggle].join("\n"),
  "12-moss": [cssS12MossAccordion, cssS12MossAlert, cssS12MossAspectratio, cssS12MossBadge, cssS12MossBanner, cssS12MossBreadcrumb, cssS12MossButton, cssS12MossCard, cssS12MossCheckbox, cssS12MossChip, cssS12MossColorpicker, cssS12MossDialog, cssS12MossDivider, cssS12MossEmpty, cssS12MossInput, cssS12MossKbd, cssS12MossLabel, cssS12MossLink, cssS12MossMarker, cssS12MossMeter, cssS12MossNativeselect, cssS12MossPageheader, cssS12MossPagination, cssS12MossProgress, cssS12MossProse, cssS12MossRadio, cssS12MossRingcarousel, cssS12MossScrollarea, cssS12MossSegmented, cssS12MossSkeleton, cssS12MossSpinner, cssS12MossStages, cssS12MossStat, cssS12MossStepper, cssS12MossSwitch, cssS12MossTable, cssS12MossToast, cssS12MossToggle].join("\n"),
  "13-azure": [cssS13AzureAccordion, cssS13AzureAlert, cssS13AzureAspectratio, cssS13AzureBadge, cssS13AzureBanner, cssS13AzureBreadcrumb, cssS13AzureButton, cssS13AzureCard, cssS13AzureCheckbox, cssS13AzureChip, cssS13AzureColorpicker, cssS13AzureDialog, cssS13AzureDivider, cssS13AzureEmpty, cssS13AzureInput, cssS13AzureKbd, cssS13AzureLabel, cssS13AzureLink, cssS13AzureMarker, cssS13AzureMeter, cssS13AzureNativeselect, cssS13AzurePageheader, cssS13AzurePagination, cssS13AzureProgress, cssS13AzureProse, cssS13AzureRadio, cssS13AzureRingcarousel, cssS13AzureScrollarea, cssS13AzureSegmented, cssS13AzureSkeleton, cssS13AzureSpinner, cssS13AzureStages, cssS13AzureStat, cssS13AzureStepper, cssS13AzureSwitch, cssS13AzureTable, cssS13AzureToast, cssS13AzureToggle].join("\n"),
  "14-violet": [cssS14VioletAccordion, cssS14VioletAlert, cssS14VioletAspectratio, cssS14VioletBadge, cssS14VioletBanner, cssS14VioletBreadcrumb, cssS14VioletButton, cssS14VioletCard, cssS14VioletCheckbox, cssS14VioletChip, cssS14VioletColorpicker, cssS14VioletDialog, cssS14VioletDivider, cssS14VioletEmpty, cssS14VioletInput, cssS14VioletKbd, cssS14VioletLabel, cssS14VioletLink, cssS14VioletMarker, cssS14VioletMeter, cssS14VioletNativeselect, cssS14VioletPageheader, cssS14VioletPagination, cssS14VioletProgress, cssS14VioletProse, cssS14VioletRadio, cssS14VioletRingcarousel, cssS14VioletScrollarea, cssS14VioletSegmented, cssS14VioletSkeleton, cssS14VioletSpinner, cssS14VioletStages, cssS14VioletStat, cssS14VioletStepper, cssS14VioletSwitch, cssS14VioletTable, cssS14VioletToast, cssS14VioletToggle].join("\n"),
  "15-rust": [cssS15RustAccordion, cssS15RustAlert, cssS15RustAspectratio, cssS15RustBadge, cssS15RustBanner, cssS15RustBreadcrumb, cssS15RustButton, cssS15RustCard, cssS15RustCheckbox, cssS15RustChip, cssS15RustColorpicker, cssS15RustDialog, cssS15RustDivider, cssS15RustEmpty, cssS15RustInput, cssS15RustKbd, cssS15RustLabel, cssS15RustLink, cssS15RustMarker, cssS15RustMeter, cssS15RustNativeselect, cssS15RustPageheader, cssS15RustPagination, cssS15RustProgress, cssS15RustProse, cssS15RustRadio, cssS15RustRingcarousel, cssS15RustScrollarea, cssS15RustSegmented, cssS15RustSkeleton, cssS15RustSpinner, cssS15RustStages, cssS15RustStat, cssS15RustStepper, cssS15RustSwitch, cssS15RustTable, cssS15RustToast, cssS15RustToggle].join("\n"),
  "16-mint": [cssS16MintAccordion, cssS16MintAlert, cssS16MintAspectratio, cssS16MintBadge, cssS16MintBanner, cssS16MintBreadcrumb, cssS16MintButton, cssS16MintCard, cssS16MintCheckbox, cssS16MintChip, cssS16MintColorpicker, cssS16MintDialog, cssS16MintDivider, cssS16MintEmpty, cssS16MintInput, cssS16MintKbd, cssS16MintLabel, cssS16MintLink, cssS16MintMarker, cssS16MintMeter, cssS16MintNativeselect, cssS16MintPageheader, cssS16MintPagination, cssS16MintProgress, cssS16MintProse, cssS16MintRadio, cssS16MintRingcarousel, cssS16MintScrollarea, cssS16MintSegmented, cssS16MintSkeleton, cssS16MintSpinner, cssS16MintStages, cssS16MintStat, cssS16MintStepper, cssS16MintSwitch, cssS16MintTable, cssS16MintToast, cssS16MintToggle].join("\n"),
  "17-navy": [cssS17NavyAccordion, cssS17NavyAlert, cssS17NavyAspectratio, cssS17NavyBadge, cssS17NavyBanner, cssS17NavyBreadcrumb, cssS17NavyButton, cssS17NavyCard, cssS17NavyCheckbox, cssS17NavyChip, cssS17NavyColorpicker, cssS17NavyDialog, cssS17NavyDivider, cssS17NavyEmpty, cssS17NavyInput, cssS17NavyKbd, cssS17NavyLabel, cssS17NavyLink, cssS17NavyMarker, cssS17NavyMeter, cssS17NavyNativeselect, cssS17NavyPageheader, cssS17NavyPagination, cssS17NavyProgress, cssS17NavyProse, cssS17NavyRadio, cssS17NavyRingcarousel, cssS17NavyScrollarea, cssS17NavySegmented, cssS17NavySkeleton, cssS17NavySpinner, cssS17NavyStages, cssS17NavyStat, cssS17NavyStepper, cssS17NavySwitch, cssS17NavyTable, cssS17NavyToast, cssS17NavyToggle].join("\n"),
  "18-saffron": [cssS18SaffronAccordion, cssS18SaffronAlert, cssS18SaffronAspectratio, cssS18SaffronBadge, cssS18SaffronBanner, cssS18SaffronBreadcrumb, cssS18SaffronButton, cssS18SaffronCard, cssS18SaffronCheckbox, cssS18SaffronChip, cssS18SaffronColorpicker, cssS18SaffronDialog, cssS18SaffronDivider, cssS18SaffronEmpty, cssS18SaffronInput, cssS18SaffronKbd, cssS18SaffronLabel, cssS18SaffronLink, cssS18SaffronMarker, cssS18SaffronMeter, cssS18SaffronNativeselect, cssS18SaffronPageheader, cssS18SaffronPagination, cssS18SaffronProgress, cssS18SaffronProse, cssS18SaffronRadio, cssS18SaffronRingcarousel, cssS18SaffronScrollarea, cssS18SaffronSegmented, cssS18SaffronSkeleton, cssS18SaffronSpinner, cssS18SaffronStages, cssS18SaffronStat, cssS18SaffronStepper, cssS18SaffronSwitch, cssS18SaffronTable, cssS18SaffronToast, cssS18SaffronToggle].join("\n"),
  "19-fog": [cssS19FogAccordion, cssS19FogAlert, cssS19FogAspectratio, cssS19FogBadge, cssS19FogBanner, cssS19FogBreadcrumb, cssS19FogButton, cssS19FogCard, cssS19FogCheckbox, cssS19FogChip, cssS19FogColorpicker, cssS19FogDialog, cssS19FogDivider, cssS19FogEmpty, cssS19FogInput, cssS19FogKbd, cssS19FogLabel, cssS19FogLink, cssS19FogMarker, cssS19FogMeter, cssS19FogNativeselect, cssS19FogPageheader, cssS19FogPagination, cssS19FogProgress, cssS19FogProse, cssS19FogRadio, cssS19FogRingcarousel, cssS19FogScrollarea, cssS19FogSegmented, cssS19FogSkeleton, cssS19FogSpinner, cssS19FogStages, cssS19FogStat, cssS19FogStepper, cssS19FogSwitch, cssS19FogTable, cssS19FogToast, cssS19FogToggle].join("\n"),
  "20-berry": [cssS20BerryAccordion, cssS20BerryAlert, cssS20BerryAspectratio, cssS20BerryBadge, cssS20BerryBanner, cssS20BerryBreadcrumb, cssS20BerryButton, cssS20BerryCard, cssS20BerryCheckbox, cssS20BerryChip, cssS20BerryColorpicker, cssS20BerryDialog, cssS20BerryDivider, cssS20BerryEmpty, cssS20BerryInput, cssS20BerryKbd, cssS20BerryLabel, cssS20BerryLink, cssS20BerryMarker, cssS20BerryMeter, cssS20BerryNativeselect, cssS20BerryPageheader, cssS20BerryPagination, cssS20BerryProgress, cssS20BerryProse, cssS20BerryRadio, cssS20BerryRingcarousel, cssS20BerryScrollarea, cssS20BerrySegmented, cssS20BerrySkeleton, cssS20BerrySpinner, cssS20BerryStages, cssS20BerryStat, cssS20BerryStepper, cssS20BerrySwitch, cssS20BerryTable, cssS20BerryToast, cssS20BerryToggle].join("\n"),
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
    impl: { accordion: StandaloneAccordion as ComponentImpl, alert: StandaloneAlert as ComponentImpl, aspectratio: StandaloneAspectratio as ComponentImpl, badge: StandaloneBadge as ComponentImpl, banner: StandaloneBanner as ComponentImpl, breadcrumb: StandaloneBreadcrumb as ComponentImpl, button: StandaloneButton as ComponentImpl, card: StandaloneCard as ComponentImpl, checkbox: StandaloneCheckbox as ComponentImpl, chip: StandaloneChip as ComponentImpl, colorpicker: StandaloneColorpicker as ComponentImpl, dialog: StandaloneDialog as ComponentImpl, divider: StandaloneDivider as ComponentImpl, empty: StandaloneEmpty as ComponentImpl, input: StandaloneInput as ComponentImpl, kbd: StandaloneKbd as ComponentImpl, label: StandaloneLabel as ComponentImpl, link: StandaloneLink as ComponentImpl, marker: StandaloneMarker as ComponentImpl, meter: StandaloneMeter as ComponentImpl, nativeselect: StandaloneNativeselect as ComponentImpl, pageheader: StandalonePageheader as ComponentImpl, pagination: StandalonePagination as ComponentImpl, progress: StandaloneProgress as ComponentImpl, prose: StandaloneProse as ComponentImpl, radio: StandaloneRadio as ComponentImpl, ringcarousel: StandaloneRingcarousel as ComponentImpl, scrollarea: StandaloneScrollarea as ComponentImpl, segmented: StandaloneSegmented as ComponentImpl, skeleton: StandaloneSkeleton as ComponentImpl, spinner: StandaloneSpinner as ComponentImpl, stages: StandaloneStages as ComponentImpl, stat: StandaloneStat as ComponentImpl, stepper: StandaloneStepper as ComponentImpl, switch: StandaloneSwitch as ComponentImpl, table: StandaloneTable as ComponentImpl, toast: StandaloneToast as ComponentImpl, toggle: StandaloneToggle as ComponentImpl },
    Provider: standaloneProvider,
    css: (slug: string) => STANDALONE_CSS[slug] ?? "",
  },
};

export const BASE_ORDER: string[] = ["shadcn", "standalone", "chakra", "mantine", "antd", "mui"];
