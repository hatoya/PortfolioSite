declare var angular: any;
declare var $: any;
declare var Processing: any;

module hatoya {
    var app = angular.module('hatoyaApp', []);
    var content = {
        'profile': ['Name: Wada Hayato', 'Birth: 1993/9/16', 'Age: 20', 'School: Nihon Uni.'],
        'skills': ['HTML', 'CSS', 'javaScript', 'jQuery', 'AngularJS','Sass', 'Grunt', 'Gulp', 'PHP', 'CakePHP', 'C, C++', 'Processing', 'openFrameworks','Illustrator', 'Photoshop']
    };

    app.controller('contentController', function() {
        this.data = content;
    });

    app.directive('bgAnimation', function() {
        return {
            restrict: "E",
            templateUrl: "../bgAnimation.html",
            compile: function() {
                function sizing() {
                    $('#backCanvas').attr({height:$(window).height()}).attr({width:$(window).width()});
                }

                var canvas = document.getElementsByTagName('canvas')[0];
                var codeElm = document.getElementById('processing-code');
                var code = codeElm.textContent || codeElm.innerText;

                Processing(canvas, code);
            }
        }
    });
}
