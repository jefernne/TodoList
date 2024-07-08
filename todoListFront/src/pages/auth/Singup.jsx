import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForms } from "../../hooks/useForm";
import { principalContext } from "../../context/MainContainer";
import { Warning } from "../../components/auth/warning";

export const Singup = () => {
  const { signInUser, user, setuser, isauthenticated } =
    useContext(principalContext);
  const navigate = useNavigate();

  const { User, Email, Password, inputChange, onResetForm } = useForms({
    User: "",
    Email: "",
    Password: "",
  });

  const sendToServer = async (e) => {
    e.preventDefault();
    const response = await signInUser({ User, Email, Password });
    onResetForm();
  };

  useEffect(() => {
    if (user?.response?.status !== 200) {
      const time = setTimeout(() => {
        setuser([]);
      }, 5000);
      return () => clearTimeout(time);
    }
  }, [user]);

  useEffect(() => {
    if (isauthenticated) {
      navigate("/profile");
    }
  }, [isauthenticated]);

  return (
    <div className="h-[32rem] w-96 bg-white mt-4 p-3 rounded-lg border">
      <form onSubmit={sendToServer} className="w-full flex flex-col h-full">
        <p className="my-2">Email</p>
        <input
          type="email"
          name="Email"
          value={Email}
          placeholder="Email"
          onChange={inputChange}
          className="rounded-lg h-9 border  border-inherit mb-5  text-black pl-3"
        />
        <p className="my-2">password</p>
        <input
          type="password"
          name="Password"
          value={Password}
          placeholder="Password"
          onChange={inputChange}
          className="rounded-lg h-9 border  border-inherit mb-5  text-black pl-3"
        />
        <p className="my-2">User</p>
        <input
          type="text"
          name="User"
          placeholder="User"
          value={User}
          onChange={inputChange}
          className="rounded-lg h-9 border  border-inherit mb-5  text-black pl-3"
        />
        <button className="w-full h-9 bg-black rounded-lg text-white">Sign up</button>
        {!Email || !Password || !User ? <p className="w-full h-9 bg-red-600 mt-5  rounded-lg flex justify-center items-center text-white">All fields are required</p> : null}
        <Warning user={user}></Warning>
      </form>
     
    </div>
  );
};
