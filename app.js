var firstApp = angular.module('firstApp', []);

firstApp.controller('FirstCtrl',
    ['$scope',
    function($scope){
      $scope.title = "HELLO WORLD FOR REALZ";
      $scope.cats = ['Kitty',
               'Ginger',
               'Gizmo',
               'Tom',
               'Shadow',
               'Chloe',
               'Smokey'];
    }]);