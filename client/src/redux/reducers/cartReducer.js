
import * as actionType from '../constants/cartConstant';


export const cartReducer =(state  = {cartItems: [] }, action) =>{

    switch(action.type){
         case actionType.ADD_TO_CART:
           const item = action.payload;
           const exist = state.cartItems.find(Product => Product.id === item.id);
           if(exist){
               return{ ...state, cartItems: state.cartItems.map(data => data.Product === exist.Product ? item: data)}
           }else{
               return{ ...state,cartItems: [...state.cartItems,item]}
           }
   
           case actionType.REMOVE_FROM_CART:
               return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)}
   
               default:
                   return state;
           
      }   
   }