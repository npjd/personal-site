import "../styles/portfolio.module.css";

import timelineElements from "../lib/timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const portfolio = () => {
  return (
    <div>
      <div className="absolute w-full min-h-screen bg-background">
        <h1 className="py-24 text-center mx-auto font-black text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-navyblue via-blue-500 to-skyblue animate-gradient-xy">Portfolio</h1>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                contentStyle={{ background: 'linear-gradient(to right, #1687F3 , #2a4bde)', color: '#fff'}}
                dateClassName="date"
                iconStyle={{ background: "#294DDE" }}
              >
                <h3 className="vertical-timeline-element-title font-extrabold">
                  {element.title}
                </h3>
                <p id="description" className="font-light">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default portfolio;
