import type { CountryCurrency } from "@/types";
import { StarIcon } from "lucide-react";

interface Props {
  currency: CountryCurrency;
}

const CompareCard = ({ currency }: Props) => {
  return (
    <div className="w-full bg-neutral-600 p-2 md:p-5 border border-neutral-500 rounded-lg  flex justify-between items-center">
      {/* RIGHT SECTION */}
      <div className="w-full flex gap-2 uppercase">
        {/* ICON */}
        <div className="flex justify-center items-center">
          <img
            className="size-8 bg-transparent"
            src={currency.flag}
            alt={currency.currencyName}
          />
        </div>
        {/* INFO */}
        <div className="flex flex-col items-start gap-1 text-sm">
          <p className="text-white uppercase ">{currency.code}</p>
          <p className="text-neutral-200 ">{currency.currencyName}</p>
        </div>
      </div>
      {/* LEFT SECTION */}
      <div className="w-full flex gap-5 items-center justify-end">
        <div className="flex flex-col items-center gap-1">
          <p className="text-white text-md">0.8530</p>
          <p className="text-neutral-200 text-sm">@ 0.7366</p>
        </div>

        <button type="button" className="border border-lime-500 p-2 rounded-sm">
          <StarIcon size={18} className="stroke-lime-500 fill-lime-500" />
        </button>
      </div>
    </div>
  );
};

export default CompareCard;
