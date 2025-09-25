import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createIntlMiddleware(routing);

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)', '/']
};
