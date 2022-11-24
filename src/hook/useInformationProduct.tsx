import {useEffect, useState} from 'react';
import {CategoryService} from '../service/CategoryService';
import {ProductService} from '../service/ProductService';
import {IOption} from '../types';

const categoriesService = new CategoryService();
const productService = new ProductService();

export const useInformationProduct = () => {
  const [listCategory, setListCategory] = useState<IOption[]>([]);
  const [listSubCategory, setListSubCategory] = useState<IOption[]>([]);
  const [listProducts, setListProducts] = useState<IOption[]>([]);

  const [loading, setLoading] = useState(true);

  const getAllSelects = () => {
    const requestCategory = categoriesService.getCategoty();
    const requestSubCategory = categoriesService.getSubCategoty();
    const requestProducts = productService.getProduct();

    Promise.all([requestCategory, requestSubCategory, requestProducts]).then(
      (response) => {
        setListCategory(response[0]);
        setListSubCategory(response[1]);
        setListProducts(response[2]);
      },
    );
    setLoading(false);
  };

  useEffect(() => {
    getAllSelects();
  }, []);

  return {listCategory, listProducts, listSubCategory, loading};
};
