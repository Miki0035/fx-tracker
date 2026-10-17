interface Props {
  label: string;
  value: string;
  className?: string;
}

const HistoryCard = ({ label, value, className }: Props) => {
  return (
    <div className="border rounded-xl p-2 space-y-5 w-full max-w-52">
      <h5 className="uppercase">{label}</h5>
      <p className={` ${className} text-white text-lg`}>{value}</p>
    </div>
  );
};

export default HistoryCard;
