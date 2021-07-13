import React, {  createContext, FC, useState } from 'react';

export const PseudoContext = createContext<ContextType>({);

interface Props {
    pseudo: string, 
    setPseudo: string, 
    navigation: any,
  }

const PseudoContextProvider: FC<Props> = ({ children } ) => {
    
    const [pseudo, setPseudo] = useState<string>("");

    
    const savePseudo = (input: string) => {
        setPseudo(input);
        console.log("hey" + input); 
        
    }
    return(
        { children }
        )
        
    }

export default PseudoContextProvider; 