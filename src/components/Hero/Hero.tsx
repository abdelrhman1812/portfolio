import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-background min-h-screen flex items-center py-20 "
    >
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <HeroText />
          <SocialLinks />
        </div>
        <HeroImage />
      </div>
    </section>
  );
}
