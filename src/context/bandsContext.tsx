import React, { createContext, useState, useContext, useEffect } from "react";
import { Band } from "../isobar";

type BandsContextType = {
  bands: Band[];
  setBands: React.Dispatch<React.SetStateAction<Band[]>>;
};

export const bandsContext = createContext<BandsContextType>({
  bands: [],
  setBands(value: ((prevState: Band[]) => Band[]) | Band[]): void {},
});

export const BandsProvider = ({ children }: any) => {
  const [bands, setBands] = useState<Band[]>([]);

  return (
    <bandsContext.Provider
      value={{
        bands,
        setBands,
      }}
    >
      {children}
    </bandsContext.Provider>
  );
};

export const useBandsContext = () => useContext(bandsContext);
