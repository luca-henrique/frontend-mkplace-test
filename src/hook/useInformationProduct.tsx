import {useEffect, useState} from 'react';
import {IOption} from '../types';

import {
  getCategories,
  getProducts,
  getSubCategories,
} from '../utils/serviceCategories';

export const useInformationProduct = () => {
  const [listCategory, setListCategory] = useState<IOption[]>([]);
  const [listSubCategory, setListSubCategory] = useState<IOption[]>([]);
  const [listProducts, setListProducts] = useState<IOption[]>([]);

  const getAllSelects = async () => {
    const {categories} = await getCategories();
    const {subcategories} = await getSubCategories();
    const {products} = await getProducts();

    setListCategory(categories);
    setListSubCategory(subcategories);
    setListProducts(products);
  };

  useEffect(() => {
    getAllSelects();
  }, []);

  return {listCategory, listProducts, listSubCategory};
};
