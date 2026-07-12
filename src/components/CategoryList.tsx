import { getCountries } from "@/lib/utils";
import CurrencyListItem from "./CurrencyListItem";

interface Props {
  category: string;
  count: number;
}

const CategoryList = ({ category, count }: Props) => {
  const currency = getCountries()[0];
  return (
    <ul className="">
      <div className="w-full py-3 border-b-1 border-neutral-300 flex justify-between items-center uppercase text-neutral-200 text-sm sm:text-md">
        <p>{category}</p>
        <p>{count}</p>
      </div>
      {/* CURRENCY LIST ITEM */}

      <CurrencyListItem
        code={currency.code}
        currencyName={currency.currencyName}
        flag={currency.flag}
      />

      <CurrencyListItem
        code={currency.code}
        currencyName={currency.currencyName}
        flag={currency.flag}
      />
    </ul>
  );
};

export default CategoryList;
