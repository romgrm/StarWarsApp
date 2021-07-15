import { Pilots } from "./pilotsInterface";

export interface Starship {   
    
        name: string; 
        model: string; 
        manufacturer: string; 
        cost: number; 
        pilots: Pilots;
    

}