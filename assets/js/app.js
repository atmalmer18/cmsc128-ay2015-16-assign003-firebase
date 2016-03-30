'use strict';

var recipeApp = angular.module('recipeApp', ['ui.router']);

recipeApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	// 404
	$urlRouterProvider.otherwise('/notFound');

	// Routes
	$stateProvider.state('recipe', {
		url			: '/',
		templateUrl	: "templates/recipe.html",
		controller	: 'RecipeController'
	});

	// Use HTML5 history API
	$locationProvider.html5Mode(true);
});

recipeApp.controller('RecipeController', function($scope, $rootScope, RecipeService) {
	$scope.formData = {};
	$scope.recipes = [];

	RecipeService.getRecipes().then(function(response) {
		$scope.recipes = response;
	});

	$scope.addRecipe = function() {
		RecipeService.addRecipe($scope.formData).then(function(response) {
			$scope.recipes.push($scope.formData)
			$scope.formData = {};
		});
	}

	$scope.removeRecipe = function(recipe) {
		RecipeService.removeRecipe(recipe).then(function(response) {
			$scope.recipes.splice($scope.recipes.indexOf(recipe), 1)
		});
	}
});