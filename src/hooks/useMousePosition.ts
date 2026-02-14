import { useCallback, useEffect, useRef, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  const rafId = useRef<number | null>(null);
  const latestPoint = useRef({ x: 0, y: 0 });

  const flushPosition = useCallback(() => {
    rafId.current = null;
    const { x, y } = latestPoint.current;
    setMousePosition({
      x,
      y,
      normalizedX: (x / window.innerWidth) * 2 - 1,
      normalizedY: (y / window.innerHeight) * 2 - 1,
    });
  }, []);

  const updateMousePosition = useCallback(
    (e: PointerEvent) => {
      latestPoint.current = { x: e.clientX, y: e.clientY };

      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(flushPosition);
    },
    [flushPosition]
  );

  useEffect(() => {
    window.addEventListener('pointermove', updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener('pointermove', updateMousePosition);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [updateMousePosition]);

  return mousePosition;
};

export const useSmoothMousePosition = (smoothing = 0.22) => {
  const mousePosition = useMousePosition();
  const [smoothPosition, setSmoothPosition] = useState(mousePosition);
  const rafId = useRef<number | null>(null);
  const targetRef = useRef(mousePosition);

  useEffect(() => {
    targetRef.current = mousePosition;
  }, [mousePosition]);

  useEffect(() => {
    const animate = () => {
      const target = targetRef.current;

      setSmoothPosition(prev => ({
        x: prev.x + (target.x - prev.x) * smoothing,
        y: prev.y + (target.y - prev.y) * smoothing,
        normalizedX: prev.normalizedX + (target.normalizedX - prev.normalizedX) * smoothing,
        normalizedY: prev.normalizedY + (target.normalizedY - prev.normalizedY) * smoothing,
      }));
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [smoothing]);

  return smoothPosition;
};
