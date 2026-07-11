import { getCountries } from "@/lib/utils";
import upArrow from "../assets/images/icon-chevron-up.svg";
import { Search } from "lucide-react";

const Combobox = () => {
  return (
    <button
      className={`relative flex p-2 gap-2 items-center text-white cursor-pointer bg-neutral-500 
                border border-neutral-400 rounded-lg hover:bg-neutral-300`}
    >
      <img
        className="size-6 bg-transparent"
        src={getCountries()[0].flag}
        alt={getCountries()[0].currencyName}
      />
      <span>{getCountries()[0].code}</span>
      <img src={upArrow} alt="up chevron" />
      {/* DROPDOWN */}
      <div className="w-32 max-w-lg absolute bg-neutral-600 top-14 -left-5 p-1">
        {/* Search box */}
        <div className="border border-neutral-300 flex gap-2 p-2">
          <Search className="text-white" />
          <input
            type="text"
            placeholder="Search currencies..."
            className="w-full"
          />
        </div>
        {/* Popular */}
        <div>
          <div className="w-full py-2 border-b-1 border-neutral-300 flex justify-between items-center uppercase text-neutral-300">
            <p>popular</p>
            <p>3</p>
          </div>
          <div className="flex gap-2 text-md">
            <img
              className="size-6 bg-transparent"
              src={getCountries()[0].flag}
              alt={getCountries()[0].currencyName}
            />
            <span className="text-white">{getCountries()[0].code}</span>
            <span className="text-neutral-200">
              {getCountries()[0].currencyName}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Combobox;
