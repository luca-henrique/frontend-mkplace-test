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

  postUploadImg(data: string) {
    let url = `${this.urlPath}/upload`;
    return axios.post(url, data).then((response) => response.data);
  }
}
