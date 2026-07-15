import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WorkData as works } from "@/data/worksdata";
import Magnetic from "@/animations/magnetic";
import * as HeroIcons from "react-icons/hi";

export function generateStaticParams() {
  return works.map((work) => ({ id: work.workTitle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = works.find((work) => work.workTitle === id);

  if (!project) {
    return { title: "Work not found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function Work({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const currentProject = works.find((work) => work.workTitle === id);

  if (!currentProject) {
    notFound();
  }

  const pictures = currentProject.pictures.map((picture, index) => {
    const item = picture.includes(".mp4") ? (
      <video
        src={picture}
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      />
    ) : (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        loading="lazy"
        src={picture}
        alt={currentProject.title}
        className="h-full w-full object-cover"
      />
    );

    return (
      <li key={index} className="rounded-lg overflow-hidden">
        {item}
      </li>
    );
  });

  const nextProject = works[currentProject.id + 1];

  return (
    <section className="w-[100vw] pt-[50px] lg:pt-0 space-y-8 relative">
      <div
        className="w-full h-[200px] lg:h-[400px]"
        style={{
          backgroundImage: `url(${currentProject.header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-full p-10 flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8">
        <div className="flex flex-col gap-4">
          <h1>{currentProject.title}</h1>
          <ul className="text-xl text-grey">
            {currentProject.categories.map((category, index) => (
              <li className="hover:text-green-500" key={index}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <p className="lg:text-xl font-thin text-grey">
          {currentProject.description}
        </p>
      </div>
      <ul className="grid grid-cols-1 px-3 lg:px-0 lg:grid-cols-2 gap-3">
        {pictures}
      </ul>
      <div className="p-2 bg-black sticky bottom-0 text-white grid grid-cols-3 justify-center items-center">
        <Magnetic>
          <Link
            className="flex gap-2 items-center text-xs lg:text-base"
            href={"/works"}
          >
            <HeroIcons.HiArrowLeft /> our work
          </Link>
        </Magnetic>
        <h3 className="place-self-center text-xs lg:text-base">
          {currentProject.title}
        </h3>
        {nextProject ? (
          <Magnetic>
            <Link
              className="flex gap-2 items-center text-xs lg:text-base justify-self-end"
              href={"/works/" + nextProject.workTitle}
            >
              {nextProject.workTitle} <HeroIcons.HiArrowRight />{" "}
            </Link>
          </Magnetic>
        ) : null}
      </div>
    </section>
  );
}
