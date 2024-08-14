import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const projects = [
  {
    category: "Web Design",
    title: "AirCalling Landing Page Design",
    image: "/aircalling.png",
  },
  {
    category: "Web Design",
    title: "Business Landing Page Design",
    image: "/busin.svg",
  },
  {
    category: "Web Design",
    title: "Ecom Web Page Design",
    image: "/ecom.png",
  },
];

export function ProjectTabs() {
  const categories = [
    "All",
    "UI/UX",
    "Web Design",
    "App Design",
    "Graphic Design",
  ];

  return (
    <Tabs defaultValue="All" className="w-full">
      <TabsList className="flex justify-center space-x-2 mb-8 bg-transparent">
        {categories.map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            className="px-4 py-2 rounded-lg bg-[#F8F8F8] text-gray-800 border border-gray-300 data-[state=active]:bg-[#FD6F00] data-[state=active]:text-white data-[state=active]:border-[#FD6F00]"
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => (
        <TabsContent key={category} value={category}>
          <div className="grid grid-cols-3 gap-8">
            {projects
              .filter(
                (project) => category === "All" || project.category === category
              )
              .map((project, index) => (
                <div key={index} className="flex flex-col">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <p className="text-[#FD6F00] text-sm mt-2 font-poppins">
                    {project.category}
                  </p>
                  <h3 className="text-black text-lg font-semibold font-poppins">
                    {project.title}
                  </h3>
                </div>
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
