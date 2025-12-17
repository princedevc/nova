"use client";

import * as React from "react";

export type MenuOption = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

export function LabeledMenuSelect({
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
  options: MenuOption[];
}) {
  const selected = options.find((o) => o.value === value);
  const [open, setOpen] = React.useState(false);
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

  return (
    <div className="space-y-2">
      <div className="text-lg font-semibold text-[#0D3A3C]">{label}</div>
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 w-full items-center justify-between rounded-full border border-[#E6E8EA] bg-white px-6 text-base font-semibold text-[#0D3A3C] shadow-sm outline-none focus:ring-2 focus:ring-[#083E41]/20"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="inline-flex items-center gap-3">
            {selected?.icon ? (
              <span className="inline-flex h-7 w-7 items-center justify-center">
                {selected.icon}
              </span>
            ) : null}
            <span className={selected ? "" : "text-[#0D3A3C]"}>
              {selected?.label ?? placeholder}
            </span>
          </span>

          <svg
            className="h-5 w-5 text-[#0D3A3C]"
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
          <div className="absolute left-0 top-full z-50 mt-4 w-full rounded-[26px] border border-[#E6E8EA] bg-white p-3 shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
            <div className="space-y-2" role="listbox" aria-label={label}>
              {options.map((o) => {
                const active = o.value === value;
                return (
                  <button
                    key={o.value}
                    type="button"
                    className={[
                      "flex w-full items-center gap-4 rounded-2xl px-4 py-5 text-left text-lg font-extrabold text-[#0D3A3C] transition-colors",
                      active ? "bg-[#F1F3F4]" : "hover:bg-[#F7F8F8]",
                    ].join(" ")}
                    onClick={() => {
                      onChange(o.value);
                      setOpen(false);
                    }}
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center">
                      {o.icon}
                    </span>
                    <span className="min-w-0">{o.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}


