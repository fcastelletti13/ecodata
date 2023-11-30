import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState('Caste')
  const [result, setResult] = useState(parseFloat(localStorage.getItem('result')) || 0)
  localStorage.setItem('result', result)

  return (
    <UserContext.Provider value={{ user, setUser, result, setResult}}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
