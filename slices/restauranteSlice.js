import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurante: null,
}

export const restauranteSlice = createSlice({
  name: 'restaurante',
  initialState,
  reducers: {
    setRestaurante: (state, action) => {
      state.restaurante = action.payload; // Substituir o valor diretamente
    },
  },
})

// Action creators são gerados para cada função de reducer
export const { setRestaurante } = restauranteSlice.actions;

export const selectRestaurant = state=> state.restaurante.restaurante;

export default restauranteSlice.reducer
