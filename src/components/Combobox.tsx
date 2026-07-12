import { cn, getCountries } from "@/lib/utils";
import upArrow from "../assets/images/icon-chevron-up.svg";
import { Search } from "lucide-react";
import CategoryList from "./CategoryList";
import { useState } from "react";
import { useAppSelector } from "@/hooks/hooks";

const Combobox = () => {
  const currency = useAppSelector((state) => state.currency.selectedCurrency);
  const [show, setShow] = useState(false);

  return (
    <button
      type="button"
      className={`relative flex p-2 gap-2 items-center text-white cursor-pointer bg-neutral-500 
                border border-neutral-400 rounded-lg hover:bg-neutral-300`}
      onClick={() => setShow(!show)}
    >
      <img
        className="size-6 bg-transparent"
        src={currency.flag}
        alt={currency.currencyName}
      />
      <span>{currency.code}</span>
      <img src={upArrow} alt="up chevron" />
      {/* DROPDOWN */}
      <div
        className={cn(
          `w-58 max-w-lg absolute bg-neutral-600 top-14 right-0 p-2 transition-opacity`,
          show
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {/* Search box */}
        <div className="border-1 border-neutral-200 rounded-sm flex gap-2 p-2 mb-4">
          <Search className="text-white" />
          <input
            type="text"
            placeholder="Search currencies..."
            className="w-full text-sm placeholder:text-sm"
          />
        </div>
        {/* Popular */}
        <CategoryList
          currencies={getCountries().slice(3)}
          category="popular"
          count={getCountries().slice(3).length}
        />

        {/* Other currencies */}
        {/* <CategoryList category="other currencies" count={54} /> */}
      </div>
    </button>
  );
};

export default Combobox;
