import React, {createContext, useContext, useState, useEffect} from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
}

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if(storedUser){
      setUser(storedUser);
    }
  }, []);


  const saveUser = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  const clearUser = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  return (
    <UserContext.Provider value={{user, saveUser, clearUser}}>
      {children}
    </UserContext.Provider>
  );
}

