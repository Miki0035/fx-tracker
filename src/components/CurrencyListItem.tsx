import { Check } from "lucide-react";

interface Props {
  flag: string;
  currencyName: string;
  code: string;
}

const CurrencyListItem = ({ flag, currencyName, code }: Props) => {
  return (
    <li className="flex items-center justify-between text-sm hover:bg-neutral-300 sm:text-md">
      <div className="flex gap-2 items-center gap-2 py-4">
        <img className="size-6 bg-transparent" src={flag} alt={currencyName} />
        <span className="text-white">{code}</span>
        <span className="text-neutral-200">{currencyName}</span>
      </div>
      <div>
        <Check />
      </div>
    </li>
  );
};

export default CurrencyListItem;
