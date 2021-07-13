import React, { createContext, FC, useState } from "react";
import { ReactNode } from "react";
import { ContextType, Pseudo } from "../types/contextType";

export const PseudoContext = createContext<ContextType | null>(null);


const PseudoContextProvider: FC<ReactNode> = ({ children }) => {
  const [pseudoPerson, setPseudo] = useState<Pseudo["name"]>("");

  const savePseudo = (input: Pseudo["name"]) => {
    setPseudo(input);
    console.log("hey" + input);
  };
  return (
    <PseudoContext.Provider value={{ pseudo: pseudoPerson, savePseudo }}>
      {children}
    </PseudoContext.Provider>
  );
};

export default PseudoContextProvider;
