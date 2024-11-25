import { createSlice } from '@reduxjs/toolkit'

// Estado inicial para o slice do restaurante
const initialState = {
    restaurante: null, // Inicialmente, não há restaurante selecionado
}

// Definição do slice "restaurante"
export const restauranteSlice = createSlice({
  name: 'restaurante', // Nome slice
  initialState, // Estado inicial definido acima
  reducers: {
    // Reducer para definir o restaurante selecionado
    setRestaurante: (state, action) => {
      state.restaurante = action.payload; // Atualiza o restaurante no estado com o valor enviado na ação
    },
  },
})

// Exporta a ação gerada automaticamente para o reducer
export const { setRestaurante } = restauranteSlice.actions;

// Seletor para acessar o restaurante selecionado no estado global
export const selectRestaurant = (state) => state.restaurante.restaurante;

// Exportação do reducer para ser incluído no store do Redux
export default restauranteSlice.reducer;
