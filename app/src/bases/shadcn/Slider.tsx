import { Slider as ShadcnSlider } from "@/components/ui/slider";
import type { SliderProps } from "../../systems/props";

export function Slider({ orientation = "horizontal", ...rest }: SliderProps) {
  return <ShadcnSlider orientation={orientation} {...rest} />;
}
