import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return {
      rows: [
        {
          id: 1,
          nombre: "Don",
          apellido: "Pepe",
          edad: 30
        },
        {
          id: 2,
          nombre: "Hugo",
          apellido: "Luis",
          edad: 30
        },

      ],
      cols: [
        {
          propertyName: 'id',
          title: 'ID'
        },
        {
          propertyName: 'nombre',
          title: "Nombre"
        },
        {
          propertyName: 'apellido',
          title: 'Apellido'
        }
      ]
    };
  }
});
