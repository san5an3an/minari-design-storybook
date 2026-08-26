import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { AvatarImpl } from "../../systems/props";
import type { PageProps } from "./types";

const SRC = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
     <rect width="64" height="64" fill="#7c8ba1"/>
     <circle cx="32" cy="25" r="11" fill="#e8ecf1"/>
     <path d="M10 64c0-13 10-20 22-20s22 7 22 20z" fill="#e8ecf1"/>
   </svg>`);

export function Page({ system }: PageProps) {
  const Avatar = compound<AvatarImpl>(system, "avatar");
  return (
    <>
      <Master note="사진이 없거나 못 불러오면 글자가 대신 서요. 빈 동그라미로 두지 않아요.">
        <Avatar src={SRC} alt="김하늘" fallback="김" />
      </Master>

      <Kids axis="state" title="State" note="세 번째는 주소가 틀린 경우예요. 위치는 그대로 두고 글자가 나서요.">
        <Kid label="사진" hint="src">
          <Avatar src={SRC} alt="김하늘" fallback="김" />
        </Kid>
        <Kid label="글자" hint="fallback">
          <Avatar fallback="김" />
        </Kid>
        <Kid label="실패">
          <Avatar src="/없는-주소.png" alt="김하늘" fallback="김" />
        </Kid>
      </Kids>

      <Kids axis="size" title="Anatomy">
        {["sm", "md", "lg"].map((s) => (
          <Kid key={s} label={s} hint={s === "md" ? "기본" : undefined}>
            <Avatar size={s} src={SRC} alt="김하늘" fallback="김" />
          </Kid>
        ))}
      </Kids>

      <Kids axis="parts" title="Parts">
        <Kid label="Badge" hint="접속 중">
          <Avatar src={SRC} alt="김하늘" fallback="김">
            <Avatar.Badge />
          </Avatar>
        </Kid>
        <Kid label="Group + GroupCount">
          <Avatar.Group>
            <Avatar fallback="김" />
            <Avatar fallback="이" />
            <Avatar fallback="박" />
            <Avatar.GroupCount>+5</Avatar.GroupCount>
          </Avatar.Group>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "사진이 없을 때", then: <><b>fallback</b> 을 꼭 주세요. 빈 동그라미는 고장으로 읽혀요.</> },
  { when: "여럿을 겹칠 때", then: <><b>Group</b> 으로 감싸요. 겹침 간격과 테두리를 그쪽이 맡아요.</> },
  { when: "라벨이 필요할 때", then: <>아바타 옆에 글자를 따로 두세요. 아바타 안은 사진·글자 자리예요.</> },
];
