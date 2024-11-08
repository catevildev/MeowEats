import { configureStore } from '@reduxjs/toolkit';
import carrinhoReducer from './slices/carrinhoSlice'; // Importando os reducers corretamente
import restauranteReducer from './slices/restauranteSlice';

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    restaurante: restauranteReducer
  },
});
