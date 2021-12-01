import Head from "next/head";
import Image from "next/image";

const about = () => {


  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About - Nima Pourjafar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute w-full min-h-screen bg-background">
        <div className="flex flex-col mx-auto md:mx-24">
          <h1 className="text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-navyblue via-blue-500 to-skyblue animate-gradient-xy font-black text-7xl my-10">
            About Me 👋!
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0 mx-auto">
              <Image src="/profilepic.png" width="256" height="320"></Image>
            </div>
            <div className="text-center md:text-left mx-5 text-white text-lg leading-8">
              <p>
                Hey there, I'm Nima! I live in Toronto, Canada and am currently in high school! I live my life by trying to learn and do things that I think are cool. Some topics I'm interested in and working on are app/web development, investing, psychology, and also startups. 
              </p>
              <p className="mt-2">Currently, I'm building Send Story Training, Bitperks, and Z Investor (check out my portfolio for more) </p>
              <h2 className="text-2xl mt-10 font-semibold">Find me here 😉</h2>
              <div className="flex flex-row mt-4">
                <div className="mx-2 px-2 pt-1 rounded-xl duration-500 hover:bg-gray-50">
                  <a href="https://github.com/nimapourjafar">
                    <Image src="/socials/github.png" height="64" width="64"/>
                  </a>
                </div>
                <div className="mx-2 px-2 pt-1 rounded-xl duration-500 hover:bg-gray-50">
                  <a href="https://www.instagram.com/nima.pourjafar/">
                    <Image src="/socials/instagram.png" height="64" width="64"/>
                  </a>
                </div>
                <div className="mx-2 px-2 pt-1 rounded-xl duration-500 hover:bg-gray-50">
                  <a href="https://nimapourjafar.medium.com/">
                    <Image src="/socials/medium.png" height="64" width="64"/>
                  </a>
                </div>
                <div className="mx-2 px-2 pt-1 rounded-xl duration-500 hover:bg-gray-50">
                  <a href="https://twitter.com/PourjafarNima">
                    <Image src="/socials/twitter.png" height="64" width="64"/>
                  </a>
                </div>
                <div className="mx-2 px-2 pt-1 rounded-xl duration-500 hover:bg-gray-50">
                  <a href="https://www.linkedin.com/in/nima-pourjafar-8719a21a6/">
                    <Image src="/socials/linkedin.png" height="64" width="64"/>
                  </a>
                </div>

              </div>
            </div>

            
          </div>
          <div className="flex flex-col md:flex-row mx-8 text-white text-lg leading-8 mt-11 md:space-x-24">
            <div className="mb-5 md:mb-0">
              <h2 className="text-3xl font-medium">Some Things I've Done ✅</h2>
              <ul className="list-disc list-inside">
                <li>Be me</li>
                <li>Lead and assisted the development of multiple startups</li>
                <li>Self-taught myself all the skills I know</li>
                <li>Won multiple hackathons</li>
                <li>Scaled one of my projects to Africa with the help of Microsoft and NGOs</li>
                <li>Built this website!</li>
              </ul>
            </div>
            <div className="mb-5 md:mb-0">
              <h2 className="text-3xl font-medium">Some Things I Want To Do 🧩</h2>
              <ul className="list-disc list-inside">
                <li>Produce something valuable to others</li>
                <li>Build something cool (whether it be a platform or a product)</li>
                <li>Learn more backend development</li>
                <li>Write and produce better quality content</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
