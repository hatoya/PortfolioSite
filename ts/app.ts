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

        $scope.active = false;

        $scope.worksAnimation = function(active) {
            if(active) return false;
            else return true;
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

    app.directive('sideAnimation', function() {
        return {
            restrict: "A",
            compile: function($element) {
                window.onscroll = function() {
                    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                    if(scrollY > 400) {
                        document.getElementById('menuLeft').classList.add('active');
                        document.getElementById('menuRight').classList.add('active');
                    } else {
                        document.getElementById('menuLeft').classList.remove('active');
                        document.getElementById('menuRight').classList.remove('active');
                    }
                }
            }
        }
    });
}
