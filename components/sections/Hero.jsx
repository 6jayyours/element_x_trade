import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

//react icons import
import { RiMenFill, RiBookmark3Fill, RiBodyScanFill, RiServerFill } from "react-icons/ri";

//import components
import Socials from "./Socials";
import HeroImg from "./HeroImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[auto] bg-bottom">
      <div className="container mx-auto ">
        <div className="flex justify-between gap-x-8">
          {/**left side content */}
          <div className="flex max-w-[800px] flex-col justify-center mx-xuto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Element x trade
            </div>
            <h1 className="h1 uppercase">let's make a magic!</h1>
            <p className="subtitle mx-w-[590px] mt-4 mx-auto xl:mx-0">
            At Element x trade, we deliver efficient and reliable
              import-export services tailored to your needs. Our expertise and
              global network ensure smooth operations and competitive advantages
              for your business.
            </p>

            {/** subscribe button*/}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <div className="flex w-full gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email Address
                </label>
                <Input type="email" id="email" placeholder="Email" />
                <Link href="/bid">
                  <Button className="gap-x-2 bg-black">
                    Request a Quote <RiMenFill size={18} />
                  </Button>
                </Link>
              </div>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/**banner image */}
          <div className="hidden xl:flex relative">
            <HeroImg
              imgSrc="/shipping.png"
              containerStyles="w-[550px] h-[475px] bg-no-repeat relative bg-bottom"
            />
          </div>
        </div>
        {/** badge section*/}
        <div className=" sm:py-32 mt-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 ">
              {/**Badge 1 */}
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">Years of Experience</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <Badge
                  icon={<RiBookmark3Fill />}
                  endCountNum={12}
                  endCountText='+'
                  />
                </dd>
              </div>

              {/**Badge 2 */}
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">Followers</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <Badge
                  icon={<RiBodyScanFill />}
                  endCountNum={915}
                  endCountText='K'
                  />
                </dd>
              </div>

               {/**Badge 3 */}
               <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">Bids</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <Badge
                  icon={<RiServerFill />}
                  endCountNum={200}
                  endCountText='+'
                  />
                </dd>
              </div>

            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
