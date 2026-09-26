import {
  Carousel as ShadcnCarousel, CarouselContent, CarouselItem, CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselImpl, CarouselProps } from "../../systems/props";
import { withDims } from "./tone";

// 클래스 이름은 완성된 문자열로 지정. Tailwind 는 소스를 글자 그대로 읽어 p-(${X}) 처럼 조립한 이름은 CSS 가 안 생기는데 tailwind-merge 는 원본 p-4 를 지워 여백이 0 이 됨
// 칸 사이 간격 지정. shadcn 은 목록을 음수 여백(-ml-4, -mt-4)으로 당기고 칸마다 여백(pl-4, pt-4)을 줘 간격을 만들어 두 값을 같은 토큰으로 바꿔야 첫 칸이 안 어긋남
// 방향 표시는 겉에 전용 data 속성으로 지정. shadcn 에 방향 표시가 없고 data-orientation 은 app.css 의 tabs 규칙과 겹칠 수 있음
// item-radius 토큰은 연결 제외. 칸 자체에 배경이 없어 안 보이고 칸 안 카드 모서리는 예시가 정함
// button-radius(pill) 토큰은 연결 제외. shadcn 원본 rounded-full 과 같은 값임
function CarouselRoot({ opts, children, orientation, ...rest }: CarouselProps & { orientation?: "horizontal" | "vertical" }) {
  return (
    <ShadcnCarousel
      opts={opts as never}
      orientation={orientation as never}
      data-carousel-orientation={orientation ?? "horizontal"}
      {...rest}
    >
      {children}
    </ShadcnCarousel>
  );
}


export const Carousel = Object.assign(CarouselRoot, {
  Content: withDims(
    CarouselContent,
    "in-data-[carousel-orientation=horizontal]:-ml-(--component-carousel-gap) in-data-[carousel-orientation=vertical]:-mt-(--component-carousel-gap)",
  ),
  Item: withDims(
    CarouselItem,
    "in-data-[carousel-orientation=horizontal]:pl-(--component-carousel-gap) in-data-[carousel-orientation=vertical]:pt-(--component-carousel-gap)",
  ),
  Previous: CarouselPrevious,
  Next: CarouselNext,
}) as unknown as CarouselImpl;
