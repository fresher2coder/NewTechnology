//Context, Provider, Consumer
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");

      setUsers(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <UserContext.Provider value={{ users, loading, error }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export const userConsumer = () => useContext(UserContext);
