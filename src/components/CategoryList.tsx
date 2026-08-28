import type { CountryCurrency } from "@/types";
import CurrencyListItem from "./CurrencyListItem";

interface Props {
  category: string;
  count: number;
  currencies: CountryCurrency[];
}

const CategoryList = ({ category, count, currencies }: Props) => {
  return (
    <>
      <div className="w-full py-3 border-b-1 border-neutral-300 flex justify-between items-center uppercase text-neutral-200 text-sm sm:text-md">
        <p>{category}</p>
        <p>{count}</p>
      </div>
      {/* CURRENCY LIST ITEM */}
      <ul>
        {currencies.map((currency, index) => (
          <CurrencyListItem
            key={index}
            value={index}
            code={currency.code}
            currencyName={currency.currencyName}
            flag={currency.flag}
          />
        ))}
      </ul>
    </>
  );
};

export default CategoryList;
