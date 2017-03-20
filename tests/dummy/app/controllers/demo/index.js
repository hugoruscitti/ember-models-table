import Ember from 'ember';

export default Ember.Controller.extend({
  filas: [
    {
      nombre: 'demo',
      apellido: 'otro'
    }
  ],
  columnas: [
    {
      propertyName: 'nombre',
      title: "Nombre"
    },
    {
      propertyName: 'apellido',
      title: "Apellido"
    },
  ]
});
