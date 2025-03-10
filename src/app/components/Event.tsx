type Event = {
  title: string;
  time: string;
  content: string;
};

const Event = ({ title, time, content }: Event) => {
  return (
    <div className="bg-[#ffffffab] p-2 rounded-xl border-white border-2">
      <div className="flex justify-between">
        <h2 className="font-semibold text-gray-600">{title}</h2>
        <span className="text-sm text-gray-400">{time}</span>
      </div>
      <p className="text-gray-500">{content}</p>
    </div>
  );
};

export default Event;
