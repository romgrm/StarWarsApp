import React, {  createContext, FC, useState } from 'react';
import { ReactNode } from 'react';

export const PseudoContext = createContext<ContextType | string>("");

interface Props {
    pseudo: string, 
    setPseudo: string, 
    navigation: any,
  }

const PseudoContextProvider: FC<ReactNode> = ({ children } ) => {
    
    const [pseudo, setPseudo] = useState<Pseudo["name"]>("");

    
    const savePseudo = (input: Pseudo["name"]) => {
        setPseudo(input);
        console.log("hey" + input); 
        
    }
    return(
        <PseudoContext.Provider value={{pseudo, savePseudo}}>

            { children }
        </PseudoContext.Provider>
        )
        
    }

export default PseudoContextProvider; 