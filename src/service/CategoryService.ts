import axios from 'axios';

export class CategoryService {
  private urlPath: string;

  constructor() {
    this.urlPath = 'http://localhost:3000/api';
  }

  async getCategoty() {
    const {data} = await axios.get(`${this.urlPath}/category`);
    return data;
  }

  async getSubCategoty() {
    const {data} = await axios.get(`${this.urlPath}/subcategory`);
    return data;
  }
}
