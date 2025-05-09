import axios from "axios";
import './style.css'
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
("");

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3333/prod/showprod", products)
      .then((resp) => setProducts(resp.data))
      .catch((err) => console.log(err));
  });

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3333/prod/deleteprod/${id}`)
      .then((resp) => navigate("/admin/products"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="table-responsive d-flex justify-content-center">
        <div style={{ minWidth: '350px', maxWidth: '700px', margin: 'auto', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', borderRadius: '12px', background: '#fff', padding: '24px' }}>
          <table className="table table-striped table-bordered table-hover align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Product Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr className="" key={product._id}>
                  <td scope="row">{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <NavLink
                      name=""
                      id=""
                      className="btn btn-dark me-2"
                      to={`edit/${product._id}`}
                      role="button"
                    >Edit
                    </NavLink>

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => deleteProduct(product._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-center mt-3">
            <NavLink
              className="btn btn-dark add-product-btn"
              role="button"
              to="add"
            >
              Add Product
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
