import HeroImg from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideup } from "../utility/animation";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Text content Section */}
          <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:px-0 md:items-start">
            <motion.h1
              variants={slideup(0.1)}
              initial="initial"
              animate="animate"
              className="text-4xl xl:text-5xl font-bold"
            >
              Bringing Tasty Together, Everywhere! Or Taste the World, Trade
              with a <span className="text-gray-600 underline">smile</span>
            </motion.h1>
            <p>
              Explore diverse flavors, discover new favorites, and join a
              vibrant community that loves good food as much as you do!
            </p>
            <motion.button
              variants={slideup(0.1)}
              initial="initial"
              animate="animate"
              className="primary-btn bg-gray-900 hover:bg-primary duration-300"
            >
              {" "}
              More Details
            </motion.button>
          </div>
          {/* Hero Image Section */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: "easeInOut",
              }}
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
