import SimpleCard from "./SimpleCard";
import Title from "./Title";

const Announcements = [
  {
    title: "Announcement",
    time: "2002/2/8",
    content: "content, Lorem ipsum dolor sit amet",
    bgColor: "bg-[#f2f1ff]",
  },
  {
    title: "Announcement",
    time: "2002/2/8",
    content: "content, Lorem ipsum dolor sit amet",
    bgColor: "bg-[#fdf2fb]",
  },
  {
    title: "Announcement",
    time: "2002/2/8",
    content: "content, Lorem ipsum dolor sit amet",
    bgColor: "bg-[#fefce8]",
  },
];

const AnnouncementsSection = ({
  className,
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className={`p-2.5 ${className}`} style={style}>
      <div className="flex flex-col gap-3 flex-1 p-3 pb-4 lg:px-0 lg:pt-0 w-full">
        <Title
          text="Announcements"
          ele={<span className="text-gray-400 text-sm">View All</span>}
        />
        {Announcements.map((announcement, index) => (
          <SimpleCard
            key={index}
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
