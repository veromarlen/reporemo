console.log("cargo app.js");
//<!--parametros-->
var modulo1 =
angular.module("reeditgam",[]);
modulo1.controller("mainCtrl",[
	'$scope',
	function($scope){
		$scope.test = "Hola angular";
		$scope.post =
		[{title:"post1",upvotes:5},
		{title: "post2", upvotes: 15},
		{title: "post3", upvotes:  7},
		{title: "post4", upvotes: 9},
		{title: "post5",  upvotes: 3},
		{title: "post6", upvotes: 5}];
		//metodo de controlador 
		$scope.addPost=function(){
		if (!$scope.title || $scope.title === "")
		{
			alert("No se permiter tittulos vacios")
			return;

		}	//$scope.posts.push(
			
			$scope.post.push(
				{
					title:$scope.title, 
					link:$scpoe.link,
					upvotes:0
				});
			$scope.title="";
			$scope.link=""; 
	//two-way data binding
		};
		//metodo que incrementa el voto de un post en una uni
		$scope.incrementUpvotes =function (post){
			post.upvotes +=1;
		};


}]);