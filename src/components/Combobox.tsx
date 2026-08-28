import { cn, getCountries } from "@/lib/utils";
import upArrow from "../assets/images/icon-chevron-up.svg";
import { Search } from "lucide-react";
import CategoryList from "./CategoryList";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { searchCurrency } from "@/store/reducers/currencyReducer";

const Combobox = () => {
  // Redux state
  const selectedCurrency = useAppSelector(
    (state) => state.currency.selectedCurrency,
  );
  const allCurrencies = useAppSelector(
    (state) => state.currency.allCountryCurrencies,
  );

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
    dispatch(searchCurrency(event.target.value));
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
          src={selectedCurrency.flag}
          alt={selectedCurrency.currencyName}
        />
        <span>{selectedCurrency.code}</span>
        <img src={upArrow} alt="up chevron" />
      </button>
      {/* DROPDOWN */}
      <div
        ref={dropDownRef}
        className={cn(
          `w-full max-w-120 absolute top-30 right-0 bg-neutral-600 border border-neutral-400 rounded-lg  p-2 transition-opacity`,
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
          currencies={allCurrencies}
          category="popular"
          count={getCountries().slice(3).length}
        />

        {/* Other currencies */}
        {/* <CategoryList category="other currencies" count={54} /> */}
      </div>
    </div>
  );
};

export default Combobox;
