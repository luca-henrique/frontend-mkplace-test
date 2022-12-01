import {IProduct} from '../types';

export enum ActionType {
  SET_FIELD,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  RESET_FIELDS,
}

export const initialState: IProduct = {
  categoryTitle: '',
  name: '',
  quantity: 0,
  type: '',
  price: 0,
  imageUrl: '',
  subCategory: '',
};

export function formReducer(state = initialState, action: any) {
  switch (action.type) {
    case ActionType.SET_FIELD: {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    }

    case ActionType.INCREMENT_QUANTITY: {
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    }

    case ActionType.DECREMENT_QUANTITY: {
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    }

    case ActionType.RESET_FIELDS: {
      return {
        ...initialState,
      };
    }
  }
  return state;
}

export const changerFieldForm = (field: any) => ({
  type: ActionType.SET_FIELD,
  payload: field,
});

export const incrementQuantityForm = () => ({
  type: ActionType.INCREMENT_QUANTITY,
});

export const decrementQuantityForm = () => ({
  type: ActionType.DECREMENT_QUANTITY,
});

export const resetFields = () => ({
  type: ActionType.RESET_FIELDS,
});
