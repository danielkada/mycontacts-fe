import HttpCliente from './utils/HttpCliente';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpCliente('http://localhost:3001');
  }

  listCategories() {
    return this.httpClient.get('/categories');
  }
}

export default new CategoriesService();
