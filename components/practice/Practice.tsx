"use client";
import React, { useState } from "react";
import Name from "../name/Name";

function Practice() {
  const [names, setNames] = useState([
    "Abdullah",
    "Zahoor",
    "Ahmer",
    "Anzer",
    "Saad",
    "Saba",
    "Ume Kalsoom",
    "Aima",
    "Muzzamil",
    "Rashid",
    "Kashif",
  ]);

  function add() {
    setNames([...names, "Add"]);
  }
  return (
    <div className="min-h-screen flex flex-col items-center w-screen flex-wrap gap-5 justify-center">
      {names.map((name) => (
        <Name key={name} name={name} />
      ))}
      <button onClick={add} className="bg-white rounded-lg py-3 px-5">
        Add
      </button>
    </div>
  );
}

export default Practice;
