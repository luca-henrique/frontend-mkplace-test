import axios from 'axios';

import {instance} from './api';

export class ListShoppingService {
  getList(params?: string) {
    return instance
      .get('/list', {
        params: params,
      })
      .then((response) => response.data);
  }

  postList(data: any) {
    return axios.post('/list', data).then((response) => response.data);
  }
}
