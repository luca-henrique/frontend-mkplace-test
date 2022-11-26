import React, {useState} from 'react';

import {ShoppingList} from '../types';

import {IShoppingList} from '../types/product.types';

interface Props {
  list: IShoppingList;
  setList: (obj: IShoppingList) => void;
  file?: null;
  setFile?: (file: string) => void;
}

export const initialValue: Props = {
  list: {
    id: 0,
    products: [],
    qtdeCategoria: 0,
    qtdeItens: 0,
    total: 0,
  },
  setList: () => {},
  file: null,
  setFile: () => {},
};

type IFile = string | null | ArrayBuffer;

export interface IState extends ShoppingList {
  list: ShoppingList;
  setList: (lista: ShoppingList) => void;
  file: IFile;
  setFile: (value: null | ArrayBuffer | string) => void;
}

export const ContextApp = React.createContext<IState>(initialValue);

export const AppProvider = ({children}: any) => {
  const [list, setList] = useState<ShoppingList>(initialValue.list);
  const [file, setFile] = useState<null | string | ArrayBuffer>(
    initialValue.file,
  );

  return (
    <ContextApp.Provider value={{list, setList, file, setFile}}>
      {children}
    </ContextApp.Provider>
  );
};
