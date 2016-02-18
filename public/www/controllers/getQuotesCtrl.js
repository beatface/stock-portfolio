app.controller('getQuotesCtrl', ['$scope', '$http', ($scope, $http) => {
    console.log("GOT HERE");

    $scope.quoteExists = false;
    $scope.noQuote = false;
    $scope.noQuoteMessage = "";

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

    $scope.buyStock = () => {
        console.log('trying to buy');
    };

}]);
