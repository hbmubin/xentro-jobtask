import { createContext, useState } from "react";

export const FuncContext = createContext(null);

const FuncProvider = ({ children }) => {
    const [hideBar, setHideBar] = useState(false)
  const functions = {
    hideBar,
    setHideBar
  };

  return <FuncContext.Provider value={functions}>{children}</FuncContext.Provider>;
};

export default FuncProvider;
