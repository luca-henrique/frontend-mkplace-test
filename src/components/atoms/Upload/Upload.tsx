import {useContext, useState} from 'react';
import {ContextApp} from '../../../store/ContextApp';

import {FileContainer} from '../../';

import {ProductService} from '../../../service/ProductService';

const uploadImageProduct = new ProductService();

interface IUpload {
  accept: string;
  required?: boolean;
}

export const Upload = (props: IUpload) => {
  const {file, setFile} = useContext(ContextApp);
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

  const handleSubmission = (img: any) => {
    const formData = new FormData();

    formData.append('files', img);

    fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      console.log(response);
    });
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
        required={props.required}
        style={{display: 'none'}}
        accept={props.accept}
        onChange={(evt: any) => getImgUrl(evt.target.files[0])}
      />
      <FileContainer file={file} fileName={fileName} />
    </label>
  );
};
