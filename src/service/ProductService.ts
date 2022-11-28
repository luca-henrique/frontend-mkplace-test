import axios from 'axios';

export class ProductService {
  private urlPath: string;

  constructor() {
    this.urlPath = 'http://localhost:3000/api';
  }

  async getProduct() {
    const {data} = await axios.get(`${this.urlPath}/product`);

    return data;
  }

  async postUploadImg(data: any) {
    let url = `${this.urlPath}/upload`;
    console.log(data);
    return axios.post(url, data).then((response) => response.data);
  }
}
