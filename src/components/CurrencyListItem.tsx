import { useAppDispatch } from "@/hooks/hooks";
import { changeCurrency } from "@/store/reducers/currencyReducer";
import { Check } from "lucide-react";

interface Props {
  flag: string;
  currencyName: string;
  code: string;
}

const CurrencyListItem = ({ flag, currencyName, code }: Props) => {
  const dispatch = useAppDispatch();

  const handleSelection = () => {
    dispatch(changeCurrency(5));
  };
  return (
    <li>
      <button
        className="flex items-center justify-between text-sm hover:bg-neutral-300 sm:text-md"
        onClick={handleSelection}
      >
        <div className="flex gap-2 items-center gap-2 py-4">
          <img
            className="size-6 bg-transparent"
            src={flag}
            alt={currencyName}
          />
          <span className="text-white">{code}</span>
          <span className="text-neutral-200">{currencyName}</span>
        </div>
        <div>
          <Check />
        </div>
      </button>
    </li>
  );
};

export default CurrencyListItem;
