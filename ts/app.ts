declare var angular: any;
declare var $: any;
declare var Processing: any;

module hatoya {
    var app = angular.module('hatoyaApp', ['ngRoute', 'ngResource', 'ngAnimate']);

    app.controller('contentController', function($scope, $http) {
        $http({
            method: 'GET',
            url: 'js/json/hatoya.json'
        }).success(function(data, status, headers, config) {
            $scope.content = data.content;
        });

        $scope.worksAnimation = function(index) {
            console.log(index);
        }
    });

    app.directive('bgAnimation', function() {
        return {
            restrict: "A",
            templateUrl: "../bgAnimation.html",
            compile: function($element) {
                var canvas = document.getElementsByTagName('canvas')[0],
                    codeElm = document.getElementById('processing-code'),
                    code = codeElm.textContent || codeElm.innerText;

                Processing(canvas, code);
            }
        }
    });
}
