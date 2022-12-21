import {CategoryService} from '../service/CategoryService';
import {ProductService} from '../service/ProductService';

const categoriesService = new CategoryService();
const productService = new ProductService();

export interface IOption {
  id: number;
  name: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface ISelect {
  id: number;
  label: string;
}

export const getCategories = async () => {
  const requestCategory = await categoriesService.getCategoty();

  const categories: ISelect[] = [];

  requestCategory.map((category: ICategory) => {
    categories.push({id: category.id, label: category.title});
  });

  return {categories};
};

export const getSubCategories = async () => {
  const requestSubCategory = await categoriesService.getSubCategoty();

  const subcategories: ISelect[] = [];

  requestSubCategory.map((category: ICategory) => {
    subcategories.push({id: category.id, label: category.title});
  });

  return {subcategories};
};

export const getProducts = async () => {
  const requestProducts = await productService.getProduct();

  const products: ISelect[] = [];

  requestProducts.map((product: IOption) => {
    products.push({id: product.id, label: product.name});
  });

  return {products};
};
