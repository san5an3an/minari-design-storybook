import {
  Carousel as ShadcnCarousel, CarouselContent, CarouselItem, CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselImpl, CarouselProps } from "../../systems/props";

function CarouselRoot({ opts, children, ...rest }: CarouselProps) {
  return (
    <ShadcnCarousel opts={opts as never} {...rest}>
      {children}
    </ShadcnCarousel>
  );
}

export const Carousel = Object.assign(CarouselRoot, {
  Content: CarouselContent,
  Item: CarouselItem,
  Previous: CarouselPrevious,
  Next: CarouselNext,
}) as unknown as CarouselImpl;
