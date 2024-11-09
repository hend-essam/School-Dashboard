import AnnouncementsSection from "@/app/components/AnnouncementsSection";
import BigCalendar from "@/app/components/BigCalendar";
import Title from "@/app/components/Title";
import Performance from "@/app/components/Performance";
import {
  HeartIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  PhoneIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import FormModal from "@/app/components/FormModal";

const cards = [
  {
    icon: <DocumentCheckIcon className="h-6 w-6" />,
    count: "90%",
    title: "Attendance",
  },
  {
    icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
    count: "2",
    title: "Branches",
  },
  {
    icon: <DocumentTextIcon className="h-6 w-6" />,
    count: "6",
    title: "Lessons",
  },
  {
    icon: <PresentationChartLineIcon className="h-6 w-6" />,
    count: "6",
    title: "Classes",
  },
];

const shortcuts = [
  { href: "/", title: "Teacher's Classes", color: "bg-[#e2f8ff]" },
  { href: "/", title: "Teacher's Students", color: "bg-[#fefce8]" },
  { href: "/", title: "Teacher's Lessons", color: "bg-[#f2f1ff]" },
  { href: "/", title: "Teacher's Exams", color: "bg-[#fdf2fb]" },
  { href: "/", title: "Teacher's Assignments", color: "bg-[#fefce8]" },
];

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 gap-4 flex flex-col xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* user card */}
          <div className="bg-[#C3EBFA] py-6 px-4 rounded-md flex flex-1 gap-4">
            <div className="w-1/3">
              <Image
                src="/user.png"
                priority
                alt=""
                width={144}
                height={144}
                className="rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col gap-2.5 justify-between">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-semibold">Mohamed Ab</h1>
                <FormModal
                  table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "john_doe",
                    teacherId: "1234567890",
                    bloodType: "A+",
                    firstName: "John",
                    password: "hhjck1",
                    lastName: "Doe",
                    email: "john@doe.com",
                    photo:
                      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    phone: "1234567890",
                    subjects: ["Math", "Geometry"],
                    classes: ["1B", "2A", "3C"],
                    address: "123 Main St, Anytown, USA",
                    sex: "male",
                  }}
                />
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                  <HeartIcon className="h-5 w-5" />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                  <CalendarDaysIcon className="h-5 w-5" />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                  <EnvelopeIcon className="h-5 w-5" />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  <span>01015969853</span>
                </div>
              </div>
            </div>
          </div>
          {/* small card */}
          <div className="flex flex-1 gap-4 justify-between flex-wrap">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[47%] xl:[45%] 2xl:[47%]"
              >
                {card.icon}
                <div className="">
                  <h1 className="text-xl font-semibold">{card.count}</h1>
                  <span className="text-sm text-gray-400">{card.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[900px]">
          <Title text="Teacher's Schedule" ele={null} />
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white rounded-md  p-4">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            {shortcuts.map((shortcut) => (
              <Link
                key={shortcut.title}
                href={shortcut.href}
                className={`p-3 rounded-md ${shortcut.color}`}
              >
                {shortcut.title}
              </Link>
            ))}
          </div>
        </div>
        <Performance />
        <AnnouncementsSection className="bg-white p-4 rounded-md" />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
