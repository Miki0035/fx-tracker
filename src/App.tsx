import { ArrowUpDown, StarIcon } from "lucide-react";
import {
  Banner,
  Combobox,
  CompareSectionTab,
  FavoriteSectionTab,
  Header,
  HistorySectionTab,
  LogConversionSectionTab,
} from "./components";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import {
  convertRate,
  fetchLiveRating,
  recieveSelectedQueriedCurrencies,
  sendSelectedQueriedCurrencies,
} from "./store/currency/currencySelector";

import { changeTab } from "./store/tab/tabSlice";
import { useEffect, useState } from "react";

// import upArrow from "@/assets/images/icon-chevron-up.svg";
// import downArrow from "@/assets/images/icon-chevron-down.svg";

const App = () => {
  const sendSelectedCurrency = useAppSelector(
    (state) => state.currency.sendSelectedCurrency,
  );

  const sendAllCurrencies = useAppSelector(sendSelectedQueriedCurrencies);

  const recieveSelectedCurrency = useAppSelector(
    (state) => state.currency.recieveSelectedCurrency,
  );
  const recieveAllCurrencies = useAppSelector(recieveSelectedQueriedCurrencies);

  const tabs = useAppSelector((state) => state.tab.tabs);
  const currentTab = useAppSelector((state) => state.tab.currentTab);

  const dispatch = useAppDispatch();

  // live rates
  const liveRates = useAppSelector((state) => state.currency.liveRates);

  // to be converted  user input , the actual rate
  const [conversion, setConversion] = useState({
    value: "",
    convertedValue: 0,
    liveRate: 0,
  });

  const handleConversion = async () => {
    if (conversion.value === "") return;
    if (isNaN(Number(conversion.value))) return;

    try {
      const result = await dispatch(
        convertRate(Number(conversion.value)),
      ).unwrap();
      setConversion((prev) => ({
        ...prev,
        convertedValue: result.convertedValue,
        liveRate: result.liveRate,
      }));
    } catch (error) {
      console.error("Conversion failed", error);
    }
  };

  useEffect(() => {
    dispatch(fetchLiveRating());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Banner liveRates={liveRates} />
        <section className="w-full max-w-7xl mx-auto p-5">
          <h1 className="uppercase text-white text-lg py-5">check the rate</h1>
          <div className="w-full bg-neutral-700 rounded-xl">
            <div className="flex flex-col items-center md:gap-5 md:flex-row md:justify-center md:items-center">
              {/* SEND main currency card container*/}
              <div className="w-full items-center flex flex-col gap-5 p-5 md:flex-row">
                {/* currency container */}
                <div className="w-full relative border rounded-lg flex justify-between items-end p-5 sm:p-7">
                  <div className="space-y-5 mr-5">
                    <h2 className="text-md uppercase">send</h2>
                    <input
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setConversion((prev) => ({
                          ...prev,
                          value: e.target.value,
                        }))
                      }
                      className="w-24 max-w-54 text-xl font-bold text-white outline-none border-b-1"
                    />
                  </div>
                  <Combobox
                    sendSelectedCurrency={sendSelectedCurrency}
                    sendFilterCurrencies={sendAllCurrencies}
                    direction="send"
                  />
                </div>
              </div>

              {/* UP DOWN ARROW */}
              <button
                className="mx-auto p-3 bg-neutral-600 rounded-md border border-neutral-500 hover:cursor-pointer"
                onClick={handleConversion}
              >
                <ArrowUpDown className="text-white md:rotate-90" />
              </button>

              {/* RECIEVE main currency card container*/}
              <div className="w-full flex flex-col items-center  gap-5 p-5 md:flex-row  md:py-10">
                {/* currency container */}
                <div className="relative w-full max-w-lg border rounded-lg flex justify-between items-end p-5 sm:p-7">
                  <div className="space-y-5">
                    <h2 className="text-md uppercase">Recieve</h2>
                    <p className="text-xl font-bold text-lime-500">
                      {conversion.convertedValue}
                    </p>
                  </div>
                  <Combobox
                    sendSelectedCurrency={recieveSelectedCurrency}
                    sendFilterCurrencies={recieveAllCurrencies}
                    direction="recieve"
                  />
                </div>
              </div>
            </div>

            <div className="w-full py-5 md:p-5 mx-auto border-t-1 border-neutral-300 border-dashed md:mx-0 md:flex md:justify-between md:items-center">
              <p className="text-sm md:text-md text-white text-center">
                <span>1 {sendSelectedCurrency.code}</span> ={" "}
                {conversion.liveRate}
                {recieveSelectedCurrency.code}
              </p>
              <div className="text-sm font-semibold md:text-md flex justify-center items-center gap-5 py-4">
                <button
                  type="button"
                  className="flex items-center gap-2 uppercase bg-lime-500 text-neutral-900 p-2 rounded-sm"
                >
                  <StarIcon size={18} /> favorite
                </button>

                <button
                  type="button"
                  className="flex items-center gap-2 uppercase border border-lime-500 text-white bg-neutral-900 p-2 rounded-sm"
                >
                  Log conversion
                </button>
              </div>
            </div>
          </div>

          {/* TABS SECTION */}
          <section className="w-full py-10">
            {/* MENU TABS / SELECT */}
            <select
              name=""
              id=""
              className={`w-full border px-5 py-2 text-white outline-none mb-5 rounded-lg sm:hidden`}
              onChange={(e) => {
                const index = Number(e.target.value);
                const selectedTab = tabs.find((tab) => tab.index === index);
                if (selectedTab) {
                  dispatch(changeTab(selectedTab));
                }
              }}
            >
              {tabs.map((tab) => (
                <option
                  className="accent-none uppercase text-white py-3"
                  key={tab.index}
                  value={tab.index.toString()}
                >
                  {tab.label}
                </option>
              ))}
            </select>

            {/* LARGE SCREEN TAB BAR */}
            <div className="hidden w-full sm:flex justify-start items-center gap-10 mb-5 border-b-1 border-neutral-600">
              {tabs.map((tab) => (
                <button
                  key={tab.index}
                  className={`${currentTab.index === tab.index ? "border-b-2 border-lime-300" : ""}
                  text-white py-5 text-md uppercase
                  `}
                  onClick={() => dispatch(changeTab(tab))}
                >
                  {tab.label}{" "}
                  <span className="rounded-full w-12 h-12 text-lime-500 bg-lime-800 p-2">
                    8
                  </span>
                </button>
              ))}
            </div>
            {/* <Select
              defaultValue={currentTab.label}
              className={`w-full`}
              aria-label="Select tab"
              value={currentTab.index}
              onChange={(value) => {
                const selectedTab = tabs.find((tab) => tab.index === value);
                if (selectedTab) {
                  dispatch(changeTab(selectedTab));
                }
              }}
            >
              <SelectTrigger className="rounded-md mb-5 py-5 bg-neutral-700 border border-neutral-300 text-white uppercase text-sm sm:text-md sm:hidden">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-neutral-700">
                <SelectGroup>
                  {tabs.map((tab) => (
                    <SelectItem
                      className="accent-none uppercase text-white py-3"
                      key={tab.index}
                      value={tab.index.toString()}
                    >
                      {tab.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select> */}
            {/* CONTENT */}
            <section className="relative p-2">
              <HistorySectionTab
                className={`absolute inset-0 transition-opacity duration-300 ${
                  currentTab.index === 0
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              />

              <CompareSectionTab
                currency={sendSelectedCurrency}
                className={` inset-0 transition-opacity duration-300 ${
                  currentTab.index === 1
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              />

              <FavoriteSectionTab
                className={`absolute inset-0 transition-opacity duration-300 ${
                  currentTab.index === 2
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
                iconClassname="stroke-lime-500 fill-lime-500"
                sendCurrencyCode={sendSelectedCurrency.code}
                recieveCurrencyCode={recieveSelectedCurrency.code}
                priceRate=".86"
              />

              <LogConversionSectionTab
                className={`absolute inset-0 transition-opacity duration-300 ${
                  currentTab.index === 3
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
                sendCurrency={sendSelectedCurrency}
                recieveCurrency={recieveSelectedCurrency}
              />
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default App;
