import React from 'react'

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <h1 className="display-4 mb-4">About Our Company</h1>
          <p className="lead text-muted mb-5">
            We are passionate innovators dedicated to creating meaningful solutions that transform industries.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h3 className="card-title">Our Team</h3>
              <p className="card-text text-muted">
                A diverse group of professionals united by a shared vision of innovation and excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text text-muted">
                To deliver cutting-edge solutions that solve complex challenges and drive meaningful progress.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h3 className="card-title">Our Values</h3>
              <p className="card-text text-muted">
                Integrity, innovation, collaboration, and continuous learning are at the core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-8 offset-lg-2">
          <h2 className="text-center mb-4">Our Story</h2>
          <p className="text-muted text-center">
            Founded in 2020, our company began with a simple yet powerful idea:
            to create technology that makes a difference. From a small startup
            to a growing enterprise, we've remained committed to our core principles.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-8 offset-lg-2 text-center">
          <h2 className="mb-4">Meet Our Leadership</h2>
          <div className="d-flex justify-content-center gap-4">
            <div>
              <img
                src="/api/placeholder/150/150"
                className="rounded-circle mb-2"
                alt="Leadership Team Member"
              />
              <h4>Jane Doe</h4>
              <p className="text-muted">CEO & Founder</p>
            </div>
            <div>
              <img
                src="/api/placeholder/150/150"
                className="rounded-circle mb-2"
                alt="Leadership Team Member"
              />
              <h4>John Smith</h4>
              <p className="text-muted">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
