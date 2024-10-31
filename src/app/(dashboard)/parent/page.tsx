import AnnouncementsSection from "@/app/components/AnnouncementsSection";
import BigCalendar from "@/app/components/BigCalendar";
import Title from "@/app/components/Title";

const ParentPage = () => {
  return (
    <div className="p-0 flex gap-4 flex-col lg:flex-row flex-1">
      <div className="w-full min-h-[900px] flex flex-col gap-4 bg-white p-3 rounded-2xl">
        <Title text="Schedule (Mohamed)" ele={<></>} />
        <BigCalendar />
      </div>
      <div
        className="min-w-80 rounded-2xl h-fit px-1"
        style={{ boxShadow: "0 0 10px 10px #cfcfcfd9" }}
      >
        <AnnouncementsSection />
      </div>
    </div>
  );
};

export default ParentPage;
