import { CurrencyPair, Header } from "./components";
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
      </main>
    </>
  );
};

export default App;
