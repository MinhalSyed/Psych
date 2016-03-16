angular.module('main',[])
.controller('mainController',['$scope', '$http', function($scope, $http){

  $scope.questions = [];

  $scope.current_index = 0;
  $scope.current_question = {};

  $scope.timer_start = 0;
  $scope.timer_stop = 0;

  $scope.times = [];



  $scope.click = function()
  {
    $scope.$broadcast('btnPressed', {});

    $scope.timer_stop = new Date().getTime();

    var time_elapsed = $scope.timer_stop - $scope.timer_start;
    console.log(time_elapsed);

    $scope.times.push(time_elapsed);
    $scope.timer_start = new Date().getTime();
  }

  $http.get('../questions.json').success(function (json) {
    for (var i = 0; i < json.length; i++) {
        var question = json[i];
        $scope.questions.push(question);
    }
    $scope.current_question = $scope.questions[$scope.current_index];
  });


  $scope.$on('btnPressed', function () {
      if($scope.current_index < $scope.questions.length -1 )
      {
        $scope.current_index +=1;
        $scope.current_question = $scope.questions[$scope.current_index];
      }
  });

  $scope.start = function()
  {
    $scope.timer_start = new Date().getTime();
  }

}]);
