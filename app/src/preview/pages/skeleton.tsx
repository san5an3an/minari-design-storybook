import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { SkeletonProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Skeleton = impl<SkeletonProps>(system, "skeleton");
  return (
    <>
      <Master note="올 것의 모양을 그대로 잡아요. 크기는 className 으로 줘요. 그쪽엔 모양 옵션이 없어요.">
        <div style={{ display: "grid", gap: ".5rem", width: "16rem" }}>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </Master>

      <Kids axis="usage" title="Usage" note="마지막 줄을 짧게 둬요. 다 같은 길이면 글이 아니라 그림이 올 것처럼 보여요.">
        <Kid label="글 세 줄">
          <div style={{ display: "grid", gap: ".5rem", width: "12rem" }}>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </Kid>
        <Kid label="줄 하나">
          <div style={{ display: "flex", gap: ".75rem", alignItems: "center", width: "14rem" }}>
            <Skeleton className="size-10 rounded-full" />
            <div style={{ display: "grid", gap: ".4rem", flex: 1 }}>
              <Skeleton className="h-3.5 w-2/3" />
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
        </Kid>
        <Kid label="사진 영역">
          <Skeleton className="h-24 w-40 rounded-lg" />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "끝을 알 때", then: <><b>Progress</b> 예요. 스켈레톤은 <b>모양</b>만 알아요.</> },
  { when: "끝을 모를 때", then: <><b>Spinner</b> 예요. 올 것의 모양까지 알 때만 스켈레톤을 써요.</> },
  { when: "실제와 크기가 다를 때", then: <>쓰지 마세요. 내용이 오는 순간 화면이 튀어요.</> },
];
