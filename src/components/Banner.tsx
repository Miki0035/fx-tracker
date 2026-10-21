import type { API } from "@/types";
import { useCallback, useEffect, useState } from "react";
import CurrencyPair from "./CurrencyPair";
import CurrencyPairSkeleton from "./CurrencyPairSkeleton";

interface Props {
  liveRates: API[];
}

type RateChange = {
  trend: number;
  rateChangePercentage: number;
};

const Banner = ({ liveRates }: Props) => {
  const endpoint = import.meta.env.VITE_API;
  const [ratesWithChange, setRatesWithChange] = useState<(API & RateChange)[]>(
    [],
  );

  const calculateRateChange = useCallback(async function (
    rate: API,
  ): Promise<RateChange> {
    // !TODO  DYNAMIC UPDATE TODAY , YESTERDAY
    const today = "2026-10-18";
    const yesterday = "2026-10-17";
    const response = await fetch(
      `${endpoint}rates?base=${rate.base}&quotes=${rate.quote}&from=${yesterday}&to=${today}`,
    );
    if (!response.ok) throw new Error("Could not get rate changes");
    const data = await response.json();

    if (data.length < 2) {
      return { trend: 0, rateChangePercentage: 0 };
    }

    const yesterdayRate = data[0].rate;
    const todayRate = data[1].rate;
    console.log(`rateChangePercentage sub`, todayRate - yesterdayRate);
    const rateChangePercentage = (todayRate - yesterdayRate) / 100;

    if (todayRate > yesterdayRate) return { trend: 1, rateChangePercentage };
    if (todayRate < yesterdayRate) return { trend: -1, rateChangePercentage };
    return { trend: 0, rateChangePercentage };
  }, []);

  useEffect(() => {
    const calculateChanges = async () => {
      const results = await Promise.all(
        liveRates.map(async (rate) => {
          const rateChange: RateChange = await calculateRateChange(rate);

          return {
            ...rate,
            ...rateChange,
          };
        }),
      );
      setRatesWithChange(results);
    };

    if (liveRates.length > 0) {
      calculateChanges();
    }
  }, [calculateRateChange, liveRates]);

  return (
    <section className="w-full flex items-center justify-start bg-neutral-700 overflow-hidden">
      <div className="z-10 py-1 px-3 bg-lime-500 text-sm">
        <p className="w-full flex items-center uppercase gap-2  text-neutral-900 font-semibold">
          <span className="md:text-2xl"> · </span> live markets
        </p>
      </div>
      {ratesWithChange.length === 0 ? (
        <ul className="flex w-max">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index} className="shrink-0">
              <CurrencyPairSkeleton />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex w-max animate-infinite-scroll">
          {[...ratesWithChange, ...ratesWithChange].map((rate, index) => (
            <li key={index} className="shrink-0">
              <CurrencyPair
                firstCurrency={rate.base}
                secondCurrency={rate.quote}
                price={rate.rate}
                rateChangePercentage={rate.rateChangePercentage.toFixed(4)}
                trend={rate.trend}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Banner;
