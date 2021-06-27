import React from "react";
import Tag from "./Tags";
import Image from 'next/image'

const Project = (props) => {
  const tagArray = props.tags
  console.log(tagArray)

  return (
    <div >
      <div className="flex flex-row">
        <div>
          <h1>Project {props.name}</h1>
          <p>This is the description {props.description}</p>
          {tagArray.map((value, index) =>{
            console.log(value)
            return <Tag text={value} key={index}/>
          })}
        </div>
        <div>
          <Image src="/profilepic.png" height="128" width="128"/>
        </div>
      </div>
    </div>
  );
};

export default Project;
