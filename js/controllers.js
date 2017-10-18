angular.module('app.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login/index.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 3000);
  };
})

//Controller da Home - Página Inicial
.controller('homeCtrl', function($scope, $ionicPopup, $timeout) {
  //code
 
    $scope.data = {};
  
    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="emkt.nome" placeholder="Digite seu nome"> <input type="email" ng-model="emkt.email" placeholder="Digite seu e-mail>',
      title: 'Cadastre-se aqui!',
      subTitle: 'Receba via Emails nossas Promoções',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Cadastrar</b>',
          type: 'button-balanced',
          onTap: function(e) {
            if (!$scope.data.wifi) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.data.wifi;
            }
          }
        }
      ]
    })
  
  
  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);

  //Visualização dos produtos

  $scope.produtos = [

    { id: 1, "imagem": "img/albuns/charlie-brown-jr-acustico.png", "banda": "Charlie Brown Jr", "album": "Acústico MTV", "moeda": "R$", "preco": "22.69" },
    { id: 2, "imagem": "img/albuns/jota-quest-acustico-mtv.png", "banda": "Jota Quest", "album": "Acústico MTV", "moeda": "R$", "preco": "20.99" },
    { id: 2, "imagem": "img/albuns/charlie-puth-deluxe.jpg", "banda": "Charlie Puth", "album": "Nine Track Mind", "moeda": "R$", "preco": "19.99" },
    { id: 2, "imagem": "img/albuns/taylor-swift-fearless.jpg", "banda": "Taylor Swift", "album": "Fearless", "moeda": "R$", "preco": "30.99" },

  ]

})
 

