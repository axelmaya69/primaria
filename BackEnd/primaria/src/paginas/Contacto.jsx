import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import { useModo } from "../componentes/ModoContext";

function Contacto() {
  const { modoNocturno } = useModo();

  return (
    <div>
      <Header />
      <h1> Contacto</h1>

      <Footer />
    </div>
  );
}

export default Contacto;
