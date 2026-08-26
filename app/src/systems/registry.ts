import { cobalt } from "./01-cobalt";
import { graphite } from "./02-graphite";
import { ember } from "./03-ember";
import { jade } from "./04-jade";
import { plum } from "./05-plum";
import { slate } from "./06-slate";
import { emerald } from "./07-emerald";
import { indigo } from "./08-indigo";
import { sand } from "./09-sand";
import { teal } from "./10-teal";
import { crimson } from "./11-crimson";
import { moss } from "./12-moss";
import { azure } from "./13-azure";
import { violet } from "./14-violet";
import { rust } from "./15-rust";
import { mint } from "./16-mint";
import { navy } from "./17-navy";
import { saffron } from "./18-saffron";
import { fog } from "./19-fog";
import { berry } from "./20-berry";
import type { SystemDefinition } from "./types";

export const SYSTEMS: SystemDefinition[] = [
  cobalt,
  graphite,
  ember,
  jade,
  plum,
  slate,
  emerald,
  indigo,
  sand,
  teal,
  crimson,
  moss,
  azure,
  violet,
  rust,
  mint,
  navy,
  saffron,
  fog,
  berry,
];

// 베이스 이름별 사용 시스템 목록. 사이드바가 이 순서로 그룹화
export const BY_BASE = SYSTEMS.reduce<Record<string, SystemDefinition[]>>(
  (acc, s) => {
    (acc[s.baseTitle] ??= []).push(s);
    return acc;
  },
  {},
);

export function systemBySlug(slug: string): SystemDefinition {
  const found = SYSTEMS.find((s) => s.slug === slug);
  if (!found) {
    throw new Error(
      `등록되지 않은 시스템 ${slug}. 시스템 명세에 추가 후 모듈을 다시 생성할 것. ` +
        `현재: ${SYSTEMS.map((s) => s.slug).join(", ")}`,
    );
  }
  return found;
}
