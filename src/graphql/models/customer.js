export default class Customer {
  constructor(connector) {
    this.connector = connector;
  }
  
  getAll() {
    // /customers
    return this.connector.get("/customers");
  }

  getById(id) {
    // customer/id
    return  this.connector.get(`/customer/${id}`);
  }
}