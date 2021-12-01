import Head from "next/head";
import wavestyles from "../styles/waves.module.css"
import Typical from "react-typical";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nima Pourjafar</title>
        <meta name="description" content="Personal Site - Nima Pourjafar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute w-full h-full bg-background overflow-hidden">
        <div className="flex flex-col justify-left ml-8 md:ml-28 h-64 mt-24">
          <h1 className="text-5xl md:text-10xl font-extrabold text-white">
            Hey, I'm <br/> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-navyblue via-blue-500 to-skyblue animate-gradient-xy font-black text-8xl md:text-fat">NIMA</span>
          </h1>
          <h2 className="text-4xl text-white font-semibold">
            I ENJOY{" "}
            <Typical
              className="bg-clip-text text-transparent bg-gradient-to-r from-navyblue to-skyblue animate-gradient-xy"
              loop={Infinity}
              wrapper="b"
              steps={[
                "WEB & APP DEVELOPMENT",
                4000,
                "INVESTING",
                4000,
                "STARTUPS",
                4000,
                "WRITING & PSYCHOLOGY",
                4000,
              ]}
            />
          </h2>
        </div>
        <div className={wavestyles.ocean}>
          <div class={wavestyles.wave}></div>
          <div class={wavestyles.wave}></div>
        </div>
      </div> 
    </div>
  );
}
