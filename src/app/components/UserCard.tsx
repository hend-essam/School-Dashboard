import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

interface IProps {
  type: string;
}

const UserCard = ({ type }: IProps) => {
  return (
    <div className="bg-gray-200 rounded-2xl p-3 flex-1 min-w-[130px] flex flex-col gap-1">
      <div className="flex justify-between">
        <span className="bg-white px-2 rounded-full">23/10</span>
        <EllipsisHorizontalIcon className="h-6 w-6" />
      </div>
      <h1 className="text-2xl font-semibold">3056</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
