(function() {
  'use strict';

  angular
    .module('webapp')
    .service('GeoLocationService', GeoLocationService);

  /** @ngInject */
  function GeoLocationService($q, $window) {
    this.getPosition = function() {
      var deferred = $q.defer();

      if (!$window.navigator.geolocation) {
        deferred.reject("Geolocation not supported.");
      } else {
        $window.navigator.geolocation.getCurrentPosition(
          function (position) {
            deferred.resolve(position);
          },
          function (err) {
            deferred.reject(err);
          });
        }

        return deferred.promise;
      }
    }

})();