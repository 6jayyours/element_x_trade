import {
  RiRidingFill,
  RiSendPlaneFill,
  RiStarHalfSFill,
  RiUserHeartFill,
  RiVidiconFill,
  RiVipCrown2Fill,
} from "react-icons/ri";
import HeroImg from "@/components/sections/HeroImg";

const infoData = [
  {
    icon: <RiUserHeartFill size={20} />,
    text: "Mr Akshay PM",
  },
  {
    icon: <RiSendPlaneFill size={20} />,
    text: "+91 666 666 6666",
  },
  {
    icon: <RiVidiconFill size={20} />,
    text: "jango@gmail.com",
  },
  {
    icon: <RiVipCrown2Fill size={20} />,
    text: "10 10 2024",
  },
  {
    icon: <RiStarHalfSFill size={20} />,
    text: "Master Degree",
  },
  {
    icon: <RiRidingFill size={20} />,
    text: "Taverekare, madiwala bangaluru",
  },
];

const About = () => {
  return (
    <section className="pb-12 min-h-screen xl:py-10">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Meet Us
        </h2>

        <div className="flex flex-col xl:flex-row ">
          {/** Image */}
          <div className="relative flex-1 xl:flex">
            <HeroImg
              containerStyles="w-[450px] h-[450px] lg:w-[505px] lg:h-[505px] bg-no-repeat relative"
              imgSrc="/shipping.jpg"
            />
          </div>

          <div className="flex-1 ">
            {/**Content */}
            <div className="text-lg mt-1 xl:mt-1">
              <div className="text-center xl:text-left">
                <h3 className="h3 mb-4">
                  Innovative Solutions for Seamless Global Trade
                </h3>
                <p className="subtitle mx-w-xl mx-auto xl:mx-0">
                  Our mission is to seamlessly connect global markets through
                  exceptional import-export solutions. We are dedicated to
                  providing reliable, efficient, and innovative services that
                  drive international trade and foster long-term partnerships.
                </p>
                <p className="subtitle mx-w-xl mx-auto xl:mx-0">
                  Our commitment to integrity, excellence, and customer
                  satisfaction ensures that we deliver superior value and create
                  opportunities for growth in every transaction.
                </p>

                {/** Icons */}
                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                  {infoData.map((item, index) => {
                    return (
                      <div 
                      className="flex items-center gap-x-4 mx-auto xl:mx-0"
                      key={index}>
                        <div className="text-primary">{item.icon}</div>
                        <div>{item.text}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
