import { Link, NavLink } from "react-router-dom"
import '../../css/navbar.css'

function Navbar() {
    return (
        <div className="flex justify-between px-4 md:px-10 py-2.5">
            <div className="z-50">
                <img className="w-24 md:w-32" src="src\assets\cineflix_logo.png" alt="" />
            </div>
            <div className="hidden md:flex z-50 gap-6">
                <NavLink exact to="/" className="text-white text-lg" activeClassName="font-bold">
                    Home
                </NavLink>
                <NavLink to="/movies" className="text-white text-lg active:text-cyan-700" activeClassName="font-bold text-cyan-700">
                    Movies
                </NavLink>
                <NavLink to="/tvseries" className="text-white text-lg" activeClassName="font-bold text">
                    TV Series
                </NavLink>
            </div>
            <div className="md:hidden z-50">
                <button className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>

    )
}

export default Navbar