import React, {  createContext, FC, useState } from 'react';

export const PseudoContext = createContext("");

interface Props {
    pseudo: string, 
    setPseudo: string, 
    navigation: any,
    children:any, 
  }

const PseudoContextProvider: FC<Props> = ({children}: Props) => {
    
    const [pseudo, setPseudo] = useState<string>("");

    return(
        {children}
    )

}