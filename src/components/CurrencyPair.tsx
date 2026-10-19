import upArrow from "../assets/images/icon-chevron-up.svg";
import downArrow from "../assets/images/icon-chevron-down.svg";

interface Props {
  firstCurrency: string;
  secondCurrency: string;
  price: number;
  rateChangePercentage: string;
  trend: number;
}

const CurrencyPair = ({
  firstCurrency,
  secondCurrency,
  price,
  rateChangePercentage,
  trend,
}: Props) => {
  const colorScheme =
    trend === 0 ? `text-neutral-100` : trend === 1 ? `text-green` : "text-red";
  const positive = trend > 0 ? true : false;

  return (
    <div className="h-10 px-8 border-x-1 border-neutral-400 flex items-center gap-3 text-md">
      {/* currency pairs */}
      <span className="uppercase text-neutral-100">
        {firstCurrency}/{secondCurrency}{" "}
      </span>
      <span className="uppercase text-white">{price.toPrecision(5)}</span>
      <span className={`uppercase ${colorScheme} flex items-center gap-1`}>
        {trend === 0 ? (
          <>{rateChangePercentage}</>
        ) : (
          <>
            <img
              src={positive ? upArrow : downArrow}
              alt={positive ? "up arrow" : "down arrow"}
              className={`${positive ? "rotate-180" : "rotate-0"} w-5 h-5`}
            />
            {positive
              ? `+${rateChangePercentage}%`
              : `${rateChangePercentage}%`}
          </>
        )}
      </span>
    </div>
  );
};

export default CurrencyPair;
