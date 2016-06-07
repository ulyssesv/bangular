(function() {
  'use strict';

  angular.module('webapp')
    .filter('momentUnixFormat', MomentUnixFormatFilter)
    .filter('momentToNow', MomentToNowFilter)
    .controller('MapController', MapController);

  function MomentToNowFilter(moment) {
    return function(unixDate) {
      return moment.unix(unixDate).fromNow();
    };
  }

  function MomentUnixFormatFilter(moment) {
    return function(unixDate, format) {
      return moment.unix(unixDate).format(format);
    };
  }

  /** @ngInject */
  function MapController($document, $mdDialog, NgMap, StopService, ngProgressFactory) {
    var vm = this;
    var map;
    vm.stops = [];
    vm.currentStop = null;
    vm.progressbar = ngProgressFactory.createInstance();
    vm.progressbar.setColor('#1976D2');
    vm.noRoutes = true;

    NgMap.getMap().then(function(evtMap) {
      map = evtMap;
      vm.stops = vm.loadStops();
    });

    vm.loadStops = function() {
      vm.progressbar.start();
      StopService.getStops(map.center.lat(), map.center.lng()).then(function(response) {
        vm.stops = response.data.stops;
        vm.progressbar.complete();
      }, function(error) {
        vm.progressbar.complete();
        $mdDialog.show(
          $mdDialog.alert()
          .parent(angular.element(document.body))
          .clickOutsideToClose(true)
          .title("Error")
          .textContent(error.message)
          .ok("Ok"));
      });
    }

    vm.showStop = function(e, stop) {
      vm.progressbar.start();
      StopService.getStopDepartures(stop).then(function(response) {
        vm.noRoutes = true;
        vm.progressbar.complete();
        vm.currentStop = stop;
        vm.currentStop.departures = response.data;
      }, function(error) {
        vm.progressbar.complete();
        $mdDialog.show(
          $mdDialog.alert()
          .parent(angular.element(document.body))
          .clickOutsideToClose(true)
          .title("Error")
          .textContent(error.message)
          .ok("Ok")
        );
      });
    }
  }
})();
