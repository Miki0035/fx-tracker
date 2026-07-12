import { Combobox, CurrencyPair, Header } from "./components";

const App = () => {
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
        <section className="w-full max-w-4xl mx-auto p-5">
          <h1 className="uppercase text-white text-lg">check the rate</h1>
          {/* main currency card container*/}
          <div className="flex flex-col gap-5 md:flex-row w-full bg-neutral-700 rounded-xl p-5">
            {/* currency container */}
            <div className="w-full max-w-lg bg-neutral-600 border border-neutral-500 rounded-lg flex justify-between items-end py-5 px-2 sm:p-5">
              <div className="space-y-5">
                <h2 className="text-md uppercase">send</h2>
                <p className="text-xl font-bold text-white">1,000</p>
              </div>
              <Combobox />

              {/* <Combobox items={timezones}>
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
              </Combobox> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
