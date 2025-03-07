import Image from "next/image";

export default function SkillPage() {
  const skills = [
    { src: "/images/css-3.svg", name: "CSS" },
    { src: "/images/html-5.svg", name: "HTML" },
    { src: "/images/js.svg", name: "JavaScript" },
    { src: "/images/dart.svg", name: "Dart" },
  ];

  const frameworks = [
    { src: "/images/flutter.svg", name: "Flutter" },
    { src: "/images/tailwind.svg", name: "Tailwind CSS" },
    { src: "/images/nextjs.svg", name: "Next.js" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">SKILLS</h1>

      <div className="flex gap-20 mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-125 hover:text-4xl cursor-pointer"
          >
            <Image
              width={60}
              height={60}
              alt={skill.name}
              className="transition-transform"
              src={skill.src}
            />
            <p className="mt-2 text-sm font-bold transition-all">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="mt-20 text-3xl font-bold text-center text-white italic">
          Frameworks
        </h2>
        <hr className="h-0.5 w-full bg-white mt-2 px-2 pt-0" />
      </div>
      <div className="flex gap-20 mt-10">
        {frameworks.map((framework, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-125 hover:text-4xl cursor-pointer"
          >
            <Image
              width={60}
              height={60}
              alt={framework.name}
              className=" transition-transform"
              src={framework.src}
            />
            <p className="mt-2 text-sm font-bold transition-all">
              {framework.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
