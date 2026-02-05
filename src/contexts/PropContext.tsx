import { createContext } from "react";

export interface PropContextType {
  isOpen: boolean;
  setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>;
}

export const PropContext = createContext<PropContextType | null>(null);

