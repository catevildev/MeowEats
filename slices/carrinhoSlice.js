import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect';

const initialState = {
    items: [],
}

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarCarrinho: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removerCarrinho: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(item=> item._id==action.payload.id);
      if(itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("Não foi possivel remover o item pois não esta no carrinho!");
      }
      state.items = newCart;
    },
    vazioCarrinho: (state, action) => {
        state.items = [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { adicionarCarrinho, removerCarrinho, vazioCarrinho } = carrinhoSlice.actions;

// Selecionar todos os itens do carrinho
export const selecionarItensCarrinho = (state) => state.carrinho.items;

// Memoizar o seletor que retorna os itens específicos por ID
export const selecionarItensCarrinhoId = createSelector(
  [selecionarItensCarrinho, (state, id) => id],
  (items, id) => items.filter((item) => item._id === id)
);

export const selecionarTotalCarrinho = state=> state.carrinho.items.reduce((total, item)=> total=total+item.price, 0);

export default carrinhoSlice.reducer