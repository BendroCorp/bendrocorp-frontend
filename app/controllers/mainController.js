app.controller('baseCtrl', ['$scope', '$rootScope', '$http', '$filter', function($scope, $rootScope, $http, $filter) {
  $scope.availableJobs = ""
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

  $scope.fetchAvailableJobs = () => {
    return $http.get('https://api.bendrocorp.com/api/job/hiring')
    .then((response) => {
      $scope.availableJobs = response.data.map(x => x.title).join(', ')
    },(error) => {
      console.error(error)
    })
  }

  // fetch the userObject
  $scope.fetchAvailableJobs();
}]);
