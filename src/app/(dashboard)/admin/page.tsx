import AttendanceChart from "@/app/components/AttendanceChart";
import CountChart from "@/app/components/CountChart";
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
      </div>
      <div className="h-full w-full lg:w-[30%] bg-white">right</div>
    </div>
  );
};

export default AdminPage;
