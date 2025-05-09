import React from 'react'

const Card = () => {
    return (
        <>
            <div className="row justify-content-center align-items-center g-2 my-5">
                <div className="col-4">
                    <div className="card rounded shadow-lg">
                        <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
                        <div className="card-body">
                            <h4 className="card-title">Lorem ipsum dolor sit amet.</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, porro.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
