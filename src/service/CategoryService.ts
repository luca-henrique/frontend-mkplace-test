import axios from 'axios';

export class CategoryService {
  private urlPath: string;

  constructor() {
    this.urlPath = 'http://localhost:3000/api';
  }

  getCategoty() {
    let url = `${this.urlPath}/category`;
    return axios.get(url).then((response) => response.data);
  }

  getSubCategoty() {
    let url = `${this.urlPath}/subcategory`;
    return axios.get(url).then((response) => response.data);
  }
}
