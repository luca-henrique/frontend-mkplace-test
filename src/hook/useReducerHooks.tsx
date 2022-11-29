import {useContext} from 'react';
import {ShoppingListContext} from '../store/context';

export const useReducerHook = () => {
  const {dispatch, state} = useContext(ShoppingListContext);

  return {state, dispatch};
};
