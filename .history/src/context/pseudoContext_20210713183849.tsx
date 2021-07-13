import React, {  createContext, FC } from 'react';

export const PseudoContext = createContext("");

interface Props {
    pseudo: string, 
    setPseudo: string, 
    navigation: any,
  }

const PseudoContextProvider: FC<Props> = ({children}) => {
    const [pseudo, setPseudo] = useState<string>("");

}