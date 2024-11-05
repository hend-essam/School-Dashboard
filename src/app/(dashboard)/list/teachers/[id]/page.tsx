import {
  HeartIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 gap-4 flex flex-col xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* user card */}
          <div className="bg-blue-200 py-6 px-4 rounded-md flex flex-1 gap-4">
            <div className="w-1/3">
              <Image
                src="/user.png"
                alt=""
                width={144}
                height={144}
                className="rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col gap-4 justify-between">
              <h1 className="text-xl font-semibold">Mohamed Abd-Almonem</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <HeartIcon className="h-5 w-5" />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <CalendarDaysIcon className="h-5 w-5" />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <EnvelopeIcon className="h-5 w-5" />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  <span>01015969853</span>
                </div>
              </div>
            </div>
          </div>
          {/* small card */}
          <div className="flex-1"></div>
        </div>
        {/* bottom */}
        <div>Schedule</div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3">r</div>
    </div>
  );
};

export default SingleTeacherPage;
