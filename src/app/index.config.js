(function() {
  'use strict';

  angular
    .module('webapp')
    .config(config);

  /** @ngInject */
  function config(settings, $locationProvider) {
    $locationProvider.html5Mode({enabled: false, requireBase: true});
  }

})();
