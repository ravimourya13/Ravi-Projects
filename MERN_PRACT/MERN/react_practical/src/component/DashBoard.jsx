import React, { useState } from 'react'

const DashBoard = () => {
    const [user, setUser] = useState("");

    return (
        <>
            <div className="container text-center p-4 d-flex justify-content-between">
                <button className='btn btn-outline-success' onClick={() => setUser("user")}>User Login</button>
                <button className='btn btn-outline-success' onClick={() => setUser("admin")}>Admin Login</button>
            </div>

            {(user == "user") && <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <div className="card shadow-lg text-center">
                        <div className="card-body">
                            <h2 className="card-title">Welcome, Back! On User DashBoard</h2>
                            <p className="card-text">We're glad to have you on the dashboard.</p>
                            <a href="#" className="btn btn-primary">Go to Profile</a>
                        </div>
                    </div>
                </div>
            </div>
            }

            {user === "admin" && (
                <div className="row justify-content-center mt-4">
                    <div className="col-md-6">
                        <div className="card shadow-lg text-center bg-light">
                            <div className="card-body">
                                <h2 className="card-title">Welcome, Admin!</h2>
                                <p className="card-text">
                                    You have full control over the system. Manage users and settings below.
                                </p>
                                <a href="#" className="btn btn-primary">Manage Users</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DashBoard
