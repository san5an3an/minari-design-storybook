"use client";
import dynamic from "next/dynamic";

const UsageFrame = dynamic(
  () => import("@/usage/UsageFrame").then((m) => m.UsageFrame),
  { ssr: false },
);

export default function Page() {
  return <UsageFrame />;
}
