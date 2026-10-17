import { tradingFilterOptions } from "@/constants";
import { useState } from "react";

const TradingChart = () => {
  const [selectedOption, setSelectedOption] = useState("1D");

  return (
    <div className="w-full my-8">
      <div className="max-w-md flex justify-between items-center border rounded-lg">
        {tradingFilterOptions.map(({ id, label }) => (
          <button
            key={id}
            className={`
          ${label === selectedOption ? "bg-neutral-300 text-white rounded-md" : "bg-transparent"}
          hover:bg-neutral-200 px-4 py-2 transition-colors
          `}
            onClick={() => setSelectedOption(label)}
          >
            {label}
          </button>
        ))}
      </div>
      {/* // CHART HERE */}
    </div>
  );
};

export default TradingChart;
