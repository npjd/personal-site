import "../styles/portfolio.module.css";
import Project from "../components/Project";

import timelineElements from "../lib/timelineElements";

import projects from "../lib/projectsLib";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const portfolio = () => {
  return (
    <div>
      <div className="absolute w-full min-h-screen bg-background">
        <h1 className="py-24 text-center mx-auto font-black text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-navyblue via-blue-500 to-skyblue animate-gradient-xy">
          Portfolio
        </h1>
        <a href="">
          <h2 className="w-3/12 py-2 rounded-2xl text-center mx-auto font-black text-xl md:text-3xl bg-gradient-to-r from-navyblue via-blue-500 to-skyblue animate-gradient-xy duration-500 hover:text-white hover:shadow-xl mb-7">Check out my resume here</h2>
        </a>

        <VerticalTimeline animate={false}>
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                contentArrowStyle={{ borderRight: "7px solid  rgb(37,41,53)" }}
                contentStyle={{
                  background: "linear-gradient(to right, #1687F3 , #2a4bde)",
                  color: "#fff",
                }}
                dateClassName="date"
                iconStyle={{
                  background: "linear-gradient(to right, #1687F3 , #2a4bde)",
                }}
              >
                <h3 className="vertical-timeline-element-title font-extrabold">
                  {element.title}
                </h3>
                <p id="description" className="font-light">
                  {element.description}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>

        <h1 className="py-24 text-center mx-auto font-black text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-navyblue via-blue-500 to-skyblue animate-gradient-xy">
          Projects
        </h1>
        <div>
          {projects.map((project) => {
            return (
              <div className="w-9/12 mx-auto">
                <Project
                  tags={project.tags}
                  name={project.name}
                  description={project.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default portfolio;
