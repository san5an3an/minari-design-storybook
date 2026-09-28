import * as React from "react";
import {
  ComposedModal, Dropdown, ModalBody, ModalFooter, ModalHeader, NumberInput, ProgressIndicator,
  ProgressStep, StructuredListBody, StructuredListCell, StructuredListHead, StructuredListRow,
  StructuredListWrapper, Tag, Tile, Toggle,
} from "@carbon/react";

// 통계카드 행과 배포 이력 표로 화면 채우기
const VERSIONS = ["v2.4.1", "v2.4.0", "v2.3.9"];

interface DeployLog {
  version: string;
  date: string;
  target: string;
  result: "성공" | "실패" | "진행중";
}

const DEPLOY_LOG: DeployLog[] = [
  { version: "v2.4.1", date: "9월 16일", target: "스테이징 3대", result: "진행중" },
  { version: "v2.4.0", date: "9월 2일", target: "전체 30대", result: "성공" },
  { version: "v2.3.9", date: "8월 19일", target: "전체 28대", result: "성공" },
  { version: "v2.3.8", date: "8월 5일", target: "스테이징 3대", result: "실패" },
];

const RESULT_TAG = { 성공: "green", 실패: "red", 진행중: "blue" } as const;

export function RolloutScreen {
  const [version, setVersion] = React.useState(VERSIONS[0]);
  const [autoDeploy, setAutoDeploy] = React.useState(false);
  const [stagingPct, setStagingPct] = React.useState(10);
  // 자동 배포 켜기 확인 ComposedModal 렌더링
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      {/* 배포 설정. Dropdown, NumberInput, Toggle 구성 */}
      <div className="flex items-end gap-4" style={{ flexWrap: "wrap" }}>
        <Dropdown
          id="firmware-version" titleText="배포 버전" label={version}
          items={VERSIONS} selectedItem={version}
          onChange={(e: { selectedItem: string }) => setVersion(e.selectedItem)}
        />
        <NumberInput
          id="staging-pct" label="스테이징 비율(%)" min={1} max={100} step={1}
          value={stagingPct}
          onChange={(_e, { value }) => setStagingPct(Number(value))}
        />
        <Toggle
          id="auto-deploy" labelText="자동 배포" labelA="꺼짐" labelB="켜짐"
          toggled={autoDeploy}
          onToggle={(next) => (next ? setConfirmOpen(true) : setAutoDeploy(false))}
        />
      </div>

      <ComposedModal open={confirmOpen} onClose={ => setConfirmOpen(false)}>
        <ModalHeader label="펌웨어 배포" title="자동 배포를 켤까요?" />
        <ModalBody>
          검증을 통과한 다음 버전부터 사람 확인 없이 전체 장비에 자동으로 배포돼요.
        </ModalBody>
        <ModalFooter
          primaryButtonText="켜기"
          secondaryButtonText="취소"
          onRequestSubmit={ => { setAutoDeploy(true); setConfirmOpen(false); }}
          onRequestClose={ => setConfirmOpen(false)}
        >
          {null}
        </ModalFooter>
      </ComposedModal>

      <Tile>
        <ProgressIndicator currentIndex={2}>
          <ProgressStep label="준비" description="대상 장비 30대 선정" />
          <ProgressStep label="스테이징 배포" description="장비 3대에 먼저 적용" />
          <ProgressStep label="검증" description="24시간 관찰 중" />
          <ProgressStep label="전체 배포" description="나머지 27대" />
        </ProgressIndicator>
      </Tile>
      <Tile>
        <div className="flex flex-col gap-1">
          <span style={{ fontWeight: 600 }}>{version}</span>
          <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>
            스테이징 3대 중 3대 정상. 이상 신호 없음. 검증 마감까지 남은 시간 6시간.
          </span>
        </div>
      </Tile>

      {/* 통계카드와 배포 이력으로 여백 채우기. 카드 행은 2 또는 4열만 사용 */}
      <div className="cb1-stats">
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>대상 장비</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>30대</div></Tile>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>스테이징 완료</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>3대</div></Tile>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>대기 중</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>27대</div></Tile>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>이상 신호</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>0건</div></Tile>
      </div>

      <Tile>
        <div style={{ fontSize: "0.8125rem", fontWeight: 600, marginBlockEnd: "0.75rem" }}>배포 이력</div>
        <StructuredListWrapper>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>버전</StructuredListCell>
              <StructuredListCell head>날짜</StructuredListCell>
              <StructuredListCell head>대상</StructuredListCell>
              <StructuredListCell head>결과</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            {DEPLOY_LOG.map((d) => (
              <StructuredListRow key={d.version + d.date}>
                <StructuredListCell noWrap>{d.version}</StructuredListCell>
                <StructuredListCell>{d.date}</StructuredListCell>
                <StructuredListCell>{d.target}</StructuredListCell>
                <StructuredListCell>
                  <Tag size="sm" type={RESULT_TAG[d.result]}>{d.result}</Tag>
                </StructuredListCell>
              </StructuredListRow>
            ))}
          </StructuredListBody>
        </StructuredListWrapper>
      </Tile>
    </div>
  );
}
