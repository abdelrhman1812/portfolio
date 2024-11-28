import Abdelrhman from "../../assets/Images/Abdelrhman.png";

const HeroImage = ({ imageRef }) => {
  return (
    <>
      <div className="col-lg-6" ref={imageRef}>
        <div className="hero-image position-relative ps-2">
          <div className="image-wrapper position-relative overflow-hidden">
            <img
              src={Abdelrhman}
              className="w-100 h-auto d-block "
              alt="Abdelrhman"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
