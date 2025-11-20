import { SupportedLocale } from "../hooks/useDetectedLocale";

// Font family constants
export const FONT_FAMILIES = {
  IBM_ARABIC: "'IBM Plex Sans Arabic', 'IBM', Arial, sans-serif",
  LATO: "'Lato', Arial, sans-serif",
  FALLBACK: "Arial, sans-serif",
} as const;

// Font configuration for different locales
export const LOCALE_FONTS: Record<SupportedLocale, string> = {
  ar: FONT_FAMILIES.IBM_ARABIC,
  en: FONT_FAMILIES.LATO,
  fr: FONT_FAMILIES.LATO,
};

/**
 * Get the appropriate font family for a given locale
 */
export function getFontFamily(locale: SupportedLocale): string {
  return LOCALE_FONTS[locale] || FONT_FAMILIES.FALLBACK;
}

/**
 * Get font styles object for React components
 */
export function getFontStyles(
  locale: SupportedLocale,
  customStyles?: React.CSSProperties
): React.CSSProperties {
  return {
    fontFamily: getFontFamily(locale),
    ...customStyles,
  };
}

/**
 * Get letter spacing for different locales
 */
export function getLetterSpacing(locale: SupportedLocale): string {
  return locale === "ar" ? "normal" : "0%";
}

/**
 * Get complete typography styles for a locale
 */
export function getTypographyStyles(
  locale: SupportedLocale,
  options?: {
    fontSize?: string;
    fontWeight?: string | number;
    lineHeight?: string;
    letterSpacing?: string;
  }
): React.CSSProperties {
  return {
    fontFamily: getFontFamily(locale),
    letterSpacing: options?.letterSpacing || getLetterSpacing(locale),
    fontSize: options?.fontSize,
    fontWeight: options?.fontWeight,
    lineHeight: options?.lineHeight || "100%",
  };
}
