import { createContext, useContext } from 'react';

const AuthContext = createContext({ currentUser: true });
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContext.Provider value={{ currentUser: true }}>
      {children}
    </AuthContext.Provider>
  );
};
