import LogConversionCard from "./LogConversionCard";
import type { CountryCurrency } from "@/types";

interface Props {
  sendCurrency: CountryCurrency;
  recieveCurrency: CountryCurrency;
}

const LogConversionSectionTab = ({ sendCurrency, recieveCurrency }: Props) => {
  return (
    <>
      <div className="w-full py-3 uppercase flex justify-between items-end">
        <div className="flex flex-col items-start">
          <h4 className="text-white">Conversion log</h4>
          <p className="text-neutral-200 py-2 text-sm">8 logged</p>
        </div>
        <div>
          <button
            type="button"
            className="border border-neutral-300 uppercase bg-neutral-600 text-neutral-200 rounded-lg p-2 text-sm"
          >
            clear all
          </button>
        </div>
      </div>

      <LogConversionCard
        sendCurrency={sendCurrency}
        recieveCurrency={recieveCurrency}
      />
    </>
  );
};

export default LogConversionSectionTab;
