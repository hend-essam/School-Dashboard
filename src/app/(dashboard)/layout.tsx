import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="flex flex-col gap-5 p-4"
      style={{
        background:
          "linear-gradient(151deg, rgba(212,218,233,1) 0%, rgba(240,232,213,1) 99%)",
      }}
    >
      <div className="flex">
        {/* left */}
        <Menu />
        {/* right */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] p-[20px] flex flex-col gap-5">
          <Navbar />
          {children && children}
        </div>
      </div>
    </div>
  );
}
