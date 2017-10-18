var app = angular.module('app.routes',[]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    .state('presentation', {
      url: '/presentation',
      TemplateUrl: 'templates/presentation/index.html'
      
    })
      .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu/index.html',
      controller: 'AppCtrl'
    })
  
    .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search/index.html'
        }
      }
    })

    .state('app.categories', {
      url: '/categories',
      views: {
        'menuContent': {
          templateUrl: 'templates/products/categories.html'
        }
      }
    })
    
    .state('app.cart', {
      url: '/cart',
      views: {
        'menuContent': {
          templateUrl: 'templates/cart/index.html'
        }
      }
    })
    .state('app.pay', {
      url: '/pay',
      views: {
        'menuContent': {
          templateUrl: 'templates/cart/pay.html'
        }
      }
    })
  
    .state('app.club', {
      url: '/club',
      views: {
        'menuContent': {
          templateUrl: 'templates/club/index.html'
        }
      }
    })

    .state('app.faq', {
      url: '/faq',
      views: {
        'menuContent': {
          templateUrl: 'templates/help/faq.html'
        }
      }
    })
    .state('app.help', {
      url: '/help',
      views: {
        'menuContent': {
          templateUrl: 'templates/help/index.html'
        }
      }
    })
    .state('app.support', {
      url: '/support',
      views: {
        'menuContent': {
          templateUrl: 'templates/help/support.html'
        }
      }
    })
    .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
    })
    
    .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
    })
  
  .state('app.single', {
      url: '/playlists/:playlistId',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlist.html',
        }
      }
  })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');

});  