var myAppPagin = angular.module('myAppPagin', []);

myAppPagin.controller('AppCtrlPagin', ['$scope', '$http', function($scope, $http) {
   $scope.filteredmyAppPagin = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 10
  ,$scope.maxSize = 5;
  
  var refresh = function() {
  $http.get('/bookday').success(function(response) {
    console.log("Geter");
    $scope.bookday = response;
    $scope.contact = "";
  });
};
refresh(); 
  
  $scope.numPages = function () {
    return Math.ceil($scope.bookday.size / $scope.numPerPage);
  };
  
  $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
   
    $scope.filteredmyAppPagin = $scope.bookday..skip(10).limit(10)(begin, end);
  });
}]);
