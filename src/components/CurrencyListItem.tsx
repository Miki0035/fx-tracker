import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { changeCurrency } from "@/store/currency/currencySlice";
import type { ToBeChangedCurrency } from "@/types";
import { Check } from "lucide-react";

interface Props {
  flag: string;
  currencyName: string;
  code: string;
  countryName: string;
  direction: "send" | "recieve";
}

const CurrencyListItem = ({
  flag,
  currencyName,
  code,
  direction,
  countryName,
}: Props) => {
  const sendCurrency = useAppSelector(
    (state) => state.currency.sendSelectedCurrency,
  );

  const recieveCurrency = useAppSelector(
    (state) => state.currency.recieveSelectedCurrency,
  );

  const dispatch = useAppDispatch();

  const handleSelection = () => {
    console.log(`direction ${direction}`, `value ${code}`);

    const selectedCurrency: ToBeChangedCurrency = {
      direction,
      value: code,
    };
    dispatch(changeCurrency(selectedCurrency));
  };
  return (
    <li className="p-2">
      <button
        className="w-full flex items-center justify-between text-sm hover:bg-neutral-300 sm:text-md"
        onClick={handleSelection}
      >
        <div className="flex gap-2 items-center text-left truncate py-4">
          <img
            className="size-8 bg-transparent"
            src={flag}
            alt={currencyName}
          />
          <span className="shrink-0 text-white">{countryName}</span>
          <span className="min-w-0 truncate text-neutral-200">{code}</span>
        </div>
        {direction === "send"
          ? sendCurrency.currencyName === currencyName && <Check />
          : recieveCurrency.currencyName === currencyName && <Check />}
      </button>
    </li>
  );
};

export default CurrencyListItem;
