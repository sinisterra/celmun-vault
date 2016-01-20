(function() {
  'use strict';

  angular
    .module('celmunSite')
    .controller('BaseController', BaseController);

  BaseController.$inject = ['$state', '$scope'];

  /* @ngInject */
  function BaseController($state, $scope) {
    var vm = this;
    vm.title = 'BaseController';
    vm.$state = $state;

    activate();

    ////////////////

    function activate() {
      vm.tabs = [{
        label: 'Inicio',
        state: 'home'
      }, {
        label: '¿Qué es CELMUN?',
        state: 'acerca-de'
      }, {
        label: 'Secretariado',
        state: 'secretariat'
      }, {
        label: 'Comités',
        state: 'committees'
      }, {
        label: 'Agenda',
        state: 'agenda'
      }, {
        label: 'Sede',
        state: 'sede'
      }, {
        label: 'Registro',
        state: 'registro'
      }, {
        label: 'Archivo',
        state: 'archive'
      }];

      $scope.$watch('base.$state.current.name', function(newValue) {
        for (var i in vm.tabs) {
          var tab = vm.tabs[i];
          if (tab.state === newValue) {
            vm.selectedTab = i;
            break;
          }

          if (newValue === 'committee') {
            vm.selectedTab = 2;
            break;
          }

        }
      });

    }
  }
})();
