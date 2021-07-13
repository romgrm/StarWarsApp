import React, {  createContext, FC, useState } from 'react';

export const PseudoContext = createContext("");

interface Props {
    pseudo: string, 
    setPseudo: string, 
    navigation: any,
    children:any, 
  }

const PseudoContextProvider: FC<Props> = ({ children }) => {
    
    const [pseudo, setPseudo] = useState<string>("");

    return(
        { ch}
    )

}

export default PseudoContextProvider; 