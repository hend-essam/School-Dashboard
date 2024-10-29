interface Iprop {
  title: string;
  time: string;
  content: string;
  bgColor?: string;
}

const SimpleCard = ({
  title,
  time,
  content,
  bgColor = "bg-[#ffffffab]",
}: Iprop) => {
  return (
    <div className={`${bgColor} p-2.5 rounded-xl`}>
      <div className="flex justify-between">
        <h2 className="font-semibold text-gray-600">{title}</h2>
        <span className="text-sm text-gray-400">{time}</span>
      </div>
      <p className="text-gray-500">{content}</p>
    </div>
  );
};

export default SimpleCard;
