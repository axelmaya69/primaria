import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import { useModo } from "../componentes/ModoContext";

function Acerca() {
  const { modoNocturno } = useModo();
  return (
    <div>
      <Header />
      Acerca de
      <Footer />
    </div>
  );
}

export default Acerca;
