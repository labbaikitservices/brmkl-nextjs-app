"use client";
import Name from "@/components/name/Name";
import Practice from "@/components/practice/Practice";
import User from "@/components/user/User";
import { useState, useRef } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  // const inputRef = useRef(null);

  // function updateSearch() {
  //   setSearch(inputRef.current.value);
  // }
  const [userData, setUserData] = useState<any>(null);
  async function getData() {
    const response = await fetch("https://api.github.com/users/" + search);
    const responseData = await response.json();
    setUserData(responseData);
  }

  return (
    <main className="">
      <h1 className="text-center text-3xl font-extrabold text-green-500">
        Home Page
      </h1>
      <div className="">
        {/* <Name name="Abdullah" /> */}
        {/* {names.map((name) => (
          <Name key={name} name={name} />
        ))} */}
        {/* <Practice /> */}
        <input
          className="rounded-lg border-black border"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={getData}
          className="rounded-lg bg-blue-500 text-white p-2 mt-2"
        >
          Update Search
        </button>
        <User
          avatar_url={userData?.avatar_url}
          name={userData?.name}
          login={userData?.login}
          bio={userData?.bio}
          location={userData?.location}
        />
      </div>
    </main>
  );
}
