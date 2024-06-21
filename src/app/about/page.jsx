import Image from "next/image";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className="flex gap-5 bg-blue-200/40  shadow-2xl rounded-2xl w-[80%] self-center  flex-col justify-between p-5 md:p-10">

        <h2 className="text-xl font-bold mb-3">Ulra Blog</h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-5">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-base mb-5">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas, flexibility, and precision. We’re the world’s best
          consulting & finance solution provider. Wide range of web and software
          development services.
        </p>
        {/* <div className="flex self-center  gap-5">
          <div className="bg-black text-white p-5 rounded text-center">
            <h1 className="text-2xl font-bold">10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className="bg-black text-white p-5 rounded text-center">
            <h1 className="text-2xl font-bold">10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className="bg-black text-white p-5 rounded text-center">
            <h1 className="text-2xl font-bold">10 K+</h1>
            <p>Years of experience</p>
          </div>
      </div> */}
    </div>
  );
};

export default AboutPage;
