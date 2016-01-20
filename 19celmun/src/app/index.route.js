(function() {
  'use strict';

  angular
    .module('celmunSite')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        parent: 'base',
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('base', {
        abstract: true,
        templateUrl: 'app/base/base.html',
        controller: 'BaseController',
        controllerAs: 'base'
      })
      .state('committee', {
        parent: 'base',
        url: '/comite/:id',
        templateUrl: 'app/committees/single.html',
        controller: 'SingleCommitteeController',
        controllerAs: 'vm'
      })
      .state('committees', {
        parent: 'base',
        url: '/comites',
        templateUrl: 'app/committees/list.html'
      })
      .state('archive', {
        parent: 'base',
        url: '/archive',
        templateUrl: 'app/archive/archive.html'
      })
      .state('secretariat', {
        parent: 'base',
        url: '/secretariat',
        templateUrl: 'app/secretariat/secretariat.html'
      })
      .state('acerca-de', {
        parent: 'base',
        url: '/acerca-de',
        templateUrl: 'app/acerca-de/acerca-de.html'
      })
      .state('agenda', {
        parent: 'base',
        url: '/agenda',
        templateUrl: 'app/agenda/agenda.html',
        controller: 'AgendaController',
        controllerAs: 'agenda'
      })
      .state('sede', {
        parent: 'base',
        url: '/sede',
        templateUrl: 'app/sede/sede.html'
      })
      .state('registro', {
        parent: 'base',
        url: '/registro',
        templateUrl: 'app/registro/registro.html'
      })

    $urlRouterProvider.otherwise('/');
  }

})();
