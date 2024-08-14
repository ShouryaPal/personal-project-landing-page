import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className="px-28 py-8 flex items-center gap-16 justify-between w-full">
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
        <Button
          variant={"default"}
          className="font-poppins text-xl bg-[#FD6F00] text-white leading-[31.5px]"
        >
          Download CV
        </Button>
      </div>
    </div>
  );
}
