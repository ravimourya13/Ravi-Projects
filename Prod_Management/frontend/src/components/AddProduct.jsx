import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({ quantity: 0 });
  const navigate = useNavigate();

  const addProduct = () => {
    axios
      .post("http://localhost:3333/prod/addprod", product)
      .then((resp) => navigate("/admin/products"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <div style={{ minWidth: '350px', maxWidth: '700px', margin: 'auto', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', borderRadius: '12px', background: '#f8f9fa', padding: '24px', border: '1px solid #dee2e6' }}>
        <h2 className="mb-4">Add Product</h2>
        <form className="d-flex flex-column align-items-center w-100">
          <div className="form-floating mb-0 w-100" style={{ borderBottom: '1px solid #dee2e6', paddingBottom: '16px' }}>
            <input
              type="text"
              className="form-control border-0"
              name="formId1"
              id="formId1"
              placeholder=""
              onChange={(e) =>
                setProduct({ ...product, name: e.target.value })
              }
            />
            <label htmlFor="formId1">Product Name</label>
          </div>

          <div className="form-floating mb-0 w-100" style={{ borderBottom: '1px solid #dee2e6', padding: '16px 0' }}>
            <input
              type="number"
              className="form-control border-0"
              name="formId2"
              id="formId2"
              placeholder=""
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
            <label htmlFor="formId2">Price</label>
          </div>

          <div className="form-floating mb-0 w-100" style={{ borderBottom: '1px solid #dee2e6', padding: '16px 0' }}>
            <input
              type="number"
              className="form-control border-0"
              name="formId3"
              id="formId3"
              placeholder=""
              onChange={(e) =>
                setProduct({ ...product, quantity: e.target.value })
              }
            />
            <label htmlFor="formId3">Quantity</label>
          </div>

          <hr className="w-100 my-4" />

          <button type="button" className="btn btn-dark w-100 mt-2" onClick={addProduct}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
