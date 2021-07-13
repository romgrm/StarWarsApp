import React, { createContext, FC, useState } from "react";
import { ReactNode } from "react";
import { ContextType, Pseudo } from "../types/contextType";

/**
 * @PseudoContext create Context for save pseudo of player and share with others components
 * @PseudoContextProvider provide the data of our context for children components
 */

export const PseudoContext = createContext<ContextType | null>(null);


const PseudoContextProvider: FC<ReactNode> = ({ children }) => {
  const [pseudoPlayer, setPseudoPlayer] = useState<Pseudo["name"]>("");

  const savePseudo = (input: Pseudo["name"]) => {
    setPseudoPlayer(input);
    console.log("hey" + input);
  };
  return (
    <PseudoContext.Provider value={{ pseudoPlayer, savePseudo }}>
      {children}
    </PseudoContext.Provider>
  );
};

export default PseudoContextProvider;
