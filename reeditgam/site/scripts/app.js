console.log("cargo app.js");
//<!--parametros-->
var modulo1 =
angular.module("reeditgam",[]);
modulo1.controller("mainCtrl",[
	'$scope',
	function($scope){
		$scope.test = "Hola angular";
}]); 