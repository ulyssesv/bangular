(function() {
  'use strict';

  angular
    .module('webapp')
    .service('StopService', StopService);

  /** @ngInject */
  function StopService(settings, $http) {
    this.getStops = function(latitude, longitude) {
      return $http({
        method: 'get',
        url: settings.API_URL + '/stops/',
        params: {
          latitude: latitude,
          longitude: longitude,
          distance: 5000
        }
      });
    }

    this.getStopDepartures = function(stop) {
      return $http({
        method: 'get',
        url: settings.API_URL + '/stops/' + stop.tag + '/departures/'
      });
    }
  }

})();
