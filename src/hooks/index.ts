// Export all hooks from a single entry point
export {
  useDetectedLocale,
  isRTL,
  isArabic,
  isEnglish,
  isFrench,
} from "./useDetectedLocale";
export { useResponsive } from "./useResponsive";
export { useScrolled } from "./useScrolled";

// Type exports
export type { SupportedLocale } from "./useDetectedLocale";
export type { ResponsiveBreakpoints } from "./useResponsive";
