import React, { useState } from 'react';
import axios from 'axios';

const UpdateQuantityForm = () => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(0);

  const updateQuantity = async () => {
    await axios.put(`http://localhost:8000/api/products/${productId}/quantity`, { quantity }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    alert('Quantity updated');
  };

  return (
    <div>
      <h2>Update Quantity</h2>
      <input style={{borderRadius:'4px',fontSize:'16px',marginRight:'12px'}} placeholder="Product ID" onChange={(e) => setProductId(e.target.value)} />
      <input style={{borderRadius:'4px',fontSize:'16px',marginRight:'12px'}} type="number" placeholder="New Quantity" onChange={(e) => setQuantity(Number(e.target.value))} />
      <button style={{borderRadius:'4px',fontSize:'16px',marginRight:'12px'}} onClick={updateQuantity}>Update</button>
    </div>
  );
};

export default UpdateQuantityForm;
