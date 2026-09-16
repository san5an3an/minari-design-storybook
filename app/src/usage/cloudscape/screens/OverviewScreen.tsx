import * as React from "react";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
import ProgressBar from "@cloudscape-design/components/progress-bar";
import SpaceBetween from "@cloudscape-design/components/space-between";
import StatusIndicator from "@cloudscape-design/components/status-indicator";

export function OverviewScreen {
  return (
    <SpaceBetween size="l">
      <Container header={<Header variant="h2">계정 요약</Header>}>
        <KeyValuePairs
          columns={4}
          items={[
            { label: "실행 중 인스턴스", value: "3" },
            { label: "이번 달 비용(추정)", value: "₩412,300" },
            { label: "리전", value: "ap-northeast-2" },
            { label: "서비스 상태", value: <StatusIndicator type="success">정상</StatusIndicator> },
          ]}
        />
      </Container>

      <Container header={<Header variant="h2">예산 사용률</Header>}>
        <SpaceBetween size="m">
          <ProgressBar
            value={62}
            label="이번 달 예산"
            description="₩620,000 예산 중 ₩384,400 사용"
            additionalInfo="9월 30일 기준 초과 예상 없음"
          />
          <ProgressBar
            value={91}
            label="스토리지 용량"
            description="1TB 중 910GB 사용"
            status="error"
            additionalInfo="곧 한도에 도달합니다"
          />
        </SpaceBetween>
      </Container>
    </SpaceBetween>
  );
}
