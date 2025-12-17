"use client";

import * as React from "react";

export function EthIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 1.5 6.3 11.6 12 9.2l5.7 2.4L12 1.5Zm0 8.9-5.7 2.4L12 22.5l5.7-9.7L12 10.4Z"
      />
    </svg>
  );
}

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M10.5 3a7.5 7.5 0 1 1 4.5 13.5l4.25 4.25a1 1 0 0 1-1.42 1.42L13.6 17.92A7.5 7.5 0 0 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
      />
    </svg>
  );
}

export function TokenBadgeIcon({
  label,
  bg,
  fg = "#0B1F20",
  ...props
}: React.SVGProps<SVGSVGElement> & { label: string; bg: string; fg?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11" fill={bg} />
      <circle cx="12" cy="12" r="10.2" fill="none" stroke="#E6E8EA" />
      <text
        x="12"
        y="13.2"
        textAnchor="middle"
        fontSize="9"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fill={fg}
      >
        {label}
      </text>
    </svg>
  );
}

export function WalletBadgeIcon({
  label,
  bg,
  fg = "#0B1F20",
  ...props
}: React.SVGProps<SVGSVGElement> & { label: string; bg: string; fg?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11" fill={bg} />
      <circle cx="12" cy="12" r="10.2" fill="none" stroke="#E6E8EA" />
      <text
        x="12"
        y="14"
        textAnchor="middle"
        fontSize="10"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fill={fg}
      >
        {label}
      </text>
    </svg>
  );
}

export function NigeriaFlagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="7" fill="#F2F4F5" />
      <path
        d="M7.3 6.2c1.4-.8 3-.7 4.7-.7s3.3-.1 4.7.7c1.6.9 2.7 2.6 2.7 4.8s-1.1 3.9-2.7 4.8c-1.4.8-3 .7-4.7.7s-3.3.1-4.7-.7C5.7 14.9 4.6 13.2 4.6 11s1.1-3.9 2.7-4.8Z"
        fill="#0B8F6A"
      />
      <rect x="10.25" y="5" width="3.5" height="14" fill="#F2F4F5" />
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="7"
        fill="none"
        stroke="#E6E8EA"
      />
    </svg>
  );
}


