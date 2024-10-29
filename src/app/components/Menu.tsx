import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  AcademicCapIcon,
  UsersIcon,
  UserGroupIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  BookOpenIcon,
  PencilSquareIcon,
  MegaphoneIcon,
  PercentBadgeIcon,
  CalendarDaysIcon,
  DocumentCheckIcon,
  NewspaperIcon,
  PresentationChartLineIcon,
  DocumentTextIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { role } from "../lib/data";

const menuItems = [
  {
    title: "MENU",
    icon: (
      <ChevronLeftIcon className="h-6 w-6 p-[3px] border-[1px] rounded-[50px] cursor-pointer" />
    ),
    items: [
      {
        icon: <HomeIcon />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AcademicCapIcon />,
        label: "Teachers",
        href: "/list/teacher",
        visible: ["admin", "teacher"],
      },
      {
        icon: <UserGroupIcon />,
        label: "Students",
        href: "/list/student",
        visible: ["admin", "teacher"],
      },
      {
        icon: <UsersIcon />,
        label: "Parents",
        href: "/list/parent",
        visible: ["admin", "teacher"],
      },
      {
        icon: <BookOpenIcon />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <PresentationChartLineIcon />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <DocumentTextIcon />,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <NewspaperIcon />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <PencilSquareIcon />,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <PercentBadgeIcon />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <DocumentCheckIcon />,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <CalendarDaysIcon />,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <ChatBubbleOvalLeftEllipsisIcon />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MegaphoneIcon />,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <UserCircleIcon />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <Cog6ToothIcon />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <ArrowLeftStartOnRectangleIcon />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="text-sm w-[14%] md:w-[8%] lg:w-[14%] bg-[#ffffff9c] lg:p-4 rounded-[50px] lg:rounded-3xl">
      <Logo />
      {menuItems.map((mainItem) => (
        <div className="flex flex-col p-2 lg:p-0 gap-2" key={mainItem.title}>
          <span className="hidden lg:flex justify-between items-center text-gray-400 font-light my-4">
            {mainItem.title}
            {mainItem.icon}
          </span>
          {mainItem.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href.replace("/list", "")}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 p-2 rounded-xl hover:bg-[#c9c9c9a1]"
                >
                  <div className="h-6 w-6">{item.icon}</div>
                  {/* {React.cloneElement(item.icon as React.ReactElement, {
                    className: "h-6 w-6",
                  })} */}
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
