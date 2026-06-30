import { GlobeIcon } from "lucide-react";
import { CurrencyPair, Header } from "./components";

import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from "./components/ui/combobox";
import { InputGroupAddon } from "./components/ui/input-group";

const timezones = [
  {
    value: "Americas",
    items: [
      "(GMT-5) New York",
      "(GMT-8) Los Angeles",
      "(GMT-6) Chicago",
      "(GMT-5) Toronto",
      "(GMT-8) Vancouver",
      "(GMT-3) São Paulo",
    ],
  },
  {
    value: "Europe",
    items: [
      "(GMT+0) London",
      "(GMT+1) Paris",
      "(GMT+1) Berlin",
      "(GMT+1) Rome",
      "(GMT+1) Madrid",
      "(GMT+1) Amsterdam",
    ],
  },
  {
    value: "Asia/Pacific",
    items: [
      "(GMT+9) Tokyo",
      "(GMT+8) Shanghai",
      "(GMT+8) Singapore",
      "(GMT+4) Dubai",
      "(GMT+11) Sydney",
      "(GMT+9) Seoul",
    ],
  },
] as const;

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section className="w-full flex items-center justify-start bg-neutral-700 overflow-hidden">
          <div className="py-1 px-3 bg-lime-500 text-sm">
            <p className="w-full flex items-center uppercase gap-2  text-neutral-900 font-semibold">
              <span className="md:text-2xl"> · </span> live markets
            </p>
          </div>
          <CurrencyPair
            firstCurrency="USD"
            secondCurrency="JPY"
            price={157.91}
            rateChange={0.04}
          />
          <CurrencyPair
            firstCurrency="GBP"
            secondCurrency="USD"
            price={1.3575}
            rateChange={-0.22}
          />
        </section>
        <section className="w-full max-w-4xl mx-auto p-5">
          <h1 className="uppercase text-white text-lg">check the rate</h1>
          {/* main currency card container*/}
          <div className="flex flex-col gap-5 md:flex-row w-full bg-neutral-700 rounded-xl p-5">
            {/* left currency container */}
            <div className="bg-neutral-800 border border-neutral-300 rounded-lg flex justify-between items-end p-5">
              <div className="space-y-5">
                <h2 className="text-md uppercase">send</h2>
                <p className="text-xl font-bold text-white">1,000</p>
              </div>
              <Combobox items={timezones}>
                <ComboboxInput placeholder="Select a timezone">
                  <InputGroupAddon>
                    <GlobeIcon />
                  </InputGroupAddon>
                </ComboboxInput>
                <ComboboxContent alignOffset={-28} className="w-60">
                  <ComboboxEmpty>No timezones found.</ComboboxEmpty>
                  <ComboboxList>
                    {(group) => (
                      <ComboboxGroup key={group.value} items={group.items}>
                        <ComboboxLabel>{group.value}</ComboboxLabel>
                        <ComboboxCollection>
                          {(item) => (
                            <ComboboxItem key={item} value={item}>
                              {item}
                            </ComboboxItem>
                          )}
                        </ComboboxCollection>
                      </ComboboxGroup>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
