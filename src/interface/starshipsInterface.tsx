import { Pilots } from "./pilotsInterface";

export interface Starship {   
    [index: number]: {
        name: string; 
        model: string; 
        manufacturer: string; 
        cost: number; 
        pilots: Pilots;
    };

}