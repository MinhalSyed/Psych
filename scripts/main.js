angular.module('main',[])
.controller('mainController',['$scope', '$http', function($scope, $http){

  $scope.questions = [
    {"question_stem":"This is a question.",
    "image":"img/cabin.png",
    "correct_response":"Correct",
    "incorrect_response":"Incorrect"},
    {"question_stem":"This is another question.",
      "image":"img/art.jpg",
      "correct_response":"Correct",
      "incorrect_response":"Incorrect"},
    {"question_stem":"This is another question.",
      "image":"img/game.png",
      "correct_response":"Correct",
      "incorrect_response":"Incorrect"},
    {"question_stem":"This is another question.",
      "image":"img/tree.jpg",
      "correct_response":"Correct",
      "incorrect_response":"Incorrect"}
  ];

  $scope.current_index = 0;
  $scope.current_question = $scope.questions[$scope.current_index];

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
