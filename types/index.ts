import { MouseEventHandler } from "react";

// Props for CustomButton
export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

// Props for SearchManufacture
export interface SearchManufactureProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
