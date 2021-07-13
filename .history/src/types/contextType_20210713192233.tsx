interface Pseudo {
    name: string; 
}

export type ContextType = {
    savePseudo: (input: string) => void; 
  };