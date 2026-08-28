import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { changeCurrency } from "@/store/reducers/currencyReducer";
import { Check } from "lucide-react";

interface Props {
  flag: string;
  currencyName: string;
  code: string;
  value: number;
}

const CurrencyListItem = ({ flag, currencyName, code, value }: Props) => {
  const selectedCurrency = useAppSelector(
    (state) => state.currency.selectedCurrency,
  );
  const dispatch = useAppDispatch();

  const handleSelection = () => {
    dispatch(changeCurrency(value));
  };
  return (
    <li className="p-2">
      <button
        className="w-full flex items-center justify-between text-sm hover:bg-neutral-300 sm:text-md"
        onClick={handleSelection}
      >
        <div className="flex gap-2 items-center text-left truncate gap-2 py-4">
          <img
            className="size-8 bg-transparent"
            src={flag}
            alt={currencyName}
          />
          <span className="text-white">{code}</span>
          <span className="text-neutral-200">{currencyName}</span>
        </div>
        {selectedCurrency.currencyName === currencyName && <Check />}
      </button>
    </li>
  );
};

export default CurrencyListItem;
