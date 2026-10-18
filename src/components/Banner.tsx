import type { API } from "@/types";
import { useEffect, useState } from "react";
import CurrencyPair from "./CurrencyPair";

interface Props {
  liveRates: API[];
}

const Banner = ({ liveRates }: Props) => {
  const endpoint = import.meta.env.VITE_API;
  // const [bannerRate] = useState<API[]>(liveRates);
  const [ratesWithChange, setRatesWithChange] = useState<
    (API & { rateChange: -1 | 0 | 1 })[]
  >([]);
  //   console.log(`banner rate`, liveRates);

  async function calculateRateChange(rate: API) {
    const today = "2026-10-18";
    const yesterday = "2026-10-17";
    const response = await fetch(
      `${endpoint}rates?base=${rate.base}&quotes=${rate.quote}&from=${yesterday}&to=${today}`,
    );
    if (!response.ok) throw new Error("Could not get rate changes");
    const data = await response.json();

    console.log("historical data", data);

    if (data.length < 2) {
      return 0;
    }

    const yesterdayRate = data[0].rate;
    const todayRate = data[1].rate;

    if (todayRate > yesterdayRate) return 1;
    if (todayRate < yesterdayRate) return -1;
    return 0;
  }

  useEffect(() => {
    const calculateChanges = async () => {
      const results = await Promise.all(
        liveRates.map(async (rate) => {
          const rateChange: 1 | -1 | 0 = await calculateRateChange(rate);

          return {
            ...rate,
            rateChange,
          };
        }),
      );
      setRatesWithChange(results);
    };

    if (liveRates.length > 0) {
      calculateChanges();
    }
  }, [liveRates]);

  return (
    <section className="w-full flex items-center justify-start bg-neutral-700 overflow-hidden">
      <div className="z-10 py-1 px-3 bg-lime-500 text-sm">
        <p className="w-full flex items-center uppercase gap-2  text-neutral-900 font-semibold">
          <span className="md:text-2xl"> · </span> live markets
        </p>
      </div>
      <ul className="flex w-full animate-infinite-scroll">
        {ratesWithChange.map((rate, index) => (
          <li key={index}>
            <CurrencyPair
              firstCurrency={rate.base}
              secondCurrency={rate.quote}
              price={rate.rate}
              rateChange={rate.rateChange}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Banner;
