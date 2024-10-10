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
      },
      {
        icon: <AcademicCapIcon />,
        label: "Teachers",
        href: "/teacher",
      },
      {
        icon: <UserGroupIcon />,
        label: "Students",
        href: "/student",
      },
      {
        icon: <UsersIcon />,
        label: "Parents",
        href: "/parent",
      },
      {
        icon: <BookOpenIcon />,
        label: "Subjects",
        href: "/subjects",
      },
      {
        icon: <PresentationChartLineIcon />,
        label: "Classes",
        href: "/classes",
      },
      {
        icon: <DocumentTextIcon />,
        label: "Lessons",
        href: "/lessons",
      },
      {
        icon: <NewspaperIcon />,
        label: "Exams",
        href: "/exams",
      },
      {
        icon: <PencilSquareIcon />,
        label: "Assignments",
        href: "/assignments",
      },
      {
        icon: <PercentBadgeIcon />,
        label: "Results",
        href: "/results",
      },
      {
        icon: <DocumentCheckIcon />,
        label: "Attendance",
        href: "/attendance",
      },
      {
        icon: <CalendarDaysIcon />,
        label: "Events",
        href: "/events",
      },
      {
        icon: <ChatBubbleOvalLeftEllipsisIcon />,
        label: "Messages",
        href: "/messages",
      },
      {
        icon: <MegaphoneIcon />,
        label: "Announcements",
        href: "/announcements",
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
      },
      {
        icon: <Cog6ToothIcon />,
        label: "Settings",
        href: "/settings",
      },
      {
        icon: <ArrowLeftStartOnRectangleIcon />,
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="text-sm w-[14%] md:w-[8%] lg:w-[18%] xl:w-[14%] bg-[#ffffff9c] p-4 rounded-[50px] lg:rounded-3xl">
      <Logo />
      {menuItems.map((mainItem) => (
        <div className="flex flex-col gap-2" key={mainItem.title}>
          <span className="hidden lg:flex justify-between items-center text-gray-400 font-light my-4">
            {mainItem.title}
            {mainItem.icon}
          </span>
          {mainItem.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
            >
              <div className="h-6 w-6">{item.icon}</div>
              {/* {React.cloneElement(item.icon as React.ReactElement, {
                className: "h-6 w-6",
              })} */}
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
