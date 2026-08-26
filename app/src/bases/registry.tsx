import type { ReactNode } from "react";
import type { ComponentImpl, Mode } from "../systems/types";

import { ConfigProvider } from "antd";
import { AntdStyleLayer } from "./antdStyleLayer";
import { ANTD_BUTTON_CONFIG } from "./antdButtonConfig";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.layer.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// antd 컴포넌트 2종
import { Button as AntdButton } from "./antd/Button";
import { Dialog as AntdDialog } from "./antd/Dialog";

// chakra 컴포넌트 2종
import { Button as ChakraButton } from "./chakra/Button";
import { Dialog as ChakraDialog } from "./chakra/Dialog";

// mantine 2종
import { Button as MantineButton } from "./mantine/Button";
import { Dialog as MantineDialog } from "./mantine/Dialog";

// mui 20종
import { Accordion as MuiAccordion } from "./mui/Accordion";
import { Alert as MuiAlert } from "./mui/Alert";
import { Badge as MuiBadge } from "./mui/Badge";
import { Breadcrumb as MuiBreadcrumb } from "./mui/Breadcrumb";
import { Button as MuiButton } from "./mui/Button";
import { Card as MuiCard } from "./mui/Card";
import { Checkbox as MuiCheckbox } from "./mui/Checkbox";
import { Dialog as MuiDialog } from "./mui/Dialog";
import { Divider as MuiDivider } from "./mui/Divider";
import { Input as MuiInput } from "./mui/Input";
import { Link as MuiLink } from "./mui/Link";
import { Progress as MuiProgress } from "./mui/Progress";
import { Radio as MuiRadio } from "./mui/Radio";
import { Select as MuiSelect } from "./mui/Select";
import { Skeleton as MuiSkeleton } from "./mui/Skeleton";
import { Slider as MuiSlider } from "./mui/Slider";
import { Spinner as MuiSpinner } from "./mui/Spinner";
import { Switch as MuiSwitch } from "./mui/Switch";
import { Tabs as MuiTabs } from "./mui/Tabs";
import { Tooltip as MuiTooltip } from "./mui/Tooltip";

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

// standalone 2종
import { Button as StandaloneButton } from "./standalone/Button";
import { Dialog as StandaloneDialog } from "./standalone/Dialog";

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

