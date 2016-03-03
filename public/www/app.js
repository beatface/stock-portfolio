"use strict";
/* eslint-disable */
var app = angular.module("stock-portfolio", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('portfolio', {
            url: "/",
            templateUrl: "www/partials/portfolio.html"
        })
        .state('getQuotes', {
            url: "/quotes",
            templateUrl: "www/partials/get-quotes.html"
        })
        .state('buyOrSell', {
            url: "/buy-sell",
            templateUrl: "www/partials/buy-sell.html"
        });
    $urlRouterProvider.otherwise("/login");
});
