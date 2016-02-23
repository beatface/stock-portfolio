"use strict";

app.controller('getQuotesCtrl', ['$scope', '$http', '$state', ($scope, $http, $state) => {

    $scope.quoteExists = false;
    $scope.noQuote = false;
    $scope.noQuoteMessage = "";
    $scope.quoteData = "";

    $scope.getStock = (symbol) => {
        $scope.quoteExists = false; // resets ng-shows to hide
        $scope.noQuote = false;
        $http.get(`/quotes/${symbol}`)
        .then(function(data) {
            !data.data.Name || data.status !== 200 // if stock doesn't exist or error occurs
            ? ($scope.noQuote = true, $scope.noQuoteMessage = data.data.Message || "An error occured. Try again.")
            : ($scope.quoteExists = true, $scope.quoteData = data) ;
            $scope.symbol = ""; // resets input field to blank
        });
    };

    $scope.buyStock = (quantity) => {
        console.log('trying to buy');
        const totalValue = ($scope.quoteData.data.LastPrice * quantity).toFixed(2);
        $http.post(`/quotes/${quantity}/${$scope.quoteData.data.Symbol}/${$scope.quoteData.data.Name}/${$scope.quoteData.data.LastPrice}/${totalValue}`)
        .then(function(res) {
            console.log(res);
            $state.go('portfolio');
        });
    };

}]);
