import axios from 'axios';

import {BASE_URL_LOCAL} from './api';

export class ListShoppingService {
  private urlPath: string;

  constructor() {
    this.urlPath = `${BASE_URL_LOCAL}/list`;
  }

  getList() {
    return axios.get(this.urlPath).then((response) => response.data);
  }

  postList(data: any) {
    return axios.post(this.urlPath, data).then((response) => response.data);
  }
}
