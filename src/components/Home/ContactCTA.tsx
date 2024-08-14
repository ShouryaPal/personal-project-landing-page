import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactCTA() {
  return (
    <div className="px-28 py-16 flex flex-col items-center justify-center gap-8">
      <p className="font-semibold font-poppins text-6xl">
        Lets Design Together
      </p>
      <span className="text-center text-xl leading-8 font-poppins w-[932px]">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </span>
      <div className="flex items-center gap-4">
        <Input
          className="bg-[#F8F8F8] text-xl placeholder:text-[#797979] rounded-lg p-4 font-poppins"
          placeholder="Enter Your Email"
        />
        <Button className="bg-[#FD6F00] text-xl font-poppins">
          Contact Me{" "}
        </Button>
      </div>
    </div>
  );
}
