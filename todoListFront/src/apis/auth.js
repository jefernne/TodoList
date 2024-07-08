export const Login = async (User) => {
  const API = "http://localhost:3000/login";

  const opciones = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(User),
  };
  try {
    const response = await fetch(API, opciones);
    const Data = await response.json();
    return { Data, response };
  } catch (error) {
    console.log(error);
  }
};

export const Singup = async (User) => {
  const API = "http://localhost:3000/singup";

  const opciones = {
    method: "POST",
    credentials: "include",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(User),
  };
  try {
    const response = await fetch(API, opciones);
    const Data = await response.json();

    return { Data, response };
  } catch (error) {
    console.log(error);
  }
};


export const vefifyToken = async()=>{
  const API = "http://localhost:3000/verify";
 const opciones = {
  credentials:"include"
 }
  try{
    const response = await fetch(API, opciones)
    const Data = await response.json()
    return {Data, response}
  }catch(error){
    console.log(error)
  }

}
