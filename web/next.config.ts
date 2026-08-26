import type { NextConfig } from "next";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

const RAW = /^\?raw$/;

const nextConfig: NextConfig = {
  // Next 의 AGENTS.md 자동 생성 비활성화
  agentRules: false,
  distDir: process.env.NODE_ENV === "production" ? ".next-build" : ".next",
  outputFileTracingRoot: ROOT,
  turbopack: {
    root: ROOT,
    resolveAlias: { "@": path.join(ROOT, "app", "src") },
  },

  webpack: (config) => {
    // 규칙 적용 순서에 따라 .css가 JS 모듈 또는 문자열로 반환
    const excludeRaw = (rules: unknown[]): void => {
      for (const r of rules) {
        if (!r || typeof r !== "object") continue;
        const rule = r as { test?: unknown; oneOf?: unknown[]; use?: unknown;
                            resourceQuery?: unknown; rules?: unknown[] };
        if (Array.isArray(rule.oneOf)) excludeRaw(rule.oneOf);
        if (Array.isArray(rule.rules)) excludeRaw(rule.rules);
        const test = String(rule.test ?? "");
        if (test.includes("css") && rule.resourceQuery === undefined) {
          rule.resourceQuery = { not: [RAW] };
        }
      }
    };
    // 별칭은 양쪽 설정에 등록. turbopack만 두면 webpack에서 못 찾음
    config.resolve.alias = { ...config.resolve.alias, "@": path.join(ROOT, "app", "src") };

    excludeRaw(config.module.rules);
    config.module.rules.unshift({ resourceQuery: RAW, type: "asset/source" });
    return config;
  },
};

export default nextConfig;
