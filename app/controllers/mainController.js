app.controller('baseCtrl', ['$scope', '$rootScope', '$http', '$filter', function($scope, $http, $filter) {
  $scope.testString = "test string"
  //go get the system objects
  $scope.fetchUserObject = function ()
  {
    //$http.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content'); //required for post actions
    // return $http.get('/user/')
    //           .then(function(data) {
    //           },
    //           function(err) {
    //             alert(err.data.message);
    //           });
  };

  // fetch the userObject
  // $scope.fetchUserObject();
}]);
