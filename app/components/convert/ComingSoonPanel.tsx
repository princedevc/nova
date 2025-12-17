"use client";

import * as React from "react";

export function ComingSoonPanel({
  title = "Coming Soon!",
  subtitle = "Cash to Crypto is almost here.",
  body = "Enter your email and we’ll let you know the moment it’s live.",
  cta = "Update me",
}: {
  title?: string;
  subtitle?: string;
  body?: string;
  cta?: string;
}) {
  const [email, setEmail] = React.useState("");

  return (
    <div className="px-4 pb-2 pt-8">
      <div className="mx-auto flex min-h-[620px] w-full max-w-[820px] flex-col items-center justify-start">
        <div className="mt-10 text-center">
          <h2 className="text-[56px] font-extrabold leading-[1.05] tracking-tight text-[#0D3A3C]">
            {title}
          </h2>
          <div className="mt-6 space-y-2 text-[28px] font-medium leading-tight text-[#5B6164]">
            <p>{subtitle}</p>
            <p>{body}</p>
          </div>
        </div>

        <div className="mt-16 w-full max-w-[860px]">
          <label className="block px-2 text-lg font-semibold text-[#0D3A3C]">
            Email
          </label>
          <div className="mt-4 px-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="h-16 w-full rounded-full border border-[#E6E8EA] bg-white px-8 text-lg text-[#0D3A3C] shadow-sm outline-none placeholder:text-[#9AA1A4] focus:ring-2 focus:ring-[#083E41]/20"
            />
          </div>
        </div>

        <div className="mt-20 w-full px-2">
          <button
            type="button"
            className="h-16 w-full rounded-full bg-[#083E41] text-lg font-semibold text-white shadow-[0_16px_40px_rgba(8,62,65,0.25)] transition-colors hover:bg-[#063437] active:bg-[#052C2E]"
            onClick={() => {
              // UI-only for now (hook your waitlist logic here).
            }}
          >
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
}


