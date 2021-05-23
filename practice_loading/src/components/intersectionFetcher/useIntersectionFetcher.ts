import { useEffect, useRef } from 'react';

export function useIntersectionFetcher(onIntersectioned?: () => void) {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!onIntersectioned || !triggerRef.current) {
      return;
    }

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onIntersectioned();
      }
    });

    intersectionObserver.observe(triggerRef.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [triggerRef.current, onIntersectioned]);

  return { triggerRef };
}
