//context, provider, consumer-custome hook

import { createContext, useContext, useState } from "react";

export const SecuredContext = createContext();

export const SecuredPage = ({ children }) => {
  const [isLoggedIN, setIsLoggedIN] = useState(false);

  return (
    <>
      <SecuredContext.Provider value={{ isLoggedIN, setIsLoggedIN }}>
        {children}
      </SecuredContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(SecuredContext);
