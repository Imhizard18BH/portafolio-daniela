import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

export const useIsMobile = (breakpoint: number = MOBILE_BREAKPOINT): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [breakpoint]);

  return isMobile;
};
