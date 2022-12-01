import {useState} from 'react';

import {FileContainer} from '../../';

interface IUpload {
  accept: string;
  required?: boolean;
  name?: string;
  onSubmit?: any;
  file?: any;
}

export const Upload = ({accept, file, onSubmit}: IUpload) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const getImgUrl = async (img: File) => {
    if (img) {
      setFileName(img.name);
      let url = new FileReader();
      url.readAsDataURL(img);
    }
  };

  return (
    <label
      htmlFor='imageUrl'
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
        name='imageUrl'
        id='imageUrl'
        required
        style={{display: 'none'}}
        accept={accept}
        onChange={(evt: any) => {
          getImgUrl(evt.target.files[0]);
          onSubmit(evt);
        }}
      />
      <FileContainer file={file} fileName={fileName} />
    </label>
  );
};
