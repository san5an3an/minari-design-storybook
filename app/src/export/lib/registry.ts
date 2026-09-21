import { GROMMET } from "./grommet";
import { CLOUDSCAPE } from "./cloudscape";
import { PRIMEREACT } from "./primereact";
import { HEROUI } from "./heroui";
import { BLUEPRINT } from "./blueprint";
import { FLUENT } from "./fluent";
import { BOOTSTRAP } from "./bootstrap";
import { CARBON } from "./carbon";
import { CHAKRA } from "./chakra";
import { FLOWBITE } from "./flowbite";
import { MANTINE } from "./mantine";
import { PRIMER } from "./primer";
import { SPECTRUM } from "./spectrum";

// 저장소 안 파일 하나를 그룹으로 그대로 옮기는 지시
export interface LibExtra {
  // 저장소 뿌리 기준 경로
  from: string;
  // 그룹 내 이름
  to: string;
  // 이유를 기록. 없으면 받은 사람이 삭제할 수 있음
  why: string;
}

// 선택 가능 prop, ExportAxis와 동일 구조
export interface LibProp {
  prop: string;
  values: string[];
  default: string | null;
}

export interface LibSpec {
  // 사람이 읽는 이름, 예: Ant Design
  title: string;
  // 필수 설치 항목
  packages: string[];
  // generated/{slug}/base/{여기}/theme.{themeExt} 경로
  themeDir: string;
  themeExt?: "ts" | "css";
  importFrom: string | ((component: string) => string);
  // 공식 메타를 preview/{slug}.json에 저장하기
  refDir: string;
  // 함께 싣는 저장소 파일 목록
  extras: LibExtra[];
  compiledTheme?: (slug: string) => LibExtra[];
  parse(json: unknown): { componentName: string; props: LibProp[]; dropped: string[] };
  provider: string;
}

// app-bar 슬러그를 AppBar 컴포넌트명으로 변환
function pascal(slug: string): string {
  return slug.split(/[-_]/).map((p) => p.charAt(0).toUpperCase + p.slice(1)).join("");
}

function muiValues(type: string): string[] {
  const out = [...type.matchAll(/'([^']+)'/g)].map((m) => m[1]);
  return [...new Set(out)];
}

