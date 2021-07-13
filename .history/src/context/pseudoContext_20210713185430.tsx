import React, {  createContext, FC, useState } from 'react';

export const PseudoContext = createContext("");

interface Props {
    pseudo: string, 
    setPseudo: string, 
    navigation: any,
  }

const PseudoContextProvider: FC<Props> = ({ children } ) => {
    
    const [pseudo, setPseudo] = useState<string>("");

    const savePseudo = (inpuy: string) => {
        setinpuy(pseudo);

    }

    return(
        { children }
    )

}

export default PseudoContextProvider; 