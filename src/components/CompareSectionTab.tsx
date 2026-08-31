import React from "react";
import CompareCard from "./CompareCard";
import type { CountryCurrency } from "@/types";

interface Props {
  currency: CountryCurrency;
}

const CompareSectionTab = ({ currency }: Props) => {
  return (
    <section className="p-2 rounded-lg bg-neutral-700">
      {/* COMPARE */}
      <div className="w-full py-3 uppercase  sm:flex sm:justify-between sm:items-center">
        <h4 className="text-neutral-200 text-sm">
          Multi-Currency
          <span className="text-white pl-5">1,000 from USD</span>
        </h4>
        <p className="text-neutral-200 text-sm py-2">8 Pairs</p>
      </div>
      <CompareCard currency={currency} />
    </section>
  );
};

export default CompareSectionTab;
