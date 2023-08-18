export default class Dealer {
  constructor(connector) {
    this.connector = connector;
  }
  
  getById(id) {
    // dealer/id
    return  this.connector.get(`/dealer/${id}`);
  }
}