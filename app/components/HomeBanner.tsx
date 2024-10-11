import Image from "next/image";
import bannerImage from "./../assets/banner-image.png";

const HomeBanner = () => {
  return (
    <>
      <div className="home-banner bg-gradient-to-r from-sky-500 to-sky-700 w-4/5 mx-auto mt-10 flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="banner-text-content py-12 px-8 text-center mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5">
            Summer Sale
          </h2>
          <p className="text-lg md:text-xl text-white mb-2">
            Enjoy Discount on selected items
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-500">
            GET 50% OFF
          </h2>
        </div>
        <div className="banner-img w-1/3 relative aspect-video mb-4 md:mb-0 md:mr-20">
          <Image
            src={bannerImage}
            alt="banner-img"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
