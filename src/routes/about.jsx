import { Link } from "react-router-dom";
// import { PictureHeader } from "../components/about/pictureheader"
import { ServicesData as services } from "../data/servicesdata";
import { TeamData as team } from "../data/teamData";

export const About = () => {
  return (
    <div className="pt-[150px] px-10">
      {/* Might not add this, need to fix the jitter on the marquee */}
      {/* <PictureHeader /> */}

      <section className="relative w-fit group">
        <a
          href="#who"
          className="bg-green-500 group-hover:rotate-[8deg] transition duration-500 ease-in-out text-black p-2 rounded-lg absolute -rotate-[8deg] -top-6 text-xs lg:text-base"
        >
          who are we?
        </a>
        <h1 className="leading-none">
          Elevating African <br /> brands worldwide.
        </h1>
      </section>

      <section className="font-thin flex flex-col lg:flex-row border-[0.8px] border-grey rounded-xl p-10 gap-10">
        <h2 className="lg:w-1/3">Who?</h2>
        <div className="lg:w-2/3 border-t-[0.8px] lg:border-l-[0.8px] lg:border-t-0 py-10 lg:px-10 border-grey">
          <p className="mb-10">
            Innovation, Creativity, Talent, and a plethora of other distinctive
            qualities you find flowing through the veins of the typical African
            entrepreneur. The unmatched zeal and passion with which business is
            done in Africa results in brands that deserve to be carried beyond
            the shores of the four bounding seas. Brands that deserve to spread
            their wings and court unceasing disaster for their competitors on
            the global stage.
          </p>

          <p className="mb-10">
            But how does a brand walk into a world of diversity in an age of
            globalisation without a strong sense of identity? The answer is,
            they don’t. At Clover we’ve made it our duty to be responsible for
            the identities of African brands who want to step outside the shores
            of the Sahara and become truly global brands. We believe in creating
            brands that are strong enough to connect with audiences, provide
            real experiences, and most importantly compete on a global stage.{" "}
          </p>

          <p className="mb-10">
            Since our launch we have taken steps towards our vision, and our
            work does nothing but put our clients on the map and speak for us
            anywhere it’s seen.{" "}
          </p>
        </div>
      </section>

      <section className="font-thin flex flex-col lg:flex-row border-[0.8px] border-grey rounded-xl p-10 gap-10">
        <h2 className="lg:w-1/3">Services</h2>
        <div className="lg:w-2/3 border-t-[0.8px] lg:border-l-[0.8px] lg:border-t-0 py-10 lg:px-10 border-grey grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service) => (
            <div key={service.id} className="space-y-2">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link
                to="/contact"
                className="underline hover:text-green-500 text-sm pt-10"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section
        id="the-team"
        className="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 justify-center place-items-center"
      >
        <div className="group mb-10 flex flex-col lg:flex-row justify-center lg:items-center md:col-span-1 lg:col-span-3 gap-4 lg:gap-10 w-[300px] lg:w-full">
          <span className="relative">
            <span className="bg-green-500 group-hover:rotate-[8deg] transition duration-500 ease-in-out text-black p-2 rounded-lg absolute -rotate-[8deg] -top-8 left-0 text-xs lg:text-base">
              design culprits
            </span>
            <h1 className="w-full leading-none">The Team</h1>
          </span>
          <p className="font-thin text-xs lg:text-base lg:w-[50%]">
            We are a team of creatives who are excited about unique ideas and
            help brands to create amazing identities.
          </p>
        </div>
        {team.map((member) => (
          <div id={member.id} key={member.id}>
            <Picture
              img={member.first_pic}
              hoverImg={member.second_pic}
              classNames="mb-5"
            />
            <h4 className="font-display lg:max-w-[400px] max-w-[200px]">
              {member.name}
            </h4>
            <p className="font-thin lg:max-w-[400px] max-w-[200px] text-sm text-grey">
              {member.role}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

const Picture = ({ img, hoverImg, classNames }) => {
  return (
    <div className="group">
      {img !== "" ? (
        <>
          <div
            className={`lg:w-[400px] md:w-[300px] md:h-[300px] w-[200px] lg:h-[400px] h-[200px] bg-team group-hover:hidden hover:bg-team-hover bg-cover rounded-xl ${classNames}`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className={`lg:w-[400px] md:w-[300px] md:h-[300px] w-[200px] lg:h-[400px] h-[200px] bg-cover group-hover:flex hidden rounded-xl ${classNames}`}
            style={{
              backgroundImage: `url(${hoverImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </>
      ) : (
        <div
          className={`lg:w-[400px] md:w-[300px] md:h-[300px] w-[200px] lg:h-[400px] h-[200px] bg-white rounded-xl flex items-center justify-center text-black ${classNames}`}
        >
          <svg
            className={`w-[35px] fill-black transition duration-500 ease-in-out `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 904.01 856.44"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <polygon points="785.53 743.9 686.53 662.94 733.85 780.08 624.94 856.44 452 569.75 279.07 856.44 170.15 780.08 217.47 662.94 118.48 743.9 0 660.88 124.29 456.48 268.78 427.92 128.64 400.93 7.5 186.61 124.89 109.88 216.5 184.43 184.91 70.55 292.74 0 452 284.27 611.26 0 719.09 70.55 687.5 184.43 779.11 109.88 896.5 186.61 775.24 400.93 635.22 427.92 779.72 456.48 904 660.88 785.53 743.9" />
              </g>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};
