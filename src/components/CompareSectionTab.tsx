import CompareCard from "./CompareCard";
import type { CountryCurrency } from "@/types";

interface Props {
  currency: CountryCurrency;
  className: string;
}

const CompareSectionTab = ({ currency, className }: Props) => {
  return (
    <section
      className={`${className} px-1.5 py-2 rounded-lg bg-neutral-700  text-sm sm:text-md`}
    >
      {/* COMPARE */}
      <div className="w-full py-3 uppercase  sm:flex sm:justify-between sm:items-center">
        <div>
          <h4 className="text-neutral-200">
            Multi-Currency
            <span className="text-white pl-5">1,000 from USD</span>
          </h4>
        </div>
        <p className="text-neutral-200 py-2">8 Pairs</p>
      </div>
      <CompareCard currency={currency} />
    </section>
  );
};

export default CompareSectionTab;
