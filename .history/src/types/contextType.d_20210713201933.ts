/**
 * @Pseudo interface 
 */
export interface Pseudo {
    name: string; 
}

export type ContextType = {
    pseudoPlayer: string;
    savePseudo: (input: string) => void; 
  };