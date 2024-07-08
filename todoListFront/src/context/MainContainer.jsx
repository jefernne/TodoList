import { createContext, useEffect, useState } from "react";
import { Login, Singup, vefifyToken } from "../apis/auth.js";
import Cookies from "js-cookie";

export const principalContext = createContext();

export const MainContainer = ({ children }) => {
  const [user, setuser] = useState({ Data: null, response: true });

  const [isauthenticated, setisauthenticated] = useState(false);
  const [loading, setloading] = useState(true);
  const authenticateUser = async (User) => {
    try {
      const userLogin = await Login(User);
      setuser(userLogin);
      if (userLogin?.Data?.message?.idUser) {
        setisauthenticated(true);
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  const signInUser = async (User) => {
    try {
      const userSingup = await Singup(User);
      setuser(userSingup);
      if (userSingup?.Data?.message?.idUser) {
        setisauthenticated(true);
      }
    } catch (errors) {
      console.log(errors.Response.Data);
    }
  };

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (cookies.token) {
        try {
          const userVeify = await vefifyToken();
          if (userVeify?.response?.status !== 200) {
            setisauthenticated(false);
            setloading(false);
            setuser(null)
            return;
          }
          setisauthenticated(true);
          setloading(false);
          setuser(userVeify)
        } catch (error) {
          console.log(error);
        }
      } else {
        setisauthenticated(false);
        setloading(false);
        setuser(null)
      }
    }
    checkLogin();
  }, []);

  const logout = () => {
    Cookies.remove("token");
    setisauthenticated(false);
    setloading(false);
    setuser(null);
  };
  return (
    <principalContext.Provider
      value={{
        authenticateUser,
        signInUser,
        user,
        setuser,
        isauthenticated,
        loading,
        logout,
        
      }}
    >
      {children}
    </principalContext.Provider>
  );
};
