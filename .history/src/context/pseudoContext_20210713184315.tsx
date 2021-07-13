import React, {  createContext, FC, useState } from 'react';

export const PseudoContext = createContext("");

interface Props {
    pseudo: string, 
    setPseudo: string, 
    navigation: any,
    children: Props, 
  }

const PseudoContextProvider: FC<Props> = ({ childre }) => {
    
    const [pseudo, setPseudo] = useState<string>("");

    return(
        { children }
    )

}

export default PseudoContextProvider; 