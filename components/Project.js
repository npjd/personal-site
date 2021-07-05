import React from "react";
import Tag from "./Tags";
import Image from 'next/image'

const Project = (props) => {
  const tagArray = props.tags
  console.log(tagArray)

  return (
    <div className="mb-8" >
      <div className="flex flex-col md:flex-row space-x-8">
        <div className="md:mr-48 mb-3">
          <h1 className="text-white text-5xl font-bold mb-8"> {props.name}</h1>
          <p className="text-white text-lg font-light mb-5"> {props.description}</p>
          <div className="space-x-1">
            {tagArray.map((value, index) =>{
              console.log(value)
              return <Tag text={value} key={index}/>
            })}
          </div>
        </div>
        {/* <div >
          <Image src="/profilepic.png" height="428" width="668"/>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
