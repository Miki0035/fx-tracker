import { cn } from "@/lib/utils";
import upArrow from "../assets/images/icon-chevron-up.svg";
import { Search } from "lucide-react";
import CategoryList from "./CategoryList";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import type { CountryCurrency, ToBeChangedCurrency } from "@/types";
import { setSearchValue } from "@/store/currency/currencySlice";

interface Props {
  sendSelectedCurrency: CountryCurrency;
  sendFilterCurrencies: CountryCurrency[];
  direction: "send" | "recieve";
}

const Combobox = ({
  sendSelectedCurrency,
  sendFilterCurrencies,
  direction,
}: Props) => {
  // Redux state changer method
  const dispatch = useAppDispatch();

  const [showDropdown, setShowDropdown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const sendSearch: ToBeChangedCurrency = {
      direction,
      value: event.target.value,
    };
    dispatch(setSearchValue(sendSearch));
  };

  return (
    <div>
      <button
        className="flex p-2 gap-2 items-center text-white cursor-pointer bg-neutral-500 
                border border-neutral-400 rounded-lg hover:bg-neutral-300"
        type="button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <img
          className="size-6 bg-transparent"
          src={sendSelectedCurrency.flag}
          alt={sendSelectedCurrency.currencyName}
        />
        <span>{sendSelectedCurrency.code}</span>
        <img src={upArrow} alt="up chevron" />
      </button>
      {/* DROPDOWN */}
      <div
        ref={dropDownRef}
        className={cn(
          `w-full max-w-120 z-50 absolute top-30 right-0 bg-neutral-600 border border-neutral-400 rounded-lg  p-2 transition-opacity`,
          showDropdown
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {/* Search box */}
        <div className="border-1 border-neutral-200 rounded-md flex gap-2 px-2 py-4 mb-4">
          <Search className="text-white" />
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search currencies..."
            className="w-full text-sm placeholder:text-sm outline-none"
          />
        </div>
        {/* Popular */}
        <CategoryList
          currencies={sendFilterCurrencies}
          category="popular"
          count={sendFilterCurrencies.length}
          direction={direction}
        />

        {/* Other currencies */}
        {/* <CategoryList category="other currencies" count={54} /> */}
      </div>
    </div>
  );
};

export default Combobox;
