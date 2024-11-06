import AnnouncementsSection from "@/app/components/AnnouncementsSection";
import AttendanceChart from "@/app/components/AttendanceChart";
import CountChart from "@/app/components/CountChart";
import EventCalendar from "@/app/components/EventCalendar";
import FinanceChart from "@/app/components/FinanceChart";
import UserCard from "@/app/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-0 flex gap-4 flex-col lg:flex-row">
      <div className="flex flex-col gap-5 w-full lg:w-[70%]">
        {/* left */}
        <div className="w-full flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          <CountChart />
          <AttendanceChart />
        </div>
        <FinanceChart />
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

export default AdminPage;
