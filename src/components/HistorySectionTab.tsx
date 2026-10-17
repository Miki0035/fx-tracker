import HistoryCard from "./HistoryCard";
import TradingChart from "./TradingChart";

interface Props {
  className: string;
}

const HistorySectionTab = ({ className }: Props) => {
  return (
    <div className={`${className} w-full`}>
      {/* CARD CONTAINER */}
      <div className="w-full flex justify-start sm:justify-center  items-center md:justify-start flex-wrap gap-4">
        <HistoryCard label="open" value="0.8516" />
        <HistoryCard label="last" value="0.8516" />
        <HistoryCard label="change" className="text-green!" value="+0.8516" />
        <HistoryCard label="change" className="text-green!" value="+0.8516" />
      </div>

      {/* TRADING CHART CONTAINER + DATES */}
      <TradingChart />
    </div>
  );
};

export default HistorySectionTab;
