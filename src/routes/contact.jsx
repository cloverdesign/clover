export const Contact = () => {
  return (
    <section className="p-10 m-20 mt-[150px] h-[500px] flex flex-col items-center justify-center bg-green-500 rounded-xl text-black">
      <div className="space-y-8">
        <h1 className="leading-none text-8xl">
          Let's work <br /> together
        </h1>
        <span className="flex items-center gap-5">
          <p className="text-xl font-thin">Email us at</p>
          <a
            href="mailto:cloverdesignhq@gmail.com"
            className="bg-black text-green-500 py-2 px-6 rounded-lg text-xl lg:text-2xl"
          >
            cloverdesignhq@gmail.com
          </a>
        </span>
      </div>
    </section>
  );
};
