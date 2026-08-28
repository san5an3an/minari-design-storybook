import { Slider as AntSlider } from "antd";
import type { SliderProps } from "../../systems/props";

export function Slider({
  value, defaultValue, onValueChange, min, max, step,
  orientation = "horizontal", disabled, className,
}: SliderProps) {
  const isRange = Array.isArray(value ?? defaultValue);

  // 타입은 number, [number, number]로 한정. 길이 3 이상은 아직 없음
  const pair = (v: number | readonly number[] | undefined) =>
    (Array.isArray(v) ? [v[0], v[1]] : v) as never;

  return (
    <AntSlider
      className={className}
      range={isRange}
      value={pair(value)}
      defaultValue={pair(defaultValue)}
      onChange={(v: number | number[]) => onValueChange?.(v)}
      min={min}
      max={max}
      step={step}
      orientation={orientation}
      disabled={disabled}
    />
  );
}
