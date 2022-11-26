import axios from 'axios';

import {BASE_URL_LOCAL} from './api';

export class ListShoppingService {
  private urlPath: string;

  constructor() {
    this.urlPath = `${BASE_URL_LOCAL}/list`;
  }

  async getList() {
    const {data} = await axios.get(this.urlPath);

    return data;
  }

  postList(data: any) {
    return axios.post(this.urlPath, data).then((response) => response.data);
  }
}
