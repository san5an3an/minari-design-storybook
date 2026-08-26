import { FileSearch, Inbox } from "lucide-react";
import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { EmptyImpl } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Empty = compound<EmptyImpl>(system, "empty");
  const Button = system.impl.button;
  return (
    <>
      <Master note="빈 화면은 고장처럼 보여요. 왜 비었는지와 다음에 뭘 할지를 같이 말해요.">
        <Empty>
          <Empty.Header>
            <Empty.Media variant="icon"><Inbox /></Empty.Media>
            <Empty.Title>받은 편지가 없어요</Empty.Title>
            <Empty.Description>새 편지가 오면 여기에 쌓여요.</Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button>새로 고치기</Button>
          </Empty.Content>
        </Empty>
      </Master>

      <Kids axis="parts" title="Parts" note="표시는 없어도 돼요. 없는 이유를 말하는 한 줄이 표시보다 중요해요.">
        <Kid label="글만">
          <Empty>
            <Empty.Header>
              <Empty.Title>결과가 없어요</Empty.Title>
              <Empty.Description>다른 낱말로 찾아보세요.</Empty.Description>
            </Empty.Header>
          </Empty>
        </Kid>
        <Kid label="+ Media" hint="variant=icon">
          <Empty>
            <Empty.Header>
              <Empty.Media variant="icon"><FileSearch /></Empty.Media>
              <Empty.Title>결과가 없어요</Empty.Title>
            </Empty.Header>
          </Empty>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "아직 불러오는 중", then: <><b>Skeleton</b> 이에요. 비었다고 말하면 거짓이 돼요.</> },
  { when: "찾아서 없을 때", then: <>찾은 말을 그대로 되짚어 주세요. &ldquo;없어요&rdquo;만으로는 오타를 못 알아채요.</> },
  { when: "권한이 없을 때", then: <>비었다고 하지 마세요. 없는 것과 못 보는 것은 달라요.</> },
];
