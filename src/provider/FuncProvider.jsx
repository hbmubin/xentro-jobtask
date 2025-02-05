import { createContext } from "react";

export const FuncContext = createContext(null);

const FuncProvider = ({ children }) => {
  const functions = {
    name: "hasan",
  };

  return <FuncContext.Provider value={functions}>{children}</FuncContext.Provider>;
};

export default FuncProvider;
