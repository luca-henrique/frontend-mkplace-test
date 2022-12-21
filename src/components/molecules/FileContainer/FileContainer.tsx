import {CloudArrowUp, File} from 'phosphor-react';

export const FileContainer = ({file, fileName}: any) => {
  return (
    <>
      {file ? (
        <div className='d-flex align-items-center flex-column'>
          <File size={32} weight='bold' />
          <div className='text-m-title ms-2 text-center'>{fileName}</div>
        </div>
      ) : (
        <div className='d-flex flex-column align-items-center justify-items-center'>
          <CloudArrowUp size={40} weight='bold' color='#5D5D5B' />

          <div className='d-flex ms-2 flex-column'>
            <span className='text-m-title text-center'>
              Clique aqui para fazer o upload do arquivo
            </span>
            <span className='text-m '>
              PNG, GIF ou JPEG. Tamanho máximo de arquivo 1 Mb.
            </span>
          </div>
        </div>
      )}
    </>
  );
};
