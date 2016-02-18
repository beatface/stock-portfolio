/* eslint-disable */
var app = angular.module("stock-portfolio", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('portfolio', {
            url: "/",
            templateUrl: "www/partials/portfolio.html"
            // controller: "portfolioCtrl"
        })
        .state('getQuotes', {
            url: "/quotes",
            templateUrl: "www/partials/get-quotes.html"
            // controller: "getQuotesCtrl"
        })
        .state('buyOrSell', {
            url: "/buy-sell",
            templateUrl: "www/partials/buy-sell.html"
            // controller: "buyOrSellCtrl"
        });
    $urlRouterProvider.otherwise("/");
});
