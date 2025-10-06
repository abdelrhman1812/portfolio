import Image from "next/image";
const HeroImage = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/Images/profile.jpeg"
        alt="Abdelrhman"
        width={600}
        height={800}
        className="rounded-2xl"
        priority
        loading="eager"
      />
    </div>
  );
};

export default HeroImage;
