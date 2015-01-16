var hatoya;
(function (hatoya) {
    var app = angular.module('hatoyaApp', []);
    var content = {
        'profile': ['Name: Wada Hayato', 'Birth: 1993/9/16', 'Age: 20', 'School: Nihon Uni.'],
        'skills': ['HTML', 'CSS', 'javaScript', 'jQuery', 'AngularJS', 'Sass', 'Grunt', 'Gulp', 'PHP', 'CakePHP', 'C, C++', 'Processing', 'openFrameworks', 'Illustrator', 'Photoshop']
    };
    app.controller('contentController', function () {
        this.data = content;
    });
    app.directive('bgAnimation', function () {
        return {
            restrict: "E",
            template: ""
        };
    });
})(hatoya || (hatoya = {}));
