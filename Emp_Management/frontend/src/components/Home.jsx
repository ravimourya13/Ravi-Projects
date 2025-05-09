import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h2>Welcome to Our Product Management System</h2>
      <p>We are here to help you manage your products efficiently.</p>
      <div className="mt-5 p-4 bg-light rounded shadow-sm">
        <h4>About Our Product Management System</h4>
        <p>
          Our Product Management System is designed to streamline your workflow and make managing products simple and effective. Easily add, update, and track your products in one place. Enjoy features like real-time updates, intuitive dashboards, and secure data management. Whether you are a small business or a large enterprise, our system adapts to your needs and helps you stay organized and productive.
        </p>
        <ul className="text-start d-inline-block">
          <li>Easy product addition and editing</li>
          <li>Comprehensive product tracking</li>
          <li>Modern, user-friendly interface</li>
          <li>Secure and reliable data storage</li>
          <li>Responsive support and regular updates</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
