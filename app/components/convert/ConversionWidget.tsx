"use client";

import * as React from "react";
import { AmountCard } from "./AmountCard";
import { CurrencyOption } from "./CurrencySelect";
import {
  EthIcon,
  NigeriaFlagIcon,
  TokenBadgeIcon,
  WalletBadgeIcon,
} from "./icons";
import { ComingSoonPanel } from "./ComingSoonPanel";
import { LabeledSelect } from "./LabeledSelect";
import { LabeledMenuSelect } from "./LabeledMenuSelect";
import { SegmentedTabs } from "./SegmentedTabs";

const tabs = [
  { id: "crypto_to_cash", label: "Crypto to cash" },
  { id: "cash_to_crypto", label: "Cash to crypto" },
  { id: "crypto_to_fiat_loan", label: "Crypto to fiat loan" },
];

const currencyOptions: CurrencyOption[] = [
  {
    code: "ETH",
    label: "ETH",
    icon: <EthIcon className="h-5 w-5 text-[#2A2E32]" />,
  },
  {
    code: "USDT-CELO",
    label: "USDT - CELO",
    icon: <TokenBadgeIcon className="h-10 w-10" label="C" bg="#F3EA6A" />,
  },
  {
    code: "USDT-TON",
    label: "USDT - TON",
    icon: <TokenBadgeIcon className="h-10 w-10" label="T" bg="#44B6FF" fg="#ffffff" />,
  },
  {
    code: "USDT-BNB",
    label: "USDT - BNB",
    icon: <TokenBadgeIcon className="h-10 w-10" label="B" bg="#F2C94C" />,
  },
  {
    code: "NGN",
    label: "NGN",
    icon: <NigeriaFlagIcon className="h-6 w-6" />,
  },
  {
    code: "USD",
    label: "USD",
    icon: <TokenBadgeIcon className="h-10 w-10" label="$" bg="#E7F3ED" />,
  },
];

export function ConversionWidget() {
  const [tab, setTab] = React.useState(tabs[0]!.id);
  const [payAmount, setPayAmount] = React.useState("1.00");
  const [receiveAmount, setReceiveAmount] = React.useState("1.00");
  const [payCurrency, setPayCurrency] = React.useState("ETH");
  const [receiveCurrency, setReceiveCurrency] = React.useState("NGN");
  const [payFrom, setPayFrom] = React.useState("");
  const [payTo, setPayTo] = React.useState("");

  return (
    <section className="w-full max-w-[820px]">
      <div className="rounded-[36px] border border-[#DCE1E3] bg-[#FBFBFB] p-7 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
        <div className="flex justify-center">
          <SegmentedTabs items={tabs} value={tab} onChange={setTab} />
        </div>

        {tab === "cash_to_crypto" ? (
          <ComingSoonPanel />
        ) : (
          <div className="mt-10 space-y-8 px-2">
            <div className="rounded-[34px] border border-[#E6E8EA] bg-white p-6">
              <div className="space-y-6">
                <AmountCard
                  label="You pay"
                  amount={payAmount}
                  onAmountChange={setPayAmount}
                  currency={payCurrency}
                  onCurrencyChange={setPayCurrency}
                  currencyOptions={currencyOptions}
                />
                <AmountCard
                  label="You receive"
                  amount={receiveAmount}
                  onAmountChange={setReceiveAmount}
                  currency={receiveCurrency}
                  onCurrencyChange={setReceiveCurrency}
                  currencyOptions={currencyOptions}
                />
              </div>
            </div>

            <div className="space-y-7 px-2">
              <LabeledMenuSelect
                label="Pay from"
                placeholder="Select an option"
                value={payFrom}
                onChange={setPayFrom}
                options={[
                  {
                    value: "metamask",
                    label: "Metamask",
                    icon: (
                      <WalletBadgeIcon
                        className="h-10 w-10"
                        label="M"
                        bg="#F6B37F"
                      />
                    ),
                  },
                  {
                    value: "rainbow",
                    label: "Rainbow",
                    icon: (
                      <WalletBadgeIcon
                        className="h-10 w-10"
                        label="R"
                        bg="#E9E5FF"
                      />
                    ),
                  },
                  {
                    value: "walletconnect",
                    label: "WalletConnect",
                    icon: (
                      <WalletBadgeIcon
                        className="h-10 w-10"
                        label="W"
                        bg="#CFE7FF"
                      />
                    ),
                  },
                  {
                    value: "other",
                    label: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)",
                    icon: (
                      <WalletBadgeIcon
                        className="h-10 w-10"
                        label="◻"
                        bg="#E6F0F0"
                      />
                    ),
                  },
                ]}
              />

              <LabeledSelect
                label="Pay to"
                placeholder="Select an option"
                value={payTo}
                onChange={setPayTo}
                options={[
                  { value: "bank", label: "Bank account" },
                  { value: "mobile_money", label: "Mobile money" },
                ]}
              />
            </div>

            <div className="px-2 pt-2">
              <button
                type="button"
                className="h-16 w-full rounded-full bg-[#083E41] text-lg font-semibold text-white shadow-[0_16px_40px_rgba(8,62,65,0.25)] transition-colors hover:bg-[#063437] active:bg-[#052C2E]"
                onClick={() => {
                  // UI-only for now (hook your conversion logic here).
                }}
              >
                Convert now
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


