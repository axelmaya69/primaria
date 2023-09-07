import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import { useModo } from "../componentes/ModoContext";

function Alumno() {
  const { modoNocturno } = useModo();
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl m-10 p-4">Sección Alumnos:</h1>
      </div>{" "}
      <form action="">
        <div className="flex justify-center items-center flex-col border-y-2 py-10">
          <input
            type="text"
            className="border-t-0 border-x-0 border-b-2 my-5 p-2 outline-none shadow-md"
            placeholder="Ingresa tu usuario"
            required
          />
          <input
            className="border-t-0 border-x-0 border-b-2 my-5 p-2 outline-none shadow-lg"
            type="password"
            placeholder="Ingresa tu contraseña "
            required
          />

          <button
            className="bg-blue-500 px-3 py-1 text-white rounded-full w-16 hover:bg-blue-600 transition-all outline-none shadow"
            type="submit"
          >
            Entrar
          </button>
        </div>{" "}
      </form>
      <Footer />
    </div>
  );
}

export default Alumno;
