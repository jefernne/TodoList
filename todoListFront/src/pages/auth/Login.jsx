import { useContext, useEffect, useState } from "react";
import { useForms } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { principalContext } from "../../context/MainContainer";
import { Warning } from "../../components/auth/warning";
import { TaskContext } from "../../context/TaskContainer";

export const Login = () => {
  const { authenticateUser, user, setuser, isauthenticated} =
    useContext(principalContext);
  
  const navigate = useNavigate();
  const { Email, Password, inputChange } = useForms({
    Email: "",
    Password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await authenticateUser({ Email, Password });
    
  };

  useEffect(() => {
    if (user?.response?.status !== 200) {
      const timer = setTimeout(() => {
        setuser([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [user]);

  useEffect(() => {
    if (isauthenticated) {
      navigate("/profile");
    }
  }, [isauthenticated]);

  return (
    <div className="h-[32rem] w-96 bg-white mt-4 p-3 rounded-lg border">
      <form onSubmit={onSubmit} className="w-full flex flex-col h-full">
        


        <p className="my-2">Email</p>
        <input
          type="email"
          name="Email"
          value={Email}
          onChange={inputChange}
          placeholder="Email"
          className="rounded-lg h-9 border  border-inherit mb-5  text-black pl-3"
        />
        <p className="my-2">password</p>
        <input
          type="password"
          name="Password"
          value={Password}
          onChange={inputChange}
          placeholder="Password"
          className="rounded-lg h-9 border  border-inherit  mb-5 text-black pl-3"
        />

        <button className="w-full h-9 bg-black rounded-lg text-white">
          Sing up
        </button>
        {!Email || !Password ? (
          <p className="w-full h-9 bg-red-600 mt-5  rounded-lg flex justify-center items-center text-white">
            All fields are required
          </p>
        ) : null}
        <Warning user={user}></Warning>
      </form>
    </div>
  );
};
