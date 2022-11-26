import {ListShoppingService} from '../service/ListShoppingService';
import {filterListByCategoryProduct} from './product';

const shoppingListService = new ListShoppingService();

export const getListCategoryProductService = async () => {
  let loading = true;
  const resp = await shoppingListService.getList();

  const dataList = filterListByCategoryProduct(resp);

  loading = false;

  return {dataList, loading};
};
