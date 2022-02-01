import React from "react";
import Tag from "./Tags";
import Image from "next/image";

const Project = (props) => {
  const tagArray = props.tags;
  console.log(props.img);
  
  const renderImage = (renderPath) => {
    if(renderPath=="/thumbnail.png"){
      return <div></div>
    }
    else{
      return <Image src={props.img} height="428" width="700" />
    }
  }

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row space-x-8">
        <div className="md:mr-48 mb-3">
          <h2 className="text-white text-5xl font-bold mb-8"> {props.name}</h2>
          <p className="text-white text-lg font-light mb-5">
            {" "}
            {props.description}
          </p>
          <div className="space-x-1">
            {tagArray.map((value, index) => {
              console.log(value);
              return <Tag text={value} key={index} />;
            })}
          </div>
        </div>
        <div className="justify-items-end">
          {props.img == "/projects/wombo.png" ? (
            <Image src={props.img} height="428" width="428" />
          ) : (
            renderImage(props.img)
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
