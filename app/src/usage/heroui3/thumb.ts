import type { CSSProperties } from "react";
import type { Meetup } from "./data";

export const thumbStyle = (meetup: Meetup): CSSProperties => ({
  backgroundColor: meetup.colorToken,
  backgroundImage: `url("${meetup.image}")`,
});
