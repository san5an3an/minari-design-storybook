import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Header from "@cloudscape-design/components/header";

interface Policy {
  bucket: string;
  access: "공개 차단" | "일부 공개";
  encryption: "SSE-S3" | "SSE-KMS";
}

const POLICIES: Policy[] = [
  { bucket: "cobalt-app-assets", access: "일부 공개", encryption: "SSE-S3" },
  { bucket: "cobalt-user-uploads", access: "공개 차단", encryption: "SSE-KMS" },
  { bucket: "cobalt-backup-archive", access: "공개 차단", encryption: "SSE-KMS" },
];

export function PoliciesScreen {
  return (
    <Cards<Policy>
      items={POLICIES}
      cardDefinition={{
        header: (p) => p.bucket,
        sections: [
          {
            id: "access",
            header: "퍼블릭 액세스",
            content: (p) => <StatusIndicator type={p.access === "공개 차단" ? "success" : "warning"}>{p.access}</StatusIndicator>,
          },
          { id: "encryption", header: "암호화", content: (p) => p.encryption },
        ],
      }}
      cardsPerRow={[{ cards: 1 }, { minWidth: 480, cards: 2 }]}
      header={<Header counter={`(${POLICIES.length})`}>정책</Header>}
    />
  );
}
