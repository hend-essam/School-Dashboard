import EventCalendar from "@/app/components/EventCalendar";
import AnnouncementsSection from "@/app/components/AnnouncementsSection";
import BigCalendar from "@/app/components/BigCalendar";
import Title from "@/app/components/Title";

const StudentPage = () => {
  return (
    <div className="p-0 flex gap-4 flex-col lg:flex-row">
      <div className="w-full min-h-[900px] flex flex-col gap-4 bg-white p-3 rounded-2xl">
        <Title text="Schedule (4A)" ele={<></>} />
        <BigCalendar />
      </div>
      <div
        className="flex flex-col gap-4 h-full rounded-[35px]"
        style={{ boxShadow: "0 0 10px 10px #cfcfcfd9" }}
      >
        <EventCalendar />
        <span className="border-dotted border-t-4 border-white"></span>
        <AnnouncementsSection />
      </div>
    </div>
  );
};

export default StudentPage;
