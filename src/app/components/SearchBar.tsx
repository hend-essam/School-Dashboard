import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type SearchBarProps = {
  placeholder?: string;
};

const SearchBar = ({ placeholder = "Search..." }: SearchBarProps) => {
  return (
    <div className="flex border-2 rounded-[50px] py-1 px-3 items-center bg-[#ffffff9c]">
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 " />
      <input
        className="outline-none px-2 hidden sm:block bg-transparent"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
