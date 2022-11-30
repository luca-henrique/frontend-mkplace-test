import {useContext, useState} from 'react';
import {
  Header,
  Upload,
  SelectInput,
  CustomInput,
  CountInput,
  PriceInput,
  Separator,
  Container,
} from '../../../components';

import {useRouter} from 'next/router';

import {useInformationProduct} from '../../../hook/useInformationProduct';
import {ContextApp} from '../../../store/ContextApp';
import {IProduct} from '../../../types';

import useLocalStorage from '../../../hook/useLocalStorage';

const mockUnitType = [
  {id: 1, label: 'kg'},
  {id: 1, label: 'unit'},
];

export default function AddProductShoppingList() {
  const [categoryTitle, setCategoryTitle] = useState(String);
  const [subCategory, setSubCategory] = useState(String);
  const [name, setName] = useState(String);
  const [type, setType] = useState('unit');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [productList, setProductList] = useLocalStorage('productList', '');

  const {file, setFile} = useContext(ContextApp);

  const router = useRouter();

  const {listCategory, listProducts, listSubCategory} = useInformationProduct();

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

    let arrayProducts: IProduct[] = productList.length ? productList : [];

    arrayProducts?.push({
      categoryTitle: categoryTitle,
      name: name,
      type: type,
      price: price,
      quantity: quantity,
      imageUrl: file,
    });

    setProductList(arrayProducts);
    router.push('/lista');

    clearForm();
  };

  return (
    <Container padding='24px 16px'>
      <form className='d-flex flex-column ' onSubmit={onSubmitItem}>
        <Header routeDescription='Voltar para lista' path='/lista/criar' />

        <div className='mt-4' />

        <SelectInput
          option={categoryTitle}
          setOption={setCategoryTitle}
          options={listCategory}
          optionMessageDefault='Pesquise por uma categoria. Ex. Enlatados'
          title='Selecione categoria do produto *'
          required
        />

        <div className='mt-3' />

        <SelectInput
          option={subCategory}
          setOption={setSubCategory}
          options={listSubCategory}
          optionMessageDefault='Pesquise por uma categoria. Ex. Enlatados'
          title='Selecione uma subcategoria do produto *'
          required
        />

        <Separator />

        <CustomInput
          value={name}
          setValue={setName}
          //@ts-ignore
          options={listProducts}
          required
        />

        <Separator />

        <SelectInput
          option={type}
          setOption={setType}
          options={mockUnitType}
          optionMessageDefault='Selecione a unidade do produto *'
          title='Tipo *'
        />
        <div className='mt-3' />
        <div className='d-flex flex-row col-12 justify-content-between'>
          <div className='d-flex flex-column col-5'>
            <CountInput value={quantity} setValue={setQuantity} />
          </div>

          <div className='d-flex flex-column col-5'>
            <PriceInput setValue={setPrice} required />
          </div>
        </div>
        <div className='mt-3' />
        <Upload accept='.png,.jpg,.jpeg' required />
        <div className='mt-3' />
        <button
          className='btn-primary'
          type='submit'
          data-testid='form-button-submit-product-test-id'
        >
          Adicionar Item
        </button>
      </form>
    </Container>
  );
}
