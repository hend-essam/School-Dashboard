import SimpleCard from "./SimpleCard";
import Title from "./Title";

const Announcements = [
  {
    title: "Announcement",
    time: "2002/2/8",
    content: "content, Lorem ipsum dolor sit amet",
    bgColor: /* "bg-[#c9c9c9a1]" */ "bg-[#f2f1ff]",
  },
  {
    title: "Announcement",
    time: "2002/2/8",
    content: "content, Lorem ipsum dolor sit amet",
    bgColor: /* "bg-[#ebcdb8a6]" */ "bg-[#fdf2fb]",
  },
  {
    title: "Announcement",
    time: "2002/2/8",
    content: "content, Lorem ipsum dolor sit amet",
    bgColor: /* "bg-[#f5f5dc]" */ "bg-[#fefce8]",
  },
];

const AnnouncementsSection = () => {
  return (
    <div
      className="rounded-b-[35px] p-2.5 h-full"
      style={{ boxShadow: "0 0 10px 10px #cfcfcfd9" }}
    >
      <div className="flex flex-col gap-2 flex-1 p-3 pb-4 lg:px-0 lg:pt-0 w-full">
        <Title
          text="Announcements"
          ele={<span className="text-gray-400 text-sm">View All</span>}
        />
        {Announcements.map((announcement) => (
          <SimpleCard
            title={announcement.title}
            time={announcement.time}
            content={announcement.content}
            bgColor={announcement.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsSection;
