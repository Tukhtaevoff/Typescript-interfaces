import { HairColor } from "./Enums";

export interface User {
    name: string;
    age: number;
    email: string; // Question mark makes this optional
    hairColor: HairColor;
}