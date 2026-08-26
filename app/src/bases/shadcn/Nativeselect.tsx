import {
  NativeSelect as ShadcnNativeSelect, NativeSelectOptGroup, NativeSelectOption,
} from "@/components/ui/native-select";
import type { NativeselectImpl, NativeselectProps } from "../../systems/props";

function NativeselectRoot({ children, ...rest }: NativeselectProps) {
  return <ShadcnNativeSelect {...rest}>{children}</ShadcnNativeSelect>;
}

export const Nativeselect = Object.assign(NativeselectRoot, {
  Option: NativeSelectOption,
  OptGroup: NativeSelectOptGroup,
}) as unknown as NativeselectImpl;
