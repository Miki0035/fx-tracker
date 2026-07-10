import { getCountries } from "@/lib/utils";
import upArrow from "./assets/images/icon-chevron-up.svg";

const Combobox = () => {
  return (
    <>
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
      </button>
    </>
  );
};

export default Combobox;
