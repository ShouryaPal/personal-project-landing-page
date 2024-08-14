import Image from "next/image";

export function Services() {
  return (
    <div className="px-28 py-16 flex flex-col items-center justify-center gap-8">
      <p className="font-semibold text-6xl font-poppins leading-10">Services</p>
      <div className="w-[932px] text-xl leading-[31px] text-center">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </div>

      <div className="flex items-stretch justify-between gap-6 w-full">
        {[
          { src: "/first.svg", title: "UI/UX" },
          { src: "/two.svg", title: "Web Design" },
          { src: "/three.svg", title: "App Design" },
          { src: "/fourth.svg", title: "Graphic Design" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex-1 p-6 flex flex-col gap-4 bg-[#F8F8F8] rounded-md"
          >
            <div className="w-[70px] h-[70px] relative">
              <Image
                src={item.src}
                alt={item.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="font-semibold text-2xl font-poppins">{item.title}</p>
            <p className="text-lg leading-7 font-poppins">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
