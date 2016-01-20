(function() {
    'use strict';

    angular
        .module('celmunSite')
        .controller('MainController', MainController);

    MainController.$inject = ['$state'];

    /* @ngInject */
    function MainController($state) {
        var vm = this;
        vm.title = 'MainController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();
