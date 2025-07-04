import HeroImg from "../../assets/1.png";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Text content Section */}
          <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:px-0 md:items-start">
            <h1 className="text-4xl xl:text-5xl font-bold">
              Bringing Tasty Together, Everywhere! Or Taste the World, Trade
              with a <span className="text-gray-600 underline">smile</span>
            </h1>
            <p>
              Explore diverse flavors, discover new favorites, and join a
              vibrant community that loves good food as much as you do!
            </p>
            <button className="primary-btn bg-gray-900 hover:bg-primary duration-300">
              {" "}
              More Details
            </button>
          </div>
          {/* Hero Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={HeroImg}
              alt=""
              className="w-[80%] md:w-[550px] xl:w-[600px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
