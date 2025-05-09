import React from 'react'

const Home = () => {
  return (
    <div className="container my-5 p-5">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="display-4 mb-4">Welcome to Our Website</h1>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Discover Amazing Content</h2>
              <p className="card-text">
                Explore our latest features, insights, and innovative solutions.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h3 className="card-title">Feature 1</h3>
                  <p>Quick overview of our first amazing feature.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h3 className="card-title">Feature 2</h3>
                  <p>Explore the second exciting capability.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h3 className="card-title">Feature 3</h3>
                  <p>Discover our third innovative solution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
