import { createContext, useState } from "react";

export const HealthContext = createContext();

export const HealthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Public Health Officer" });

  return (
    <HealthContext.Provider value={{ user, setUser }}>
      {children}
    </HealthContext.Provider>
  );
};
