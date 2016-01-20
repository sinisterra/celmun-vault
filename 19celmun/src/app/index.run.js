(function() {
  'use strict';

  angular
    .module('celmunSite')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
