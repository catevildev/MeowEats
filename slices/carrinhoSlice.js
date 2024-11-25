import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect';

// Estado inicial para o slice do carrinho
const initialState = {
    items: [], // Array para armazenar os itens do carrinho
}


// Definição do slice "carrinho"
export const carrinhoSlice = createSlice({
  name: 'carrinho', // Nome slice
  initialState, // Estado inicial
  reducers: {
    // Reducer para adicionar itens ao carrinho
    adicionarCarrinho: (state, action) => {
      state.items = [...state.items, action.payload]; // Adiciona o novo item ao array de itens
    },
    // Reducer para remover itens do carrinho
    removerCarrinho: (state, action) => {
      let newCart = [...state.items]; // Cria uma cópia do array atual de itens
      let itemIndex = state.items.findIndex(item => item._id === action.payload.id); // Localiza o índice do item pelo ID
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1); // Remove o item encontrado do array
      } else {
        console.log("Não foi possível remover o item, pois ele não está no carrinho!"); // Mensagem de erro caso o item não exista
      }
      state.items = newCart; // Atualiza o estado com o novo array
    },
    // Reducer para esvaziar completamente o carrinho
    vazioCarrinho: (state, action) => {
        state.items = []; // Reseta o array de itens para vazio
    },
  },
})


// Exportação das ações geradas automaticamente para os reducers
export const { adicionarCarrinho, removerCarrinho, vazioCarrinho } = carrinhoSlice.actions;

// Seletor para obter todos os itens do carrinho
export const selecionarItensCarrinho = (state) => state.carrinho.items;

// Seletor memoizado para obter itens específicos pelo ID
export const selecionarItensCarrinhoId = createSelector(
  [selecionarItensCarrinho, (state, id) => id], // Recebe o estado atual e o ID como entrada
  (items, id) => items.filter((item) => item._id === id) // Filtra os itens que correspondem ao ID
);

// Seletor para calcular o valor total do carrinho
export const selecionarTotalCarrinho = state => 
  state.carrinho.items.reduce((total, item) => total + item.price, 0); // Soma o preço de todos os itens

// Exportação do reducer do slice
export default carrinhoSlice.reducer;
