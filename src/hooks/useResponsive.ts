'use client';

import { useState, useEffect } from 'react';

export interface ResponsiveBreakpoints {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
}

export function useResponsive(): ResponsiveBreakpoints {
  const [breakpoints, setBreakpoints] = useState<ResponsiveBreakpoints>({
    mobile: false,
    tablet: false,
    desktop: false,
    isSmall: false,
    isMedium: false,
    isLarge: false
  });

  useEffect(() => {
    const updateBreakpoints = () => {
      const width = window.innerWidth;
      
      setBreakpoints({
        mobile: width < 640,
        tablet: width >= 640 && width < 1024,
        desktop: width >= 1024,
        isSmall: width < 768,
        isMedium: width >= 768 && width < 1024,
        isLarge: width >= 1024
      });
    };

    // Initial check
    updateBreakpoints();

    // Listen for resize events
    window.addEventListener('resize', updateBreakpoints);
    
    return () => window.removeEventListener('resize', updateBreakpoints);
  }, []);

  return breakpoints;
}
