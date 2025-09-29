import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// أدوات التنقل المحسنة لـ Next.js
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
