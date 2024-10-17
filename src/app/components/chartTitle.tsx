import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

const Title = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold">{text}</h1>
      <EllipsisHorizontalIcon className="h-6 w-6" />
    </div>
  );
};

export default Title;
