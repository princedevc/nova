"use client";

import * as React from "react";

export type SegmentedTabItem = {
  id: string;
  label: string;
};

export function SegmentedTabs({
  items,
  value,
  onChange,
}: {
  items: SegmentedTabItem[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="mx-auto w-full max-w-[640px]">
      <div className="inline-flex w-full items-center justify-between rounded-full bg-[#EEF0F0] p-1">
        {items.map((item) => {
          const active = item.id === value;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={[
                "h-10 flex-1 rounded-full px-4 text-sm font-semibold transition-colors",
                active
                  ? "bg-[#083E41] text-white shadow-sm"
                  : "text-[#6A7174] hover:text-[#233235]",
              ].join(" ")}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}


