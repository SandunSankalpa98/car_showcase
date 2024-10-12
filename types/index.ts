import { MouseEventHandler } from "react";

// Props for CustomButton
export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles?: string;  // Added for custom text styling
    rightIcon?: string;   // Added for optional right icon (URL path)
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    isDisabled?:boolean;
}

// Props for SearchManufacture
export interface SearchManufactureProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

// Props for Car information
export interface CarProps {
    city_mpg: number;            // Fuel efficiency in the city (miles per gallon)
    class: string;               // Car class/type (e.g., "compact car")
    combination_mpg: number;     // Combined fuel efficiency
    cylinders: number;           // Number of engine cylinders
    displacement: number;        // Engine displacement (in liters)
    drive: string;               // Drive type (e.g., "fwd" for front-wheel drive)
    fuel_type: string;           // Type of fuel (e.g., "gas", "electric")
    highway_mpg: number;         // Fuel efficiency on the highway
    make: string;                // Manufacturer (e.g., "Toyota")
    model: string;               // Model of the car (e.g., "Corolla")
    transmission: string;        // Transmission type (e.g., "a" for automatic, "m" for manual)
    year: number;                // Year of manufacture
}
