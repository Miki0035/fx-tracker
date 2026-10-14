import { ArrowRight, StarIcon } from "lucide-react";

interface Props {
  icon: string;
  priceRate: string;
  iconClassname: string;
  sendCurrencyCode: string;
  recieveCurrencyCode: string;
}

const FavoriteCard = ({
  icon,
  iconClassname,
  priceRate,
  sendCurrencyCode,
  recieveCurrencyCode,
}: Props) => {
  return (
    <div className="w-full bg-neutral-600 p-2 md:p-5 border border-neutral-500 rounded-lg  flex justify-between items-center">
      <div className="w-full flex gap-2 uppercase">
        {sendCurrencyCode} <ArrowRight /> {recieveCurrencyCode}
      </div>
      {/* FAVORITE ICON + PRICE CONTAINER */}
      <div className="w-full flex gap-5 items-center justify-end">
        <div className="flex flex-col items-center gap-1">
          <span className="text-white text-md">0.8530</span>
          <div className="text-sm text-green flex items-center">
            <img src={icon} alt="upward arrow" /> <span> +{priceRate}%</span>
          </div>
        </div>

        <button type="button" className="border border-lime-500 p-2 rounded-sm">
          <StarIcon size={18} className={iconClassname} />
        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;
