import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Scales a fixed-size "artboard" (baseWidth px wide) to whatever width its wrapper
 * currently has. Used for the product mock-ups so they keep pixel-perfect internal
 * proportions at every breakpoint instead of reflowing like page content.
 */
export function useFitScale<T extends HTMLElement>(baseWidth: number) {
  const ref = useRef<T>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / baseWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [baseWidth]);

  return { ref, scale };
}
