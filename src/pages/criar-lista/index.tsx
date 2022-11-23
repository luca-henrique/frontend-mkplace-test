import {useEffect, useState} from 'react';
import {
  Header,
  Upload,
  SelectInput,
  CustomInput,
  CountInput,
  PriceInput,
} from '../../components';

import {CategoryService} from '../../service/CategoryService';
import {ProductService} from '../../service/ProductService';

import {IOption} from '../../types';

export default function CreateShoppingList() {
  const [listCategory, setListCategory] = useState<IOption[]>([]);
  const [listSubCategory, setListSubCategory] = useState<IOption[]>([]);
  const [listProducts, setListProducts] = useState<IOption[]>([]);

  const [categoryTitle, setCategoryTitle] = useState(String);
  const [subCategory, setSubCategory] = useState(String);
  const [name, setName] = useState(String);
  const [type, setType] = useState('unit');
  const [price, setPrice] = useState(String);
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);

  const getAllSelects = () => {
    const categoriesService = new CategoryService();
    const productService = new ProductService();

    const requestCategory = categoriesService.getCategoty();
    const requestSubCategory = categoriesService.getSubCategoty();
    const requestProducts = productService.getProduct();

    Promise.all([requestCategory, requestSubCategory, requestProducts]).then(
      (response) => {
        console.log(response[0]);
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

  return (
    <div className='d-flex flex-column h-100' style={{padding: '24px 16px'}}>
      <Header routeDescription='Criando Lista' />

      <div className='mt-4' />

      <SelectInput
        option={categoryTitle}
        setOption={setCategoryTitle}
        options={listCategory}
        optionMessageDefault='Pesquise por uma categoria. Ex. Enlatados'
        title='Selecione categoria do produto'
      />

      <div className='mt-3' />

      <SelectInput
        option={subCategory}
        setOption={setSubCategory}
        options={listSubCategory}
        optionMessageDefault='Pesquise por uma categoria. Ex. Enlatados'
        title='Selecione uma subcategoria do produto'
      />

      <div className='mt-3' />

      {/*TODO: fazer ajuste do type*/}
      <CustomInput value={name} setValue={setName} options={listProducts} />

      <div className='mt-3' />

      <SelectInput
        option={categoryTitle}
        setOption={setCategoryTitle}
        /*TODO: adicionar mock*/
        options={[
          {id: 1, title: 'KG'},
          {id: 1, title: 'Unidade'},
        ]}
        optionMessageDefault='Selecione a unidade do produto'
        title='Tipo'
      />

      <div className='mt-3' />

      <div className='d-flex flex-row col-12 justify-content-between'>
        <div className='d-flex flex-column col-5'>
          <CountInput value={quantity} setValue={setQuantity} />
        </div>
        <div className='d-flex flex-column col-5'>
          <PriceInput value={price} setValue={setPrice} />
        </div>
      </div>

      <Upload accept='.png,.jpg,.jpeg' />

      <button className='btn-primary'>Adicionar Item</button>
    </div>
  );
}