const ANTD: LibSpec = {
  title: "Ant Design",
  packages: ["antd", "antd-style", "lucide-react"],
  themeDir: "antd",
  importFrom: "antd",
  refDir: "antdRef",
  parse: (json) => {
    const d = json as {
      slug?: string;
      title?: string;
      variants?: { prop: string; values?: string[]; default?: string | null; deprecated?: boolean }[];
    };
    const isTypeName = (v: string) => /^[A-Z][A-Za-z0-9]*[a-z][A-Za-z0-9]*$/.test(v);
    const literal = (v: string) => !v.includes(".") && /^[A-Za-z0-9]/.test(v) && !isTypeName(v);

    const dropped: string[] = [];
    const props: LibProp[] = (d.variants ?? [])
      .filter((v) => !v.deprecated)
      .map((v) => {
        const all = v.values ?? [];
        for (const x of all) if (!literal(x)) dropped.push(`${v.prop} = ${x}`);
        return { ...v, values: all.filter(literal) };
      })
      .filter((v) => v.values.length > 1)
      .map((v) => ({
        prop: v.prop,
        values: v.values,
        // antd default엔 설명 문장이 섞여 그대로 쓰면 prop 값에 문장이 섞이는 문제임
        default: ( => {
          const raw = v.default ?? "";
          const m = /`([^`]+)`/.exec(raw);
          const cand = m ? m[1] : raw.trim;
          return cand && (v.values ?? []).includes(cand) ? cand : null;
        }),
      }));
    const componentName = (d.title ?? "").trim || pascal(d.slug ?? "");
    return { componentName, props, dropped };
  },
  extras: [
    {
      from: "app/src/bases/antdStyleLayer.tsx",
      to: "antdStyleLayer.tsx",
      why: "antd CSS 를 @layer 에 넣는다. 없으면 공식 예제가 antd 규칙에 특이도로 진다",
    },
    {
      from: "app/src/bases/antdOverrides.css",
      to: "antdOverrides.css",
      why: "antdStyleLayer.tsx 가 직접 import 한다. 빠지면 묶음이 없는 파일을 부르며 빌드가 깨진다",
    },
    {
      from: "app/src/bases/antdButtonConfig.tsx",
      to: "antdButtonConfig.tsx",
      why: "<Button loading> 의 아이콘을 Lucide 로. antd 기본값은 LoadingOutlined 다",
    },
    {
      from: "app/src/bases/antdAvatarConfig.tsx",
      to: "antdAvatarConfig.tsx",
      why: "아바타 면·글자. 토큰으로는 못 닿는다, antd 의 mergeToken 이 덮는다",
    },
    {
      from: "app/src/bases/antdSpinConfig.tsx",
      to: "antdSpinConfig.tsx",
      why: "Spin 설명 글자. antd 가 이 자리에 색 토큰을 안 열어 뒀다",
    },
  ],
  provider:  => `"use client";

import * as React from "react";
import { ConfigProvider } from "antd";

import "./vars.css";
import { AntdStyleLayer } from "./antdStyleLayer";
import { ANTD_BUTTON_CONFIG } from "./antdButtonConfig";
import { ANTD_AVATAR_CONFIG } from "./antdAvatarConfig";
import { ANTD_SPIN_CONFIG } from "./antdSpinConfig";
import { byMode } from "./theme";

export type Mode = "light" | "dark" | "high-contrast";

export function Providers({
  mode = "light",
  children,
}: {
  mode?: Mode;
  children: React.ReactNode;
}) {
  // data-theme 속성 명시 지정. 없으면 화면이 OS 설정대로 결정되는 구조임
  React.useEffect( => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return (
    <AntdStyleLayer>
      <ConfigProvider
        theme={byMode[mode]}
        button={ANTD_BUTTON_CONFIG}
        avatar={ANTD_AVATAR_CONFIG}
        spin={ANTD_SPIN_CONFIG}
      >
        {children}
      </ConfigProvider>
    </AntdStyleLayer>
  );
}
`,
};

const MUI: LibSpec = {
  title: "MUI",
  packages: ["@mui/material", "@emotion/react", "@emotion/styled"],
  themeDir: "mui",
  importFrom: "@mui/material",
  refDir: "muiRef",
  parse: (json) => {
    const d = json as {
      slug?: string;
      components?: string[];
      api?: { name?: string; props?: { prop: string; type?: string; default?: string | null; deprecated?: boolean }[] }[];
    };
    // 여러 컴포넌트 중 첫 항목을 대표로 지정
    const name = d.components?.[0] ?? d.api?.[0]?.name ?? pascal(d.slug ?? "");
    const entry = d.api?.find((a) => a.name === name) ?? d.api?.[0];
    const props: LibProp[] = (entry?.props ?? [])
      .filter((p) => !p.deprecated)
      .map((p) => ({ prop: p.prop, values: muiValues(p.type ?? ""), default: null }))
      .filter((p) => p.values.length > 1)
      .map((p) => {
        const raw = (entry?.props ?? []).find((x) => x.prop === p.prop)?.default ?? "";
        const m = /'([^']+)'/.exec(raw);
        const cand = m ? m[1] : "";
        return { ...p, default: cand && p.values.includes(cand) ? cand : null };
      });
    // dropped가 비는 이유는 파서 구조가 반대이기 때문임
    return { componentName: name, props, dropped: [] };
  },
  extras: [],
  provider:  => `"use client";

// MUI 기반 디자인 시스템 Provider. vars.css 필수임
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./vars.css";
import { byMode } from "./theme";

export type Mode = "light" | "dark" | "high-contrast";

export function Providers({
  mode = "light",
  children,
}: {
  mode?: Mode;
  children: React.ReactNode;
}) {
  // data-theme 명시적으로 지정. 안 하면 OS 설정값이 색에 적용될 수 있음
  React.useEffect( => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return (
    <ThemeProvider theme={byMode[mode]}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
`,
};

export const LIB_BASES: Readonly<Record<string, LibSpec>> = {
  antd: ANTD,
  mui: MUI,
  grommet: GROMMET,
  cloudscape: CLOUDSCAPE,
  primereact: PRIMEREACT,
  heroui: HEROUI,
  blueprint: BLUEPRINT,
  fluent: FLUENT,
  bootstrap: BOOTSTRAP,
  carbon: CARBON,
  chakra: CHAKRA,
  flowbite: FLOWBITE,
  mantine: MANTINE,
  primer: PRIMER,
  spectrum: SPECTRUM,
};

// 베이스의 라이브러리 export 경로 사용 여부
export function isLibBase(baseKey: string): boolean {
  return baseKey in LIB_BASES;
}

// 명세 조회. 없으면 즉시 오류 발생
export function libSpecFor(baseKey: string): LibSpec {
  const spec = LIB_BASES[baseKey];
  if (!spec) {
    throw new Error(
      `'${baseKey}' 는 라이브러리 내보내기 표에 없어요. ` +
        `app/src/export/lib/registry.ts 의 LIB_BASES 에 항목을 더하세요. ` +
        `지금 있는 것: ${Object.keys(LIB_BASES).join(" · ")}`,
    );
  }
  return spec;
}
