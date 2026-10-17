import HistoryCard from "./HistoryCard";

const HistorySectionTab = () => {
  return (
    <div className="w-full">
      {/* CARD CONTAINER */}
      <div className="w-full flex justify-start sm:justify-center  items-center md:justify-start flex-wrap gap-4">
        <HistoryCard label="open" value="0.8516" />
        <HistoryCard label="last" value="0.8516" />
        <HistoryCard label="change" className="text-green!" value="+0.8516" />
        <HistoryCard label="change" className="text-green!" value="+0.8516" />
      </div>

      {/* TRADING CHART CONTAINER + DATES */}
      <div className="w-full">
        <div className="border rounded-lg"></div>
      </div>
    </div>
  );
};

export default HistorySectionTab;