import cssS01CobaltButton from "../../../systems/01-cobalt/components/button/button.css?raw";
import cssS01CobaltDialog from "../../../systems/01-cobalt/components/dialog/dialog.css?raw";
import cssS02GraphiteButton from "../../../systems/02-graphite/components/button/button.css?raw";
import cssS02GraphiteDialog from "../../../systems/02-graphite/components/dialog/dialog.css?raw";
import cssS03EmberButton from "../../../systems/03-ember/components/button/button.css?raw";
import cssS03EmberDialog from "../../../systems/03-ember/components/dialog/dialog.css?raw";
import cssS04JadeButton from "../../../systems/04-jade/components/button/button.css?raw";
import cssS04JadeDialog from "../../../systems/04-jade/components/dialog/dialog.css?raw";
import cssS05PlumButton from "../../../systems/05-plum/components/button/button.css?raw";
import cssS05PlumDialog from "../../../systems/05-plum/components/dialog/dialog.css?raw";
import cssS06SlateButton from "../../../systems/06-slate/components/button/button.css?raw";
import cssS06SlateDialog from "../../../systems/06-slate/components/dialog/dialog.css?raw";
import cssS07EmeraldButton from "../../../systems/07-emerald/components/button/button.css?raw";
import cssS07EmeraldDialog from "../../../systems/07-emerald/components/dialog/dialog.css?raw";
import cssS08IndigoButton from "../../../systems/08-indigo/components/button/button.css?raw";
import cssS08IndigoDialog from "../../../systems/08-indigo/components/dialog/dialog.css?raw";
import cssS09SandButton from "../../../systems/09-sand/components/button/button.css?raw";
import cssS09SandDialog from "../../../systems/09-sand/components/dialog/dialog.css?raw";
import cssS10TealButton from "../../../systems/10-teal/components/button/button.css?raw";
import cssS10TealDialog from "../../../systems/10-teal/components/dialog/dialog.css?raw";
import cssS11CrimsonButton from "../../../systems/11-crimson/components/button/button.css?raw";
import cssS11CrimsonDialog from "../../../systems/11-crimson/components/dialog/dialog.css?raw";
import cssS12MossButton from "../../../systems/12-moss/components/button/button.css?raw";
import cssS12MossDialog from "../../../systems/12-moss/components/dialog/dialog.css?raw";
import cssS13AzureButton from "../../../systems/13-azure/components/button/button.css?raw";
import cssS13AzureDialog from "../../../systems/13-azure/components/dialog/dialog.css?raw";
import cssS14VioletButton from "../../../systems/14-violet/components/button/button.css?raw";
import cssS14VioletDialog from "../../../systems/14-violet/components/dialog/dialog.css?raw";
import cssS15RustButton from "../../../systems/15-rust/components/button/button.css?raw";
import cssS15RustDialog from "../../../systems/15-rust/components/dialog/dialog.css?raw";
import cssS16MintButton from "../../../systems/16-mint/components/button/button.css?raw";
import cssS16MintDialog from "../../../systems/16-mint/components/dialog/dialog.css?raw";
import cssS17NavyButton from "../../../systems/17-navy/components/button/button.css?raw";
import cssS17NavyDialog from "../../../systems/17-navy/components/dialog/dialog.css?raw";
import cssS18SaffronButton from "../../../systems/18-saffron/components/button/button.css?raw";
import cssS18SaffronDialog from "../../../systems/18-saffron/components/dialog/dialog.css?raw";
import cssS19FogButton from "../../../systems/19-fog/components/button/button.css?raw";
import cssS19FogDialog from "../../../systems/19-fog/components/dialog/dialog.css?raw";
import cssS20BerryButton from "../../../systems/20-berry/components/button/button.css?raw";
import cssS20BerryDialog from "../../../systems/20-berry/components/dialog/dialog.css?raw";
const STANDALONE_CSS: Record<string, string> = {
  "01-cobalt": [cssS01CobaltButton, cssS01CobaltDialog].join("\n"),
  "02-graphite": [cssS02GraphiteButton, cssS02GraphiteDialog].join("\n"),
  "03-ember": [cssS03EmberButton, cssS03EmberDialog].join("\n"),
  "04-jade": [cssS04JadeButton, cssS04JadeDialog].join("\n"),
  "05-plum": [cssS05PlumButton, cssS05PlumDialog].join("\n"),
  "06-slate": [cssS06SlateButton, cssS06SlateDialog].join("\n"),
  "07-emerald": [cssS07EmeraldButton, cssS07EmeraldDialog].join("\n"),
  "08-indigo": [cssS08IndigoButton, cssS08IndigoDialog].join("\n"),
  "09-sand": [cssS09SandButton, cssS09SandDialog].join("\n"),
  "10-teal": [cssS10TealButton, cssS10TealDialog].join("\n"),
  "11-crimson": [cssS11CrimsonButton, cssS11CrimsonDialog].join("\n"),
  "12-moss": [cssS12MossButton, cssS12MossDialog].join("\n"),
  "13-azure": [cssS13AzureButton, cssS13AzureDialog].join("\n"),
  "14-violet": [cssS14VioletButton, cssS14VioletDialog].join("\n"),
  "15-rust": [cssS15RustButton, cssS15RustDialog].join("\n"),
  "16-mint": [cssS16MintButton, cssS16MintDialog].join("\n"),
  "17-navy": [cssS17NavyButton, cssS17NavyDialog].join("\n"),
  "18-saffron": [cssS18SaffronButton, cssS18SaffronDialog].join("\n"),
  "19-fog": [cssS19FogButton, cssS19FogDialog].join("\n"),
  "20-berry": [cssS20BerryButton, cssS20BerryDialog].join("\n"),
};

