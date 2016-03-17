angular.module('main',[])
.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}])
.controller('mainController',['$scope', '$http', function($scope, $http){

  $scope.questions = [
    {"question_stem":"What is this?",
    "image":"img/cabin.png",
    "correct_response":"&#21488;&#21271;",
    "incorrect_response":"Panda"},
    {"question_stem":"What is this?",
      "image":"img/cake.png",
      "correct_response":"Cake",
      "incorrect_response":"Human"},
    {"question_stem":"What is this?",
      "image":"img/game.png",
      "correct_response":"Controller",
      "incorrect_response":"&#22823;&#23478;&#22909;"},
    {"question_stem":"What is this?",
      "image":"img/tree.jpg",
      "correct_response":"Tree",
      "incorrect_response":"Hello"}
  ];

  $scope.current_index = 0;
  $scope.current_question = $scope.questions[$scope.current_index];

  $scope.timer_start = 0;
  $scope.timer_stop = 0;

  $scope.times = [];

  $scope.correct = [];

  $scope.quizStart = false;
  $scope.quizComplete = false;

  $scope.wrongClick = function()
  {
    $scope.correct.push(false);
    $scope.click();
  }

  $scope.rightClick = function()
  {
    $scope.correct.push(true);
    $scope.click();
  }

  $scope.click = function()
  {
    $scope.timer_stop = new Date().getTime();

    var time_elapsed = $scope.timer_stop - $scope.timer_start;
    console.log(time_elapsed);

    $scope.times.push(time_elapsed);

    if($scope.current_index < $scope.questions.length -1 )
    {
      $scope.current_index +=1;
      $scope.current_question = $scope.questions[$scope.current_index];
      $scope.timer_start = new Date().getTime();
    }
    else
    {
      $scope.quizComplete = true;
    }



  }

  $scope.$on('btnPressed', function () {

  });

  $scope.start = function()
  {
    $scope.timer_start = new Date().getTime();
    $scope.quizStart = true;
  }

}]);
