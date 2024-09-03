import Banner from "../../../src/assets/images/Banner.png";

const HeroSection = () => {
  return (
    <div className="bg-white py-16 mx-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Large Banner with Heading and Description */}
        <div className="w-full lg:w-2/3 lg:pr-1 relative overflow-hidden rounded-1x1 hover:shadow-lg cursor-pointer">
          <div className="banner-content relative group">
            <img
              src={Banner}
              alt="Large Banner"
              className="w-full h-auto lg:h-[650px] rounded-2xl"
            />
          </div>
        </div>

        {/* Two Vertical Banners with Hover Effect */}
        <div className="w-full lg:w-1/3 lg:pl-6 mt-6 lg:mt-0">
          <div className="banner vertical-banner relative overflow-hidden rounded-2xl shadow-md mb-6 group hover:shadow-lg cursor-pointer">
            <img
              src="https://static.wixstatic.com/media/43061b_816e6a0068024c0c9f7f3acec22361a4~mv2.png/v1/fit/w_2500,h_1330,al_c/43061b_816e6a0068024c0c9f7f3acec22361a4~mv2.png"
              alt="Vertical Banner 1"
              className="w-full h-full rounded-2xl"
            />
          </div>
          <div className="banner vertical-banner relative overflow-hidden rounded-lg shadow-md group hover:shadow-lg cursor-pointer">
            <img
              src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11435/b3c65ed2-1c85-4f8f-9bd0-b3503d592ffe.jpg"
              alt="Vertical Banner 2"
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
