import delay from '../utils/delay';
import HttpCliente from './utils/HttpCliente';

class ContactsService {
  constructor() {
    this.httpClient = new HttpCliente('http://localhost:3001');
  }

  async getContactById(id) {
    await delay(3000);
    return this.httpClient.get(`/contacts/${id}`);
  }

  listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/?orderBy=${orderBy}`, {
      headers: {
        Authorization: 'token',
      },
    });
  }

  createContact(contact) {
    return this.httpClient.post('/contacts', { body: contact });
  }

  updateContact(id, contact) {
    return this.httpClient.put(`/contacts/${id}`, { body: contact });
  }

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
