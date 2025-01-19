import infoData from "@/data/mock-info-data";

const InfoSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 mt-20">
      {infoData.map((info) => (
        <div
          key={info.title}
          className="flex flex-col items-center text-center"
        >
          {info.icon}
          <h3 className="font-bold text-xl text-foreground">{info.title}</h3>
          <p className="text-muted-foreground">{info.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
