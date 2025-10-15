'use client';

import { SupportedLocale } from '@/hooks/useDetectedLocale';

interface CountryCode {
    code: string;
    country: string;
    flag: string;
}

const COUNTRY_CODES: CountryCode[] = [
    // Alphabetical order
    { code: '+93', country: 'Afghanistan', flag: 'AF' },
    { code: '+355', country: 'Albania', flag: 'AL' },
    { code: '+213', country: 'Algeria', flag: 'DZ' },
    { code: '+376', country: 'Andorra', flag: 'AD' },
    { code: '+244', country: 'Angola', flag: 'AO' },
    { code: '+54', country: 'Argentina', flag: 'AR' },
    { code: '+374', country: 'Armenia', flag: 'AM' },
    { code: '+61', country: 'Australia', flag: 'AU' },
    { code: '+43', country: 'Austria', flag: 'AT' },
    { code: '+994', country: 'Azerbaijan', flag: 'AZ' },
    { code: '+973', country: 'Bahrain', flag: 'BH' },
    { code: '+880', country: 'Bangladesh', flag: 'BD' },
    { code: '+375', country: 'Belarus', flag: 'BY' },
    { code: '+32', country: 'Belgium', flag: 'BE' },
    { code: '+229', country: 'Benin', flag: 'BJ' },
    { code: '+975', country: 'Bhutan', flag: 'BT' },
    { code: '+387', country: 'Bosnia and Herzegovina', flag: 'BA' },
    { code: '+267', country: 'Botswana', flag: 'BW' },
    { code: '+55', country: 'Brazil', flag: 'BR' },
    { code: '+673', country: 'Brunei', flag: 'BN' },
    { code: '+359', country: 'Bulgaria', flag: 'BG' },
    { code: '+226', country: 'Burkina Faso', flag: 'BF' },
    { code: '+257', country: 'Burundi', flag: 'BI' },
    { code: '+855', country: 'Cambodia', flag: 'KH' },
    { code: '+237', country: 'Cameroon', flag: 'CM' },
    { code: '+1', country: 'Canada', flag: 'CA' },
    { code: '+238', country: 'Cape Verde', flag: 'CV' },
    { code: '+236', country: 'Central African Republic', flag: 'CF' },
    { code: '+235', country: 'Chad', flag: 'TD' },
    { code: '+56', country: 'Chile', flag: 'CL' },
    { code: '+86', country: 'China', flag: 'CN' },
    { code: '+57', country: 'Colombia', flag: 'CO' },
    { code: '+269', country: 'Comoros', flag: 'KM' },
    { code: '+242', country: 'Congo', flag: 'CG' },
    { code: '+243', country: 'Congo (DRC)', flag: 'CD' },
    { code: '+225', country: 'Côte d\'Ivoire', flag: 'CI' },
    { code: '+385', country: 'Croatia', flag: 'HR' },
    { code: '+357', country: 'Cyprus', flag: 'CY' },
    { code: '+420', country: 'Czech Republic', flag: 'CZ' },
    { code: '+45', country: 'Denmark', flag: 'DK' },
    { code: '+253', country: 'Djibouti', flag: 'DJ' },
    { code: '+20', country: 'Egypt', flag: 'EG' },
    { code: '+240', country: 'Equatorial Guinea', flag: 'GQ' },
    { code: '+291', country: 'Eritrea', flag: 'ER' },
    { code: '+268', country: 'Eswatini', flag: 'SZ' },
    { code: '+372', country: 'Estonia', flag: 'EE' },
    { code: '+251', country: 'Ethiopia', flag: 'ET' },
    { code: '+358', country: 'Finland', flag: 'FI' },
    { code: '+33', country: 'France', flag: 'FR' },
    { code: '+241', country: 'Gabon', flag: 'GA' },
    { code: '+220', country: 'Gambia', flag: 'GM' },
    { code: '+995', country: 'Georgia', flag: 'GE' },
    { code: '+49', country: 'Germany', flag: 'DE' },
    { code: '+233', country: 'Ghana', flag: 'GH' },
    { code: '+30', country: 'Greece', flag: 'GR' },
    { code: '+224', country: 'Guinea', flag: 'GN' },
    { code: '+245', country: 'Guinea-Bissau', flag: 'GW' },
    { code: '+36', country: 'Hungary', flag: 'HU' },
    { code: '+354', country: 'Iceland', flag: 'IS' },
    { code: '+91', country: 'India', flag: 'IN' },
    { code: '+62', country: 'Indonesia', flag: 'ID' },
    { code: '+98', country: 'Iran', flag: 'IR' },
    { code: '+964', country: 'Iraq', flag: 'IQ' },
    { code: '+353', country: 'Ireland', flag: 'IE' },
    { code: '+972', country: 'Israel', flag: 'IL' },
    { code: '+39', country: 'Italy', flag: 'IT' },
    { code: '+81', country: 'Japan', flag: 'JP' },
    { code: '+962', country: 'Jordan', flag: 'JO' },
    { code: '+7', country: 'Kazakhstan', flag: 'KZ' },
    { code: '+254', country: 'Kenya', flag: 'KE' },
    { code: '+965', country: 'Kuwait', flag: 'KW' },
    { code: '+996', country: 'Kyrgyzstan', flag: 'KG' },
    { code: '+856', country: 'Laos', flag: 'LA' },
    { code: '+371', country: 'Latvia', flag: 'LV' },
    { code: '+961', country: 'Lebanon', flag: 'LB' },
    { code: '+266', country: 'Lesotho', flag: 'LS' },
    { code: '+231', country: 'Liberia', flag: 'LR' },
    { code: '+218', country: 'Libya', flag: 'LY' },
    { code: '+370', country: 'Lithuania', flag: 'LT' },
    { code: '+352', country: 'Luxembourg', flag: 'LU' },
    { code: '+261', country: 'Madagascar', flag: 'MG' },
    { code: '+265', country: 'Malawi', flag: 'MW' },
    { code: '+60', country: 'Malaysia', flag: 'MY' },
    { code: '+960', country: 'Maldives', flag: 'MV' },
    { code: '+223', country: 'Mali', flag: 'ML' },
    { code: '+356', country: 'Malta', flag: 'MT' },
    { code: '+222', country: 'Mauritania', flag: 'MR' },
    { code: '+230', country: 'Mauritius', flag: 'MU' },
    { code: '+52', country: 'Mexico', flag: 'MX' },
    { code: '+373', country: 'Moldova', flag: 'MD' },
    { code: '+377', country: 'Monaco', flag: 'MC' },
    { code: '+976', country: 'Mongolia', flag: 'MN' },
    { code: '+382', country: 'Montenegro', flag: 'ME' },
    { code: '+212', country: 'Morocco', flag: 'MA' },
    { code: '+258', country: 'Mozambique', flag: 'MZ' },
    { code: '+95', country: 'Myanmar', flag: 'MM' },
    { code: '+264', country: 'Namibia', flag: 'NA' },
    { code: '+977', country: 'Nepal', flag: 'NP' },
    { code: '+31', country: 'Netherlands', flag: 'NL' },
    { code: '+64', country: 'New Zealand', flag: 'NZ' },
    { code: '+227', country: 'Niger', flag: 'NE' },
    { code: '+234', country: 'Nigeria', flag: 'NG' },
    { code: '+389', country: 'North Macedonia', flag: 'MK' },
    { code: '+850', country: 'North Korea', flag: 'KP' },
    { code: '+47', country: 'Norway', flag: 'NO' },
    { code: '+968', country: 'Oman', flag: 'OM' },
    { code: '+92', country: 'Pakistan', flag: 'PK' },
    { code: '+970', country: 'Palestine', flag: 'PS' },
    { code: '+63', country: 'Philippines', flag: 'PH' },
    { code: '+48', country: 'Poland', flag: 'PL' },
    { code: '+351', country: 'Portugal', flag: 'PT' },
    { code: '+974', country: 'Qatar', flag: 'QA' },
    { code: '+40', country: 'Romania', flag: 'RO' },
    { code: '+7', country: 'Russia', flag: 'RU' },
    { code: '+250', country: 'Rwanda', flag: 'RW' },
    { code: '+378', country: 'San Marino', flag: 'SM' },
    { code: '+239', country: 'São Tomé and Príncipe', flag: 'ST' },
    { code: '+966', country: 'Saudi Arabia', flag: 'SA' },
    { code: '+221', country: 'Senegal', flag: 'SN' },
    { code: '+381', country: 'Serbia', flag: 'RS' },
    { code: '+248', country: 'Seychelles', flag: 'SC' },
    { code: '+232', country: 'Sierra Leone', flag: 'SL' },
    { code: '+65', country: 'Singapore', flag: 'SG' },
    { code: '+421', country: 'Slovakia', flag: 'SK' },
    { code: '+386', country: 'Slovenia', flag: 'SI' },
    { code: '+252', country: 'Somalia', flag: 'SO' },
    { code: '+27', country: 'South Africa', flag: 'ZA' },
    { code: '+82', country: 'South Korea', flag: 'KR' },
    { code: '+211', country: 'South Sudan', flag: 'SS' },
    { code: '+34', country: 'Spain', flag: 'ES' },
    { code: '+94', country: 'Sri Lanka', flag: 'LK' },
    { code: '+249', country: 'Sudan', flag: 'SD' },
    { code: '+46', country: 'Sweden', flag: 'SE' },
    { code: '+41', country: 'Switzerland', flag: 'CH' },
    { code: '+963', country: 'Syria', flag: 'SY' },
    { code: '+886', country: 'Taiwan', flag: 'TW' },
    { code: '+992', country: 'Tajikistan', flag: 'TJ' },
    { code: '+255', country: 'Tanzania', flag: 'TZ' },
    { code: '+66', country: 'Thailand', flag: 'TH' },
    { code: '+670', country: 'Timor-Leste', flag: 'TL' },
    { code: '+228', country: 'Togo', flag: 'TG' },
    { code: '+216', country: 'Tunisia', flag: 'TN' },
    { code: '+90', country: 'Turkey', flag: 'TR' },
    { code: '+993', country: 'Turkmenistan', flag: 'TM' },
    { code: '+256', country: 'Uganda', flag: 'UG' },
    { code: '+380', country: 'Ukraine', flag: 'UA' },
    { code: '+971', country: 'United Arab Emirates', flag: 'AE' },
    { code: '+44', country: 'United Kingdom', flag: 'GB' },
    { code: '+1', country: 'United States', flag: 'US' },
    { code: '+998', country: 'Uzbekistan', flag: 'UZ' },
    { code: '+84', country: 'Vietnam', flag: 'VN' },
    { code: '+967', country: 'Yemen', flag: 'YE' },
    { code: '+260', country: 'Zambia', flag: 'ZM' },
    { code: '+263', country: 'Zimbabwe', flag: 'ZW' },
];

