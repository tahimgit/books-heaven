// import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Books from "../Components/Books/Books";
import Title from "../Components/Title/Title";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Title></Title>
      <Books></Books>    
    </div>
  )
}
