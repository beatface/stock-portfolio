"use strict";

app.controller('loginCtrl', ['$scope', '$http', '$state', ($scope, $http, $state) => {

    console.log('got to login ctrl');

    $scope.register = () => {
        $state.go('register');
    };

    $scope.login = () => {
        $http.post('/login')
        .then(function(res) {
            console.log(res);
        });

    };

}]);
