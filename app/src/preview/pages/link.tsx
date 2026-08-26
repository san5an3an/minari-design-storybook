import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { LinkProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Link = impl<LinkProps>(system, "link");

  return (
    <>
      <Master note="밑줄을 지우지 않아요. 색만으로는 링크인지 알 수 없어요.">
        <p style={{ margin: 0 }}>
          자세한 내용은 <Link href="#">이용약관</Link> 에서 볼 수 있어요.
        </p>
      </Master>

      <Kids
        axis="external"
        note={
          <>
            새 창으로 여는 링크는 그 사실이 <b>보여야</b> 해요. 아이콘 없이 새 탭만 열면 뒤로
            가기가 안 먹는 이유를 알 수 없어요.
          </>
        }
      >
        <Kid label="false" hint="기본">
          <Link href="#">같은 창에서 열려요</Link>
        </Kid>
        <Kid label="true">
          <Link href="#" external>
            새 창에서 열려요
          </Link>
        </Kid>
      </Kids>

      <Kids axis="state" title="State">
        <Kid label="기본">
          <Link href="#">링크</Link>
        </Kid>
        <Kid label="hover">
          <span>마우스를 올려 보세요. 색이 바뀌어요</span>
        </Kid>
        <Kid label="focus">
          <span>Tab 키로 포커스 링을 확인해 보세요</span>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "무언가를 실행하는 것일 때",
    then: (
      <>
        <b>Button</b> 이에요. 뒤로 가기가 통하는지는 <b>누르기 전에</b> 알아야 해요.
      </>
    ),
  },
  {
    when: "새 창으로 열 때",
    then: (
      <>
        <code>external</code> 로 표시해요. <code>rel=&quot;noreferrer noopener&quot;</code> 도 함께
        나가요.
      </>
    ),
  },
  {
    when: "글자가 &ldquo;여기&rdquo; &ldquo;클릭&rdquo; 일 때",
    then: <>어디로 가는지 링크 글자만 읽어도 알 수 있게 바꿔요.</>,
  },
];
