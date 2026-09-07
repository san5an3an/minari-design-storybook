import type { NextConfig } from "next";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

const nextConfig: NextConfig = {
  // Next 의 AGENTS.md 자동 생성 비활성화
  agentRules: false,
  devIndicators: false,
  distDir: process.env.NODE_ENV === "production" ? ".next-build" : ".next",
  outputFileTracingRoot: ROOT,
  turbopack: {
    root: ROOT,
    resolveAlias: { "@": path.join(ROOT, "app", "src") },
  },

  webpack: (config) => {
    // 별칭은 양쪽 설정에 등록. turbopack만 두면 webpack에서 못 찾음
    config.resolve.alias = { ...config.resolve.alias, "@": path.join(ROOT, "app", "src") };
    return config;
  },
};

export default nextConfig;
