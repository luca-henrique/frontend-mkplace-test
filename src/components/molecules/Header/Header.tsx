import Image from 'next/image';
import {ICONS} from '../../../assets';

import {HeaderTitle} from '../..';
import {useRouter} from 'next/router';

const {arrowLeft} = ICONS;

interface IHeader {
  routeDescription: string;
  path?: string;
}

export const Header = ({routeDescription, path}: IHeader) => {
  const router = useRouter();

  return (
    <header className='d-flex'>
      <Image
        src={arrowLeft}
        alt='Voltar'
        onClick={() => router.push(path ? `${path}` : '/')}
      />

      <HeaderTitle style={{marginLeft: '16px'}}>{routeDescription}</HeaderTitle>
    </header>
  );
};
