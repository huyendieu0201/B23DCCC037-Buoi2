import React, { useState } from 'react';

function AddProduct() {
  const [productName, setProductName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Product "${productName}" has been added!`);
    // You would typically dispatch an action here to add the product to Redux
    setProductName('');
  };

  return (
    <div>
      <h2>Thêm Hàng Hóa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Tên sản phẩm"
        />
        <button type="submit">Lưu</button>
      </form>
    </div>
  );
}

export default AddProduct;
