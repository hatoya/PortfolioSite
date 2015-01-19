var hatoya;
(function (hatoya) {
    var app = angular.module('hatoyaApp', ['ngRoute', 'ngResource']);
    app.controller('contentController', ['$scope', '$http', function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'js/json/hatoya.json'
        }).success(function (data, status, headers, config) {
            console.log(data.content);
        });
    }]);
    app.directive('bgAnimation', function () {
        return {
            restrict: "A",
            templateUrl: "../bgAnimation.html",
            compile: function ($element) {
                var canvas = document.getElementsByTagName('canvas')[0], codeElm = document.getElementById('processing-code'), code = codeElm.textContent || codeElm.innerText;
                Processing(canvas, code);
            }
        };
    });
})(hatoya || (hatoya = {}));
