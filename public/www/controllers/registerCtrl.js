"use strict";

app.controller('registerCtrl', ['$scope', '$http', '$state', ($scope, $http, $state) => {

    console.log('got to login ctrl');

    $scope.register = () => {
        $http.post('/register')
        .then(function(res) {
            console.log(res);
            $state.go('login');
        });
    };

}]);
