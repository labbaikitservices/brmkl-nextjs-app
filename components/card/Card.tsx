import Image from "next/image";
import React from "react";

function Card({ heading, content, image }) {
  return (
    <div className="h-56 w-44 bg-blue-300 text-white rounded-lg shadow-xl shadow-black/30 mx-5">
      <h1 className="text-2xl text-black font-bold">{heading}</h1>
      <p>{content}</p>
      <Image
        height={100}
        width={100}
        alt="Image"
        src={image}
        className="h-24 w-24 rounded-full mx-auto overflow-hidden"
      />
    </div>
  );
}

export default Card;
