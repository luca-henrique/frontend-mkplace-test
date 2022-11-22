import axios from 'axios';

export class ListShoppingService {
  private urlPath: string;

  constructor() {
    this.urlPath = 'http://localhost:3000/api/list';
  }

  getList(params?: string) {
    return axios
      .get(this.urlPath, {
        params: params,
      })
      .then((response) => response.data);
  }

  postList(data: any) {
    return axios.post(this.urlPath, data).then((response) => response.data);
  }
}
