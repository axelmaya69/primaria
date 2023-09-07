import React, { createContext, useContext, useState } from "react";

const ModoContext = createContext();

export function useModo() {
  return useContext(ModoContext);
}

export function ModoProvider({ children }) {
  const [modoNocturno, setModoNocturno] = useState(
    localStorage.getItem("modoNocturno") === "true"
  );

  const toggleModoNocturno = () => {
    setModoNocturno(!modoNocturno);
  };

  return (
    <ModoContext.Provider value={{ modoNocturno, toggleModoNocturno }}>
      {children}
    </ModoContext.Provider>
  );
}
