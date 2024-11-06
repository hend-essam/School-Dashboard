import EventCalendar from "@/app/components/EventCalendar";
import AnnouncementsSection from "@/app/components/AnnouncementsSection";
import BigCalendar from "@/app/components/BigCalendar";
import Title from "@/app/components/Title";

const StudentPage = () => {
  return (
    <div className="p-0 flex gap-4 flex-col lg:flex-row">
      <div className="w-full min-h-[900px] flex flex-col gap-4 bg-white p-3 rounded-2xl">
        <Title text="Schedule (4A)" ele={null} />
        <BigCalendar />
      </div>
      <div className="flex flex-col gap-4 h-full rounded-[35px]">
        <EventCalendar
          className="rounded-t-[35px]"
          style={{ boxShadow: "0 0 10px 10px #cfcfcfd9" }}
        />
        <AnnouncementsSection
          className="rounded-b-[35px]"
          style={{ boxShadow: "0 0 10px 10px #cfcfcfd9" }}
        />
      </div>
    </div>
  );
};

export default StudentPage;
