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
import { eventsData, role } from "@/app/lib/data";
import Link from "next/link";
import { Event } from "@/types/interfaces";

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const EventsListPage = () => {
  const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#d6e8ff]"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`list/teachers/${item.id}`}>
            <IconButton
              icon={PencilSquareIcon}
              className="bg-[#c4cfff]"
              color="text-white"
              onClick={() => {}}
            />
          </Link>
          {role === "admin" && (
            <IconButton
              icon={TrashIcon}
              className="bg-[#ebcdb8]"
              color="text-white"
              onClick={() => {}}
            />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white h-full rounded-xl p-5 ">
      <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
        <Title
          text="All Events"
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
          <IconButton
            icon={PlusIcon}
            className="bg-[#ffffa9]"
            size="h-6 w-6"
            onClick={() => {}}
          />
        </div>
      </div>
      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default EventsListPage;