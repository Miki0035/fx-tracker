import type { CountryCurrency } from "@/types";
import CurrencyListItem from "./CurrencyListItem";

interface Props {
  category: string;
  count: number;
  currencies: CountryCurrency[];
  direction: "send" | "recieve";
}

const CategoryList = ({ category, count, currencies, direction }: Props) => {
  return (
    <div className="h-full max-h-74 overflow-auto">
      <div className="w-full  py-3 border-b-1 border-neutral-300 flex justify-between items-center uppercase text-neutral-200 text-sm sm:text-md">
        <p>{category}</p>
        <p>{count}</p>
      </div>
      {/* CURRENCY LIST ITEM */}
      <ul>
        {currencies.map((currency) => (
          <CurrencyListItem
            key={currency.code}
            code={currency.code}
            currencyName={currency.currencyName}
            flag={currency.flag}
            direction={direction}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
