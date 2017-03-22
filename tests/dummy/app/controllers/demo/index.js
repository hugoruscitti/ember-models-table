import Ember from 'ember';

export default Ember.Controller.extend({
  dinamicallyRows: Ember.A([
    {
      id: 1,
      nombre: 'demo',
      apellido: 'otro'
    }
  ]),

  actions: {
    addRandomData() {
      let newID = this.get('dinamicallyRows.length') + 1;
      this.get("dinamicallyRows").pushObject({id: newID, nombre: "123", apellido: 'asd'});
    }
  }
});
