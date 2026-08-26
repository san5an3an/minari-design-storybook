import { GitBranch, Search } from "lucide-react";
import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { MarkerImpl } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Marker = compound<MarkerImpl>(system, "marker");
  const Spinner = system.impl.spinner;
  return (
    <>
      <Master note="말풍선이 '누가 말했는가'라면, 이건 '그 사이에 무슨 일이 있었는가'예요. 그래서 보내는 이도 시각도 없어요.">
        <Marker>
          <Marker.Icon><GitBranch /></Marker.Icon>
          <Marker.Content>새 가지로 옮겼어요</Marker.Content>
        </Marker>
      </Master>

      <Kids
        axis="variant"
        note="굵기 차이가 아니라 경계의 크기 차이예요. 구간을 나눌 게 아니면 separator 를 쓰지 마세요. 가운데 선이 지나가면 위아래가 다른 이야기로 읽혀요."
      >
        <Kid label="default" hint="아무것도 안 나눠요">
          <Marker>
            <Marker.Icon><Search /></Marker.Icon>
            <Marker.Content>파일 넷을 훑었어요</Marker.Content>
          </Marker>
        </Kid>
        <Kid label="border" hint="행과 행">
          <Marker variant="border">
            <Marker.Icon><Search /></Marker.Icon>
            <Marker.Content>여기까지 읽었어요</Marker.Content>
          </Marker>
        </Kid>
        <Kid label="separator" hint="구간과 구간">
          <Marker variant="separator">
            <Marker.Content>여기부터 접었어요</Marker.Content>
          </Marker>
        </Kid>
      </Kids>

      <Kids
        axis="role"
        title="진행 중"
        note='진행 중인 일에는 role="status" 를 붙여요. 안 붙이면 화면이 바뀐 사실이 소리로 듣는 사람에게 닿지 않아요.'
      >
        <Kid label='role="status"' hint="+ Spinner">
          <Marker role="status">
            <Marker.Icon><Spinner /></Marker.Icon>
            <Marker.Content>생각하는 중이에요</Marker.Content>
          </Marker>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "표시만 뜻을 질 때", then: <>표시는 <b>읽히지 않아요</b>. 같은 뜻이 글에도 있어야 해요.</> },
  { when: "진행 중일 때", then: <><code>role=&quot;status&quot;</code> 를 붙여 주세요.</> },
  { when: "사람이 한 말일 때", then: <>여기 담지 마세요. 보내는 이가 있으면 <b>Message</b> 예요.</> },
];
