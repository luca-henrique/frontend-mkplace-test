import {ListShoppingService} from '../service/ListShoppingService';
import {filterListByCategoryProduct} from './product';

const shoppingListService = new ListShoppingService();

export const getListCategoryProductService = async () => {
  const resp = await shoppingListService.getList();

  const dataList = filterListByCategoryProduct(resp);

  return {dataList};
};
