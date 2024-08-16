import Elements from "@/components/sections/Elements";
import Faq from "@/components/sections/Faq";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import NewsLetter from "@/components/sections/NewsLetter";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Process />
      <Elements />
      <Faq />
      <NewsLetter />
    </main>
  );
}
