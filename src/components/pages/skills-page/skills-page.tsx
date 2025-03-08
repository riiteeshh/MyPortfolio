import Image from "next/image";

export default function SkillPage() {
  const skills = [
    { src: "/images/flutter.svg", name: "Flutter" },
    { src: "/images/nextjs.svg", name: "Next.js" },
    { src: "/images/html-5.svg", name: "HTML" },
    { src: "/images/css-3.svg", name: "CSS" },
    { src: "/images/js.svg", name: "JavaScript" },
    { src: "/images/dart.svg", name: "Dart" },
    { src: "/images/python.svg", name: "Python" },
    { src: "/images/c.svg", name: "C" },
    { src: "/images/c++.svg", name: "C++" },
    { src: "/images/tailwind.svg", name: "Tailwind CSS" },
    { src: "/images/bloc.svg", name: "Bloc" },
    { src: "/images/git.svg", name: "Git" },
    { src: "/images/github.svg", name: "Github" },
    { src: "/images/android-studio.svg", name: "Android Studio" },
    { src: "/images/docker.svg", name: "Docker" },
    { src: "/images/firebase.svg", name: "Firebase" },
    { src: "/images/jira.svg", name: "Jira" },
    { src: "/images/figma.svg", name: "Figma" },
    { src: "/images/confluence.svg", name: "Confluence" },
    { src: "/images/linux.svg", name: "Linux" },
    { src: "/images/vs-code.svg", name: "VS Code" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-3xl md:text-3xl font-extrabold  text-center mb-4">
        SKILLS
      </h1>

      <div className="flex gap-10 mt-10 max-w-5xl flex-wrap items-center justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center  cursor-pointer motion-safe:hover:scale-125 motion-safe:hover:text-4xl transition-all"
          >
            <Image
              width={80}
              height={80}
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
    </div>
  );
}
