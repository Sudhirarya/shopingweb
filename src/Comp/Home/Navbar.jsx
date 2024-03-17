import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import logo from '../../img/logo_white.png'


const Navbar = () => {
    const { totalItems } = useCart();
    return (
        <nav className="navbar p-0 navbar-expand-lg  navbar-dark sticky-top">
            <div className="container-fluid" id='navbar'>
                <Link id='logo' className="navbar-brand" to="/">
                    <img className='logo' src={logo} alt="Operal-Shoping" />
                </Link>
                <button className="navbar-toggler p-1 m-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink id='link' className="nav-link px-2  p-1" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink id='link' className="nav-link px-2 p-1 " aria-current="page" to="/man">Man</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink id='link' className="nav-link px-2 p-1" aria-current="page" to="/woman">Woman</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink id='link' className="nav-link px-2 p-1" aria-current="page" to="/kids">Kids</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink id='link' className="nav-link px-2 p-1" aria-current="page" to="/electronic">Electronic</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex gap-4 me-3">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link type="button" to='/Cart' className=" position-relative pt-2">
                            <i className="fa-solid fa-cart-shopping " style={{ color: 'rgb(245, 241, 234)', fontSize: '20px' }}></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" >
                                {totalItems}</span>

                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar