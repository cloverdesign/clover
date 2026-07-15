import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's work together. Email Clover at cloverdesignhq@gmail.com.",
};

export default function Contact() {
  return (
    <section className="p-10 m-5 lg:m-20 mt-[150px] h-[300px] lg:h-[500px] flex flex-col items-center justify-center bg-green-500 rounded-xl text-black">
      <div className="space-y-8">
        <h1 className="leading-none text-4xl md:text-6xl lg:text-8xl">
          Let&apos;s work <br /> together
        </h1>
        <span className="flex flex-col md:flex-row md:items-center gap-5">
          <p className="lg:text-xl font-thin">Email us at</p>
          <a
            href="mailto:cloverdesignhq@gmail.com"
            className="bg-black text-green-500 py-2 px-6 rounded-lg text-base lg:text-2xl"
          >
            cloverdesignhq@gmail.com
          </a>
        </span>
      </div>
    </section>
  );
}
