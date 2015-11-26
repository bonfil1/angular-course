
// Angular module minmax
var app = angular.module('minmax', []);

// Angular MinMaxCtrl this is the main controller
app.controller('MinMaxCtrl', function ($scope) {
	
	$scope.formModel = {};

	$scope.onSubmit = function () {
		console.log("Submitted!!");
		console.log($scope.formModel);
	};
});

