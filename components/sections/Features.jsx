import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Agility",
    description: "Ability to quickly adapt to market changes and regulations.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Reliability",
    description:
      "Consistent and dependable in meeting delivery schedules and quality standards.",
    icon: LockClosedIcon,
  },
  {
    name: "Network",
    description:
      "Strong connections with suppliers, buyers, and logistics partners globally.",
    icon: ArrowPathIcon,
  },
  {
    name: "Compliance",
    description:
      "Thorough understanding and adherence to international trade regulations and customs procedures.",
    icon: FingerPrintIcon,
  },
];

const Features = () => {
  return (
    <section className="pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">
          What We Offer
        </h2>

        <div className="flex flex-col">
          <div className="mx-auto max-w-7xl text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              Seamless Global Trade Solutions for Your Business Growth.
            </p>
            <p className="mt-6 text-lg leading-8 text-black dark:text-white">
              At Element x trade, we deliver efficient and reliable
              import-export services tailored to your needs. Our expertise and
              global network ensure smooth operations and competitive advantages
              for your business.
            </p>
          </div>
        </div>

        {/** offers lists */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div 
              className="relative hover:scale-110 transition-all "
              key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-muted-foreground justify-center">
                  <div className="flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center">
                    <feature.icon
                      className="h-[36px] w-[36px] text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-black dark:text-white">{feature.name}</div>
                </dt>
                <dd className="mt-2 text-base leading-7 ">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
