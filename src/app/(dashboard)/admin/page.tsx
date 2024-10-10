import CountChart from "@/app/components/CountChart";
import UserCard from "@/app/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-5 flex gap-4 flex-col">
      <div className="flex flex-col md:flex-row">
        {/* left */}
        <div className="w-full lg:w-2/3 flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* right */}
        <div className="w-full lg:w-1/3">right</div>
      </div>
      <div>
        <CountChart />
      </div>
    </div>
  );
};

export default AdminPage;
