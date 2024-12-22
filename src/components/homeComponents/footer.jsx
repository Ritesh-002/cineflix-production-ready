import { Link } from "react-router-dom"
import Home from "../../pages/home"

function Footer() {
    return (
        <div className="flex footer-class flex-col justify-center items-center">
            <div className="z-50 pt-16"><img className="w-32" src="src\assets\cineflix logo.png" alt="" /></div>
            <div className="flex gap-24 z-50 p-8">
                <div className="flex flex-col gap-2">
                    <Link className="text-white font-bold" to="/">Home</Link>
                    <Link className="text-white font-bold" to="/">Contact us</Link>
                    <Link className="text-white font-bold" to="/">Terms of Services</Link>
                    <Link className="text-white font-bold" to="/">About us</Link>
                </div >
                <div className="flex flex-col gap-2">
                    <Link className="text-white font-bold" to="/">Live</Link>
                    <Link className="text-white font-bold" to="/">FAQ</Link>
                    <Link className="text-white font-bold" to="/">Premium</Link>
                    <Link className="text-white font-bold" to="/">Privacy Policy</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <Link className="text-white font-bold" to="/">You Must Watch</Link>
                    <Link className="text-white font-bold" to="/">Recent Release</Link>
                    <Link className="text-white font-bold" to="/">Top IMDB</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer