(function() {
  'use strict';

  angular.module('webapp')
    .controller('MapController', MapController);

  /** @ngInject */
  function MapController($document, $mdDialog, NgMap, StopService, GeoLocationService, DepartureService) {
    var vm = this;
    var map;
    vm.stops = [];
    vm.currentStop = null;

    NgMap.getMap().then(function(evtMap) {
      map = evtMap;
    });

    vm.loadStops = function() {
      event = this;
      StopService.getStops(this.center.lat(), this.center.lng()).then(function(response) {
        vm.stops = response.data;
      }, function(error) {
        $mdDialog.show(
          $mdDialog.alert()
          .parent(angular.element(document.body))
          .clickOutsideToClose(true)
          .title("Error")
          .textContent(error.message)
          .ariaLabel("Error Alert")
          .ok("Ok")
          .targetEvent(ev)
        );
      });
    }

    vm.showStop = function(e, stop) {
      vm.currentStop = stop;
    }
  }
})();