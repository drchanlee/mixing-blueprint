
import React from 'react';

interface IconProps {
  className?: string;
}

// FIX: Removed React.FC type to allow for better type inference.
export const HeadphoneIcon = (props: IconProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

// FIX: Removed React.FC type to allow for better type inference.
export const GuitarIcon = (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6.5a3.5 3.5 0 00-7 0V19h7zM9 19c0 1.105-1.343 2-3 2s-3-.895-3-2M12 19V4.5a3.5 3.5 0 00-7 0V19h7z" />
    </svg>
);

// FIX: Removed React.FC type to allow for better type inference.
export const MicIcon = (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 11-14 0m14 0v4a3 3 0 01-3 3h-1m-4-8v8m0 0h-2m2 0h2M7 11V7a5 5 0 0110 0v4M5 19h14" />
    </svg>
);

// FIX: Removed React.FC type to allow for better type inference.
export const KeyboardIcon = (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14h.01M12 14h.01M16 14h.01M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h3m10 0h3a2 2 0 012 2v2m-6-4h-4a2 2 0 00-2 2v2H7" />
    </svg>
);

// FIX: Removed React.FC type to allow for better type inference.
export const TrumpetIcon = (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 8.352l-2.03 2.03m2.03-2.03l2.828-2.828a2.5 2.5 0 013.536 3.536l-2.828 2.828m-2.03-2.03l-2.03 2.03m0 0l-2.828 2.828a2.5 2.5 0 01-3.536-3.536l2.828-2.828m2.03 2.03l2.828 2.828M4 20h16" />
    </svg>
);

// FIX: Removed React.FC type to allow for better type inference.
export const ViolinIcon = (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.858 18.142a5.001 5.001 0 01-7.07-7.072m9.9 9.9l-2.828-2.828m0 0l-2.828 2.828m2.828-2.828l2.828-2.828M12 12l2.121-2.121" />
    </svg>
);

export const OudIcon = (props: IconProps) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.77 12.3C17.3 11.23 18.5 8.44 17.91 5.89C17.32 3.34 15.06 1.5 12.55 1.5C10.04 1.5 7.78 3.34 7.19 5.89C6.6 8.44 7.8 11.23 10.33 12.3C11.1 12.64 11.97 12.75 12.82 12.75H13.28C13.78 12.75 14.29 12.6 14.77 12.3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.28 12.75L9.53003 22.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17.62L16.03 16.2" />
    </svg>
);

// FIX: Removed React.FC type to allow for better type inference.
export const InfoIcon = (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// FIX: Removed React.FC type to allow for better type inference.
export const DownloadIcon = (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

// FIX: Removed React.FC type to allow for better type inference.
export const MoonIcon = (props: IconProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

// FIX: Removed React.FC type to allow for better type inference.
export const SunIcon = (props: IconProps) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 12a5 5 0 100-10 5 5 0 000 10z" />
  </svg>
);
