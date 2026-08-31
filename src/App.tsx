import { ArrowUpDown, StarIcon } from "lucide-react";
import {
  Combobox,
  CompareSectionTab,
  CurrencyPair,
  FavoriteSectionTab,
  Header,
  LogConversionSectionTab,
} from "./components";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import {
  recieveSelectedQueriedCurrencies,
  sendSelectedQueriedCurrencies,
} from "./store/currency/currencySelector";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { changeTab } from "./store/tab/tabSlice";

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

  return (
    <>
      <Header />
      <main>
        <section className="w-full flex items-center justify-start bg-neutral-700 overflow-hidden">
          <div className="z-10 py-1 px-3 bg-lime-500 text-sm">
            <p className="w-full flex items-center uppercase gap-2  text-neutral-900 font-semibold">
              <span className="md:text-2xl"> · </span> live markets
            </p>
          </div>
          <ul className="flex w-full animate-infinite-scroll">
            {Array.from({ length: 15 }, (_, index) => (
              <li key={index}>
                <CurrencyPair
                  firstCurrency="USD"
                  secondCurrency="JPY"
                  price={12.91 * index}
                  rateChange={index % 2 === 0 ? -0.04 : 0.04}
                />
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full max-w-7xl mx-auto p-5">
          <h1 className="uppercase text-white text-lg py-5">check the rate</h1>
          <div className="w-full bg-neutral-700 rounded-xl">
            <div className="flex flex-col items-center md:gap-5 md:flex-row md:justify-center md:items-center">
              {/* SEND main currency card container*/}
              <div className="w-full items-center flex flex-col gap-5 p-5 md:flex-row">
                {/* currency container */}
                <div className="w-full relative bg-neutral-600 border border-neutral-500 rounded-lg flex justify-between items-end p-2 sm:p-7">
                  <div className="space-y-5 mr-5">
                    <h2 className="text-md uppercase">send</h2>
                    <input
                      type="text"
                      name=""
                      id=""
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
              <div className="mx-auto p-3 bg-neutral-600 rounded-md border border-neutral-500">
                <ArrowUpDown className="text-white md:rotate-90" />
              </div>

              {/* RECIEVE main currency card container*/}
              <div className="w-full flex flex-col items-center  gap-5 p-5 md:flex-row  md:py-10">
                {/* currency container */}
                <div className="relative w-full max-w-lg bg-neutral-600 border border-neutral-500 rounded-lg flex justify-between items-end p-2 sm:p-7">
                  <div className="space-y-5">
                    <h2 className="text-md uppercase">Recieve</h2>
                    <p className="text-xl font-bold text-lime-500">1,000</p>
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
                <span>1 {sendSelectedCurrency.code}</span> = 0.835{" "}
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
            <Select
              value={currentTab.index.toString()}
              onValueChange={(value) => {
                const selectedTab = tabs.find(
                  (tab) => tab.index === Number(value),
                );
                if (selectedTab) {
                  dispatch(changeTab(selectedTab));
                }
              }}
            >
              <SelectTrigger className="w-full rounded-md! mb-5 p-5 bg-neutral-700 border border-neutral-300 text-white uppercase text-md sm:hidden">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-neutral-700 ">
                <SelectGroup>
                  {tabs.map((tab) => (
                    <SelectItem
                      className="text-md accent-none uppercase text-white py-2"
                      key={tab.index}
                      value={tab.index.toString()}
                    >
                      {tab.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* CONTENT */}
            <section className="p-2 rounded-lg bg-neutral-700">
              {currentTab.index === 0 ? (
                <></>
              ) : currentTab.index === 1 ? (
                <FavoriteSectionTab
                  iconClassname="stroke-lime-500 fill-lime-500"
                  sendCurrencyCode={sendSelectedCurrency.code}
                  recieveCurrencyCode={recieveSelectedCurrency.code}
                  priceRate=".86"
                />
              ) : currentTab.index === 2 ? (
                <CompareSectionTab currency={sendSelectedCurrency} />
              ) : (
                <LogConversionSectionTab
                  sendCurrency={sendSelectedCurrency}
                  recieveCurrency={recieveSelectedCurrency}
                />
              )}
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default App;
