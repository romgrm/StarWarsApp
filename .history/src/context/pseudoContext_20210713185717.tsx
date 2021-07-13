import React, {  createContext, FC, useState } from 'react';

export const PseudoContext = createContext("");

interface Props {
    pseudo: string, 
    setPseudo: string, 
    navigation: any,
  }

const PseudoContextProvider: FC<Props> = ({ children } ) => {
    
    const [pseudo, setPseudo] = useState<string>("");

    
    return(
        { children }
        )
        
    }
    const savePseudo = (input: string) => {
        setPseudo(input);
        console.log("hey" + input); 
        
    }

export default PseudoContextProvider; 