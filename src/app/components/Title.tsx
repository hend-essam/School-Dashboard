import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

interface Iprop {
  text: string;
  ele?: React.ReactNode;
}

const Title = ({
  text,
  ele = <EllipsisHorizontalIcon className="h-6 w-6" />,
}: Iprop) => {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-lg">{text}</h1>
      <span className="cursor-pointer">{ele}</span>
    </div>
  );
};

export default Title;