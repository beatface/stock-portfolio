"use strict";

app.controller('registerCtrl', ['$scope', '$http', '$state', ($scope, $http, $state) => {

    console.log('got to register ctrl');

    $scope.register = () => {
        $http.post('/register')
        .then(function(res) {
            console.log(res);
            $state.go('login');
        });
    };

}]);
