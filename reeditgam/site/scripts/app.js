console.log("cargo app.js");
 //<!--parametros-->
-var modulo1 =
-angular.module("reeditgam",[]);
+var modulo1 =angular.module("reeditgam",[]);
 modulo1.controller("mainCtrl",[
 	'$scope',
 	function($scope){
 		$scope.test = "Hola angular";
+		$scope.post=["post1","post2","post3","post4","post5","post6"];
+
 }]); 
