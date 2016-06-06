/* global moment:false */
(function() {
  'use strict';

  angular
    .module('webapp')
    .constant('moment', moment)
    .constant('settings', {
      API_URL: 'http://localhost:5000/api/v1'
    });

})();
