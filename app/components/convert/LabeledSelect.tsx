"use client";

import * as React from "react";

export type SelectOption = { value: string; label: string };

export function LabeledSelect({
  label,
  placeholder,
  value,
  onChange,
  options,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
}) {
  return (
    <div className="space-y-2">
      <div className="text-lg font-semibold text-[#0D3A3C]">{label}</div>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-14 w-full appearance-none rounded-full border border-[#E6E8EA] bg-white px-6 pr-12 text-base font-semibold text-[#0D3A3C] shadow-sm outline-none focus:ring-2 focus:ring-[#083E41]/20"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        <svg
          className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#0D3A3C]"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}


