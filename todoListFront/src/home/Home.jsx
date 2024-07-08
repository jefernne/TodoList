import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Singup } from "../pages/auth/Singup";
import { Navauth } from "../components/Navauth";
import { ProfileTodoList } from "../pages/AppContent/ProfileTodoList";
import { ProtectedRoute } from "../ProtectedRoute";
import { principalContext } from "../context/MainContainer";
import { useContext } from "react";

export const Home = () => {
  const { isauthenticated, loading } = useContext(principalContext);
  return (
    <main className="h-screen bg-slate-50 flex justify-center items-center flex-col relative">
      <BrowserRouter>
        {isauthenticated && !loading ? null : <Navauth></Navauth>}
        <Routes>
          <Route path="/Login" element={<Login></Login>} />
          <Route path="/Singup" element={<Singup></Singup>} />

          <Route element={<ProtectedRoute></ProtectedRoute>}>
            <Route
              path="/profile"
              element={<ProfileTodoList></ProfileTodoList>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};
