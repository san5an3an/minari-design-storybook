import * as React from "react";
import AreaChart from "@cloudscape-design/components/area-chart";
import Box from "@cloudscape-design/components/box";
import Flashbar from "@cloudscape-design/components/flashbar";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
import PieChart from "@cloudscape-design/components/pie-chart";
import ProgressBar from "@cloudscape-design/components/progress-bar";
import SpaceBetween from "@cloudscape-design/components/space-between";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import { AlertTriangle, Cpu, DollarSign, Server } from "lucide-react";

const STATS = [
  { label: "실행 중 인스턴스", value: "3", delta: "+1", icon: Server, tone: "#5b9bff" },
  { label: "이번 달 비용", value: "₩412,300", delta: "+8%", icon: DollarSign, tone: "#ffb020" },
  { label: "평균 CPU", value: "42%", delta: "-3%", icon: Cpu, tone: "#3fd39e" },
  { label: "활성 알람", value: "1", delta: "0", icon: AlertTriangle, tone: "#ff5c5c" },
] as const;

const CPU_SERIES = [
  { x: "00:00", y: 28 }, { x: "04:00", y: 22 }, { x: "08:00", y: 35 }, { x: "12:00", y: 58 },
  { x: "16:00", y: 62 }, { x: "20:00", y: 45 }, { x: "24:00", y: 42 },
];

const NETWORK_SERIES = [
  { x: "00:00", y: 12 }, { x: "04:00", y: 8 }, { x: "08:00", y: 20 }, { x: "12:00", y: 44 },
  { x: "16:00", y: 51 }, { x: "20:00", y: 30 }, { x: "24:00", y: 25 },
];

export function OverviewScreen {
  return (
    <div className="cloudscape-dark-scope" style={{ colorScheme: "dark", background: "#0b1622", borderRadius: "8px", padding: "1.25rem" }}>
      <SpaceBetween size="l">
        <Flashbar
          items={[
            { type: "error", header: "API 5xx 비율 경보", content: "지난 5분간 2%를 초과했어요.", id: "f1" },
            { type: "info", header: "예정된 유지보수", content: "9월 20일 02:00 KST 재부팅 예정.", id: "f2", dismissible: true },
          ]}
        />

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                style={{
                  background: "#14233a", border: "1px solid #223349", borderRadius: "8px",
                  padding: "0.9rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: "1.75rem", height: "1.75rem", borderRadius: "6px",
                    background: `${s.tone}26`, color: s.tone,
                  }}>
                    <Icon size={14} />
                  </span>
                  <span style={{ color: "#8fa3bf", fontSize: "0.75rem" }}>{s.label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{ color: "#f2f6fb", fontSize: "1.375rem", fontWeight: 700 }}>{s.value}</span>
                  <span style={{ color: s.delta.startsWith("+") ? "#3fd39e" : s.delta === "0" ? "#8fa3bf" : "#ff8a8a", fontSize: "0.75rem" }}>
                    {s.delta}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_1fr]">
          <div style={{ background: "#14233a", border: "1px solid #223349", borderRadius: "8px", padding: "0.9rem" }}>
            <Box color="text-status-info" fontSize="body-s" fontWeight="bold" margin={{ bottom: "s" }}>실시간 트래킹, CPU · 네트워크</Box>
            <AreaChart
              series={[
                { type: "area", title: "CPU 사용률(%)", data: CPU_SERIES, color: "#5b9bff" },
                { type: "area", title: "네트워크 처리량(Mbps)", data: NETWORK_SERIES, color: "#3fd39e" },
              ]}
              xDomain={CPU_SERIES.map((d) => d.x)}
              yDomain={[0, 80]}
              height={220}
              hideFilter
              xScaleType="categorical"
              statusType="finished"
              i18nStrings={{ xTickFormatter: (v) => String(v) }}
            />
          </div>

          <div style={{ background: "#14233a", border: "1px solid #223349", borderRadius: "8px", padding: "0.9rem" }}>
            <Box color="text-status-info" fontSize="body-s" fontWeight="bold" margin={{ bottom: "s" }}>리전별 인스턴스 분포</Box>
            <PieChart
              data={[
                { title: "ap-northeast-2", value: 4, color: "#5b9bff" },
                { title: "ap-northeast-1", value: 1, color: "#3fd39e" },
              ]}
              size="medium"
              hideFilter
              hideLegend={false}
            />
          </div>
        </div>

        <div style={{ background: "#14233a", border: "1px solid #223349", borderRadius: "8px", padding: "0.9rem" }}>
          <Box color="text-status-info" fontSize="body-s" fontWeight="bold" margin={{ bottom: "s" }}>예산 · 리소스 한도</Box>
          <SpaceBetween size="s">
            <ProgressBar value={62} label="이번 달 예산" description="₩620,000 예산 중 ₩384,400 사용" additionalInfo="9월 30일 기준 초과 예상 없음" />
            <ProgressBar value={91} label="스토리지 용량" description="1TB 중 910GB 사용" status="error" additionalInfo="곧 한도에 도달합니다" />
          </SpaceBetween>
        </div>

        <div style={{ background: "#14233a", border: "1px solid #223349", borderRadius: "8px", padding: "0.9rem" }}>
          <KeyValuePairs
            columns={4}
            items={[
              { label: "실행 중 인스턴스", value: "3" },
              { label: "이번 달 비용(추정)", value: "₩412,300" },
              { label: "리전", value: "ap-northeast-2" },
              { label: "서비스 상태", value: <StatusIndicator type="success">정상</StatusIndicator> },
            ]}
          />
        </div>
      </SpaceBetween>
    </div>
  );
}
