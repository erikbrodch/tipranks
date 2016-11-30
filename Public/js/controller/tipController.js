app.controller('tipController', ['$scope','tipService',function($scope, tipService) {

$scope.allStocks = tipService.allStocks;

$scope.singleStock = tipService.singleStock;

$scope.getStocks = function() {

    tipService.getStocks();
}

$scope.alertUid = function(index){
    alert (tipService.allStocks[index].uid);
}

$scope.alertIndex = function(index){
    alert (index);
}

$scope.submitLabel= function(){
    var newLabel = {
        stock_label: $scope.stock_label
    } 
    tipService.submitLabel(newLabel); 
}
}]);