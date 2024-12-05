import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
  reducer: {
    // Nếu có nhiều reducer, bạn có thể thêm chúng vào đây theo từng key
    product: reducer
  }
});

export default store;
