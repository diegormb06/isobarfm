import React, { createContext, useState, useContext } from "react";
import { Band } from "../isobar";

export const bandsContext = createContext<any>({});

export const BandsProvider = ({ children }: any) => {
  const [bands, setBands] = useState<Band[]>([]);

  return (
    <bandsContext.Provider value={{ bands, setBands }}>
      {children}
    </bandsContext.Provider>
  );
};

export const useBandsContext = () => useContext(bandsContext);
