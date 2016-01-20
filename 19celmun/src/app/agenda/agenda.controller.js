(function() {
  'use strict';

  angular
    .module('celmunSite')
    .controller('AgendaController', AgendaController);

  AgendaController.$inject = [];

  /* @ngInject */
  function AgendaController() {
    var vm = this;
    vm.title = 'AgendaController';

    activate();

    ////////////////

    function activate() {
      var days = [{
        name: "16 de Marzo de 2016",
        sessions: [{
          duration: '11:00-12:00',
          name: 'Inducción'
        }, {
          duration: '12:00-12:30',
          name: 'Registro'
        }, {
          duration: '12:30-13:45',
          name: 'Inauguración'
        }, {
          duration: '13:45-14:00',
          name: 'Desplazamiento a comisiones'
        }, {
          duration: '14:00-16:00',
          name: '1º Sesión'
        }, {
          duration: '16:00-16:30',
          name: 'Receso'
        }, {
          duration: '16:30-18:00',
          name: '2º Sesión'
        }, {
          duration: '18:00-18:30',
          name: 'Receso'
        }, {
          duration: '18:30-20:00',
          name: '3º Sesión'
        }]
      }, {
        name: "17 de Marzo de 2016",
        sessions: [{
          duration: '09:00-11:00',
          name: ' 4º Sesión'
        }, {
          duration: '11:00-11:30',
          name: 'Receso'
        }, {
          duration: '11:30-13:00',
          name: '5º Sesión'
        }, {
          duration: '13:30-13:30',
          name: 'Receso'
        }, {
          duration: '13:30-15:00',
          name: '6º Sesión'
        }, {
          duration: '15:00-16:30',
          name: 'Comida'
        }, {
          duration: '16:30-18:00',
          name: '7º Sesión'
        }, {
          duration: '18:00-18:30',
          name: 'Receso'
        }, {
          duration: '18:30-20:00',
          name: '8º Sesión'
        }, ]
      }, {
        name: "18 de Marzo de 2016",
        sessions: [{
          duration: '9:00-10:30 ',
          name: '9º Sesión'
        }, {
          duration: '10:30-11:00',
          name: 'Receso'
        }, {
          duration: '11:00-12:30',
          name: '10º Sesión'
        }, {
          duration: '12:30-13:00',
          name: 'Receso'
        }, {
          duration: '13:00-14:30',
          name: '11º Sesión'
        }, {
          duration: '14:30-15:00',
          name: 'Sesión de Evaluación'
        }, {
          duration: '15:00-16:45',
          name: 'Comida'
        }, {
          duration: '16:45-17:00',
          name: 'Ingreso Clausura'
        }, {
          duration: '17:00-18:10',
          name: 'Clausura '
        }, ]
      }];

      vm.days = days;
    }
  }
})();
