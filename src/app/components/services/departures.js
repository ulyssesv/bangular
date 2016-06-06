(function() {
  'use strict';

  angular
    .module('webapp')
    .service('DepartureService', DepartureService);

  /** @ngInject */
  function DepartureService(settings, $http) {
    function getDepartures() {
      return $http({
        method: 'get',
        url: settings.API_URL + '/departures/',
        params: {
          latitude: 0.0,
          longitude: 0.0,
          distance: 2500
        }
      });
    }
  }

})();
