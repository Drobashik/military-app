import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { MilitaryType } from "../models/types/Military.type";
import { updateMilitaryInLocalStorage } from "../helpers";

type MilitaryContextType = {
  militaries: MilitaryType[];
  setMilitaries: Dispatch<SetStateAction<MilitaryType[]>>;
};

export const MilitaryContext = createContext<MilitaryContextType | null>(null);

export const MilitaryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [militaries, setMilitaries] = useState<MilitaryType[]>(
    JSON.parse(localStorage.getItem("military") ?? "[]")
  );

  updateMilitaryInLocalStorage(militaries);

  return (
    <MilitaryContext.Provider value={{ militaries, setMilitaries }}>
      {children}
    </MilitaryContext.Provider>
  );
};
