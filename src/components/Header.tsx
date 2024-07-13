import { useState } from 'react'
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const user = {
    _id: "asdsa",
    role: "",
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const logOutHandler = () => {
        setIsOpen(false);
    };
    return (
        <nav className='header'>
            <Link to={"/"}>Home</Link>
            <Link to={"/search"} onClick={() => setIsOpen(false)}><FaSearch /></Link>
            <Link to={"/cart"} onClick={() => setIsOpen(false)}><FaShoppingBag /></Link>

            {/* Checking if the user is logged in or not, if logged then we will show profile button else login button */}
            {
                user?._id ? (
                    <>
                        <button onClick={() => setIsOpen(prev => !prev)}>
                            <FaUser />
                        </button>
                        <dialog open={isOpen}>
                            <div>
                                {
                                    user.role === "admin" && (
                                        <Link to={"/admin/dashboard"} onClick={() => setIsOpen(false)}>Admin</Link>
                                    )
                                }
                                <Link to={"/orders"} onClick={() => setIsOpen(false)}>Orders</Link>
                                <button onClick={logOutHandler}><FaSignOutAlt /></button>
                            </div>
                        </dialog>
                    </>
                ) : (
                    <Link to={"/login"} onClick={() => setIsOpen(false)}><FaSignInAlt /></Link>
                )
            }
        </nav>
    )
}

export default Header
