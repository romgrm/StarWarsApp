import React, {  createContext, FC } from 'react';

export const PseudoContext = createContext("");

const PseudoContextProvider: FC = ({children}) => {
    const [pseudo, setPseudo] = useState<string>("");

}