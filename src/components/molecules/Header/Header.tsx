import Image from 'next/image';
import Link from 'next/link';
import {ICONS} from '../../../assets';

const {arrowLeft} = ICONS;

interface IHeader {
  routeDescription: string;
}

export default function Header(props: IHeader) {
  return (
    <header className='d-flex col-12 align-items-center'>
      <Image src='/mkplate-icon.png' alt='logo' width={80} height={80} />

      <Link href={'/'}>
        <Image src={arrowLeft} alt='Voltar' />
      </Link>

      <h1 className='p-0 m-0'>{props.routeDescription}</h1>
    </header>
  );
}
