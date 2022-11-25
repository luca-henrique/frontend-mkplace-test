import axios from 'axios';

import {BASE_URL} from './api';

const headers = {'Access-Control-Allow-Origin': '*', origin: '*'};

export class ListShoppingService {
  private urlPath: string;

  constructor() {
    this.urlPath = `${BASE_URL}/list`;
  }

  getList(params?: string) {
    return axios
      .get(this.urlPath, {
        params: params,
        headers,
      })
      .then((response) => response.data);
  }

  postList(data: any) {
    return axios.post(this.urlPath, data).then((response) => response.data);
  }
}
