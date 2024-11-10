"use client";
import Pagination from "@/app/components/Pagination";
import SearchBar from "@/app/components/SearchBar";
import Table from "@/app/components/Table";
import Title from "@/app/components/Title";
import {
  AdjustmentsHorizontalIcon,
  ArrowsUpDownIcon,
} from "@heroicons/react/24/outline";
import IconButton from "@/app/components/IconButton";
import { parentsData, role } from "@/app/lib/data";
import { Parent } from "@/types/interfaces";
import FormModal from "@/app/components/FormModal";

const columns = [
  {
    header: "Info",
    accessor: "info",
    className: "hidden md:table-cell",
  },
  {
    header: "Student Names",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "hidden md:table-cell",
  },
];

const ParentsListPage = () => {
  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#d6e8ff]"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.name}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.students.join(", ")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="parent" type="update" data={item} />
              <FormModal table="parent" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white h-full rounded-xl p-5 ">
      <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
        <Title
          text="All Parents"
          ele={<SearchBar placeholder="Search from table..." />}
          className="w-10/12"
        />
        <div className="flex items-center justify-center gap-2 w-full md:w-2/12">
          <IconButton
            icon={AdjustmentsHorizontalIcon}
            className="bg-[#ffffa9]"
            size="h-6 w-6"
            onClick={() => {}}
          />
          <IconButton
            icon={ArrowsUpDownIcon}
            className="bg-[#ffffa9]"
            size="h-6 w-6"
            onClick={() => {}}
          />
          {role === "admin" && <FormModal table="parent" type="create" />}
        </div>
      </div>
      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default ParentsListPage;
