import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import ExpandableSection from "@cloudscape-design/components/expandable-section";
import Header from "@cloudscape-design/components/header";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
import SpaceBetween from "@cloudscape-design/components/space-between";
import StatusIndicator from "@cloudscape-design/components/status-indicator";

interface Policy { bucket: string; access: "공개 차단" | "일부 공개"; encryption: "SSE-S3" | "SSE-KMS"; versioning: boolean }

const POLICIES: Policy[] = [
  { bucket: "cobalt-app-assets", access: "일부 공개", encryption: "SSE-S3", versioning: true },
  { bucket: "cobalt-user-uploads", access: "공개 차단", encryption: "SSE-KMS", versioning: true },
  { bucket: "cobalt-backup-archive", access: "공개 차단", encryption: "SSE-KMS", versioning: true },
  { bucket: "cobalt-static-site", access: "일부 공개", encryption: "SSE-S3", versioning: false },
  { bucket: "cobalt-logs-raw", access: "공개 차단", encryption: "SSE-KMS", versioning: false },
];

export function PoliciesScreen {
  const blocked = POLICIES.filter((p) => p.access === "공개 차단").length;
  const kms = POLICIES.filter((p) => p.encryption === "SSE-KMS").length;

  return (
    <SpaceBetween size="l">
      <KeyValuePairs
        columns={3}
        items={[
          { label: "전체 정책", value: `${POLICIES.length}건` },
          { label: "공개 차단 버킷", value: <StatusIndicator type="success">{blocked}건</StatusIndicator> },
          { label: "KMS 암호화 버킷", value: `${kms}건` },
        ]}
      />
      <Cards<Policy>
        items={POLICIES}
        cardDefinition={{
          header: (p) => p.bucket,
          sections: [
            { id: "access", header: "퍼블릭 액세스", content: (p) => <StatusIndicator type={p.access === "공개 차단" ? "success" : "warning"}>{p.access}</StatusIndicator> },
            { id: "encryption", header: "암호화", content: (p) => p.encryption },
            { id: "versioning", header: "버전 관리", content: (p) => <StatusIndicator type={p.versioning ? "success" : "pending"}>{p.versioning ? "켜짐" : "꺼짐"}</StatusIndicator> },
          ],
        }}
        cardsPerRow={[{ cards: 1 }, { minWidth: 480, cards: 2 }, { minWidth: 768, cards: 3 }]}
        header={<Header counter={`(${POLICIES.length})`}>정책</Header>}
      />
      <ExpandableSection headerText="정책 적용 규칙" variant="container">
        <SpaceBetween size="xs">
          <div>퍼블릭 액세스는 기본적으로 전부 차단되고, 정적 사이트 호스팅용 버킷만 예외로 허용돼요.</div>
          <div>KMS 암호화는 민감 데이터(사용자 업로드·백업·로그)에 우선 적용돼요.</div>
        </SpaceBetween>
      </ExpandableSection>
    </SpaceBetween>
  );
}
