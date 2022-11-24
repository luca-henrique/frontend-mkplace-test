import {useState} from 'react';
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
import {selectAuthState, setAuthState} from '../../../store/authSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function CreateShoppingList() {
  const [categoryTitle, setCategoryTitle] = useState(String);
  const [subCategory, setSubCategory] = useState(String);
  const [name, setName] = useState(String);
  const [type, setType] = useState('unit');
  const [price, setPrice] = useState(String);
  const [quantity, setQuantity] = useState(1);

  const router = useRouter();
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  console.log(authState);

  const {listCategory, listProducts, listSubCategory, loading} =
    useInformationProduct();

  const onSubmitItem = (event) => {
    event.preventDefault();

    router.push('/lista');
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

      {/*TODO: fazer ajuste do type*/}
      <CustomInput value={name} setValue={setName} options={listProducts} />

      <Separator />

      <SelectInput
        option={type}
        setOption={setType}
        /*TODO: adicionar mock*/
        options={[
          {id: 1, title: 'KG'},
          {id: 1, title: 'Un'},
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
          {/*TODO: ajustar espaçamentos internos do input*/}
          <PriceInput value={price} setValue={setPrice} />
        </div>
      </div>

      <div className='mt-3' />

      <Upload accept='.png,.jpg,.jpeg' />

      <div className='mt-3' />

      <button className='btn-primary' type='submit'>
        Adicionar Item
      </button>

      <div className='mt-5' />
      <div className='mt-3' />
    </form>
  );
}
