import Image from 'next/image';
import Link from 'next/link';
import {ICONS} from '../../../assets';

import {Title} from '../..';

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

      <Title style={{marginLeft: '16px'}}>{routeDescription}</Title>
    </header>
  );
};
