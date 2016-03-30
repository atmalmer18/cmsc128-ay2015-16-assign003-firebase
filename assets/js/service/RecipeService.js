recipeApp.service('RecipeService', function($http, $q) {
	return {
		'getRecipes': function() {
			var defer = $q.defer();
			$http.get('/recipe/getRecipes').success(function(resp){
				defer.resolve(resp);
			}).error(function (err) {
				defer.reject(err);
			});
			return defer.promise;
		},
		'addRecipe': function(recipe) {
			var defer = $q.defer();
			$http.post('/recipe/addRecipe', recipe).success(function(resp){
				defer.resolve(resp);
			}).error(function (err) {
				defer.reject(err);
			});
			return defer.promise;
		},
		'removeRecipe': function(recipe) {
			var defer = $q.defer();
			$http.post('/recipe/removeRecipe', recipe).success(function(resp){
				defer.resolve(resp);
			}).error(function (err) {
				defer.reject(err);
			});
			return defer.promise;
		}
	}
});