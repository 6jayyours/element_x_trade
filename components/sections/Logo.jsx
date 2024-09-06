import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex gap-x-3">
      <Link href="/">
        <Image src="/logo.svg" width={55} height={55} priority alt="" />
      </Link>
      <div className="text-3xl uppercase font-extrabold mb-4 text-primary tracking-[4px] mt-2">
          BRODMARGA
        </div>
    </div>
  );
};

export default Logo;
