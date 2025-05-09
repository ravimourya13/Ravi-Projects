# Toy Store MERN Application

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for an online toy store.

## Features

- User authentication (register, login, logout)
- Browse toys with hover effects
- Add to cart functionality
- Shopping cart management
- Billing and checkout
- Admin dashboard
- Contact page with store information

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd toy-store
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/toy_store
JWT_SECRET=your-secret-key
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user
- POST `/api/auth/logout` - Logout user

### Toys
- GET `/api/toys` - Get all toys
- GET `/api/toys/:id` - Get toy by ID
- POST `/api/toys` - Create new toy (admin only)
- PUT `/api/toys/:id` - Update toy (admin only)
- DELETE `/api/toys/:id` - Delete toy (admin only)

### Cart
- GET `/api/cart` - Get user's cart
- POST `/api/cart/add` - Add item to cart
- PUT `/api/cart/update/:toyId` - Update cart item quantity
- DELETE `/api/cart/remove/:toyId` - Remove item from cart
- POST `/api/cart/checkout` - Checkout

### Admin
- GET `/api/admin/info` - Get admin information
- GET `/api/admin/stats` - Get store statistics (admin only)
- GET `/api/admin/users` - Get all users (admin only)

## Technologies Used

- Frontend:
  - React
  - Material-UI
  - React Router
  - Axios
  - Vite

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT Authentication
  - bcryptjs

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 