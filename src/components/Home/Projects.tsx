import { ProjectTabs } from "@/components/ProjectTab";

export function Projects() {
  return (
    <div className="px-28 py-16 flex flex-col items-center justify-center gap-8">
      <p className="font-semibold text-6xl font-poppins leading-10">
        My Projects
      </p>
      <div className="w-[932px] text-xl leading-[31px] text-center">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </div>
      <ProjectTabs />
    </div>
  );
}
