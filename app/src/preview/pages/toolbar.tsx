import { Bold, Italic, Underline } from "lucide-react";
import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ToolbarImpl } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Toolbar = compound<ToolbarImpl>(system, "toolbar");
  const Button = system.impl.button;
  return (
    <>
      <Master note="붙어 있다는 것이 '한 종류'라는 뜻이에요. 상관없는 동작을 붙이면 잘못 읽혀요.">
        <Toolbar>
          <Button variant="outline"><Bold /></Button>
          <Button variant="outline"><Italic /></Button>
          <Button variant="outline"><Underline /></Button>
        </Toolbar>
      </Master>

      <Kids axis="parts" title="Parts">
        <Kid label="+ Text" hint="단위·접두어">
          <Toolbar>
            <Toolbar.Text>https://</Toolbar.Text>
            <Button variant="outline">주소 고르기</Button>
          </Toolbar>
        </Kid>
        <Kid label="+ Separator" hint="그룹 경계">
          <Toolbar>
            <Button variant="outline">복사</Button>
            <Toolbar.Separator />
            <Button variant="outline">삭제</Button>
          </Toolbar>
        </Kid>
      </Kids>

      <Kids axis="orientation" title="Variants">
        <Kid label="horizontal" hint="기본">
          <Toolbar>
            <Button variant="outline">앞</Button>
            <Button variant="outline">뒤</Button>
          </Toolbar>
        </Kid>
        <Kid label="vertical">
          <Toolbar orientation="vertical">
            <Button variant="outline">위</Button>
            <Button variant="outline">아래</Button>
          </Toolbar>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "켜고 끄는 것일 때", then: <><b>Toggle</b>·<b>Segmented</b> 예요. 여기 버튼은 누르면 일이 일어나요.</> },
  { when: "상관없는 동작", then: <>붙이지 마세요. 붙어 있으면 한 종류로 읽혀요.</> },
  { when: "주 동작을 끝으로", then: <>바깥 배치로 미세요. 그쪽엔 공간을 밀어내는 부분이 없어요.</> },
];
