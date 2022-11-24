import {CloudArrowUp, File} from 'phosphor-react';
import {useState} from 'react';

interface IUpload {
  accept: string;
}

export const Upload = (props: IUpload) => {
  const [file, setFile] = useState<null | string | ArrayBuffer>();
  const [fileName, setFileName] = useState<string | null>(null);

  const getImgUrl = async (img: File) => {
    if (img) {
      setFileName(img.name);
      let url = new FileReader();
      url.readAsDataURL(img);
      url.onload = (e: any) => {
        let textImg = url.result;
        setFile(textImg);
      };
    }
  };

  return (
    <label
      htmlFor='upload'
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderStyle: 'dashed',
        padding: '27px 26px 16px 26px',
        borderRadius: '10px',
        borderColor: '#5D5D5B',
        borderWidth: '1px',
      }}
    >
      <input
        type='file'
        name='upload'
        id='upload'
        style={{display: 'none'}}
        accept={props.accept}
        onChange={(evt: any) => getImgUrl(evt.target.files[0])}
      />
      <FileContainer file={file} fileName={fileName} />
    </label>
  );
};

const FileContainer = ({file, fileName}: any) => {
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
