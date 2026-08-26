import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { BreadcrumbProps } from "../../systems/props";
import type { PageProps } from "./types";

const PATH = [
  { label: "홈", href: "#" },
  { label: "설정", href: "#" },
  { label: "알림" },
];

export function Page({ system }: PageProps) {
  const Breadcrumb = impl<BreadcrumbProps>(system, "breadcrumb");

  return (
    <>
      <Master note="마지막 셀은 링크가 아니에요. 지금 있는 위치를 다시 누르게 하지 않아요.">
        <Breadcrumb
          items={[{ label: "홈", href: "#" }, { label: "설정", href: "#" }, { label: "알림" }]}
        />
      </Master>

      <Kids axis="items" title="Depth">
        <Kid label="2단">
          <Breadcrumb items={[{ label: "홈", href: "#" }, { label: "설정" }]} />
        </Kid>
        <Kid label="4단">
          <Breadcrumb
            items={[
              { label: "홈", href: "#" },
              { label: "설정", href: "#" },
              { label: "알림", href: "#" },
              { label: "이메일" },
            ]}
          />
        </Kid>
      </Kids>

      <Kids
        axis="separator"
        title="Separator"
        note={
          <>
            갈아 끼울 수 있어요. 다만 <b>방향이 있는 것만</b> 써요. 가운뎃점이나 세로선은 순서를
            말하지 않아서, 이동경로가 아니라 그냥 목록으로 읽혀요.
          </>
        }
      >
        <Kid label="꺾쇠" hint="기본">
          <Breadcrumb items={PATH} />
        </Kid>
        <Kid label="슬래시">
          <Breadcrumb items={PATH} separator={<span aria-hidden>/</span>} />
        </Kid>
      </Kids>

      <Kids
        axis="ellipsis"
        title="Truncation"
        note="깊이가 깊어지면 가운데를 접어요. 첫 셀과 지금 위치는 언제나 남겨요."
      >
        <Kid label="ellipsis">
          <Breadcrumb
            items={[
              { label: "홈", href: "#" },
              { label: "…", ellipsis: true },
              { label: "알림", href: "#" },
              { label: "이메일" },
            ]}
          />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "언제나",
    then: <>마지막 영역은 링크가 아니라 글자예요. 지금 위치를 눌러도 아무 일이 없어요.</>,
  },
  {
    when: "깊이가 두 단뿐일 때",
    then: <>없어도 돼요. 뒤로 가기 하나로 충분한 위치에는 두지 않아요.</>,
  },
];
