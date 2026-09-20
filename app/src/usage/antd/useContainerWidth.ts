import * as React from "react";

export function useContainerWidth<T extends HTMLElement>: [React.RefObject<T | null>, number | null] {
  const ref = React.useRef<T | null>(null);
  const [width, setWidth] = React.useState<number | null>(null);

  React.useLayoutEffect( => {
    const node = ref.current;
    if (!node) return;
    setWidth(node.getBoundingClientRect.width);
    const observer = new ResizeObserver((entries) => {
      const next = entries[0]?.contentRect.width;
      if (next !== undefined) setWidth(next);
    });
    observer.observe(node);
    return  => observer.disconnect;
  }, []);

  return [ref, width];
}
