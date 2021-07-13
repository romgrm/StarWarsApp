import React, {  createContext, FC } from 'react';

export const PseudoContext = createContext("");

const PseudoContextProvider: FC<Prop = ({children}) => {
    const [pseudo, setPseudo] = useState<string>("");

}