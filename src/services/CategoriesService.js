import HttpCliente from './utils/HttpCliente';

import CategoryMapper from './mappers/CategoryMapper';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpCliente('http://localhost:3001');
  }

  getCategoryById(id) {
    return this.httpClient.get(`/categories/${id}`);
  }

  async listCategories() {
    const categories = await this.httpClient.get('/categories');

    return categories.map(CategoryMapper.toDomain);
  }

  createCategory(category) {
    const body = CategoryMapper.toPersistence(category);

    return this.httpClient.post('/categories', { body });
  }

  updateCategory(category) {
    const body = CategoryMapper.toPersistence(category);

    return this.httpClient.put('/categories', { body });
  }

  deleteCategory(category) {
    return this.httpClient.delete('/categories', { body: category });
  }
}

export default new CategoriesService();
