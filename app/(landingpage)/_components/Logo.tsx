import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        alt="logo"
        height="50"
        width="50"
        src="/logo-black-transparent.png"
        className="dark:hidden"
      />
      <Image
        alt="logo"
        height="50"
        width="50"
        src="/logo-white-transparent.png"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>Motion</p>
    </div>
  );
};

export default Logo;
