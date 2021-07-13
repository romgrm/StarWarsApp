export interface Pseudo {
    name: string; 
}

export type ContextType = {
    pseudo: string;
    savePseudo: (input: string) => void; 
  };