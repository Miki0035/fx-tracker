import type { CountryCurrency } from "@/types";
import { ArrowRight, TrashIcon } from "lucide-react";

interface Props {
  sendCurrency: CountryCurrency;
  recieveCurrency: CountryCurrency;
}

const LogConversionCard = ({ sendCurrency, recieveCurrency }: Props) => {
  return (
    <div className="w-full bg-neutral-600 p-2 md:p-5 border border-neutral-500 rounded-lg  flex justify-between items-center">
      {/* RIGHT SECTION */}
      {/* INFO */}
      <div className="flex flex-col items-start gap-1 text-sm">
        <p className="text-neutral-200 ">20M</p>
        <p className="text-white flex items-center gap-1 uppercase">
          {sendCurrency.code} <ArrowRight /> {recieveCurrency.code}
        </p>
      </div>

      {/* LEFT SECTION */}
      <div className="w-full flex gap-5 items-center justify-end">
        <div className="flex flex-col text-sm items-start gap-1 sm:flex-row sm:gap-5">
          <p className="text-neutral-200">1,000.00</p>
          <p className="text-lime-500">853.02</p>
        </div>

        <button
          type="button"
          className="border border-neutral-300 bg-neutral-600 p-2 rounded-sm"
        >
          <TrashIcon className="size-3 text-white" />
        </button>
      </div>
    </div>
  );
};

export default LogConversionCard;
