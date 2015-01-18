var hatoya;
(function (hatoya) {
    var app = angular.module('hatoyaApp', []);
    var content = {
        'profile': ['Name: Wada Hayato', 'Birth: 1993/9/16', 'Age: 20', 'School: Nihon Uni.'],
        'skills': ['HTML', 'CSS', 'javaScript', 'jQuery', 'AngularJS', 'Sass', 'Grunt', 'Gulp', 'PHP', 'CakePHP', 'C, C++', 'Processing', 'openFrameworks', 'Illustrator', 'Photoshop']
    };
    app.controller('contentController', function () {
        this.data = content;
        this.worksAnimation = function (index) {
            console.log(index);
        };
    });
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
