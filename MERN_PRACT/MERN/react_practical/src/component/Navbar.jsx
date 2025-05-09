import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav
                className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">ContactUs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="form" aria-current="page">Form</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="counter"> Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="button">Buttons</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="card">Card</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="dashboard">Dashboard</Link>
                            </li>
                        </ul>
                        <form className="d-flex my-2 my-lg-0">
                            <input
                                className="form-control me-sm-2"
                                type="text"
                                placeholder="Search" />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
