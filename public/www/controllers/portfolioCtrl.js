"use strict";

app.controller('portfolioCtrl', ['$scope', '$http', '$state', ($scope, $http, $state) => {

    $scope.stocks = {};

    $http.get('/portfolio')
    .then(function(data) {
        console.log(data.data);
        $scope.stocks = data.data;
    });

    $scope.sellStock = () => {
        $state.go('portfolio');
    };

}]);
