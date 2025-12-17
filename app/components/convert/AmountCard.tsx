"use client";

import * as React from "react";
import { CurrencyOption, CurrencySelect } from "./CurrencySelect";

export function AmountCard({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOptions,
}: {
  label: string;
  amount: string;
  onAmountChange: (v: string) => void;
  currency: string;
  onCurrencyChange: (code: string) => void;
  currencyOptions: CurrencyOption[];
}) {
  return (
    <div className="rounded-[28px] border border-[#E6E8EA] bg-white px-6 py-6">
      <div className="flex items-center justify-between gap-6">
        <div className="min-w-0">
          <div className="text-sm font-semibold text-[#8A9194]">{label}</div>
          <input
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            inputMode="decimal"
            className="mt-2 w-40 bg-transparent text-4xl font-extrabold tracking-tight text-[#0B1F20] outline-none"
            aria-label={label}
          />
        </div>

        <CurrencySelect
          options={currencyOptions}
          value={currency}
          onChange={onCurrencyChange}
        />
      </div>
    </div>
  );
}