import shadcnInteropS01Cobalt from "../../../generated/01-cobalt/base/shadcn/theme.css?raw";
import shadcnInteropS02Graphite from "../../../generated/02-graphite/base/shadcn/theme.css?raw";
import shadcnInteropS03Ember from "../../../generated/03-ember/base/shadcn/theme.css?raw";
import shadcnInteropS04Jade from "../../../generated/04-jade/base/shadcn/theme.css?raw";
import shadcnInteropS05Plum from "../../../generated/05-plum/base/shadcn/theme.css?raw";
import shadcnInteropS06Slate from "../../../generated/06-slate/base/shadcn/theme.css?raw";
import shadcnInteropS07Emerald from "../../../generated/07-emerald/base/shadcn/theme.css?raw";
import shadcnInteropS08Indigo from "../../../generated/08-indigo/base/shadcn/theme.css?raw";
import shadcnInteropS09Sand from "../../../generated/09-sand/base/shadcn/theme.css?raw";
import shadcnInteropS10Teal from "../../../generated/10-teal/base/shadcn/theme.css?raw";
import shadcnInteropS11Crimson from "../../../generated/11-crimson/base/shadcn/theme.css?raw";
import shadcnInteropS12Moss from "../../../generated/12-moss/base/shadcn/theme.css?raw";
import shadcnInteropS13Azure from "../../../generated/13-azure/base/shadcn/theme.css?raw";
import shadcnInteropS14Violet from "../../../generated/14-violet/base/shadcn/theme.css?raw";
import shadcnInteropS15Rust from "../../../generated/15-rust/base/shadcn/theme.css?raw";
import shadcnInteropS16Mint from "../../../generated/16-mint/base/shadcn/theme.css?raw";
import shadcnInteropS17Navy from "../../../generated/17-navy/base/shadcn/theme.css?raw";
import shadcnInteropS18Saffron from "../../../generated/18-saffron/base/shadcn/theme.css?raw";
import shadcnInteropS19Fog from "../../../generated/19-fog/base/shadcn/theme.css?raw";
import shadcnInteropS20Berry from "../../../generated/20-berry/base/shadcn/theme.css?raw";
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
    impl: { button: AntdButton as ComponentImpl, dialog: AntdDialog as ComponentImpl },
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
    impl: { accordion: MuiAccordion as ComponentImpl, alert: MuiAlert as ComponentImpl, badge: MuiBadge as ComponentImpl, breadcrumb: MuiBreadcrumb as ComponentImpl, button: MuiButton as ComponentImpl, card: MuiCard as ComponentImpl, checkbox: MuiCheckbox as ComponentImpl, dialog: MuiDialog as ComponentImpl, divider: MuiDivider as ComponentImpl, input: MuiInput as ComponentImpl, link: MuiLink as ComponentImpl, progress: MuiProgress as ComponentImpl, radio: MuiRadio as ComponentImpl, select: MuiSelect as ComponentImpl, skeleton: MuiSkeleton as ComponentImpl, slider: MuiSlider as ComponentImpl, spinner: MuiSpinner as ComponentImpl, switch: MuiSwitch as ComponentImpl, tabs: MuiTabs as ComponentImpl, tooltip: MuiTooltip as ComponentImpl },
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
    impl: { button: StandaloneButton as ComponentImpl, dialog: StandaloneDialog as ComponentImpl },
    Provider: standaloneProvider,
    css: (slug: string) => STANDALONE_CSS[slug] ?? "",
  },
};

// 구현 많은 순서대로 화면 나열. 그 수가 프로젝트 범위
export const BASE_ORDER: string[] = ["shadcn", "mui", "antd", "chakra", "mantine", "standalone"];
