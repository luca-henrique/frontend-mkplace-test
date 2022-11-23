import Image from 'next/image';
import Link from 'next/link';
import {ICONS} from '../../../assets';

import {HeaderTitle} from '../..';

const {arrowLeft} = ICONS;

interface IHeader {
  routeDescription: string;
}

export const Header = ({routeDescription}: IHeader) => {
  return (
    <header className='d-flex'>
      <Link href={'/'}>
        <Image src={arrowLeft} alt='Voltar' />
      </Link>

      <HeaderTitle style={{marginLeft: '16px'}}>{routeDescription}</HeaderTitle>
    </header>
  );
};
