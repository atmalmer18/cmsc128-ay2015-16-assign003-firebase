'use strict';

var recipeApp = angular.module('recipeApp', ['ui.router']);

recipeApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	// 404
	$urlRouterProvider.otherwise('/notFound');

	// Routes
	$stateProvider.state('home', {
		url			: '/',
		templateUrl	: "templates/landing.html",
		controller	: 'HomeController'
	});
	
	$stateProvider.state('recipe', {
		url			: '/recipePage',
		templateUrl	: "templates/recipe.html",
		controller	: 'RecipeController'
	});

	// Use HTML5 history API
	$locationProvider.html5Mode(true);
});

recipeApp.controller('HomeController', function($scope, $rootScope, RecipeService) {
	
});

recipeApp.controller('RecipeController', function($scope, $rootScope, RecipeService) {
	$scope.formData = {};
	$scope.recipes = [];

	RecipeService.getRecipes().then(function(response) {
		$scope.recipes = response;
	});

	$scope.addRecipe = function() {
		$scope.formData = {
			name: $scope.name,
			classification: $scope.classification,
			content: $scope.content,
		};
		$scope.recipes.push({
			name: $scope.name,
			classification: $scope.classification,
			content: $scope.content,
		});
		RecipeService.addRecipe($scope.formData).then(function(response) {
			$scope.formData = {};
		});
	}

	$scope.removeRecipe = function(recipe) {
		RecipeService.removeRecipe(recipe).then(function(response) {
			$scope.recipes.splice($scope.recipes.indexOf(recipe), 1)
		});
	}
});