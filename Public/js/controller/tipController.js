app.controller('tipController', ['$scope','tipService',function($scope, tipService) {

$scope.allStocks = tipService.allStocks;

$scope.getStocks = function() {

    tipService.getStocks();
}

}]);