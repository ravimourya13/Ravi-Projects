import React from "react";

const Form = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
            <div className="col-md-6 col-lg-5">
                <div className="card shadow-lg p-4 rounded-4">
                    <div className="card-body">
                        <h2 className="text-center text-primary mb-4">User Information</h2>

                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                <label htmlFor="name">Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" name="age" id="age" placeholder="Age" />
                                <label htmlFor="age">Age</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary w-100 py-2 shadow-sm" style={{ transition: "0.3s" }}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
