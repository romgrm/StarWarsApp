/**
 * @Pseudo interface for type the pseudo's player
 * @ContextType 
 */
export interface Pseudo {
    name: string; 
}

export type ContextType = {
    pseudoPlayer: string;
    savePseudo: (input: string) => void; 
  };