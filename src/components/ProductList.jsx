import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = ({ onRefresh }) => {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedQuantity, setEditedQuantity] = useState(0);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/products", {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => { getProducts(); }, [onRefresh]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      getProducts();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleEditClick = (id, currentQty) => {
    setEditId(id);
    setEditedQuantity(currentQty);
  };

  const handleSaveClick = async (id) => {
    try {
      await axios.put(`http://localhost:8000/api/products/${id}/quantity`, { quantity: editedQuantity }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setEditId(null);
      getProducts();
    } catch (error) {
      console.error("Error updating quantity", error);
    }
  };

  return (
    <div className="container">
      <h2>📦 Product Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td><img src={p.image_url} alt={p.name} /></td>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>
                {editId === p._id ? (
                  <input
                  className="input"
                    type="number"
                    value={editedQuantity}
                    onChange={(e) => setEditedQuantity(Number(e.target.value))}
                  />
                ) : (
                  p.quantity
                )}
              </td>
              <td style={{ color: '#555' }}>{p.description}</td>
              <td>
                {editId === p._id ? (
                  <button className="b" onClick={() => handleSaveClick(p._id)}>💾 Save</button>
                ) : (
                  <button className="b" onClick={() => handleEditClick(p._id, p.quantity)}>✏️ Edit</button>
                )}
                <button className="b" onClick={() => handleDelete(p._id)}>🗑️ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
