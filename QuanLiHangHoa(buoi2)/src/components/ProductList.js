import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setProducts } from '../redux/actions';
import { Link } from 'react-router-dom';

function ProductList() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchQuery);
  const products = useSelector((state) => state.products);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  useEffect(() => {
    // Example of static data, replace with API call if needed
    const fetchedProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
    ];
    dispatch(setProducts(fetchedProducts));
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Tìm kiếm hàng hóa..."
      />
      {filteredProducts.length === 0 && <p>Không tìm thấy hàng hóa nào!</p>}
      <div>
        <h2>Danh Sách Hàng Hóa</h2>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <Link to="/add-product">
          <button>Thêm Hàng Hóa</button>
        </Link>
      </div>
      <div>
        <button disabled>Trang trước</button>
        <span>Trang 1 / 0</span>
        <button disabled>Trang sau</button>
      </div>
    </div>
  );
}

export default ProductList;