interface CountryCodeSelectProps {
    defaultValue?: string;
    onChange?: (value: string) => void;
    className?: string;
    phoneValue?: string;
    onPhoneChange?: (value: string) => void;
    placeholder?: string;
    locale?: SupportedLocale;
    getFontStyles?: (locale: SupportedLocale) => React.CSSProperties;
}

export default function CountryCodeSelect({
    defaultValue = '+212',
    onChange,
    className = '',
    phoneValue = '',
    onPhoneChange,
    placeholder = '',
    locale,
    getFontStyles
}: CountryCodeSelectProps) {
    return (
        <div className={`relative w-full ${className}`}>
            <div
                className="flex w-full rounded-md focus-within:ring-2 focus-within:ring-green-500 overflow-hidden"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.20)'
                }}
            >
                {/* Country Code Selector */}
                <select
                    className="bg-transparent text-white border-0 focus:outline-none appearance-none cursor-pointer flex-shrink-0 text-xs sm:text-sm dropdown-auto-width"
                    defaultValue={defaultValue}
                    onChange={(e) => onChange?.(e.target.value)}
                    style={{
                        minWidth: '55px',
                        width: 'auto',
                        maxWidth: '75px',
                        padding: '8px 3px 8px 2px',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {COUNTRY_CODES.map((country, index) => (
                        <option
                            key={`${country.code}-${country.country}-${index}`}
                            value={country.code}
                            style={{
                                padding: '6px 8px',
                                fontSize: '12px',
                                minWidth: '150px',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {country.flag} {country.code}
                        </option>
                    ))}
                </select>

                {/* Separator */}
                <div className="w-px bg-gray-500 h-6 self-center"></div>

                {/* Phone Input */}
                <input
                    type="tel"
                    placeholder={placeholder}
                    value={phoneValue}
                    onChange={(e) => onPhoneChange?.(e.target.value)}
                    className="flex-1 px-2 py-2 bg-transparent border-0 focus:outline-none text-white placeholder-gray-400 text-xs sm:text-sm"
                    style={{
                        ...(getFontStyles && locale ? getFontStyles(locale) : {}),
                        minWidth: '0', // Important for proper flex behavior
                        flexShrink: 1
                    }}
                />
            </div>
        </div>
    );
}