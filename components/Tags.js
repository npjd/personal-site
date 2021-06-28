import React from "react";

const Tag = (props) => {
  return (
    <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-gradient-to-r from-blue-700 via-blue-500 to-skyblue text-white border">
      {props.text}
    </div>
  );
};

export default Tag;
