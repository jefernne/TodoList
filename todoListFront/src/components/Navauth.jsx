import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { principalContext } from "../context/MainContainer";

export const Navauth = () => {
  const { isauthenticated, user, logout, uservey } =
    useContext(principalContext);
  const [switchColor, setswitchColor] = useState("Login");

  return (
    <div>
      {isauthenticated ? (
        <div className="w-full h-28 flex flex-row justify-between items-center ">
          <p className="text-2xl font-bold">Task Manager</p>
          <p>
            <span className="font-bold">User: </span>
            {user?.Data?.message?.User}
          </p>
          <NavLink
            to="/login"
            onClick={() => {
              logout();
            }}
            className={"h-8 w-24 rounded-lg border bg-black font-sans font-medium text-slate-50 flex flex-row justify-center items-center "}
          >
            <p>logout</p>
          </NavLink>
        </div>
      ) : (
        <div className="h-10 w-96 p-2 bg-zinc-200 flex flex-row justify-around items-center rounded-lg">
          <NavLink to="/Login" className={"m-0 w-1/2"}>
            <p
              className={
                switchColor === "Login"
                  ? "h-8 w-full bg-white font-sans text-center rounded-lg flex justify-center items-center"
                  : "h-8  bg-zinc-200 text-center"
              }
              onClick={() => {
                setswitchColor("Login");
              }}
            >
              Login
            </p>
          </NavLink>
          <NavLink to="/Singup" className={"m-0 w-1/2"}>
            <p
              className={
                switchColor === "Singup"
                  ? "h-8 w-full bg-white font-sans text-center rounded-lg flex justify-center items-center"
                  : "h-8  bg-zinc-200 text-center"
              }
              onClick={() => {
                setswitchColor("Singup");
              }}
            >
              Singup
            </p>
          </NavLink>
        </div>
      )}
    </div>
  );
};
