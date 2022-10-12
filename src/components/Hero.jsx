import styles from "../style";
import { robot, calender } from "../assets";
import Button from "../components/Button";
import LottieFile from "./LottieFile";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <span className=" flex-1 font-poppins font-semibold ss:text-[40px] text-[20px] text-white ss:leading-[60px] leading-[30px] flex items-center">
              JSPM RSCOE's
            </span>
            <h1 className="text-gradient flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] ss:leading-[100.8px] leading-[75px]">
              E-SUMMIT'22
              <br className="sm:block hidden" />
            </h1>
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
              <p className={`${styles.paragraph} ml-2`}>
                <span className="text-white">
                  The Insurgency of modernization
                </span>{" "}
              </p>
            </div>
            <div className="flex">
              <img src={calender} alt="calender" />
              <h2 className="flex-1 font-poppins font-medium ss:text-[30px] text-[20px] text-white ss:leading-[60px] leading-[30px] ml-5 flex items-center">
                06 to 09 Nov 2022
              </h2>
            </div>
          </div>
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1> */}
        <p className={`${styles.paragraph} max-w-[650px] mt-5`}>
          E-Summit encompasses all aspects of what it takes to nurture
          entrepreneurship spirit, ranging from challenging competitions,
          innovative activities, panel discussions, entrepreneurial lectures,
          and a plethora of events and mentorship to value-adding workshops to
          thought-provoking sessions.
        </p>
        <div className="my-5"></div>
        {/* <Button /> */}
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <LottieFile />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
