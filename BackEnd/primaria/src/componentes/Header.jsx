import React, { useState, useEffect } from "react";
import { HiMenu, HiMoon, HiOutlineX, HiSun, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useModo } from "./ModoContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { modoNocturno, toggleModoNocturno } = useModo();

  useEffect(() => {
    localStorage.setItem("modoNocturno", modoNocturno.toString());
  }, [modoNocturno]);

  const modoNocturnoClase = modoNocturno ? "bg-gray-900" : "bg-green-400";
  const enlaces = modoNocturno ? "text-white" : "text-black";
  const modo = modoNocturno ? "text-white" : "text-cyan-950";

  return (
    <div
      className={`w-full h-full flex p-4 justify-between ${modoNocturnoClase} z-50`}
    >
      <div>
        <Link to={"/"}>
          <p className="text-white font-bold md:text-lg">
            Gabriel Ramos Millán
          </p>
        </Link>
      </div>
      <div className="flex">
        <button
          className={`block md:hidden text-end text-xl transition-all duration-150 ${modo}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiMenu />}
        </button>
        <div className="block md:hidden ">
          {isOpen && (
            <div
              className={`absolute top-12 right-5  ${
                modoNocturno
                  ? "bg-slate-800 text-white font-bold"
                  : "bg-white font-bold"
              } border border-gray-300 shadow-lg rounded-md p-2 transition-all duration-100 `}
            >
              <Link to={"/"}>
                <button className="block w-full text-left  px-2 hover:bg-gray-100 py-2 border-b ">
                  Inicio
                </button>
              </Link>
              <Link to={"/Acerca de"}>
                <button className="block w-full text-left px-2 hover:bg-gray-100 py-2 border-b ">
                  Acerca de
                </button>
              </Link>
              <Link to={"/Alumno"}>
                <button className="block w-full text-left px-2 hover:bg-gray-100 py-2 border-b ">
                  Alumno
                </button>
              </Link>
              <Link to={"/Contacto"}>
                <button className="block w-full text-left px-2 hover:bg-gray-100 py-2 border-b ">
                  Contacto
                </button>
              </Link>

              <button
                onClick={toggleModoNocturno}
                className="block w-full text-left  px-2 py-4"
              >
                {modoNocturno ? <HiSun /> : <HiMoon />}
              </button>
            </div>
          )}
        </div>

        {/* MENU PARA
         PANTALLAS
          GRANDES */}

        <ul
          className={`hidden md:flex gap-5 font-semibold mr-8 ${enlaces} font-mono `}
        >
          <Link to="/">
            <li className="md:text-lg hover:scale-110 hover:text-slate-400 transition-all duration-200">
              Inicio
            </li>
          </Link>
          <Link to="/Acerca de">
            <li className="md:text-lg hover:scale-110 hover:text-slate-400 transition-all duration-200">
              Acerca de
            </li>
          </Link>
          <Link to="/Contacto">
            <li className="md:text-lg hover:scale-110 hover:text-slate-400 transition-all duration-200">
              Contacto
            </li>
          </Link>
          <Link to={"/Alumno"}>
            <li className="md:text-lg hover:scale-110 hover:text-slate-400 transition-all duration-200">
              <HiUser className="text-2xl" />
            </li>
          </Link>
        </ul>
        <button
          onClick={toggleModoNocturno} // Cambia esto para usar toggleModoNocturno
          className={`hidden md:block mr-6 transition-all duration-150 text-xl border p-1 rounded-full ${modo}`}
        >
          {modoNocturno ? <HiMoon /> : <HiSun />}
        </button>
      </div>
    </div>
  );
}

export default Header;
