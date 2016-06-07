/* global moment:false */
(function() {
  'use strict';

  angular
    .module('webapp')
    .constant('moment', moment)
    .constant('settings', {
      API_URL: 'http://bflask-dev.us-east-1.elasticbeanstalk.com/api/v1'
    });

})();
