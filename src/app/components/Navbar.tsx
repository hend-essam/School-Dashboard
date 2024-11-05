import {
  MegaphoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-start">
      {/* user */}
      <div className="flex gap-2">
        <div>
          <h1 className="font-bold text-2xl">Hi, hend</h1>
          <span className="text-gray-500">Admin</span>
        </div>
        <div className="flex gap-1">
          <div className="relative">
            <span className="absolute top-[-12px] right-[-10px] bg-[#d91d20] text-white px-1 rounded-full text-xs">
              2
            </span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-gray-500" />
          </div>
          <div className="relative">
            <span className="absolute top-[-12px] right-[-10px] bg-[#d91d20] text-white px-1 rounded-full text-xs">
              5
            </span>
            <MegaphoneIcon className="h-6 w-6 text-gray-500" />
          </div>
        </div>
      </div>
      {/* search bar */}
      <SearchBar />
    </div>
  );
};

export default Navbar;
