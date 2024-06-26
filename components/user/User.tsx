import Image from "next/image";
import React from "react";

function User({ avatar_url, login, name, bio, location }) {
  return (
    <div className="min-w-64 min-h-52 rounded-lg flex flex-col justify-center items-center">
      <div className="h-[200px] w-[200px] rounded-full overflow-hidden">
        <Image alt="Image" src={avatar_url} height={200} width={200} />
      </div>
      <h1>Username: {login} </h1>
      <h1>Name: {name}</h1>
      <h1>Bio: {bio}</h1>
      <h1>Location: {location}</h1>
    </div>
  );
}

export default User;
