var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {

	return {message: "Hey I m data"}
})


function FirstCtrl($scope, Data) {
	$scope.data = Data
}


function SecondCtrl($scope, Data){
	$scope.data = Data
}