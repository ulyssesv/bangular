(function() {
  'use strict';

  angular
    .module('webapp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

})();
