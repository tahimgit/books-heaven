import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
// import Home from "../Pages/Home";


export default function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>     
    </div>
  )
}
