"use client";

import * as React from "react";
import { SearchIcon } from "./icons";

export type CurrencyOption = {
  code: string;
  label: string;
  icon?: React.ReactNode;
};

export function CurrencySelect({
  options,
  value,
  onChange,
  className = "",
}: {
  options: CurrencyOption[];
  value: string;
  onChange: (code: string) => void;
  className?: string;
}) {
  const selected = options.find((o) => o.code === value);
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function onDown(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((o) => o.label.toLowerCase().includes(q));
  }, [options, query]);

  return (
    <div
      ref={ref}
      className={[
        "relative inline-flex items-center gap-2",
        className,
      ].join(" ")}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full border border-[#E6E8EA] bg-white px-3 py-2 text-[#0D3A3C] shadow-sm"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="inline-flex h-6 w-6 items-center justify-center">
          {selected?.icon}
        </span>
        <span className="text-sm font-semibold">{selected?.label ?? value}</span>
        <svg
          className="h-4 w-4 text-[#0D3A3C]"
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
      </button>

      {open ? (
        <div className="absolute right-0 top-full z-50 mt-3 w-[340px] rounded-[26px] border border-[#E6E8EA] bg-white p-4 shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-3 rounded-full border border-[#E6E8EA] bg-white px-4 py-3 text-[#5B6164]">
            <SearchIcon className="h-5 w-5 text-[#5B6164]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full bg-transparent text-base font-semibold text-[#0D3A3C] outline-none placeholder:text-[#9AA1A4]"
            />
          </div>

          <div className="mt-4 space-y-2" role="listbox" aria-label="Currencies">
            {filtered.map((o) => {
              const active = o.code === value;
              return (
                <button
                  key={o.code}
                  type="button"
                  className={[
                    "flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left text-lg font-extrabold text-[#0D3A3C] transition-colors",
                    active ? "bg-[#F1F3F4]" : "hover:bg-[#F7F8F8]",
                  ].join(" ")}
                  onClick={() => {
                    onChange(o.code);
                    setOpen(false);
                    setQuery("");
                  }}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center">
                    {o.icon}
                  </span>
                  <span>{o.label}</span>
                </button>
              );
            })}
            {filtered.length === 0 ? (
              <div className="px-4 py-5 text-sm font-semibold text-[#8A9194]">
                No matches
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}


