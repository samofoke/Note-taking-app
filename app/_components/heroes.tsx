import Image from "next/image";

const HeroesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] dm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            fill
            src="/space1.png"
            alt="space-man"
            className="object-contain"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            fill
            className="object-contain"
            src="/space2.png"
            alt="space-suit"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroesSection;
