import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Icons } from "@/components/Icons";

export function Hero() {
  return (
    <div className="px-28 flex items-center justify-between w-full">
      <div className="flex flex-col gap-3 pt-8">
        <p className="font-semibold text-2xl font-poppins">Hi I am</p>
        <p className="font-semibold text-3xl text-[#FD6F00] font-poppins">
          Muhammad Umair
        </p>
        <p className="font-bold text-8xl text-[#000000] font-poppins">
          UI & UX
        </p>
        <p className="font-bold text-8xl text-[#000000] font-poppins pl-48">
          Designer{" "}
        </p>
        <span className="text-xl font-poppins w-[698px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </span>
        <Button
          variant={"default"}
          className="font-poppins text-xl bg-[#FD6F00] text-white leading-[31.5px] w-44 h-12"
        >
          Hire Me
        </Button>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Image
          src="/Img1.svg"
          alt="Your SVG Description"
          width={538}
          height={617.24}
        />
        <div className="flex items-center gap-4">
          <Icons.facebook width={33} height={33} />
          <Icons.twitter width={33} height={33} />
          <Icons.instagram width={33} height={33} />
          <Icons.linkedin width={33} height={33} />
        </div>
      </div>
    </div>
  );
}
