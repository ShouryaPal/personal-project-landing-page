import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <>
      <div className="w-full pt-20 pb-12  bg-[#F8F8F8]">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-4">
            <Icons.logo width={60} height={60} />
            <span className="text-5xl leading-[58.51px] font-montserrat">
              <strong className="font-bold">M</strong>umair
            </span>
          </div>
          <div className="flex items-center gap-0">
            <Button
              variant={"link"}
              className="font-poppins text-xl leading-[31.5px]"
            >
              Home
            </Button>
            <Button
              variant={"link"}
              className="font-poppins text-xl leading-[31.5px]"
            >
              About Me
            </Button>
            <Button
              variant={"link"}
              className="font-poppins text-xl leading-[31.5px]"
            >
              Services
            </Button>
            <Button
              variant={"link"}
              className="font-poppins text-xl leading-[31.5px]"
            >
              Projects
            </Button>
            <Button
              variant={"link"}
              className="font-poppins text-xl leading-[31.5px]"
            >
              Testimonials
            </Button>
            <Button
              variant={"link"}
              className="font-poppins text-xl leading-[31.5px]"
            >
              Contact
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Icons.facebook width={33} height={33} />
            <Icons.twitter width={33} height={33} />
            <Icons.instagram width={33} height={33} />
            <Icons.linkedin width={33} height={33} />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-4 bg-[#545454]">
        <span className="font-poppins text-xl text-[#FFFFFF]">
          © 2023{" "}
          <strong className="font-bold font-poppins text-[#FD6F00]">
            Mumair
          </strong>{" "}
          All Rights Reserved , Inc.
        </span>
      </div>
    </>
  );
}