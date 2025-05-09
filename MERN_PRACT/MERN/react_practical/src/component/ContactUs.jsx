import React from "react";

const ContactUs = () => {
  return (
    <div className="container-fluid bg-light py-5" style={{ minHeight: "100vh", backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,water')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg p-4" style={{ background: "rgba(255, 255, 255, 0.9)", borderRadius: "15px" }}>
            <div className="card-body">
              <h2 className="text-center text-primary mb-4">Get in Touch</h2>
              <p className="text-center text-muted">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>

              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Your Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-bold">Your Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..."></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-4 py-2 shadow-sm" style={{ transition: "0.3s" }}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
