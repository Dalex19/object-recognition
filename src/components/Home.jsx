import lain1 from "../assets/lain1.mp4";
import Particle from "./Particle";

export default function Home() {
  return (
    <div className="lg:w-4/5 h-3/5 flex items-center justify-center">
      <Description />
      <Particle />
      <div className="md:h-[84%] border w-3/5 lg:w-2/5 hidden md:block">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop={true}
        >
          <source src={lain1} />
        </video>
      </div>
    </div>
  );
}

const Description = () => {
  const sayHello = () => console.log("hello word");
  return (
    <section className="w-11/12 border md:h-[84%] md:w-3/5 flex flex-col justify-center gap-4 max-w-[450px]">
      <h1 className="text-5xl font-bold">
        Improve <br />
        Your <br />
        skills with <br />
        oopx
      </h1>
      <p className="text-[20px] text-gray-200 decoration-neutral-200">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Repellat ratione dolorum
      </p>
      <div className="flex min-w-[285px] justify-between w-3/4 md:w-[65%] h-26  border-black">
        <button
          className="py-1 px-2 bg-green-700 font-semibold text-white  rounded-3xl"
          onClick={sayHello}
        >
          Get Started
        </button>
        <button className="py-1 px-2 border-2 border-white text-slate-900 font-semibold rounded-3xl">
          Learn more
        </button>
      </div>
    </section>
  );
};
