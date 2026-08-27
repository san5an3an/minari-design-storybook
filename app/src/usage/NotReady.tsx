import { Hammer } from "lucide-react";

export function NotReady({ baseTitle, implemented, readyTitles }: {
  // 사람이 읽는 베이스 이름, 예: Ant Design
  baseTitle: string;
  // 베이스 구현 컴포넌트 수
  implemented: number;
  readyTitles: string[];
}) {
  return (
    <div className="ods-chrome flex min-h-[24rem] items-center justify-center px-6 py-16">
      <div className="max-w-md text-center">
        <div
          className="mx-auto mb-5 flex size-12 items-center justify-center rounded-full
                     bg-muted text-muted-foreground"
        >
          <Hammer className="size-5" aria-hidden />
        </div>

        <h2 className="text-lg font-semibold tracking-tight">준비 중이에요</h2>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">{baseTitle}</span> 의 사용 예제는 아직
          없습니다. 이 베이스의 컴포넌트를 먼저 다 세운 뒤에 만듭니다.
        </p>

        {/* 렌더링된 개수를 진행 상황으로 표시 */}
        <p className="mt-4 text-xs text-muted-foreground">
          지금 이 베이스에 선 컴포넌트{" "}
          <span className="font-mono font-medium text-foreground">{implemented}</span> 종
        </p>

        {readyTitles.length > 0 ? (
          <p className="mt-6 text-xs text-muted-foreground">
            지금 볼 수 있는 것,{" "}
            <span className="font-medium text-foreground">{readyTitles.join(" · ")}</span>
          </p>
        ) : (
          // 데이터 없으면 명시적으로 표시
          <p className="mt-6 text-xs text-muted-foreground">
            아직 어느 베이스에도 사용 예제가 없습니다. 만드는 중입니다.
          </p>
        )}
      </div>
    </div>
  );
}
