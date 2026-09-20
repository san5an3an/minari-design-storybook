import * as React from "react";

type AnyRecord = Record<string, unknown>;
type Decorator = (Story: React.ComponentType, context: AnyRecord) => React.ReactNode;
type StoryLike = ((args: AnyRecord, context: AnyRecord) => React.ReactNode) & AnyRecord | AnyRecord;

// export 이름 startCase 변환. storyName, name 없을 때만 사용
export function storyDisplayName(exportName: string): string {
  return exportName
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .trim;
}

function applyArgMappings(args: AnyRecord, argTypes: AnyRecord): AnyRecord {
  let touched = false;
  const out: AnyRecord = { ...args };
  for (const [key, value] of Object.entries(args)) {
    const mapping = (argTypes[key] as AnyRecord | undefined)?.mapping as AnyRecord | undefined;
    if (!mapping) continue;
    const pick = (v: unknown) => {
      const k = v as keyof typeof mapping;
      return Object.prototype.hasOwnProperty.call(mapping, k as string) ? mapping[k as string] : v;
    };
    const next = Array.isArray(value) ? value.map(pick) : pick(value);
    if (next !== value) { out[key] = next; touched = true; }
  }
  return touched ? out : args;
}

export function composeStory(meta: AnyRecord | undefined, story: StoryLike | undefined, exportName: string): React.ComponentType {
  const s = (story ?? {}) as AnyRecord;
  const m = (meta ?? {}) as AnyRecord;
  const parameters = { ...((m.parameters as AnyRecord) ?? {}), ...((s.parameters as AnyRecord) ?? {}) };
  const argTypes = { ...((m.argTypes as AnyRecord) ?? {}), ...((s.argTypes as AnyRecord) ?? {}) };
  const args = applyArgMappings(
    { ...((m.args as AnyRecord) ?? {}), ...((s.args as AnyRecord) ?? {}) },
    argTypes,
  );
  const name = (s.storyName as string) ?? (s.name as string | undefined && typeof story !== "function" ? (s.name as string) : undefined) ?? storyDisplayName(exportName);
  const render = (typeof story === "function"
    ? story
    : (s.render as StoryLike) ?? (m.render as StoryLike)
      ?? ((a: AnyRecord) => (m.component ? React.createElement(m.component as React.ComponentType<AnyRecord>, a) : null))) as (a: AnyRecord, c: AnyRecord) => React.ReactNode;
  const decorators = [...((s.decorators as Decorator[]) ?? []), ...((m.decorators as Decorator[]) ?? [])];

  function ComposedStory {
    const context: AnyRecord = { args, name, id: name, globals: {}, parameters, argTypes, viewMode: "docs" };
    let Inner: React.ComponentType = function StoryRender: React.ReactElement { return <>{render(args, context)}</>; };
    for (const dec of decorators) {
      const Prev: React.ComponentType = Inner;
      Inner = function Decorated: React.ReactElement { return <>{dec(Prev, context)}</>; };
    }
    return <Inner />;
  }
  ComposedStory.displayName = `Story(${exportName})`;
  return ComposedStory;
}
