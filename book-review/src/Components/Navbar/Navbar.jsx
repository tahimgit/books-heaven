import {  NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="max-w-[90%] m-auto">
            <div className=" navbar bg-base-100">
                <div className="navbar-start">

                    <a className="btn btn-ghost font-bold text-[28px]">Book Heaven</a>
                </div>
                <div className=" flex gap-8">

                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn btn-ghost border-green-400 text-green-400' : 'btn w-32 btn-ghost'}>Home</NavLink>

                    <NavLink
                         to={'/listedBook'}
                        className={({ isActive }) => isActive ? 'btn btn-ghost border-green-400 text-green-400' : 'btn w-32 btn-ghost'}
                    >Listed Books</NavLink>

                    <NavLink

                        to={'/pagesToRead'}

                        className={({ isActive }) => isActive ? 'btn btn-ghost border-green-400 text-green-400' : 'btn w-32 btn-ghost'}
                    >Pages to Read</NavLink>
                </div>
                <div className="navbar-end  flex gap-8">
                    <button className="btn bg-green-400 text-white w-28">Sign In</button>
                    <button className="btn bg-[#59C6D2] text-white w-28">Sign Up</button>
                </div>

            </div>
        </div>
    )
}
