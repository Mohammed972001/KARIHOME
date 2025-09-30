'use client';

import React from 'react';
import { useDetectedLocale, SupportedLocale } from '../../hooks/useDetectedLocale';
import { getFontStyles } from '../../utils/fonts';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  locale?: SupportedLocale;
}

interface HeadingProps extends TypographyProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function LocalizedText({ 
  children, 
  className = '', 
  style = {}, 
  locale: propLocale 
}: TypographyProps) {
  const detectedLocale = useDetectedLocale();
  const locale = propLocale || detectedLocale;
  
  return (
    <span 
      className={className}
      style={getFontStyles(locale, style)}
    >
      {children}
    </span>
  );
}

export function LocalizedHeading({ 
  children, 
  level = 1, 
  className = '', 
  style = {}, 
  locale: propLocale 
}: HeadingProps) {
  const detectedLocale = useDetectedLocale();
  const locale = propLocale || detectedLocale;
  
  const headingProps = {
    className,
    style: getFontStyles(locale, style),
    children
  };
  
  switch(level) {
    case 1: return <h1 {...headingProps} />;
    case 2: return <h2 {...headingProps} />;
    case 3: return <h3 {...headingProps} />;
    case 4: return <h4 {...headingProps} />;
    case 5: return <h5 {...headingProps} />;
    case 6: return <h6 {...headingProps} />;
    default: return <h1 {...headingProps} />;
  }
}

export function LocalizedParagraph({ 
  children, 
  className = '', 
  style = {}, 
  locale: propLocale 
}: TypographyProps) {
  const detectedLocale = useDetectedLocale();
  const locale = propLocale || detectedLocale;
  
  return (
    <p 
      className={className}
      style={getFontStyles(locale, style)}
    >
      {children}
    </p>
  );
}

export function LocalizedButton({ 
  children, 
  className = '', 
  style = {}, 
  locale: propLocale,
  onClick,
  ...props 
}: TypographyProps & { onClick?: () => void } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const detectedLocale = useDetectedLocale();
  const locale = propLocale || detectedLocale;
  
  return (
    <button 
      className={className}
      style={getFontStyles(locale, style)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

