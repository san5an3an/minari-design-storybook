"use client";
import dynamic from "next/dynamic";

const DemoStandalone = dynamic(
   => import("@/preview/DemoStandalone").then((m) => m.DemoStandalone),
  { ssr: false },
);

export default function Page {
  return <DemoStandalone />;
}
