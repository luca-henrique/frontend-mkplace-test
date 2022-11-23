import axios from 'axios';

export class ProductService {
  private urlPath: string;

  constructor() {
    this.urlPath = 'http://localhost:3000/api';
  }

  getProduct() {
    let url = `${this.urlPath}/product`;
    return axios.get(url).then((response) => response.data);
  }

  postUploadImg(data: string) {
    let url = `${this.urlPath}/upload`;
    return axios.post(url, data).then((response) => response.data);
  }
}
