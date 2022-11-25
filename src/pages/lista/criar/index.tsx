import {useContext, useState} from 'react';
import {
  Header,
  Upload,
  SelectInput,
  CustomInput,
  CountInput,
  PriceInput,
  Separator,
} from '../../../components';

import {useRouter} from 'next/router';

import {useInformationProduct} from '../../../hook/useInformationProduct';
import {ContextApp} from '../../../store/ContextApp';
import {IProduct, ShoppingList} from '../../../types';

export default function CreateShoppingList() {
  const [categoryTitle, setCategoryTitle] = useState(String);
  const [subCategory, setSubCategory] = useState(String);
  const [name, setName] = useState(String);
  const [type, setType] = useState('unit');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const {file, setFile, list, setList} = useContext(ContextApp);

  const router = useRouter();

  const {listCategory, listProducts, listSubCategory} = useInformationProduct();

  const getQtdeCategorys = (products: IProduct[]) => {
    let arrayCategorys = new Array();
    products.forEach((e) => {
      if (!arrayCategorys.includes(e.categoryTitle))
        arrayCategorys.push(e.categoryTitle);
    });
    return arrayCategorys;
  };

  const clearForm = () => {
    setCategoryTitle('');
    setSubCategory('');
    setName('');
    setType('unit');
    setPrice(0);
    setQuantity(1);
    setFile(null);
  };

  const onSubmitItem = (event: React.SyntheticEvent) => {
    event.preventDefault();

    //@ts-ignore
    let arrayProducts: IProduct[] = list?.products;
    arrayProducts?.push({
      categoryTitle: categoryTitle,
      name: name,
      type: type,
      price: price,
      quantity: quantity,
      imageUrl: file,
    });

    const arrayCategorys = getQtdeCategorys(arrayProducts);

    let dataForm: ShoppingList = {
      ...list,
      products: arrayProducts,
      qtdeCategoria: arrayCategorys.length,
      qtdeItens: arrayProducts?.length,
    };

    setList(dataForm);

    router.push('/lista');

    clearForm();
  };

  return (
    <form
      className='d-flex flex-column h-100 overflow-auto'
      style={{padding: '24px 16px'}}
      onSubmit={onSubmitItem}
    >
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
      <Separator />
      {
        //@ts-ignore
        <CustomInput value={name} setValue={setName} options={listProducts} />
      }

      <Separator />

      <SelectInput
        option={type}
        setOption={setType}
        /*TODO: adicionar mock*/
        options={[
          {id: 1, title: 'kg'},
          {id: 1, title: 'unit'},
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
          {
            //@ts-ignore
            <PriceInput value={price} setValue={setPrice} />
          }
        </div>
      </div>
      <div className='mt-3' />
      <Upload accept='.png,.jpg,.jpeg' />
      <div className='mt-3' />
      <button className='btn-primary' type='submit'>
        Adicionar Item
      </button>
    </form>
  );
}
