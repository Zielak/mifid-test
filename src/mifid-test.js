(function(){
  "use strict";

  // Object.size = function(obj) {
  //   var size = 0, key;
  //   for (key in obj) {
  //     if (obj.hasOwnProperty(key)) size++;
  //   }
  //   return size;
  // };


  var app = angular.module('testApp', [ 'ngAnimate' ]);



  app.controller('testCtrl', ['$scope', function($scope){

    $scope.questions = {
      question2: [
      'OS X',
      'Windows',
      'Ubuntu',
      'Gnome',
      'Windows XP',
      'other'
      ]
    };
    $scope.ans = {
      question1: null,
      question1yes: null,
      question1no: null,
      question1wat: null,
      question2: [false, false, false, false, false, false],
      question2inne: null,
      question3: null,
      question4: null,
    };
    $scope.dis = {
      question2: null
    };

    $scope.countValue = function(a, v){
      var o = 0;
      for (var i = a.length - 1; i >= 0; i--) {
        if(a[i] === v) o++;
      }
      return o;
    };

    $scope.allAnswered = function(){

      if($scope.ans.question1===null) return false;
      if($scope.ans.question1==='yes' && $scope.ans.question1yes===null) return false;
      if($scope.ans.question1==='yes' && $scope.countValue($scope.ans.question2, true)<1) return false;
      if($scope.ans.question3===null) return false;
      if($scope.ans.question4===null) return false;

      return true;
    };


    $scope.$watch( function () { return $scope.ans.question1; }, function (data) {
      if(data === 'wat'){
        $scope.ans.question2 = [];
        $scope.ans.question2inne = null;
        $scope.dis.question2 = 'question-disabled';
      }
      else
      {
        $scope.dis.question2 = null;
      }
    }, true);

  }]);





  // app.animation('.animate', function() {
  //   return {
  //     enter : function(element, done) {
  //       element.style.opacity = 1;
  //       element.style.backgroundColor = "#FFF";
  //     },
  //     leave : function(element, done) {
  //       element.style.opacity = 0.3;
  //       element.style.backgroundColor = "#999";
  //     },
  //     move: function(element, done) { },
  //   };
  // });







})();
