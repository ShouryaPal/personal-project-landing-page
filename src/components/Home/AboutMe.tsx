import Image from "next/image";
import { SkillSlider } from "@/components/ui/SkillSlider";

export function AboutMe() {
  return (
    <div className="px-28 py-16 flex items-center justify-between w-full">
      <Image src="/Img2.svg" alt="second-image" width={681} height={675} />
      <div className="flex flex-col gap-6 items-start w-[753px]">
        <p className="text-6xl font-poppins font-semibold">About Me </p>
        <span className="text-xl font-poppins leading-8">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </span>
        <div className="w-full space-y-6">
          <SkillSlider label="UX" value={90} />
          <SkillSlider label="Website Design" value={85} />
          <SkillSlider label="App Design" value={95} />
          <SkillSlider label="Graphic Design" value={80} />
        </div>
      </div>
    </div>
  );
}
