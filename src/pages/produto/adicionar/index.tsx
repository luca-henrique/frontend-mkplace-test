import {useReducer} from 'react';
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

import {
  formReducer,
  initialState,
  changerFieldForm,
  resetFields,
  incrementQuantityForm,
  decrementQuantityForm,
} from '../../../hook/useReducerFormProduct';

const mockUnitType = [
  {id: 1, label: 'kg'},
  {id: 1, label: 'unit'},
];

export default function AddProductShoppingList() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const {categoryTitle, subCategory, name, type, price, quantity, imageUrl} =
    state;

  const router = useRouter();

  const {listCategory, listProducts, listSubCategory} = useInformationProduct();

  const handleFormField = (event: any) => {
    const {name, value} = event.target;
    dispatch(changerFieldForm({field: name, value}));
  };

  const handleFormFieldImage = (event: any) => {
    const {name, files} = event.target;
    dispatch(changerFieldForm({field: name, value: files[0]}));
  };

  const onSubmitItem = (event: React.SyntheticEvent) => {
    event.preventDefault();

    //router.push('/lista');

    dispatch(resetFields());
  };

  return (
    <Container padding='24px 16px'>
      <form className='d-flex flex-column ' onSubmit={onSubmitItem}>
        <Header routeDescription='Voltar para lista' path='/lista/criar' />

        <div className='mt-4' />

        <SelectInput
          name='categoryTitle'
          option={categoryTitle}
          setOption={handleFormField}
          options={listCategory}
          optionMessageDefault='Pesquise por uma categoria. Ex. Enlatados'
          title='Selecione categoria do produto *'
          required
        />

        <div className='mt-3' />

        <SelectInput
          name='subCategory'
          //@ts-ignore
          option={subCategory}
          setOption={handleFormField}
          options={listSubCategory}
          optionMessageDefault='Pesquise por uma categoria. Ex. Enlatados'
          title='Selecione uma subcategoria do produto *'
          required
        />

        <Separator />

        <CustomInput
          name='name'
          value={name}
          setValue={handleFormField}
          options={listProducts}
          required
        />

        <Separator />

        <SelectInput
          name='type'
          option={type}
          setOption={handleFormField}
          options={mockUnitType}
          optionMessageDefault='Selecione a unidade do produto *'
          title='Tipo *'
        />
        <div className='mt-3' />
        <div className='d-flex flex-row col-12 justify-content-between'>
          <div className='d-flex flex-column col-5'>
            <CountInput
              value={quantity}
              setValue={handleFormField}
              increment={() => dispatch(incrementQuantityForm())}
              decrement={() => dispatch(decrementQuantityForm())}
            />
          </div>

          <div className='d-flex flex-column col-5'>
            <PriceInput
              setValue={handleFormField}
              required
              name='price'
              value={price}
            />
          </div>
        </div>
        <div className='mt-3' />
        <Upload
          accept='.png,.jpg,.jpeg'
          required
          onSubmit={handleFormFieldImage}
          file={imageUrl}
        />
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
