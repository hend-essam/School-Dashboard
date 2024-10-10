import {
  MagnifyingGlassIcon,
  MegaphoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

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
      <div className="flex border-2 rounded-[50px] py-1 px-3 items-center bg-[#ffffff9c]">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 " />
        <input
          className="outline-none px-2 hidden sm:block bg-transparent"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Navbar;
