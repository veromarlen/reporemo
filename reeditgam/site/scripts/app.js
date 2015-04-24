console.log("cargo app.js");
 //<!--parametros-->
var modulo1 =angular.module("reeditgam",[]);
var modulo1 =
angular.module("reeditgam",[]);
 modulo1.controller("mainCtrl",[
 	'$scope',
 	function($scope){
 		$scope.test = "Hola angular";
		$scope.post=["{Title: "post1",upvotes:5}",
		"{title: "post2", upvotes: 15}",
		"{title: "post3", upvotes:  7}",
		"{title: "post4", upvotes: 9}",
		"{title: "post5",  upvotes: 3}",
		"{title: "post6", upvotes: 5}"];
		$scope.posts=[{title: "post1",upvotes:5},
		{title: "post2", upvotes: 15},
		{title: "post3", upvotes:  7},
		{title: "post4", upvotes: 9},
		{title: "post5",  upvotes: 3},
		{title: "post6", upvotes: 5}];
		//metodo de controlador 
		%scope.addPost=function(){
			$scope.post.push(
				{title:"New Post", upvotes:0});
		};
 		
 }]); 
