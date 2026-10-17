import FavoriteCard from "./FavoriteCard";
import upArrow from "@/assets/images/icon-chevron-up.svg";
import downArrow from "@/assets/images/icon-chevron-down.svg";

interface Props {
  priceRate: string;
  iconClassname: string;
  sendCurrencyCode: string;
  recieveCurrencyCode: string;
  className: string;
}

const FavoriteSectionTab = ({
  sendCurrencyCode,
  recieveCurrencyCode,
  iconClassname,
  priceRate,
  className,
}: Props) => {
  return (
    <div className={className}>
      {/* FAVORITE */}
      <div className="w-full py-3 flex justify-between items-center">
        <h4 className="text-white uppercase">pinned pairs</h4>
        <p className="text-neutral-200 text-sm">Favorites</p>
      </div>
      {/* CARD */}
      <FavoriteCard
        sendCurrencyCode={sendCurrencyCode}
        recieveCurrencyCode={recieveCurrencyCode}
        iconClassname={iconClassname}
        priceRate={priceRate}
        icon={upArrow}
      />
    </div>
  );
};

export default FavoriteSectionTab;
