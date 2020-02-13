(function () {
  'use strict';

  angular
    .module('mainjs', [])
    .config(function ($stateProvider) {
      $stateProvider
        .state('events_list', {
          cache: false,
          url: '/events_list',
          templateUrl: 'js/states/event-list/events.list.html',
          controller: 'eventsListCtrl as vm'
        })
        .state('events_update', {
          cache: false,
          url: '/events_update',
          templateUrl: 'js/states/event-update/events.update.html',
          controller: 'eventsUpdateCtrl as vm'
        })
        .state('events_detail', {
          cache: false,
          url: '/events_detail',
          templateUrl: 'js/states/event-detail/events.detail.html',
          params: { 'selected': 0 },
          controller: 'eventsDetailCtrl as vm'
        })
        .state('homepage', {
          cache: false,
          url: '/homepage',
          templateUrl: 'js/states/homepage/homepage.html',
          controller: 'homepageCtrl as vm',
          url: '/index?uuid&brokerHost&brokerPort&username&password&ssl',
          params: {
              uuid : {
                  dynamic: false
              },
              brokerHost: {
                  dynamic: false
              },
              brokerPort: {
                  dynamic: false
              },
              username: {
                  dynamic : false
              },
              password: {
                  dynamic : false
              },
              ssl:{
                  dynamic : false
              }

          },
          controllerAs: 'homepage',
          resolve: {
              broker: ['$stateParams','brokerDetails', function ($stateParams,brokerDetails) {
              
                  if($stateParams.uuid) brokerDetails.UUID = $stateParams.uuid;
                  if($stateParams.brokerHost) brokerDetails.HOST = $stateParams.brokerHost;
                  if($stateParams.brokerPort) brokerDetails.PORT = $stateParams.brokerPort;
                  if($stateParams.username) brokerDetails.USERNAME = $stateParams.username;
                  if($stateParams.password) brokerDetails.PASSWORD = $stateParams.password;
                  if($stateParams.ssl) brokerDetails.SSL = ($stateParams.ssl.toLowerCase() == 'true');
              }]
          }
        })
    });
})();