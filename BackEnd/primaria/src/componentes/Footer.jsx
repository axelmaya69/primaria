import React from "react";
import { useModo } from "./ModoContext";

function Footer() {
  const { modoNocturno } = useModo();

  return (
    <div className="mt-20">
      <div
        className={`${
          modoNocturno ? "bg-black text-white" : "bg-yellow-400 text-black"
        }`}
      >
        <h1 className="font-bold p-4 text-xl">Redes sociales</h1>
        <ul className="flex flex-wrap space-x-4 sm:space-x-10  p-7 px-10 py-10 ">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Youtube</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
