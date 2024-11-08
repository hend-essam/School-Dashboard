"use client";
import Pagination from "@/app/components/Pagination";
import SearchBar from "@/app/components/SearchBar";
import Table from "@/app/components/Table";
import Title from "@/app/components/Title";
import {
  AdjustmentsHorizontalIcon,
  ArrowsUpDownIcon,
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import IconButton from "@/app/components/IconButton";
import { subjectsData, role } from "@/app/lib/data";
import Link from "next/link";
import { Subject } from "@/types/interfaces";
import FormModal from "@/app/components/FormModal";

const columns = [
  {
    header: "Subject Names",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const SubjectsListPage = () => {
  const renderRow = (item: Subject) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#d6e8ff]"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.teachers.join(", ")}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="subject" type="update" data={item} />
              <FormModal table="subject" type="delete" id={item.id} />
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
          text="All Subjects"
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
          {role === "admin" && <FormModal table="subject" type="create" />}
        </div>
      </div>
      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default SubjectsListPage;
