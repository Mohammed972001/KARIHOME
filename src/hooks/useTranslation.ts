import { useTranslations, useLocale } from "next-intl";
import { SupportedLocale } from "./useDetectedLocale";

export function useTranslation() {
  const t = useTranslations();
  const locale = useLocale() as SupportedLocale;

  return { t, locale };
}
