(function() {
  'use strict';

  angular
    .module('webapp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('map', {
        url: '/',
        templateUrl: 'app/components/map/page/template.html',
        controller: 'MapController',
        controllerAs: 'mapController'
      });
  }

})();
