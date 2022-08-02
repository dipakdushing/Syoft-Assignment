import { Home } from "../component/home/Home";
import { Route, Routes } from "react-router-dom";
import { Login } from "../component/login/Login";
import { Signup } from "../component/register/Signup";
import { Demo } from '../component/product/Demo';
import { Indi } from "../component/product/Indi";


export const AllRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        

      </Routes>
    </>
  );
};
